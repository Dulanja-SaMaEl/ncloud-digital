import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Marketing3DCoreProps {
  className?: string;
  mode?: 'meta' | 'web' | 'media' | 'all';
}

export const Marketing3DCore: React.FC<Marketing3DCoreProps> = ({
  className = '',
  mode = 'meta',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  // References to dynamic lights for smooth color transitions on mode switch
  const cyanLightRef = useRef<THREE.PointLight | null>(null);
  const accentLightRef = useRef<THREE.PointLight | null>(null);
  const coreMatRef = useRef<THREE.MeshStandardMaterial | null>(null);

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

    let width = container.clientWidth || 500;
    let height = container.clientHeight || 500;

    const scene = new THREE.Scene();

    // Camera setup with dynamic aspect calculation
    const camera = new THREE.PerspectiveCamera(45, Math.max(0.1, width / height), 0.1, 100);

    const updateCameraDistance = (aspect: number) => {
      // Ring boundary is radius 4.5 -> diameter 9.0 + floating nodes
      const targetBound = 11.5;
      const fovRad = (camera.fov * Math.PI) / 180;
      const vDist = (targetBound / 2) / Math.tan(fovRad / 2);
      const hDist = (targetBound / 2) / (Math.tan(fovRad / 2) * Math.max(0.45, aspect));
      const requiredDist = Math.max(vDist, hDist) + 1.2;
      camera.position.set(0, 0, Math.min(Math.max(requiredDist, 14.0), 22.0));
    };

    updateCameraDistance(width / height);

    // High performance renderer with alpha & anti-aliasing
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
    renderer.domElement.style.pointerEvents = 'auto';
    container.appendChild(renderer.domElement);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0x060c14, 2.8);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x22d3ee, 5.5, 30);
    cyanLight.position.set(6, 7, 6);
    scene.add(cyanLight);
    cyanLightRef.current = cyanLight;

    const accentLight = new THREE.PointLight(0xff7a3d, 4.5, 30);
    accentLight.position.set(-6, -6, 5);
    scene.add(accentLight);
    accentLightRef.current = accentLight;

    const rimLight = new THREE.DirectionalLight(0xe0f7ff, 3.0);
    rimLight.position.set(0, 10, -5);
    scene.add(rimLight);

    // Group for all rotating elements
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Central Translucent Growth Sphere (Glass Icosahedron)
    const coreGeometry = new THREE.IcosahedronGeometry(2.1, 2);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x08131e,
      emissive: 0x052033,
      roughness: 0.1,
      metalness: 0.2,
      transmission: 0.9,
      ior: 1.52,
      transparent: true,
      opacity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    coreGroup.add(coreMesh);

    // 2. Inner Luminous Energy Octahedron (The Campaign Heart)
    const innerGeometry = new THREE.OctahedronGeometry(1.15, 0);
    const innerMaterial = new THREE.MeshStandardMaterial({
      color: 0x22d3ee,
      emissive: 0x00f0ff,
      emissiveIntensity: 2.2,
      roughness: 0.15,
      metalness: 0.9,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    coreMatRef.current = innerMaterial;
    coreGroup.add(innerMesh);

    // 3. Faceted Wireframe Shell (Digital Telemetry Cage)
    const wireframeGeometry = new THREE.IcosahedronGeometry(2.65, 1);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x7de7ff,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    coreGroup.add(wireframeMesh);

    // 4. Three Thin Orbital Rings (Traffic, Conversion, Retention)
    // Ring 1: Primary Cyan Orbital Ring (Meta Ad Funnels)
    const ring1Geo = new THREE.TorusGeometry(3.4, 0.04, 16, 120);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x22d3ee,
      emissive: 0x22d3ee,
      emissiveIntensity: 1.0,
      metalness: 0.9,
      roughness: 0.2,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 7;
    coreGroup.add(ring1);

    // Ring 2: Warm Amber Acceleration Ring (ROAS Scaling & CAPI)
    const ring2Geo = new THREE.TorusGeometry(3.95, 0.035, 16, 120);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xff8c42,
      emissive: 0xff7a3d,
      emissiveIntensity: 0.9,
      metalness: 0.9,
      roughness: 0.2,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.z = Math.PI / 3.5;
    coreGroup.add(ring2);

    // Ring 3: Outer Precision Boundary Ring (Full Funnel Architecture)
    const ring3Geo = new THREE.TorusGeometry(4.45, 0.026, 16, 120);
    const ring3Mat = new THREE.MeshStandardMaterial({
      color: 0xc9f3ff,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.6,
      metalness: 0.9,
      roughness: 0.3,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.y = Math.PI / 2.8;
    ring3.rotation.z = -Math.PI / 5;
    coreGroup.add(ring3);

    // 5. Orbiting Telemetry Satellites (Meta, Google, CAPI, CRO, Video, Scale)
    const nodeGeometry = new THREE.SphereGeometry(0.16, 16, 16);
    const nodeMaterialCyan = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x22d3ee,
      emissiveIntensity: 2.5,
    });
    const nodeMaterialAmber = new THREE.MeshStandardMaterial({
      color: 0xffa050,
      emissive: 0xff7a3d,
      emissiveIntensity: 2.4,
    });
    const nodeMaterialPurple = new THREE.MeshStandardMaterial({
      color: 0xc084fc,
      emissive: 0xa855f7,
      emissiveIntensity: 2.2,
    });

    const nodes: THREE.Mesh[] = [];
    for (let i = 0; i < 6; i++) {
      let mat = nodeMaterialCyan;
      if (i % 3 === 1) mat = nodeMaterialAmber;
      if (i % 3 === 2) mat = nodeMaterialPurple;

      const node = new THREE.Mesh(nodeGeometry, mat);
      coreGroup.add(node);
      nodes.push(node);
    }

    // 6. Curved Spline Data Trail (Audience Journey Curve)
    const curvePoints: THREE.Vector3[] = [];
    for (let i = 0; i <= 24; i++) {
      const angle = (i / 24) * Math.PI * 2;
      const r = 3.65 + Math.sin(i * 0.9) * 0.35;
      curvePoints.push(new THREE.Vector3(Math.cos(angle) * r, Math.sin(angle * 2.2) * 0.85, Math.sin(angle) * r));
    }
    const curve = new THREE.CatmullRomCurve3(curvePoints, true);
    const tubeGeo = new THREE.TubeGeometry(curve, 64, 0.02, 8, true);
    const tubeMat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      transparent: true,
      opacity: 0.42,
    });
    const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
    coreGroup.add(tubeMesh);

    // 7. Dynamic Ambient Data Cloud (160+ Inbound Traffic & Conversion Particles)
    const particleCount = 160;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 11.5;
      particlePositions[i + 1] = (Math.random() - 0.5) * 11.5;
      particlePositions[i + 2] = (Math.random() - 0.5) * 8.5;
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.045,
      transparent: true,
      opacity: 0.65,
    });
    const particleField = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleField);

    // Mouse & Touch Drag / Parallax Interaction
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isDragging = false;
    let previousPointerX = 0;
    let previousPointerY = 0;
    let dragVelocityX = 0;
    let dragVelocityY = 0;

    const handlePointerDown = (e: PointerEvent) => {
      isDragging = true;
      previousPointerX = e.clientX;
      previousPointerY = e.clientY;
    };

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / height - 0.5) * 2;

      if (isDragging) {
        const deltaX = e.clientX - previousPointerX;
        const deltaY = e.clientY - previousPointerY;
        dragVelocityX += deltaX * 0.005;
        dragVelocityY += deltaY * 0.005;
        previousPointerX = e.clientX;
        previousPointerY = e.clientY;
      } else {
        targetX = x * 0.5;
        targetY = y * 0.5;
      }
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    container.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerup', handlePointerUp);

    // Visibility & Lifecycle
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

    // Resize Observer for flawless responsive scaling
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 500;
      const h = container.clientHeight || 500;
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

    // Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Continuous organic core rotations
        coreMesh.rotation.y = elapsedTime * 0.24;
        coreMesh.rotation.x = Math.sin(elapsedTime * 0.22) * 0.14;

        innerMesh.rotation.y = -elapsedTime * 0.42;
        innerMesh.rotation.z = Math.cos(elapsedTime * 0.28) * 0.2;

        wireframeMesh.rotation.y = elapsedTime * 0.15;
        wireframeMesh.rotation.x = -elapsedTime * 0.09;

        // Rings rotation with varying angular velocities
        ring1.rotation.z = elapsedTime * 0.32;
        ring2.rotation.z = -elapsedTime * 0.24;
        ring3.rotation.x = elapsedTime * 0.18;

        tubeMesh.rotation.y = elapsedTime * 0.09;

        // Animate the 6 satellites along 3D orbital trajectories
        nodes.forEach((node, idx) => {
          const speed = 0.34 + idx * 0.07;
          const angle = elapsedTime * speed + (idx * Math.PI) / 3;
          const radius = idx % 2 === 0 ? 3.4 : 3.95;
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

      // Inertia drag damping
      dragVelocityX *= 0.94;
      dragVelocityY *= 0.94;
      targetX += dragVelocityX;
      targetY += dragVelocityY;

      // Smooth camera interpolation towards mouse / drag target
      currentX += (targetX - currentX) * 0.042;
      currentY += (targetY - currentY) * 0.042;

      coreGroup.rotation.y = currentX;
      coreGroup.rotation.x = -currentY;
      coreGroup.position.y = Math.sin(elapsedTime * 0.75) * 0.12;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      intersectionObserver.disconnect();
      resizeObserver.disconnect();
      container.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

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
      nodeMaterialAmber.dispose();
      nodeMaterialPurple.dispose();
      tubeGeo.dispose();
      tubeMat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  // Update dynamic lighting on mode changes (Meta Ads, Web UI, Media, All)
  useEffect(() => {
    if (!cyanLightRef.current || !accentLightRef.current || !coreMatRef.current) return;

    if (mode === 'meta') {
      cyanLightRef.current.color.setHex(0x00f0ff);
      accentLightRef.current.color.setHex(0xff7a3d);
      coreMatRef.current.color.setHex(0x22d3ee);
      coreMatRef.current.emissive.setHex(0x00f0ff);
    } else if (mode === 'web') {
      cyanLightRef.current.color.setHex(0x10b981);
      accentLightRef.current.color.setHex(0x38bdf8);
      coreMatRef.current.color.setHex(0x34d399);
      coreMatRef.current.emissive.setHex(0x10b981);
    } else if (mode === 'media') {
      cyanLightRef.current.color.setHex(0xa855f7);
      accentLightRef.current.color.setHex(0xff7a3d);
      coreMatRef.current.color.setHex(0xc084fc);
      coreMatRef.current.emissive.setHex(0xa855f7);
    } else {
      cyanLightRef.current.color.setHex(0x38bdf8);
      accentLightRef.current.color.setHex(0xff9f43);
      coreMatRef.current.color.setHex(0x7de7ff);
      coreMatRef.current.emissive.setHex(0x00f0ff);
    }
  }, [mode]);

  if (!hasWebGL) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <div className="w-72 h-72 rounded-full border border-cyan-400/30 bg-gradient-to-tr from-cyan-500/10 via-transparent to-orange-500/10 flex items-center justify-center animate-spin-slow">
          <div className="w-52 h-52 rounded-full border border-orange-500/30 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-cyan-400/20 backdrop-blur-xl border border-cyan-400/50" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full min-h-[360px] sm:min-h-[440px] md:min-h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing ${className}`}
      title="Drag to rotate 3D Growth Core"
    />
  );
};
