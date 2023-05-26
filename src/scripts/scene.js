import Objects from "./objects.js"
import Camera from "./camera.js"

export default function Scene (camera, objects) {
    this.camera = camera;
    this.objects = objects;
}

Scene.prototype.turn = function (zTheta) {
    this.camera.turn(zTheta);
    for (let i = 0; i < this.objects.length; i++) {
        const element = this.objects[i];
        element.absRotateZ(-zTheta);
    }
}

Scene.prototype.dip = function (zPhi) {
    this.camera.dip(zPhi)
    for (let i = 0; i < this.objects.length; i++) {
        const element = this.objects[i];
        element.absRotateX(zPhi);
    }
}

Scene.prototype.screw = function (zOmega) {
    this.camera.dip(zOmega)
    for (let i = 0; i < this.objects.length; i++) {
        const element = this.objects[i];
        element.absRotateY(-zOmega);
    }
}

Scene.prototype.move = function (x, y, z) {
    this.camera.move(x, y, z);
    for (let i = 0; i < this.objects.length; i++) {
        const element = this.objects[i];
        element.move(-x, -y, -z);
    }
}