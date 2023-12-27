import "@/app/globals.css"
import * as THREE from "three";
import perlin, { material, options } from "../pages/perlin";
import Stats from "stats.js";
import dynamic from "next/dynamic";

const Background = () => {
    let camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        1,
        1000
    );
    camera.position.z = 10;

    let geometry = new THREE.BoxBufferGeometry(200, 200, 200);
    // material = new THREE.MeshNormalMaterial();
    let mesh = new THREE.Mesh(geometry, material);

    let scene = new THREE.Scene();

    // scene.add(mesh);
    scene.add(perlin);

    let renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // controls = new OrbitControls(camera, renderer.domElement);


    document.body.appendChild(renderer.domElement);
    document.body.style.cssText = "margin: 0; overflow: hidden";


    let animate = () => {

        animatePerlin();
        animateMaterial();

        camera.lookAt(scene.position);
        // controls && controls.update();
        renderer.render(scene, camera);


        requestAnimationFrame(animate);
    };

    let animatePerlin = () => {
        const { sinVel, ampVel } = options.spin;
        const performance = Date.now() * 0.003;
        perlin.rotation.x +=
            (Math.sin(performance * sinVel) * ampVel * Math.PI) / 180;
        perlin.rotation.y += options.perlin.vel;
    };

    let animateMaterial = () => {
        material.uniforms["time"].value =
            options.perlin.speed * (Date.now() - start);
        material.uniforms["pointscale"].value = options.perlin.perlins;
        material.uniforms["decay"].value = options.perlin.decay;
        material.uniforms["complex"].value = options.perlin.complex;
        material.uniforms["waves"].value = options.perlin.waves;
        material.uniforms["eqcolor"].value = options.perlin.eqcolor;
        material.uniforms["fragment"].value = options.perlin.fragment;
        material.uniforms["redhell"].value = options.perlin.redhell;
    };

    let onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };


    window.addEventListener("resize", onWindowResize, false);

    let start = Date.now();
    animate();


}

export default dynamic(() => Promise.resolve(Background), {
    ssr: false,
});

