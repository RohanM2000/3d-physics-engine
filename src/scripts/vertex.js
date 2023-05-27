import Matrix from "./matrix.js"
import * as ROTATIONS from "./rotations.js"
export default function Vertex (x, y, z) {
    this.x = parseFloat(x);
    this.y = parseFloat(y);
    this.z = parseFloat(z);
}

Vertex.prototype.move = function (x, y, z) {
    this.x += x;
    this.y += y;
    this.z += z;
}

Vertex.prototype.rotateX = function (theta) {
    const rotMat = ROTATIONS.rotationX(theta);

    const oldPos = new Matrix([
        [this.x],
        [this.y],
        [this.z]
    ])

    const newPos = rotMat.multiply(oldPos);

    this.x = newPos.values[0][0];
    this.y = newPos.values[1][0];
    this.z = newPos.values[2][0];
}

Vertex.prototype.rotateY = function (theta) {
    const rotMat = ROTATIONS.rotationY(theta);

    const oldPos = new Matrix([
        [this.x],
        [this.y],
        [this.z]
    ])

    const newPos = rotMat.multiply(oldPos);

    this.x = newPos.values[0][0];
    this.y = newPos.values[1][0];
    this.z = newPos.values[2][0];
}

Vertex.prototype.rotateZ = function (theta) {
    const rotMat = ROTATIONS.rotationZ(theta);

    const oldPos = new Matrix([
        [this.x],
        [this.y],
        [this.z]
    ])

    const newPos = rotMat.multiply(oldPos);

    this.x = newPos.values[0][0];
    this.y = newPos.values[1][0];
    this.z = newPos.values[2][0];
}