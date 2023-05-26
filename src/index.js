import Cube from "./scripts/cube.js"
import render from "./scripts/render.js"
import Vertex from "./scripts/vertex.js"

document.addEventListener("DOMContentLoaded", (event) => {
    const canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 600;
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    
    const cube = new Cube(new Vertex(0,0,0), 100);
    // cube.relRotateX(Math.PI/4);
    // render([cube], ctx,  300, 300);

    function animate () {
        requestAnimationFrame(animate);

        ctx.clearRect(0, 0, 600, 600);
        cube.relRotateX(0.1);
        cube.relRotateY(0.1);
        cube.relRotateZ(0.1);

        render([cube], ctx, 300, 300);
    }

    animate();
})