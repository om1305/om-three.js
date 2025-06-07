import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { GUI } from 'lil-gui';

// Scene setup
const scene = new THREE.Scene()

// Camera setup
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.set(0, 0, 15)

// Renderer setup
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas.draw'),
    antialias: true
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1
renderer.outputColorSpace = THREE.SRGBColorSpace

// Controls
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true

let sunmodel, mercury ,venus , earth , mars ,jupiter ,saturn ,uranus ,neptune;
let mercuryAngle = 0;
let venusAngle = 0;
let earthAngle = 0;
let marsAngle = 0;
let jupiterAngle = 0;
let saturnAngle = 0;
let uranusAngle = 0;
let neptuneAngle = 0;

const mercuryRadius = 2;
const venusRadius = 4;
const earthRadius = 6;
const marsRadius = 8;
const jupiterRadius = 10;
const saturnRadius = 12;
const uranusRadius = 14;
const neptuneRadius = 16;


const loader = new GLTFLoader();

// Load Mercury
loader.load('mercury.glb', (gltf) => {
    mercury = gltf.scene;
    mercury.scale.set(0.005, 0.005, 0.005);
    mercury.position.set(2, 0, 5); 
    scene.add(mercury);

    const createPlanetFolder = (planet, name) => {
      const folder = gui.addFolder(name);
      folder.add(planet.scale, 'x', 0.001, 0.01).name('Scale X');
      folder.add(planet.scale, 'y', 0.001, 0.01).name('Scale Y');
      folder.add(planet.scale, 'z', 0.001, 0.01).name('Scale Z');
      folder.add(planet.position, 'x', -30, 30).name('Position X');
      folder.add(planet.position, 'y', -30, 30).name('Position Y');
      folder.add(planet.position, 'z', -30, 30).name('Position Z');
      return folder;
    };
    if (mercury) createPlanetFolder(mercury, 'Mercury');

});

loader.load('venus.glb', (gltf) => {
  venus = gltf.scene;
  venus.scale.set(0.01, 0.01, 0.01);
  venus.position.set(4, 0, 0); 
  scene.add(venus);

  const createPlanetFolder = (planet, name) => {
    const folder = gui.addFolder(name);
    folder.add(planet.scale, 'x', 0.001, 0.01).name('Scale X');
    folder.add(planet.scale, 'y', 0.001, 0.01).name('Scale Y');
    folder.add(planet.scale, 'z', 0.001, 0.01).name('Scale Z');
    folder.add(planet.position, 'x', -30, 30).name('Position X');
    folder.add(planet.position, 'y', -30, 30).name('Position Y');
    folder.add(planet.position, 'z', -30, 30).name('Position Z');
    return folder;
  };
  if (venus) createPlanetFolder(venus, 'Venus');
})

loader.load('earth_and_clouds.glb', (gltf) => {
  earth = gltf.scene;
  earth.scale.set(0.013, 0.013, 0.013);
  earth.position.set(6, 0, 0); 
  scene.add(earth);

  const createPlanetFolder = (planet, name) => {
    const folder = gui.addFolder(name);
    folder.add(planet.scale, 'x', 0.001, 0.01).name('Scale X');
    folder.add(planet.scale, 'y', 0.001, 0.01).name('Scale Y');
    folder.add(planet.scale, 'z', 0.001, 0.01).name('Scale Z');
    folder.add(planet.position, 'x', -30, 30).name('Position X');
    folder.add(planet.position, 'y', -30, 30).name('Position Y');
    folder.add(planet.position, 'z', -30, 30).name('Position Z');
    return folder;
  };
  if (earth) createPlanetFolder(earth, 'Earth');
})

loader.load('mars.glb', (gltf) => {
  mars = gltf.scene;
  mars.scale.set(0.007, 0.007, 0.007);
  mars.position.set(8, 0, 0); 
  scene.add(mars);

  const createPlanetFolder = (planet, name) => {
    const folder = gui.addFolder(name);
    folder.add(planet.scale, 'x', 0.001, 0.01).name('Scale X');
    folder.add(planet.scale, 'y', 0.001, 0.01).name('Scale Y');
    folder.add(planet.scale, 'z', 0.001, 0.01).name('Scale Z');
    folder.add(planet.position, 'x', -30, 30).name('Position X');
    folder.add(planet.position, 'y', -30, 30).name('Position Y');
    folder.add(planet.position, 'z', -30, 30).name('Position Z');
    return folder;
  };
  if (mars) createPlanetFolder(mars, 'Mars');
})

loader.load('jupiter.glb', (gltf) => {

  jupiter = gltf.scene;
  jupiter.scale.set(0.05, 0.05, 0.05);
  jupiter.position.set(14, 0, 0); 
  scene.add(jupiter);

  const createPlanetFolder = (planet, name) => {
    const folder = gui.addFolder(name);
    folder.add(planet.scale, 'x', 0.001, 0.01).name('Scale X');
    folder.add(planet.scale, 'y', 0.001, 0.01).name('Scale Y');
    folder.add(planet.scale, 'z', 0.001, 0.01).name('Scale Z');
    folder.add(planet.position, 'x', -30, 30).name('Position X');
    folder.add(planet.position, 'y', -30, 30).name('Position Y');
    folder.add(planet.position, 'z', -30, 30).name('Position Z');
    return folder;
  };
  if (jupiter) createPlanetFolder(jupiter, 'Jupiter');
})

loader.load('saturn_planet.glb', (gltf) => {

  saturn = gltf.scene;
  saturn.scale.set(0.005, 0.005, 0.005);
  saturn.position.set(20, 0, 0); 
  scene.add(saturn);

  const createPlanetFolder = (planet, name) => {
    const folder = gui.addFolder(name);
    folder.add(planet.scale, 'x', 0.001, 0.01).name('Scale X');
    folder.add(planet.scale, 'y', 0.001, 0.01).name('Scale Y');
    folder.add(planet.scale, 'z', 0.001, 0.01).name('Scale Z');
    folder.add(planet.position, 'x', -30, 30).name('Position X');
    folder.add(planet.position, 'y', -30, 30).name('Position Y');
    folder.add(planet.position, 'z', -30, 30).name('Position Z');
    return folder;
  };
  if (saturn) createPlanetFolder(saturn, 'Saturn');
})

loader.load('uranus_planet.glb', (gltf) => {

  uranus = gltf.scene;
  uranus.scale.set( 0.005, 0.005, 0.005);
  uranus.position.set(24, 0, 0); 
  scene.add(uranus);

  const createPlanetFolder = (planet, name) => {
    const folder = gui.addFolder(name);
    folder.add(planet.scale, 'x', 0.001, 0.01).name('Scale X');
    folder.add(planet.scale, 'y', 0.001, 0.01).name('Scale Y');
    folder.add(planet.scale, 'z', 0.001, 0.01).name('Scale Z');
    folder.add(planet.position, 'x', -30, 30).name('Position X');
    folder.add(planet.position, 'y', -30, 30).name('Position Y');
    folder.add(planet.position, 'z', -30, 30).name('Position Z');
    return folder;
  };
  if (uranus) createPlanetFolder(uranus, 'Uranus');
})

loader.load('neptune.glb', (gltf) => {

  neptune = gltf.scene;
  neptune.scale.set(0.007 , 0.005, 0.005);
  neptune.position.set(26, 0, 0); 
  scene.add(neptune);

  const createPlanetFolder = (planet, name) => {
    const folder = gui.addFolder(name);
    folder.add(planet.scale, 'x', 0.001, 0.01).name('Scale X');
    folder.add(planet.scale, 'y', 0.001, 0.01).name('Scale Y');
    folder.add(planet.scale, 'z', 0.001, 0.01).name('Scale Z');
    folder.add(planet.position, 'x', -30, 30).name('Position X');
    folder.add(planet.position, 'y', -30, 30).name('Position Y');
    folder.add(planet.position, 'z', -30, 30).name('Position Z');
    return folder;
  };
  if (neptune) createPlanetFolder(neptune, 'Neptune');
})

    // Load Sun
loader.load('sun.glb', (gltf) => {
    sunmodel = gltf.scene;
    sunmodel.position.set(0, 0, 0);
    sunmodel.scale.set(0.1, 0.1, 0.1);
    scene.add(sunmodel);

    const sunFolder = gui.addFolder('Sun');
    
    sunFolder.add(sunmodel.scale, 'x', 0.01, 0.2).name('Scale X');
    sunFolder.add(sunmodel.scale, 'y', 0.01, 0.2).name('Scale Y');
    sunFolder.add(sunmodel.scale, 'z', 0.01, 0.2).name('Scale Z');
    sunFolder.add(sunmodel.rotation, 'y', 0, Math.PI * 2).name('Rotation Y');
});

// HDRI Lighting
const rgbeLoader = new RGBELoader()
rgbeLoader.load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/qwantani_moon_noon_1k.hdr', (texture) => {
    texture.mapping = THREE.EquirectangularReflectionMapping
    scene.environment = texture
    // scene.background = texture
})
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 5);
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
})


// Create GUI panel
const gui = new GUI();

const planetSpeeds = {
  mercury: 0.02,
  venus: 0.01,
  earth: 0.005,
  mars: 0.003,
  jupiter: 0.002,
  saturn: 0.001,
  uranus: 0.0005,
  neptune: 0.0003
};
const speedFolder = gui.addFolder('Planet Speeds');
speedFolder.add(planetSpeeds, 'mercury', 0.001, 0.1).name('Mercury');
speedFolder.add(planetSpeeds, 'venus', 0.001, 0.1).name('Venus');
speedFolder.add(planetSpeeds, 'earth', 0.001, 0.1).name('Earth');
speedFolder.add(planetSpeeds, 'mars', 0.001, 0.1).name('Mars');
speedFolder.add(planetSpeeds, 'jupiter', 0.001, 0.1).name('Jupiter');
speedFolder.add(planetSpeeds, 'saturn', 0.001, 0.1).name('Saturn');
speedFolder.add(planetSpeeds, 'uranus', 0.001, 0.1).name('Uranus');
speedFolder.add(planetSpeeds, 'neptune', 0.001, 0.1).name('Neptune');

// Lighting settings
const lightingFolder = gui.addFolder('Lighting');
lightingFolder.add(directionalLight, 'intensity', 0, 2).name('Directional Light');
lightingFolder.add(ambientLight, 'intensity', 0, 2).name('Ambient Light');
lightingFolder.add(directionalLight.position, 'x', -10, 10).name('Dir Light X');
lightingFolder.add(directionalLight.position, 'y', -10, 10).name('Dir Light Y');
lightingFolder.add(directionalLight.position, 'z', -10, 10).name('Dir Light Z');

// Camera settings
const cameraFolder = gui.addFolder('Camera');
cameraFolder.add(camera.position, 'x', -50, 50).name('Position X');
cameraFolder.add(camera.position, 'y', -50, 50).name('Position Y');
cameraFolder.add(camera.position, 'z', -50, 50).name('Position Z');


// Animation loop
const animate = () => {
  requestAnimationFrame(animate)
  if (sunmodel) {
    sunmodel.rotation.y += 0.01;
}
if (mercury) {
  mercuryAngle += planetSpeeds.mercury;
  mercury.position.x = mercuryRadius * Math.cos(mercuryAngle);
  mercury.position.z = mercuryRadius * Math.sin(mercuryAngle);
}
if (venus) {
venusAngle += planetSpeeds.venus;
venus.position.x = venusRadius * Math.cos(venusAngle);
venus.position.z = venusRadius * Math.sin(venusAngle);
}
if (earth) {
  earthAngle += planetSpeeds.earth;
  earth.position.x = earthRadius * Math.cos(earthAngle);
  earth.position.z = earthRadius * Math.sin(earthAngle);
}
if (mars) {
marsAngle += planetSpeeds.mars;
mars.position.x = marsRadius * Math.cos(marsAngle);
mars.position.z = marsRadius * Math.sin(marsAngle);
}
if (jupiter) {
jupiterAngle += planetSpeeds.jupiter;
jupiter.position.x = jupiterRadius * Math.cos(jupiterAngle);
jupiter.position.z = jupiterRadius * Math.sin(jupiterAngle);
}
if (saturn) {
saturnAngle += planetSpeeds.saturn;
saturn.position.x = saturnRadius * Math.cos(saturnAngle);
saturn.position.z = saturnRadius * Math.sin(saturnAngle);
}
if (uranus) {
uranusAngle += planetSpeeds.uranus;
uranus.position.x = uranusRadius * Math.cos(uranusAngle);
uranus.position.z = uranusRadius * Math.sin(uranusAngle);
}
if (neptune) {
neptuneAngle += planetSpeeds.neptune;
neptune.position.x = neptuneRadius * Math.cos(neptuneAngle);
neptune.position.z = neptuneRadius * Math.sin(neptuneAngle);
}   
  controls.update()
  renderer.render(scene, camera)
}
animate() 