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

    // Scene & Deep Midnight Navy Fog
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020712, 0.035);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(46, Math.max(0.1, width / height), 0.1, 100);
    camera.position.set(0, 0.8, 11);

    // High performance WebGL renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.pointerEvents = 'none';
    container.appendChild(renderer.domElement);

    // ------------------------------------------------------------------------
    // Atmospheric Midnight & Electric Blue Lighting
    // ------------------------------------------------------------------------
    const ambientLight = new THREE.AmbientLight(0x040e1f, 2.2);
    scene.add(ambientLight);

    // Electric Cyan Core Light (behind center / horizon)
    const cyanLight = new THREE.PointLight(0x22d3ee, 5.5, 30);
    cyanLight.position.set(0, -1.2, 3);
    scene.add(cyanLight);

    // Icy Blue Accent Light (right side highlighting floating card)
    const iceBlueLight = new THREE.PointLight(0x38bdf8, 4.5, 25);
    iceBlueLight.position.set(5.5, 1.8, 4);
    scene.add(iceBlueLight);

    // Deep Royal Blue Rim Light
    const rimLight = new THREE.DirectionalLight(0xa5f3fc, 2.8);
    rimLight.position.set(-4, 6, 5);
    scene.add(rimLight);

    // ------------------------------------------------------------------------
    // 1. 3D Perspective Midnight Wireframe Grid
    // ------------------------------------------------------------------------
    const gridGroup = new THREE.Group();
    scene.add(gridGroup);

    const gridSize = 44;
    const gridDivisions = 38;
    const gridColor = new THREE.Color(0x0a2238);

    // Bottom Grid Floor
    const gridHelper = new THREE.GridHelper(gridSize, gridDivisions, gridColor, gridColor);
    gridHelper.position.set(0, -3.2, 0);
    const gridMat = gridHelper.material as THREE.LineBasicMaterial;
    gridMat.transparent = true;
    gridMat.opacity = 0.32;
    gridMat.blending = THREE.AdditiveBlending;
    gridGroup.add(gridHelper);

    // Subtle Perspective Wall Grid Lines
    const verticalLinesGeo = new THREE.BufferGeometry();
    const vLinePoints: number[] = [];
    const spacing = 1.5;
    for (let x = -15; x <= 15; x += spacing) {
      vLinePoints.push(x, -3.2, -8);
      vLinePoints.push(x, 7, -8);
    }
    for (let y = -3; y <= 7; y += spacing) {
      vLinePoints.push(-15, y, -8);
      vLinePoints.push(15, y, -8);
    }
    verticalLinesGeo.setAttribute('position', new THREE.Float32BufferAttribute(vLinePoints, 3));
    const vLineMat = new THREE.LineBasicMaterial({
      color: 0x08192a,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    });
    const backGrid = new THREE.LineSegments(verticalLinesGeo, vLineMat);
    gridGroup.add(backGrid);

    // ------------------------------------------------------------------------
    // 2. 3D Curved Planet Horizon Sphere with Electric Cyan Atmospheric Rim
    // ------------------------------------------------------------------------
    const horizonGroup = new THREE.Group();
    scene.add(horizonGroup);

    const planetRadius = 18;
    const planetGeo = new THREE.SphereGeometry(planetRadius, 64, 32, 0, Math.PI * 2, 0, Math.PI / 2);
    const planetMat = new THREE.MeshStandardMaterial({
      color: 0x01050e,
      roughness: 0.95,
      metalness: 0.05,
    });
    const planet = new THREE.Mesh(planetGeo, planetMat);
    planet.position.set(0, -20.6, 1);
    horizonGroup.add(planet);

    // Sweeping Luminous Atmospheric Cyan Rim
    const curveSegments = 84;
    const arcRadius = 18.05;
    const rimPoints: THREE.Vector3[] = [];
    for (let i = 0; i <= curveSegments; i++) {
      const angle = Math.PI / 2 - 0.46 + (0.92 * i) / curveSegments;
      const x = arcRadius * Math.cos(angle);
      const y = arcRadius * Math.sin(angle) - 20.6;
      rimPoints.push(new THREE.Vector3(x, y, 1.05));
    }
    const rimCurve = new THREE.CatmullRomCurve3(rimPoints);
    const rimGeo = new THREE.TubeGeometry(rimCurve, 68, 0.045, 8, false);
    const rimMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const horizonGlowRim = new THREE.Mesh(rimGeo, rimMat);
    horizonGroup.add(horizonGlowRim);

    // ------------------------------------------------------------------------
    // 3. Signature 3D Orbital Ellipse Ring (Wrapping around "New")
    // ------------------------------------------------------------------------
    const ringGroup = new THREE.Group();
    ringGroup.position.set(0, 0.45, 0);
    scene.add(ringGroup);

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
      emissive: 0x0ea5e9,
      emissiveIntensity: 0.5,
      roughness: 0.12,
      metalness: 0.95,
    });
    const orbitalRing = new THREE.Mesh(ringGeo, ringMat);
    orbitalRing.rotation.z = -0.32; // -18.5 deg tilt
    orbitalRing.rotation.x = 0.45;  // 3D pitch
    ringGroup.add(orbitalRing);

    // Secondary delicate electric cyan aura ring
    const outerRingCurve = new THREE.CatmullRomCurve3(
      ringCurvePoints.map(p => new THREE.Vector3(p.x * 1.035, p.y * 1.035, 0)),
      true
    );
    const outerRingGeo = new THREE.TubeGeometry(outerRingCurve, 72, 0.009, 6, true);
    const outerRingMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    const outerOrbitalRing = new THREE.Mesh(outerRingGeo, outerRingMat);
    outerOrbitalRing.rotation.z = -0.32;
    outerOrbitalRing.rotation.x = 0.45;
    ringGroup.add(outerOrbitalRing);

    // Satellite Mini-Sphere orbiting along the ring
    const satelliteGeo = new THREE.SphereGeometry(0.09, 16, 16);
    const satelliteMat = new THREE.MeshStandardMaterial({
      color: 0xe0f2fe,
      emissive: 0x22d3ee,
      emissiveIntensity: 0.7,
      roughness: 0.1,
      metalness: 0.95,
    });
    const ringSatellite = new THREE.Mesh(satelliteGeo, satelliteMat);
    ringGroup.add(ringSatellite);

    // ------------------------------------------------------------------------
    // 4. Weightless Anti-Gravity Floating 3D Objects (Spheres & Crystals)
    // ------------------------------------------------------------------------
    const antiGravityGroup = new THREE.Group();
    scene.add(antiGravityGroup);

    interface FloatingObject {
      mesh: THREE.Object3D;
      basePos: THREE.Vector3;
      floatSpeed: number;
      floatAmp: number;
      rotSpeedX: number;
      rotSpeedY: number;
      phase: number;
    }
    const floatingObjects: FloatingObject[] = [];

    // Metallic Chrome Material
    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xd0e8ff,
      roughness: 0.08,
      metalness: 0.98,
    });

    // Glass Crystal Material
    const crystalMat = new THREE.MeshPhysicalMaterial({
      color: 0xbae6fd,
      transmission: 0.75,
      opacity: 0.85,
      transparent: true,
      roughness: 0.1,
      metalness: 0.1,
      ior: 1.5,
      reflectivity: 0.7,
      clearcoat: 1.0,
    });

    // Wireframe Cyan Crystal Accent Material
    const crystalWireMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });

    // Helper to spawn floating anti-gravity objects
    const addFloatingObject = (
      mesh: THREE.Object3D, 
      pos: [number, number, number], 
      floatSpeed = 1.0, 
      floatAmp = 0.15,
      rotSpeedX = 0.005,
      rotSpeedY = 0.008
    ) => {
      mesh.position.set(...pos);
      antiGravityGroup.add(mesh);
      floatingObjects.push({
        mesh,
        basePos: new THREE.Vector3(...pos),
        floatSpeed,
        floatAmp,
        rotSpeedX,
        rotSpeedY,
        phase: Math.random() * Math.PI * 2,
      });
    };

    // 1. Large Chrome Metallic Sphere (Upper Left - matching reference image)
    const sphere1 = new THREE.Mesh(new THREE.SphereGeometry(0.38, 32, 32), chromeMat);
    addFloatingObject(sphere1, [-4.6, 2.9, 0.5], 0.7, 0.14, 0.002, 0.003);

    // 2. Floating Refractive Glass Crystal (Octahedron - matching reference image left)
    const crystalGroup = new THREE.Group();
    const crystalGeo = new THREE.OctahedronGeometry(0.55, 0);
    const crystalBody = new THREE.Mesh(crystalGeo, crystalMat);
    const crystalWire = new THREE.Mesh(crystalGeo, crystalWireMat);
    crystalGroup.add(crystalBody);
    crystalGroup.add(crystalWire);
    addFloatingObject(crystalGroup, [-3.8, 2.1, -0.2], 0.85, 0.18, 0.012, 0.015);

    // 3. Medium Chrome Metallic Sphere (Mid-Left)
    const sphere2 = new THREE.Mesh(new THREE.SphereGeometry(0.24, 24, 24), chromeMat);
    addFloatingObject(sphere2, [-5.2, 0.2, 1.2], 0.9, 0.12, 0.004, 0.006);

    // 4. Subtle Foreground Sphere (Bottom Left)
    const sphere3 = new THREE.Mesh(new THREE.SphereGeometry(0.18, 24, 24), chromeMat);
    addFloatingObject(sphere3, [-3.6, -1.2, 1.8], 1.1, 0.1, 0.005, 0.004);

    // 5. Translucent Glass Bubble Disc (Near Right Floating Card)
    const glassDiscMat = new THREE.MeshPhysicalMaterial({
      color: 0x7dd3fc,
      transmission: 0.85,
      transparent: true,
      opacity: 0.65,
      roughness: 0.08,
      ior: 1.4,
    });
    const discMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.04, 32), glassDiscMat);
    discMesh.rotation.x = Math.PI / 3;
    addFloatingObject(discMesh, [5.2, 2.3, 0.8], 0.75, 0.15, 0.008, 0.01);

    // 6. Floating Small Shard / Diamond (Right edge)
    const shardGeo = new THREE.OctahedronGeometry(0.28, 0);
    const shardMesh = new THREE.Mesh(shardGeo, crystalMat);
    addFloatingObject(shardMesh, [5.5, -1.1, 1.4], 1.0, 0.12, 0.014, 0.012);

    // 7. Micro Satellite Sphere (Near bottom of floating card)
    const sphere4 = new THREE.Mesh(new THREE.SphereGeometry(0.14, 20, 20), chromeMat);
    addFloatingObject(sphere4, [4.4, -1.8, 2.0], 1.2, 0.08, 0.006, 0.005);

    // ------------------------------------------------------------------------
    // 5. Sparkling 4-Point Celestial Stars (✦)
    // ------------------------------------------------------------------------
    const starsGroup = new THREE.Group();
    scene.add(starsGroup);

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
        color: 0x38bdf8,
        blending: THREE.AdditiveBlending,
      });
      group.add(new THREE.Mesh(centerGeo, centerMat));

      return group;
    };

    const starConfigs = [
      { pos: [-4.6, 3.2, 0], scale: 0.7, color: 0xffffff },    // Top Left star
      { pos: [-4.8, -0.4, 0], scale: 0.75, color: 0xffffff },   // Mid Left star
      { pos: [1.9, 1.45, 0.3], scale: 0.9, color: 0xbae6fd },   // Star above right of "New"
      { pos: [2.35, 1.05, 0.3], scale: 0.52, color: 0xffffff }, // Micro companion star
      { pos: [4.4, -0.45, 0], scale: 0.65, color: 0x7dd3fc },   // Lower Right star
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
    // 6. Bioluminescent Floating Micro-Particles
    // ------------------------------------------------------------------------
    const particleCount = 160;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);
    const particleBaseX = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const x = (Math.random() - 0.5) * 17;
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

    // Particle texture canvas
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 32;
    pCanvas.height = 32;
    const ctx = pCanvas.getContext('2d')!;
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(224, 242, 254, 1)');
    gradient.addColorStop(0.35, 'rgba(56, 189, 248, 0.7)');
    gradient.addColorStop(0.7, 'rgba(14, 165, 233, 0.3)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);
    const particleTex = new THREE.CanvasTexture(pCanvas);

    const particlesMat = new THREE.PointsMaterial({
      size: 0.13,
      map: particleTex,
      transparent: true,
      opacity: 0.7,
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
      camera.position.x = currentMouseX * 0.55;
      camera.position.y = 0.8 + currentMouseY * 0.32;
      camera.lookAt(0, 0.2, 0);

      // Subtle orbital ring animation
      orbitalRing.rotation.z = -0.32 + Math.sin(elapsedTime * 0.8) * 0.03 + currentMouseX * 0.07;
      orbitalRing.rotation.x = 0.45 + Math.cos(elapsedTime * 0.7) * 0.02 + currentMouseY * 0.05;
      outerOrbitalRing.rotation.z = orbitalRing.rotation.z;
      outerOrbitalRing.rotation.x = orbitalRing.rotation.x;

      // Orbiting Satellite on the Ring
      const satAngle = elapsedTime * 0.9;
      ringSatellite.position.set(
        Math.cos(satAngle) * ringRadiusX,
        Math.sin(satAngle) * ringRadiusY,
        0
      );

      // Zero-Gravity Anti-Gravity Objects Drift
      floatingObjects.forEach((obj) => {
        const floatOffset = Math.sin(elapsedTime * obj.floatSpeed + obj.phase) * obj.floatAmp;
        const swayOffset = Math.cos(elapsedTime * (obj.floatSpeed * 0.7) + obj.phase) * (obj.floatAmp * 0.5);
        obj.mesh.position.y = obj.basePos.y + floatOffset + currentMouseY * 0.15;
        obj.mesh.position.x = obj.basePos.x + swayOffset + currentMouseX * 0.15;
        obj.mesh.rotation.x += obj.rotSpeedX;
        obj.mesh.rotation.y += obj.rotSpeedY;
      });

      // Star twinkling
      starMeshes.forEach((star, i) => {
        const pulse = 0.85 + Math.sin(elapsedTime * 2.5 + i * 1.5) * 0.25;
        star.scale.set(pulse, pulse, pulse);
      });

      // Animate rising bioluminescent particles
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

      // Cyan breathing glow
      cyanLight.intensity = 5.2 + Math.sin(elapsedTime * 1.6) * 1.0;
      iceBlueLight.intensity = 4.2 + Math.cos(elapsedTime * 1.3) * 0.8;

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
        <div className="absolute inset-0 bg-gradient-to-b from-[#02060d] via-[#041021] to-[#020712] opacity-80" />
      )}
    </div>
  );
};

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
