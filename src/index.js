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
import * as TB from "./scripts/throttle_debounce.js"
import parseScene from "./scripts/parsers.js"

document.addEventListener("DOMContentLoaded", (event) => {
    // const canvas = document.createElement("canvas");
    // canvas.width = 600;
    // canvas.height = 600;
    // document.body.appendChild(canvas);
    const canvas = document.getElementById("3d-canvas")
    const ctx = canvas.getContext("2d");
    
    // const cube = new Cube(new Vertex(50,500,-100), 100);
    // const cube2 = new Cube(new Vertex(-50,500,-200), 100);
    // const pyramid = new Pyramid(new Vertex(-50, 500, 400), 100);
    // const cube3 = new Cube(new Vertex(50, 500, 300), 100);
    const background = new Background();
    // const floor = new Floor();
    // const floor2 = new Floor();
    // floor2.move(0, 100, 0);
    // const floor3 = new Floor();
    // floor3.move(0, 200, 0);
    // const floor4 = new Floor();
    // floor4.move(0, 300, 0);

    // const cube2 = new Cube(new Vertex(100,100,100), 100);

    // cube.relRotateX(Math.PI/4);
    // render([cube], ctx,  300, 300);
    let camera = new Camera(new Vertex(0, 0, 0), 0);
    let scene = new Scene(camera, [], background);
    function animate (scene) {
        if (ready) {
            requestAnimationFrame(()=>animate(scene));
        }
        // console.log(scene);
        ctx.clearRect(0, 0, 600, 600);
        ctx.fillStyle = "lightblue";
        ctx.fillRect(0, 0, 600, 600);
        // cube.relRotateX(0.1);
        // cube.relRotateY(0.1);
        // cube.relRotateZ(0.1);
        // scene.turn(0.1);
        // cube.absRotateY(0.1);
        // renderBackground(background, ctx, 300, 300, 10000);
        // cube.fall();
        // cube3.fall();
        scene.fall();
        // render(floors, ctx, 300, 300, 200);
        // render(objs, ctx, 300, 300, 200);
        scene.render(ctx, 300, 300, 200);
    }
    document.addEventListener("keydown", (event)=>{
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
        
        // animate();
        // console.log(cube.center, cube.rotations.multiply(new Matrix([
            //     [cube.staticCenter.x],
            //     [cube.staticCenter.y],
            //     [cube.staticCenter.z]
        // ])), cube.rotate().center, cube.center.multiplyBy(cube.rotations));
        // console.log(cube.faces, cube.rotate().faces, "faces");
        // console.log(cube.vertices, cube.rotate().vertices, "faces");
        // console.log(floor);
    });
    const shake = document.getElementById("shake");
    shake.addEventListener("click", (event)=> {
        scene.jump(scene.floors[0].center.z);
    });
    const answers = document.querySelector("div.answers");
    const proj = document.getElementById("proj");
    
    function questionButton(ele) {
        const children = answers.children;
        
        for (let i = 0; i < children.length; i++) {
            children[i].remove();
        }

        answers.appendChild(ele);
    }
    
    const throttleButton = TB.myThrottle(questionButton, 2000);
    
    proj.addEventListener("click", (event)=> {
        const ele = document.createElement("p");
        ele.innerText = "Projections are mappings of 3d objects to a 2d plane. Think of the shadow of a cube. As you rotate that cube, the shadow will change as well. That is the principle that drives 3d engines.";
        // answers.appendChild(ele);
        throttleButton(ele);
    });
    
    const rot = document.getElementById("rot");
    
    rot.addEventListener("click", (event)=> {
        const ele = document.createElement("p");
        ele.innerText = "Rotations work by leveraging trigonometry to change the positions of vertices on each object, and then rendering from the new positions.";
        // answers.appendChild(ele);
        throttleButton(ele);
    });
    
    const what = document.getElementById("what");
    
    what.addEventListener("click", (event)=> {
        const ele = document.createElement("p");
        ele.innerText = "This engine is made with 2d canvas and a simple physics engine made from scratch that considers every object a non-rotational hard body. To read more about the underlying math concepts ";
        // answers.appendChild(ele);
        const a = document.createElement("a");
        a.innerText = "click me.";
        a.href = "https://en.wikipedia.org/wiki/Rotation_matrix";
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        ele.append(a);
        throttleButton(ele);
    });

    const items = document.querySelector("div.add-items");
    items.dataset.Shape = "none";
    for (let i = 0; i < 64; i++) {
        const tempButton = document.createElement("button");
        tempButton.dataset.Id = i;
        tempButton.dataset.Finish = "false";
        items.appendChild(tempButton);
        const floor = new Floor();
        const row = Math.floor(i / 8);
        const col = i % 8;
        
        floor.move(col* 100, row * 100, 0);
        
        // floors.push(floor);
        // scene.objects.push(floor);
        scene.addObject(floor);
        
    }
    scene.move(0, 0, -500);
    scene.move(0, -100, 0);
    scene.dip(0.2);
    // console.log(floors);
    function addObj(tempObj) {
        // objs.push(tempObj);
        // scene.objects.unshift(tempObj);
        scene.addObject(tempObj);
    }

    const debObj = TB.myDebounce(addObj, 300);
    items.addEventListener("click", (event)=> {
        // console.log(floors);
        // console.log(event.currentTarget.dataset.Shape);
        const id = event.target.dataset.Id;
        // console.log(id);
        const row = Math.floor(id / 8);
        const col = id % 8;
        let newObj;
        if (event.target.dataset.Finish === "true") {
            alert("Cannot place objects on top of pyramid, will cause unstable structure.");
        } else {
            if (event.currentTarget.dataset.Shape === "cube") {
                newObj = new Cube(new Vertex(-350 + 100 * col, 1100 - 100 * row, 1000), 100);
                newObj.move(-camera.position.x, -camera.position.y, -camera.position.z);
                newObj.rotations = scene.floors[0].rotations;
                debObj(newObj);
            }else if (event.currentTarget.dataset.Shape === "pyramid") {
                // console.log("PYRMID STUCK");
                newObj = new Pyramid(new Vertex(-350 + 100 * col, 1100 - 100 * row, 1000), 100);
                newObj.move(-camera.position.x, -camera.position.y, -camera.position.z);
                newObj.rotations = scene.floors[0].rotations;
                debObj(newObj);

                event.target.dataset.Finish = "true";
            } else {
                alert("Please select a shape.");
            }
        }
        // objs.push(newObj);
        // scene.objects.unshift(newObj);
        // console.log(newObj);
        // console.log(floors);
    });


    const cubeButton = document.getElementById("cube");
    const pyrButton = document.getElementById("pyramid");

    cubeButton.addEventListener("click", (event)=> {
        // console.log("cube");
        items.dataset.Shape = "cube";
        cubeButton.classList.add("selected");
        pyrButton.classList.remove("selected");
    });

    pyrButton.addEventListener("click", (event)=> {
        // console.log("pyramid");
        items.dataset.Shape = "pyramid";
        pyrButton.classList.add("selected");
        cubeButton.classList.remove("selected");
    });

    const newButton = document.getElementById("new");
    const saveButton = document.getElementById("save");
    const loadButton = document.getElementById("load");

    newButton.addEventListener("click", (event)=> {
        // console.log("new");
        ready = false;
        camera = new Camera(new Vertex(0, 0, 0), 0);
        scene = new Scene(camera, [], background);
        for (let i = 0; i < 64; i++) {
            const floor = new Floor();
            const row = Math.floor(i / 8);
            const col = i % 8;
            
            floor.move(col* 100, row * 100, 0);
            
            // floors.push(floor);
            // scene.objects.push(floor);
            scene.addObject(floor);
        }
        scene.move(0, 0, -500);
        scene.move(0, -100, 0);
        scene.dip(0.2);

        const children = items.children;

        for (let i = 0; i < children.length; i++) {
            children[i].dataset.Finish = "false";
        }

        ready = true;
        animate(scene);

    });
    saveButton.addEventListener("click", (event)=> {
        // console.log("save");
        const finishArray = [];

        const children = items.children;

        for (let i =0; i < children.length; i++) {
            finishArray.push(children[i].dataset.Finish);
        }
        localStorage.setItem("scene", JSON.stringify(scene));
        localStorage.setItem("finishArray", JSON.stringify(finishArray));
    });
    loadButton.addEventListener("click", (event)=> {
        // console.log("load");
        ready = false;
        // scene = JSON.parse(localStorage.getItem("scene"));
        const newScene = JSON.parse(localStorage.getItem("scene"));
        const finishArray = JSON.parse(localStorage.getItem("finishArray"));
        // camera = newScene.camera;
        // scene = newScene;
        // camera.position.x = newScene.camera.position.x;
        // camera.position.y = newScene.camera.position.y;
        // camera.position.z = newScene.camera.position.z;
        // camera.zOmega = newScene.camera.zOmega;
        // camera.zPhi = newScene.camera.zPhi;
        // camera.zTheta = newScene.camera.zTheta;

        // for (let i = 0; i < newScene.floors.length; i++) {
        //     const floor = new Floor();

        // }

        scene = parseScene(newScene);
        const children = items.children;

        for (let i = 0; i < children.length; i++) {
            children[i].dataset.Finish = finishArray[i];
        }
        // console.log(scene);

        ready = true;
        animate(scene);
        // ready = true;

        // animate(scene);
        // ready = true;
        // animate();
        // console.log(localStorage.getItem("scene"));
    });
    let ready = true;
    animate(scene);
})