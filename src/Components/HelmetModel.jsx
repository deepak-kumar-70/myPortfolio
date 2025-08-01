import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// Postprocessing
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { RGBShiftShader } from "three/examples/jsm/shaders/RGBShiftShader.js";

const HelmetModel = () => {
  const mountRef = useRef(null);
  const modelRef = useRef(null);
  const mouse = useRef(new THREE.Vector2());

  useEffect(() => {
    const mount = mountRef.current;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 2);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    mount.appendChild(renderer.domElement);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Postprocessing setup
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const rgbShiftPass = new ShaderPass(RGBShiftShader);
    rgbShiftPass.uniforms["amount"].value = 0.002;
    composer.addPass(rgbShiftPass);

    // Mouse movement
    const onMouseMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    // Resize handling
    const onWindowResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      composer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onWindowResize);

    // Load HDR and model
new RGBELoader().load("/model/Helmet/royal_esplanade_1k.hdr", (hdrEquirect) => {
  hdrEquirect.mapping = THREE.EquirectangularReflectionMapping;
  scene.environment = hdrEquirect;

  new GLTFLoader().load("/model/Helmet/DamagedHelmet.gltf", (gltf) => {
    const model = gltf.scene;
    modelRef.current = model;
    scene.add(model);
    model.scale.set(1.1, 1.1, 1.1);
    
  });
});



    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();

      if (modelRef.current) {
        const vector = new THREE.Vector3(mouse.current.x, mouse.current.y, 0.5);
        vector.unproject(camera);

        const dir = vector.sub(camera.position).normalize();
        const target = camera.position.clone().add(dir);
        modelRef.current.lookAt(target);
      }

      // Optional animated RGB shift
      rgbShiftPass.uniforms["amount"].value = 0.001 + 0.001 * Math.sin(Date.now() * 0.002);

      composer.render();
    };

    animate();

    // Cleanup
    return () => {
      mount.removeChild(renderer.domElement);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onWindowResize);
      composer.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default HelmetModel;
