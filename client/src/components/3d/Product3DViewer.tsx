import { useEffect, useRef } from "react";
import * as THREE from "three";

interface Product3DViewerProps {
  className?: string;
}

export default function Product3DViewer({ className = "product-container" }: Product3DViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xff5e0e, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Bottle
    const geometry = new THREE.CylinderGeometry(1, 1.2, 4, 32);
    const material = new THREE.MeshPhongMaterial({
      color: 0xff5e0e,
      transparent: true,
      opacity: 0.8,
      shininess: 100,
    });
    const product = new THREE.Mesh(geometry, material);
    scene.add(product);

    // Cap
    const capGeometry = new THREE.CylinderGeometry(1.1, 1.1, 0.5, 32);
    const capMaterial = new THREE.MeshPhongMaterial({ color: 0x444444 });
    const cap = new THREE.Mesh(capGeometry, capMaterial);
    cap.position.y = 2.25;
    scene.add(cap);

    camera.position.set(0, 1, 8);

    // Mouse interaction
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      targetRotationY = mouseX * 0.5;
      targetRotationX = mouseY * 0.3;
    };

    container.addEventListener("mousemove", handleMouseMove);

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      product.rotation.y += (targetRotationY - product.rotation.y) * 0.05;
      product.rotation.x += (targetRotationX - product.rotation.x) * 0.05;
      renderer.render(scene, camera);
    };

    animate();

    // Resize
    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Cleanup
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      </div>

      {/* Controls */}
    </div>
  );
}
