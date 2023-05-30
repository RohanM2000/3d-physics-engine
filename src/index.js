import Cube from "./scripts/cube.js"
import render from "./scripts/render.js"
import Vertex from "./scripts/vertex.js"
import Scene from "./scripts/scene.js"
import Camera from "./scripts/camera.js"
import Background from "./scripts/background.js"
import { renderBackground } from "./scripts/render_background.js"
import Floor from "./scripts/floor.js"
import Matrix from "./scripts/matrix.js"
import Pyramid from "./scripts/pyramid.js"

document.addEventListener("DOMContentLoaded", (event) => {
    const canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 600;
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    
    const cube = new Cube(new Vertex(100,700,-100), 100);
    const cube2 = new Cube(new Vertex(-100,700,-200), 100);
    const pyramid = new Pyramid(new Vertex(-100, 700, 400), 100);
    const cube3 = new Cube(new Vertex(100, 700, 100), 100);
    const background = new Background();
    const floor = new Floor();
    const floor2 = new Floor();
    floor2.move(0, 300, 0);
    const floor3 = new Floor();
    floor3.move(0, 600, 0);
    // const cube2 = new Cube(new Vertex(100,100,100), 100);

    // cube.relRotateX(Math.PI/4);
    // render([cube], ctx,  300, 300);
    const camera = new Camera(new Vertex(0, 0, 0), 0);
    const scene = new Scene(camera, [cube, cube2, cube3, pyramid, floor, floor2, floor3], background);
    function animate () {
        // requestAnimationFrame(animate);

        ctx.clearRect(0, 0, 600, 600);
        // cube.relRotateX(0.1);
        // cube.relRotateY(0.1);
        // cube.relRotateZ(0.1);
        // scene.turn(0.1);
        // cube.absRotateY(0.1);
        // renderBackground(background, ctx, 300, 300, 10000);
        // cube.fall();
        // cube3.fall();
        scene.fall();
        render([floor, floor2, floor3], ctx, 300, 300, 200);
        render([cube, cube2, cube3, pyramid], ctx, 300, 300, 200);
    }
    addEventListener("keydown", (event)=>{
        // console.log(cube.center);
        // console.log(cube2.center);
        // console.log(cube.vertices);
        // console.log(cube2.vertices);
        if (event.key === "a") {
            scene.turn(0.2);
        }
        if (event.key === "d") {
            scene.turn(-0.2);
        }
        if (event.key === "w") {
            scene.dip(-0.2);
        }
        if (event.key === "s") {
            scene.dip(0.2);
        }
        if (event.key === "q") {
            scene.screw(-0.2);
        }
        if (event.key === "e") {
            scene.screw(0.2);
        }
        // console.log(event.key);
        if (event.key === "ArrowUp") {
            scene.move(0, 0, 10);
        }
        if (event.key === "ArrowDown") {
            scene.move(0, 0, -10);
        }
        if (event.key === "ArrowLeft") {
            scene.move(-10, 0, 0);
        }
        if (event.key === "ArrowRight") {
            scene.move(10, 0, 0);
        }
        if (event.key === "r") {
            scene.move(0, 10, 0);
        }
        if (event.key === "f") {
            scene.move(0, -10, 0);
        }
        if (event.key === "o") {
            scene.jump();
        }
        // console.log(cube3.rotate(), cube.rotate());

        animate();
        // console.log(cube.center, cube.rotations.multiply(new Matrix([
        //     [cube.staticCenter.x],
        //     [cube.staticCenter.y],
        //     [cube.staticCenter.z]
        // ])), cube.rotate().center, cube.center.multiplyBy(cube.rotations));
        // console.log(cube.faces, cube.rotate().faces, "faces");
        // console.log(cube.vertices, cube.rotate().vertices, "faces");
        // console.log(floor);
    })

    animate();
})