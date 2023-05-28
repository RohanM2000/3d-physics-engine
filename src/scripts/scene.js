import Objects from "./objects.js"
import Camera from "./camera.js"
import Vertex from "./vertex.js"

export default function Scene (camera, objects, background) {
    this.camera = camera;
    this.objects = objects;
    this.background = background;
    this.x = new Vertex(1,0,0);
    this.y = new Vertex(0,1,0);
    this.z = new Vertex(0,0,1);
}

Scene.prototype.turn = function (zTheta) {
    this.camera.turn(zTheta);
    for (let i = 0; i < this.objects.length; i++) {
        const element = this.objects[i];
        // element.absRotateZ(-zTheta);
        element.rotateZ(-zTheta);
    }
    // this.background.absRotateZ(-zTheta);
    this.x.rotateZ(-zTheta);
    this.y.rotateZ(-zTheta);
    this.z.rotateZ(-zTheta);
}

Scene.prototype.dip = function (zPhi) {
    this.camera.dip(zPhi)
    for (let i = 0; i < this.objects.length; i++) {
        const element = this.objects[i];
        // element.absRotateX(zPhi);
        element.rotateX(zPhi);
    }
    // this.background.absRotateX(zPhi);
    this.x.rotateX(zPhi);
    this.y.rotateX(zPhi);
    this.z.rotateX(zPhi);
}

Scene.prototype.screw = function (zOmega) {
    this.camera.dip(zOmega)
    for (let i = 0; i < this.objects.length; i++) {
        const element = this.objects[i];
        // element.absRotateY(-zOmega);
        element.rotateY(-zOmega);
    }
    // this.background.absRotateY(-zOmega);
    this.x.rotateY(-zOmega);
    this.y.rotateY(-zOmega);
    this.z.rotateY(-zOmega);
}

Scene.prototype.move = function (x, y, z) {
    this.camera.move(x, y, z);
    for (let i = 0; i < this.objects.length; i++) {
        const element = this.objects[i];
        element.move(-x, -y, -z);
    }
    // this.background.move(-x, -y, -z);
}