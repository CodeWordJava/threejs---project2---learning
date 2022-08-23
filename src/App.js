import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';



//CAMERA

const camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 1500 );
camera.position.set(0,5,5);
camera.lookAt(0,0,0)

// RENDER

const renderer = new THREE.WebGL1Renderer( {antialias:1} )
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement )

//SCENE
const scene = new THREE.Scene();
scene.add(new THREE.GridHelper(4, 12, 0x808080))

//Orbit controls

const controls = new OrbitControls(camera, renderer.domElement)
controls.update();

//Add objects to Scene
//const texture = new THREE.TextureLoader().load("./assets/midjourney.png")

const cube = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshLambertMaterial({color:0x00ff00}))
cube.position.x -=2

scene.add(cube)

const cone= new THREE.Mesh(new THREE.ConeGeometry(0.5,1,32),new THREE.MeshLambertMaterial({color:0xde3164}))
cone.position.z += 2
scene.add(cone)

const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.75,32,32), new THREE.MeshPhongMaterial({color:0x0f5569}))
sphere.position.x +=2
scene.add (sphere)

const torus = new THREE.Mesh(new THREE.TorusGeometry(0.5,0.1,16,32), new THREE.MeshPhongMaterial({color:0xffff01}))
torus.position.z -=2
scene.add (torus)


//light
const light =new THREE.DirectionalLight(0xffffff, 5)
light.position.y +=5
const target = new THREE.Object3D();
target.position.x +=3
scene.add(target)
light.target = target
scene.add(light)

export function animate(){
requestAnimationFrame(animate)

cube.rotation.y +=0.001
torus.rotation.y +=0.001

renderer.render(scene, camera)
}
animate()

//resizes canvas on window resize
function onWindowResize(){
    camera.aspect =window.innerWidth/window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    
}
window.addEventListener('resize', onWindowResize)

function App() {
  return (
    <div className="App">
  
    </div>
  );
}

export default App;
