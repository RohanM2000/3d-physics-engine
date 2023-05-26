import Vertex from "./vertex.js"
import Objects from "./objects.js"
export default function Cube (center, size) {
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
