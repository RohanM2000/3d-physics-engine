import Vertex from "./vertex.js"
import Objects from "./objects.js"
import Matrix from "./matrix.js"
import * as CONSTANTS from "./constants.js"
export default function Pyramid (center, size) {
    this.velocity = new Vertex(0, 0, 0);
    this.acceleration = new Vertex(0, 0, -CONSTANTS.GRAVITY);
    this.size = size;
    this.name = "pyramid";
    const d = size / 2;
    // this.relVertices = [
    //     new Vertex(-d, -d, -d),
    //     new Vertex( d, -d, -d),
    //     new Vertex( d, -d,  d),
    //     new Vertex(-d, -d,  d),
    //     new Vertex( d,  d, -d),
    //     new Vertex(-d,  d, -d),
    //     new Vertex(-d,  d,  d),
    //     new Vertex( d,  d,  d)
    // ];
    this.center = center;
    this.staticCenter = new Vertex(this.center.x, this.center.y, this.center.z);
    this.rotations = new Matrix([
        [1,0,0],
        [0,1,0],
        [0,0,1]
    ]);
    this.vertices = [
        new Vertex(center.x - d, center.y - d, center.z - d),
        new Vertex(center.x + d, center.y - d, center.z - d),
        new Vertex(center.x + d, center.y + d, center.z - d),
        new Vertex(center.x - d, center.y + d, center.z - d),
        new Vertex(center.x, center.y, center.z + d)
    ];
    this.faces = [
        [this.vertices[0], this.vertices[3], this.vertices[2], this.vertices[1], "red"],
        [this.vertices[0], this.vertices[1], this.vertices[4], "blue"],
        [this.vertices[1], this.vertices[2], this.vertices[4], "green"],
        [this.vertices[2], this.vertices[3], this.vertices[4], "orange"],
        [this.vertices[0], this.vertices[4], this.vertices[3], "gray"]
    ];
}

function Surrogate () {};
Surrogate.prototype = Objects.prototype;
Pyramid.prototype = new Surrogate();

Pyramid.prototype.fall = function() {
    this.velocity.move(this.acceleration.x, this.acceleration.y, this.acceleration.z);
    // this.velocity.x -= zDir.x * CONSTANTS.GRAVITY;
    // this.velocity.y -= zDir.y * CONSTANTS.GRAVITY;
    // this.velocity.z -= zDir.z * CONSTANTS.GRAVITY;

    this.move(this.velocity.x, this.velocity.y, this.velocity.z);
}

Pyramid.prototype.dupe = function() {
    const result = new Pyramid(this.center, this.size);
    result.rotations = this.rotations.dupe();
    for (let i = 0; i < 0; i++) {
        result.vertices[i] = this.vertices[i].dupe();
    }
    // result.faces = [
    //     [result.vertices[0], result.vertices[1], result.vertices[2], result.vertices[3], "red"],
    //     [result.vertices[4], result.vertices[5], result.vertices[6], result.vertices[7], "blue"],
    //     [result.vertices[1], result.vertices[4], result.vertices[7], result.vertices[2], "green"],
    //     [result.vertices[5], result.vertices[0], result.vertices[3], result.vertices[6], "orange"],
    //     [result.vertices[5], result.vertices[4], result.vertices[1], result.vertices[0], "gray"],
    //     [result.vertices[3], result.vertices[2], result.vertices[7], result.vertices[6], "purple"]
    // ];
    return result;
}

Pyramid.prototype.fixFaces = function() {
    this.faces = [
        [this.vertices[0], this.vertices[3], this.vertices[2], this.vertices[1], "red"],
        [this.vertices[0], this.vertices[1], this.vertices[4], "blue"],
        [this.vertices[1], this.vertices[2], this.vertices[4], "green"],
        [this.vertices[2], this.vertices[3], this.vertices[4], "orange"],
        [this.vertices[0], this.vertices[4], this.vertices[3], "gray"]
    ];
}