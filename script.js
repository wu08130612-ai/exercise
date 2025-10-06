import * as THREE from 'three';
//canvas
const canvas = document.querySelector('.webgl');
//sence
const scene = new THREE.Scene();
//object
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color:0xff0000});
const mesh = new THREE.Mesh(geometry,material);
scene.add(mesh);
//size
const sizes = {
    width: 800,
    height: 600  
}
//camera
const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height,0.1,1000);  
camera.position.z = 3;
camera.position.x = 1;
camera.position.y = 1;
scene.add(camera);
//renderer
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(sizes.width,sizes.height);
//render
renderer.render(scene,camera);