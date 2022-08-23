import * as THREE from 'three'

//CAMERA

const camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 1500 );
camera.position.set(0,5,5);
camera.lookAt(0,0,0)

// RENDER

const renderer = new THREE.WebGL1Renderer( {antialias:1} )
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth,window.innerHeight)
renderer.setAnimationLoop( Animate );
document.body.appendChild( renderer.domElement )

//SCENE
const scene = new THREE.Scene();

export function Animate(){
requestAnimationFrame(Animate)

renderer.render(scene, camera)
}

function onWindowResize(){
    camera.aspect =window.innerWidth/window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    
}
window.addEventListener('resize', onWindowResize)