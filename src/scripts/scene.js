import Objects from "./objects.js"
import Camera from "./camera.js"
import Vertex from "./vertex.js"
import render from "./render.js"
import Floor from "./floor.js"

export default function Scene (camera, objects, background) {
    this.camera = camera;
    this.background = background;
    this.x = new Vertex(1,0,0);
    this.y = new Vertex(0,1,0);
    this.z = new Vertex(0,0,1);
    this.objects = [];
    this.floors = [];

    for (let i = 0; i < objects.length; i++) {
        if (objects[i] instanceof Floor) {
            this.floors.push(objects[i]);
        } else {
            this.objects.push(objects[i]);
        }
    }
};

Scene.prototype.turn = function (zTheta) {
    this.camera.turn(zTheta);
    for (let i = 0; i < this.objects.length; i++) {
        const element = this.objects[i];
        // element.absRotateZ(-zTheta);
        element.rotateZ(-zTheta);
    }
    for (let i = 0; i < this.floors.length; i++) {
        const element = this.floors[i];
        // element.absRotateZ(-zTheta);
        element.rotateZ(-zTheta);
    }
    // this.background.absRotateZ(-zTheta);
    this.x.rotateZ(-zTheta);
    this.y.rotateZ(-zTheta);
    this.z.rotateZ(-zTheta);
};

Scene.prototype.dip = function (zPhi) {
    this.camera.dip(zPhi)
    for (let i = 0; i < this.objects.length; i++) {
        const element = this.objects[i];
        // element.absRotateX(zPhi);
        element.rotateX(zPhi);
    }
    for (let i = 0; i < this.floors.length; i++) {
        const element = this.floors[i];
        // element.absRotateX(zPhi);
        element.rotateX(zPhi);
    }
    // this.background.absRotateX(zPhi);
    this.x.rotateX(zPhi);
    this.y.rotateX(zPhi);
    this.z.rotateX(zPhi);
};

Scene.prototype.screw = function (zOmega) {
    this.camera.dip(zOmega)
    for (let i = 0; i < this.objects.length; i++) {
        const element = this.objects[i];
        // element.absRotateY(-zOmega);
        element.rotateY(-zOmega);
    }
    for (let i = 0; i < this.floors.length; i++) {
        const element = this.floors[i];
        // element.absRotateY(-zOmega);
        element.rotateY(-zOmega);
    }
    // this.background.absRotateY(-zOmega);
    this.x.rotateY(-zOmega);
    this.y.rotateY(-zOmega);
    this.z.rotateY(-zOmega);
};

Scene.prototype.move = function (x, y, z) {
    this.camera.move(x, y, z);
    for (let i = 0; i < this.objects.length; i++) {
        const element = this.objects[i];
        element.move(-x, -y, -z);
    }
    for (let i = 0; i < this.floors.length; i++) {
        const element = this.floors[i];
        element.move(-x, -y, -z);
    }
    // this.background.move(-x, -y, -z);
};

Scene.prototype.fall = function () {
    const allObjects = this.objects.concat(this.floors);
    for (let i = 0; i < this.objects.length; i++) {
        const obj = this.objects[i];
        obj.fall();
    }
    for (let i = 0; i < allObjects.length - 1; i++) {
        for (let j = i+1; j < allObjects.length; j++) {
            if (allObjects[i].checkCollision(allObjects[j])) {
                allObjects[i].resolveCollisionZ(allObjects[j]);
            }
        }
    }
};

Scene.prototype.jump = function (floorHeight) {
    for (let i = 0; i < this.objects.length; i++) {
        this.objects[i].jump(floorHeight);
    }
};

Scene.prototype.addObject = function (newObj) {
    if (newObj instanceof Floor) {
        this.floors.push(newObj);
    } else {
        this.objects.push(newObj);
    }
};

Scene.prototype.render = function (ctx, dx, dy, rendDist) {
    render(this.floors, ctx, dx, dy, rendDist);
    render(this.objects, ctx, dx, dy, rendDist);
}

// Scene.prototype.parse = function (options) {
//     const camera = this.camera.parse(options['camera']);

//     const result = new Scene(camera, [], this.background);

//     // const objects = [];
//     // const floors = [];

    // result.x = new Vertex(options['x']['x'], options['x']['y'], options['x']['z']);
    // result.y = new Vertex(options['y']['x'], options['y']['y'], options['y']['z']);
    // result.z = new Vertex(options['z']['x'], options['z']['y'], options['z']['z']);

//     for (let i = 0; i < options['objects'].length; i++) {
//         // const ele = 
//     }

// }