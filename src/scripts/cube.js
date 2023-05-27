import Vertex from "./vertex.js"
import Objects from "./objects.js"
import * as CONSTANTS from "./constants.js"
export default function Cube (center, size) {
    this.velocity = new Vertex(0, 0, 0);
    this.size = size;
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
    this.vertices = [
        new Vertex(center.x - d, center.y - d, center.z - d),
        new Vertex(center.x + d, center.y - d, center.z - d),
        new Vertex(center.x + d, center.y - d, center.z + d),
        new Vertex(center.x - d, center.y - d, center.z + d),
        new Vertex(center.x + d, center.y + d, center.z - d),
        new Vertex(center.x - d, center.y + d, center.z - d),
        new Vertex(center.x - d, center.y + d, center.z + d),
        new Vertex(center.x + d, center.y + d, center.z + d)
    ];
    this.faces = [
        [this.vertices[0], this.vertices[1], this.vertices[2], this.vertices[3], "red"],
        [this.vertices[4], this.vertices[5], this.vertices[6], this.vertices[7], "blue"],
        [this.vertices[1], this.vertices[4], this.vertices[7], this.vertices[2], "green"],
        [this.vertices[5], this.vertices[0], this.vertices[3], this.vertices[6], "orange"],
        [this.vertices[5], this.vertices[4], this.vertices[1], this.vertices[0], "gray"],
        [this.vertices[3], this.vertices[2], this.vertices[7], this.vertices[6], "purple"]
    ];
}

function Surrogate () {};
Surrogate.prototype = Objects.prototype;
Cube.prototype = new Surrogate();

Cube.prototype.fall = function(zDir) {
    // this.velocity.z -= this.acceleration;
    this.velocity.x -= zDir.x * CONSTANTS.GRAVITY;
    this.velocity.y -= zDir.y * CONSTANTS.GRAVITY;
    this.velocity.z -= zDir.z * CONSTANTS.GRAVITY;

    this.move(this.velocity.x, this.velocity.y, this.velocity.z);
}

