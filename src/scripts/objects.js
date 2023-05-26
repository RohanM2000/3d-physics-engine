import * as ROTATIONS from "./rotations.js"
import Matrix from "./matrix.js"
export default function Objects () {

}

Objects.prototype.relRotateX = function (theta) {
    const rotMatrix = ROTATIONS.rotationX(theta);
    for (let i = 0; i < this.vertices.length; i++) {
        const oldPosMat = new Matrix([
            [this.vertices[i].x],
            [this.vertices[i].y],
            [this.vertices[i].z]
        ]);
        const newPosMat = rotMatrix.multiply(oldPosMat);
        [this.vertices[i].x, this.vertices[i].y, this.vertices[i].z] = newPosMat.values;
    }
}

Objects.prototype.relRotateY = function (theta) {
    const rotMatrix = ROTATIONS.rotationY(theta);
    for (let i = 0; i < this.vertices.length; i++) {
        const oldPosMat = new Matrix([
            [this.vertices[i].x],
            [this.vertices[i].y],
            [this.vertices[i].z]
        ]);
        const newPosMat = rotMatrix.multiply(oldPosMat);
        [this.vertices[i].x, this.vertices[i].y, this.vertices[i].z] = newPosMat.values;
    }
}

Objects.prototype.relRotateZ = function (theta) {
    const rotMatrix = ROTATIONS.rotationZ(theta);
    for (let i = 0; i < this.vertices.length; i++) {
        const oldPosMat = new Matrix([
            [this.vertices[i].x],
            [this.vertices[i].y],
            [this.vertices[i].z]
        ]);
        const newPosMat = rotMatrix.multiply(oldPosMat);
        [this.vertices[i].x, this.vertices[i].y, this.vertices[i].z] = newPosMat.values;
    }
}