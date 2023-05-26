import * as ROTATIONS from "./rotations.js"
import Matrix from "./matrix.js"
export default function Objects () {

}

Objects.prototype.move = function (x, y, z) {
    this.center.move(x, y, z);
    for (let i = 0; i < this.vertices.length; i++) {
        const vertex = this.vertices[i];
        vertex.move(x, y, z);
    }
}


Objects.prototype.absRotateX = function (theta) {
    const rotMatrix = ROTATIONS.rotationX(theta);
    const centMat = new Matrix([
        [this.center.x],
        [this.center.y],
        [this.center.z]
    ]);
    const newCent = rotMatrix.multiply(centMat);
    this.center.x = newCent.values[0][0];
    this.center.y = newCent.values[1][0];
    this.center.z = newCent.values[2][0];
    for (let i = 0; i < this.vertices.length; i++) {
        const oldPosMat = new Matrix([
            [this.vertices[i].x],
            [this.vertices[i].y],
            [this.vertices[i].z]
        ]);
        const newPosMat = rotMatrix.multiply(oldPosMat);
        // [this.vertices[i].x, this.vertices[i].y, this.vertices[i].z] = newPosMat.values;
        this.vertices[i].x = newPosMat.values[0][0];
        this.vertices[i].y = newPosMat.values[1][0];
        this.vertices[i].z = newPosMat.values[2][0];
    }
}

Objects.prototype.absRotateY = function (theta) {
    const rotMatrix = ROTATIONS.rotationY(theta);
    const centMat = new Matrix([
        [this.center.x],
        [this.center.y],
        [this.center.z]
    ]);
    const newCent = rotMatrix.multiply(centMat);
    this.center.x = newCent.values[0][0];
    this.center.y = newCent.values[1][0];
    this.center.z = newCent.values[2][0];
    for (let i = 0; i < this.vertices.length; i++) {
        const oldPosMat = new Matrix([
            [this.vertices[i].x],
            [this.vertices[i].y],
            [this.vertices[i].z]
        ]);
        const newPosMat = rotMatrix.multiply(oldPosMat);
        // [this.vertices[i].x, this.vertices[i].y, this.vertices[i].z] = newPosMat.values;
        this.vertices[i].x = newPosMat.values[0][0];
        this.vertices[i].y = newPosMat.values[1][0];
        this.vertices[i].z = newPosMat.values[2][0];
    }
}

Objects.prototype.absRotateZ = function (theta) {
    const rotMatrix = ROTATIONS.rotationZ(theta);
    const centMat = new Matrix([
        [this.center.x],
        [this.center.y],
        [this.center.z]
    ]);
    const newCent = rotMatrix.multiply(centMat);
    this.center.x = newCent.values[0][0];
    this.center.y = newCent.values[1][0];
    this.center.z = newCent.values[2][0];
    for (let i = 0; i < this.vertices.length; i++) {
        const oldPosMat = new Matrix([
            [this.vertices[i].x],
            [this.vertices[i].y],
            [this.vertices[i].z]
        ]);
        const newPosMat = rotMatrix.multiply(oldPosMat);
        // [this.vertices[i].x, this.vertices[i].y, this.vertices[i].z] = newPosMat.values;
        this.vertices[i].x = newPosMat.values[0][0];
        this.vertices[i].y = newPosMat.values[1][0];
        this.vertices[i].z = newPosMat.values[2][0];
    }
}

// Objects.prototype.relRotateX = function (theta) {
//     const rotMatrix = ROTATIONS.rotationX(theta);
//     for (let i = 0; i < this.relVertices.length; i++) {
//         const oldPosMat = new Matrix([
//             [this.relVertices[i].x],
//             [this.relVertices[i].y],
//             [this.relVertices[i].z]
//         ]);
//         const newPosMat = rotMatrix.multiply(oldPosMat);
//         [this.relVertices[i].x, this.relVertices[i].y, this.relVertices[i].z] = newPosMat.values;
//         this.vertices[i].x -= oldPosMat[0];
//         this.vertices[i].x += newPosMat[0];
//         this.vertices[i].y -= oldPosMat[1];
//         this.vertices[i].y += newPosMat[1];
//         this.vertices[i].z -= oldPosMat[2];
//         this.vertices[i].z += newPosMat[2];
//     }
// }
// Objects.prototype.relRotateY = function (theta) {
//     const rotMatrix = ROTATIONS.rotationY(theta);
//     for (let i = 0; i < this.relVertices.length; i++) {
//         const oldPosMat = new Matrix([
//             [this.relVertices[i].x],
//             [this.relVertices[i].y],
//             [this.relVertices[i].z]
//         ]);
//         const newPosMat = rotMatrix.multiply(oldPosMat);
//         [this.relVertices[i].x, this.relVertices[i].y, this.relVertices[i].z] = newPosMat.values;
//     }
// }
// Objects.prototype.relRotateZ = function (theta) {
//     const rotMatrix = ROTATIONS.rotationZ(theta);
//     for (let i = 0; i < this.relVertices.length; i++) {
//         const oldPosMat = new Matrix([
//             [this.relVertices[i].x],
//             [this.relVertices[i].y],
//             [this.relVertices[i].z]
//         ]);
//         const newPosMat = rotMatrix.multiply(oldPosMat);
//         [this.relVertices[i].x, this.relVertices[i].y, this.relVertices[i].z] = newPosMat.values;
//     }
// }