const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87CEEB);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff, 1.2);
light.position.set(10, 20, 10);
scene.add(light);
scene.add(new THREE.AmbientLight(0x606060));

// Mario 64 Proportions
const mario = new THREE.Group();
const body = new THREE.Mesh(new THREE.SphereGeometry(0.5, 12, 12), new THREE.MeshPhongMaterial({ color: 0xff0000 }));
body.scale.set(1.1, 0.9, 1);
body.position.y = 0.6;
mario.add(body);

const head = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 12), new THREE.MeshPhongMaterial({ color: 0xffccaa }));
head.position.y = 1.1;
mario.add(head);

const nose = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), new THREE.MeshPhongMaterial({ color: 0xffccaa }));
nose.position.set(0, 1.1, 0.35);
mario.add(nose);

scene.add(mario);

function animate() {
    requestAnimationFrame(animate);
    mario.rotation.y += 0.01; // Mario spins for the test!
    renderer.render(scene, camera);
}
camera.position.z = 5;
animate();
