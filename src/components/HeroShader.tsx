'use client';

import { useEffect, useRef } from 'react';

export default function HeroShader() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || typeof window === 'undefined') return;

        let animId: number;
        let cleanup: () => void;

        (async () => {
            const THREE = await import('three');

            const renderer = new THREE.WebGLRenderer({
                canvas,
                antialias: false,
                alpha: true
            });

            const scene = new THREE.Scene();
            const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
            camera.position.z = 1;

            const geometry = new THREE.PlaneGeometry(2, 2);

            const vertexShader = `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4(position, 1.0);
                }
            `;

            const fragmentShader = `
                precision highp float;
                uniform float u_time;
                varying vec2 vUv;

                void main() {
                    // Create the "S-Curve" movement
                    // We offset the X coordinate based on a sine wave of the Y coordinate
                    float curve = sin(vUv.y * 3.0 + u_time * 0.8) * 0.15;
                    float xPos = vUv.x + curve;

                    // Define the specific gold palette
                    vec3 gold1 = vec3(1.00, 0.92, 0.50); 
                    vec3 gold2 = vec3(0.99, 0.83, 0.02); 
                    vec3 gold3 = vec3(0.83, 0.68, 0.21); 
                    vec3 gold4 = vec3(0.58, 0.45, 0.12); 

                    vec3 color = vec3(0.0);
                    float alpha = 0.0;
                    
                    float edge = 0.5; 
                    float width = 0.08; 

                    if (xPos > edge && xPos < edge + width) {
                        color = gold1;
                        alpha = 1.0;
                    } else if (xPos > edge + width && xPos < edge + width * 2.0) {
                        color = gold2;
                        alpha = 1.0;
                    } else if (xPos > edge + width * 2.0 && xPos < edge + width * 3.0) {
                        color = gold3;
                        alpha = 1.0;
                    } else if (xPos > edge + width * 3.0 && xPos < edge + width * 4.0) {
                        color = gold4;
                        alpha = 1.0;
                    }

                    gl_FragColor = vec4(color, alpha);
                }
            `;

            const material = new THREE.ShaderMaterial({
                vertexShader,
                fragmentShader,
                uniforms: {
                    u_time: { value: 0.0 },
                },
                transparent: true
            });

            scene.add(new THREE.Mesh(geometry, material));

            const handleResize = () => {
                const width = canvas.clientWidth;
                const height = canvas.clientHeight;
                const dpr = window.devicePixelRatio || 1;
                renderer.setPixelRatio(dpr);
                renderer.setSize(width, height, false);
            };

            window.addEventListener('resize', handleResize);
            handleResize();

            const clock = new THREE.Clock();
            const animate = () => {
                animId = requestAnimationFrame(animate);
                material.uniforms.u_time.value = clock.getElapsedTime();
                renderer.render(scene, camera);
            };
            animate();

            cleanup = () => {
                cancelAnimationFrame(animId);
                window.removeEventListener('resize', handleResize);
                renderer.dispose();
                geometry.dispose();
                material.dispose();
            };
        })();

        return () => cleanup?.();
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-transparent">
            <canvas
                ref={canvasRef}
                className="w-full h-full block"
                style={{ imageRendering: 'auto' }}
            />
        </div>
    );
}