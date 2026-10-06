import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Adspace3DHorizonProps {
  className?: string;
}

export const Adspace3DHorizon: React.FC<Adspace3DHorizonProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x040804, 0.04);

    const camera = new THREE.PerspectiveCamera(48, Math.max(0.1, width / height), 0.1, 100);
    camera.position.set(0, 0.8, 11);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.pointerEvents = 'none';
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x08150a, 2.0);
    scene.add(ambientLight);

    const auroraLight = new THREE.PointLight(0x4ade80, 5.0, 25);
    auroraLight.position.set(0, -1.8, 2);
    scene.add(auroraLight);

    const limeGlowLight = new THREE.PointLight(0xccff00, 3.5, 18);
    limeGlowLight.position.set(0, -0.5, 4);
    scene.add(limeGlowLight);

    const rimLight = new THREE.DirectionalLight(0xd4ff66, 2.5);
    rimLight.position.set(0, 5, 5);
    scene.add(rimLight);

    // ------------------------------------------------------------------------
    // 1. 3D Perspective Wireframe Celestial Grid
    // ------------------------------------------------------------------------
    const gridGroup = new THREE.Group();
    scene.add(gridGroup);

    const gridSize = 40;
    const gridDivisions = 36;
    const gridColor = new THREE.Color(0x1a3820);

    // Bottom Grid Floor
    const gridHelper = new THREE.GridHelper(gridSize, gridDivisions, gridColor, gridColor);
    gridHelper.position.set(0, -3.2, 0);
    const gridMat = gridHelper.material as THREE.LineBasicMaterial;
    gridMat.transparent = true;
    gridMat.opacity = 0.35;
    gridMat.blending = THREE.AdditiveBlending;
    gridGroup.add(gridHelper);

    // Subtle Vertical Wall Grid Lines for Depth
    const verticalLinesGeo = new THREE.BufferGeometry();
    const vLinePoints: number[] = [];
    const spacing = 1.4;
    for (let x = -14; x <= 14; x += spacing) {
      vLinePoints.push(x, -3.2, -8);
      vLinePoints.push(x, 6, -8);
    }
    for (let y = -3; y <= 6; y += spacing) {
      vLinePoints.push(-14, y, -8);
      vLinePoints.push(14, y, -8);
    }
    verticalLinesGeo.setAttribute('position', new THREE.Float32BufferAttribute(vLinePoints, 3));
    const vLineMat = new THREE.LineBasicMaterial({
      color: 0x142b1a,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
    });
    const backGrid = new THREE.LineSegments(verticalLinesGeo, vLineMat);
    gridGroup.add(backGrid);

    // ------------------------------------------------------------------------
    // 2. 3D Curved Planet Horizon Sphere
    // ------------------------------------------------------------------------
    const horizonGroup = new THREE.Group();
    scene.add(horizonGroup);

    // A massive sphere positioned low down, so its top edge forms the sweeping curved horizon
    const planetRadius = 18;
    const planetGeo = new THREE.SphereGeometry(planetRadius, 64, 32, 0, Math.PI * 2, 0, Math.PI / 2);
    const planetMat = new THREE.MeshStandardMaterial({
      color: 0x050a06,
      roughness: 0.9,
      metalness: 0.1,
    });
    const planet = new THREE.Mesh(planetGeo, planetMat);
    planet.position.set(0, -20.6, 1);
    horizonGroup.add(planet);

    // Luminous Atmospheric Horizon Rim (Sweeping Curve)
    const curveSegments = 80;
    const arcRadius = 18.05;
    const rimPoints: THREE.Vector3[] = [];
    for (let i = 0; i <= curveSegments; i++) {
      const angle = Math.PI / 2 - 0.45 + (0.9 * i) / curveSegments;
      const x = arcRadius * Math.cos(angle);
      const y = arcRadius * Math.sin(angle) - 20.6;
      rimPoints.push(new THREE.Vector3(x, y, 1.05));
    }
    const rimCurve = new THREE.CatmullRomCurve3(rimPoints);
    const rimGeo = new THREE.TubeGeometry(rimCurve, 64, 0.045, 8, false);
    const rimMat = new THREE.MeshBasicMaterial({
      color: 0x76ff66,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const horizonGlowRim = new THREE.Mesh(rimGeo, rimMat);
    horizonGroup.add(horizonGlowRim);

    // ------------------------------------------------------------------------
    // 3. Signature 3D Orbital Elliptical Ring (Wrapping around "New")
    // ------------------------------------------------------------------------
    const ringGroup = new THREE.Group();
    ringGroup.position.set(0, 0.45, 0); // Positioned right around the "New" text plane
    scene.add(ringGroup);

    // Ellipse Curve in 3D
    const ringCurvePoints: THREE.Vector3[] = [];
    const ringRadiusX = 2.45;
    const ringRadiusY = 0.92;
    for (let i = 0; i <= 64; i++) {
      const theta = (i / 64) * Math.PI * 2;
      ringCurvePoints.push(
        new THREE.Vector3(
          Math.cos(theta) * ringRadiusX,
          Math.sin(theta) * ringRadiusY,
          0
        )
      );
    }
    const ringCurve = new THREE.CatmullRomCurve3(ringCurvePoints, true);
    const ringGeo = new THREE.TubeGeometry(ringCurve, 72, 0.026, 8, true);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xd4ff55,
      emissiveIntensity: 0.45,
      roughness: 0.15,
      metalness: 0.9,
    });
    const orbitalRing = new THREE.Mesh(ringGeo, ringMat);
    orbitalRing.rotation.z = -0.32; // -18 deg tilt as seen in reference
    orbitalRing.rotation.x = 0.45;  // 3D perspective pitch
    ringGroup.add(orbitalRing);

    // Faint outer secondary aura ring
    const outerRingCurve = new THREE.CatmullRomCurve3(
      ringCurvePoints.map(p => new THREE.Vector3(p.x * 1.04, p.y * 1.04, 0)),
      true
    );
    const outerRingGeo = new THREE.TubeGeometry(outerRingCurve, 72, 0.008, 6, true);
    const outerRingMat = new THREE.MeshBasicMaterial({
      color: 0xa3e635,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const outerOrbitalRing = new THREE.Mesh(outerRingGeo, outerRingMat);
    outerOrbitalRing.rotation.z = -0.32;
    outerOrbitalRing.rotation.x = 0.45;
    ringGroup.add(outerOrbitalRing);

    // ------------------------------------------------------------------------
    // 4. Sparkling 4-Point Celestial Stars (✦)
    // ------------------------------------------------------------------------
    const starsGroup = new THREE.Group();
    scene.add(starsGroup);

    // Create 4-point diamond cross star geometry
    const createStarMesh = (scale: number, emissiveColor: number = 0xffffff) => {
      const group = new THREE.Group();
      const crossMat = new THREE.MeshBasicMaterial({
        color: emissiveColor,
        transparent: true,
        opacity: 0.95,
        blending: THREE.AdditiveBlending,
      });

      // Horizontal beam
      const hGeo = new THREE.PlaneGeometry(0.55 * scale, 0.07 * scale);
      const hMesh = new THREE.Mesh(hGeo, crossMat);
      group.add(hMesh);

      // Vertical beam
      const vGeo = new THREE.PlaneGeometry(0.07 * scale, 0.55 * scale);
      const vMesh = new THREE.Mesh(vGeo, crossMat);
      group.add(vMesh);

      // Central glow sphere
      const centerGeo = new THREE.SphereGeometry(0.06 * scale, 8, 8);
      const centerMat = new THREE.MeshBasicMaterial({
        color: 0xccff00,
        blending: THREE.AdditiveBlending,
      });
      group.add(new THREE.Mesh(centerGeo, centerMat));

      return group;
    };

    // Star placements matching the reference image layout
    const starConfigs = [
      { pos: [-4.6, 3.2, 0], scale: 0.7, color: 0xffffff },    // Top Left star
      { pos: [-4.8, -0.4, 0], scale: 0.75, color: 0xffffff },   // Mid Left star
      { pos: [1.9, 1.45, 0.3], scale: 0.85, color: 0xd9ff66 },  // Star above right of "New"
      { pos: [2.35, 1.05, 0.3], scale: 0.5, color: 0xffffff },  // Micro companion star
      { pos: [4.4, -0.45, 0], scale: 0.65, color: 0xd4ff88 },   // Lower Right star
      { pos: [3.8, 3.1, -1], scale: 0.5, color: 0xffffff },     // Upper right background star
    ];

    const starMeshes: THREE.Group[] = [];
    starConfigs.forEach(cfg => {
      const star = createStarMesh(cfg.scale, cfg.color);
      star.position.set(cfg.pos[0], cfg.pos[1], cfg.pos[2]);
      starsGroup.add(star);
      starMeshes.push(star);
    });

    // ------------------------------------------------------------------------
    // 5. Rising Cosmic Dust / Digital Energy Particles
    // ------------------------------------------------------------------------
    const particleCount = 140;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);
    const particleBaseX = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const x = (Math.random() - 0.5) * 16;
      const y = -3.2 + Math.random() * 8.5;
      const z = (Math.random() - 0.5) * 8;
      particlePositions[i3] = x;
      particlePositions[i3 + 1] = y;
      particlePositions[i3 + 2] = z;
      particleBaseX[i] = x;
      particleSpeeds[i] = 0.003 + Math.random() * 0.008;
    }

    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    // Circle point texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d')!;
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(215, 255, 100, 1)');
    gradient.addColorStop(0.4, 'rgba(110, 235, 130, 0.6)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);
    const particleTex = new THREE.CanvasTexture(canvas);

    const particlesMat = new THREE.PointsMaterial({
      size: 0.12,
      map: particleTex,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particles);

    // ------------------------------------------------------------------------
    // Mouse Interaction & Parallax
    // ------------------------------------------------------------------------
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetMouseX = nx;
      targetMouseY = ny;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = Math.max(0.1, width / height);
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse damping
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      // Camera Parallax
      camera.position.x = currentMouseX * 0.6;
      camera.position.y = 0.8 + currentMouseY * 0.35;
      camera.lookAt(0, 0.2, 0);

      // Subtle orbital ring animation
      orbitalRing.rotation.z = -0.32 + Math.sin(elapsedTime * 0.8) * 0.04 + currentMouseX * 0.08;
      orbitalRing.rotation.x = 0.45 + Math.cos(elapsedTime * 0.7) * 0.03 + currentMouseY * 0.06;
      outerOrbitalRing.rotation.z = orbitalRing.rotation.z;
      outerOrbitalRing.rotation.x = orbitalRing.rotation.x;

      // Star twinkling & micro rotation
      starMeshes.forEach((star, i) => {
        const pulse = 0.85 + Math.sin(elapsedTime * 2.5 + i * 1.5) * 0.25;
        star.scale.set(pulse, pulse, pulse);
        star.rotation.z = Math.sin(elapsedTime * 0.5 + i) * 0.1;
      });

      // Animate rising particles
      const posAttr = particlesGeo.attributes.position as THREE.BufferAttribute;
      const array = posAttr.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        array[i3 + 1] += particleSpeeds[i];
        array[i3] = particleBaseX[i] + Math.sin(elapsedTime + i) * 0.2;
        if (array[i3 + 1] > 5.5) {
          array[i3 + 1] = -3.0;
        }
      }
      posAttr.needsUpdate = true;

      // Aurora light breathing
      auroraLight.intensity = 4.5 + Math.sin(elapsedTime * 1.5) * 1.2;
      limeGlowLight.intensity = 3.0 + Math.cos(elapsedTime * 1.2) * 0.8;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
      gridGeoDispose(scene);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{ zIndex: 1 }}
    >
      {!hasWebGL && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#030603] via-[#07130a] to-[#040804] opacity-80" />
      )}
    </div>
  );
};

// Helper to dispose Three.js scene geometries & materials
function gridGeoDispose(scene: THREE.Scene) {
  scene.traverse((obj) => {
    if (obj instanceof THREE.Mesh || obj instanceof THREE.LineSegments || obj instanceof THREE.Points) {
      if (obj.geometry) obj.geometry.dispose();
      if (Array.isArray(obj.material)) {
        obj.material.forEach((m) => m.dispose());
      } else if (obj.material) {
        obj.material.dispose();
      }
    }
  });
}
