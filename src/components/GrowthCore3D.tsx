import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface GrowthCore3DProps {
  className?: string;
  intensity?: number;
}

export const GrowthCore3D: React.FC<GrowthCore3DProps> = ({ className = '', intensity = 1 }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL support
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

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Dimensions
    let width = container.clientWidth || 450;
    let height = container.clientHeight || 450;

    // Scene
    const scene = new THREE.Scene();

    // Camera - dynamic responsive FOV & position calibration
    const camera = new THREE.PerspectiveCamera(45, Math.max(0.1, width / height), 0.1, 100);

    const updateCameraDistance = (aspect: number) => {
      // Ring 3 outer radius is 4.4 (diameter 8.8), nodes orbit up to ~4.2.
      // Target bounding sphere diameter is 11.2 units to prevent any clipping during 3D rotation.
      const targetBound = 11.2;
      const fovRad = (camera.fov * Math.PI) / 180;
      const vDist = (targetBound / 2) / Math.tan(fovRad / 2);
      const hDist = (targetBound / 2) / (Math.tan(fovRad / 2) * Math.max(0.45, aspect));
      const requiredDist = Math.max(vDist, hDist) + 1.4;
      camera.position.set(0, 0, Math.min(Math.max(requiredDist, 14.5), 23));
    };

    updateCameraDistance(width / height);

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
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x0a1017, 2.5);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x7de7ff, 5.0 * intensity, 30);
    cyanLight.position.set(6, 6, 6);
    scene.add(cyanLight);

    const warmLight = new THREE.PointLight(0xff7a3d, 4.2 * intensity, 30);
    warmLight.position.set(-6, -6, 5);
    scene.add(warmLight);

    const rimLight = new THREE.DirectionalLight(0xe0f7ff, 2.8);
    rimLight.position.set(0, 10, -5);
    scene.add(rimLight);

    // Group for all core elements
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Central Translucent Geometric Glass Sphere Core
    const coreGeometry = new THREE.IcosahedronGeometry(2.0, 2);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0c141f,
      emissive: 0x081b2b,
      roughness: 0.12,
      metalness: 0.25,
      transmission: 0.88,
      ior: 1.55,
      transparent: true,
      opacity: 0.92,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    coreGroup.add(coreMesh);

    // 2. Inner Luminous Energy Crystal
    const innerGeometry = new THREE.OctahedronGeometry(1.05, 0);
    const innerMaterial = new THREE.MeshStandardMaterial({
      color: 0x7de7ff,
      emissive: 0x22d3ee,
      emissiveIntensity: 1.9 * intensity,
      roughness: 0.15,
      metalness: 0.85,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    coreGroup.add(innerMesh);

    // 3. Faceted Wireframe Growth Shell
    const wireframeGeometry = new THREE.IcosahedronGeometry(2.5, 1);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x7de7ff,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    coreGroup.add(wireframeMesh);

    // 4. Three Thin Orbital Rings (Traffic, Conversion, Retention)
    // Ring 1: Primary Cyan Orbital Ring
    const ring1Geo = new THREE.TorusGeometry(3.3, 0.038, 16, 120);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x7de7ff,
      emissive: 0x7de7ff,
      emissiveIntensity: 0.85 * intensity,
      metalness: 0.9,
      roughness: 0.2,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 8;
    coreGroup.add(ring1);

    // Ring 2: Warm Amber Acceleration Ring
    const ring2Geo = new THREE.TorusGeometry(3.8, 0.032, 16, 120);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xff7a3d,
      emissive: 0xff7a3d,
      emissiveIntensity: 0.75 * intensity,
      metalness: 0.9,
      roughness: 0.2,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.z = Math.PI / 4;
    coreGroup.add(ring2);

    // Ring 3: Outer Precision Boundary Ring
    const ring3Geo = new THREE.TorusGeometry(4.3, 0.024, 16, 120);
    const ring3Mat = new THREE.MeshStandardMaterial({
      color: 0xc9f3ff,
      emissive: 0x22d3ee,
      emissiveIntensity: 0.45 * intensity,
      metalness: 0.9,
      roughness: 0.3,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.y = Math.PI / 3;
    ring3.rotation.z = -Math.PI / 6;
    coreGroup.add(ring3);

    // 5. Orbiting Data Nodes with Light Halos
    const nodeGeometry = new THREE.SphereGeometry(0.14, 16, 16);
    const nodeMaterialCyan = new THREE.MeshStandardMaterial({
      color: 0x7de7ff,
      emissive: 0x7de7ff,
      emissiveIntensity: 2.4 * intensity,
    });
    const nodeMaterialWarm = new THREE.MeshStandardMaterial({
      color: 0xffb26b,
      emissive: 0xff7a3d,
      emissiveIntensity: 2.2 * intensity,
    });

    const nodes: THREE.Mesh[] = [];
    for (let i = 0; i < 6; i++) {
      const node = new THREE.Mesh(nodeGeometry, i % 2 === 0 ? nodeMaterialCyan : nodeMaterialWarm);
      coreGroup.add(node);
      nodes.push(node);
    }

    // 6. Curved Spline Data Trails
    const curvePoints: THREE.Vector3[] = [];
    for (let i = 0; i <= 24; i++) {
      const angle = (i / 24) * Math.PI * 2;
      const r = 3.5 + Math.sin(i * 0.8) * 0.35;
      curvePoints.push(new THREE.Vector3(Math.cos(angle) * r, Math.sin(angle * 2) * 0.75, Math.sin(angle) * r));
    }
    const curve = new THREE.CatmullRomCurve3(curvePoints, true);
    const tubeGeo = new THREE.TubeGeometry(curve, 64, 0.018, 8, true);
    const tubeMat = new THREE.MeshBasicMaterial({
      color: 0x7de7ff,
      transparent: true,
      opacity: 0.38,
    });
    const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
    coreGroup.add(tubeMesh);

    // 7. Ambient Particle Field (Growth Nodes) - strictly sized within visible volume
    const particleCount = 140;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 11;
      particlePositions[i + 1] = (Math.random() - 0.5) * 11;
      particlePositions[i + 2] = (Math.random() - 0.5) * 8;
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x7de7ff,
      size: 0.045,
      transparent: true,
      opacity: 0.55,
    });
    const particleField = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleField);

    // Mouse Parallax & Interaction
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / height - 0.5) * 2;
      targetX = x * 0.45;
      targetY = y * 0.45;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Touch Parallax for Mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        const x = ((touch.clientX - rect.left) / width - 0.5) * 2;
        const y = ((touch.clientY - rect.top) / height - 0.5) * 2;
        targetX = Math.max(-0.4, Math.min(0.4, x * 0.4));
        targetY = Math.max(-0.4, Math.min(0.4, y * 0.4));
      }
    };
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Visibility & Lifecycle Management
    let isVisible = true;
    let animationFrameId: number;

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(container);

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Resize Handler with ResizeObserver
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 450;
      const h = container.clientHeight || 450;
      width = w;
      height = h;
      const aspect = Math.max(0.1, width / height);
      camera.aspect = aspect;
      updateCameraDistance(aspect);
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);
    window.addEventListener('resize', handleResize);

    // Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Core breathing rotation
        coreMesh.rotation.y = elapsedTime * 0.22;
        coreMesh.rotation.x = Math.sin(elapsedTime * 0.2) * 0.12;

        innerMesh.rotation.y = -elapsedTime * 0.38;
        innerMesh.rotation.z = Math.cos(elapsedTime * 0.25) * 0.18;

        wireframeMesh.rotation.y = elapsedTime * 0.14;
        wireframeMesh.rotation.x = -elapsedTime * 0.08;

        // Rings rotation
        ring1.rotation.z = elapsedTime * 0.3;
        ring2.rotation.z = -elapsedTime * 0.2;
        ring3.rotation.x = elapsedTime * 0.16;

        tubeMesh.rotation.y = elapsedTime * 0.08;

        // Position nodes dynamically along orbital trajectories
        nodes.forEach((node, idx) => {
          const speed = 0.32 + idx * 0.07;
          const angle = elapsedTime * speed + (idx * Math.PI) / 3;
          const radius = idx % 2 === 0 ? 3.3 : 3.8;
          if (idx % 2 === 0) {
            node.position.x = Math.cos(angle) * radius;
            node.position.y = Math.sin(angle) * radius * 0.55;
            node.position.z = Math.sin(angle) * radius * 0.85;
          } else {
            node.position.x = Math.sin(angle) * radius * 0.75;
            node.position.y = Math.cos(angle) * radius;
            node.position.z = Math.cos(angle) * radius * 0.65;
          }
        });
      }

      // Buttery-smooth damping towards target
      currentX += (targetX - currentX) * 0.038;
      currentY += (targetY - currentY) * 0.038;

      coreGroup.rotation.y = currentX;
      coreGroup.rotation.x = -currentY;
      coreGroup.position.y = Math.sin(elapsedTime * 0.7) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    // Clean-up
    return () => {
      cancelAnimationFrame(animationFrameId);
      intersectionObserver.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Dispose Three.js resources
      coreGeometry.dispose();
      coreMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      nodeGeometry.dispose();
      nodeMaterialCyan.dispose();
      nodeMaterialWarm.dispose();
      tubeGeo.dispose();
      tubeMat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, [intensity]);

  if (!hasWebGL) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <div className="w-80 h-80 rounded-full border border-cyan-400/30 bg-gradient-to-tr from-cyan-500/10 via-transparent to-orange-500/10 animate-spin-slow flex items-center justify-center">
          <div className="w-56 h-56 rounded-full border border-orange-500/30 flex items-center justify-center animate-reverse-spin">
            <div className="w-28 h-28 rounded-full bg-cyan-400/20 backdrop-blur-xl border border-cyan-400/50 shadow-glow-cyan" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full min-h-[300px] sm:min-h-[380px] lg:min-h-[440px] pointer-events-auto flex items-center justify-center ${className}`}
    />
  );
};
