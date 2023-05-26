import Vertex from "./vertex.js"
import Objects from "./objects.js"
export default function Cube (center, size) {
    const d = size / 2;
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
        [this.vertices[0], this.vertices[1], this.vertices[2], this.vertices[3]],
        [this.vertices[4], this.vertices[5], this.vertices[6], this.vertices[7]],
        [this.vertices[1], this.vertices[4], this.vertices[7], this.vertices[2]],
        [this.vertices[5], this.vertices[0], this.vertices[3], this.vertices[6]],
        [this.vertices[5], this.vertices[4], this.vertices[1], this.vertices[0]],
        [this.vertices[3], this.vertices[2], this.vertices[7], this.vertices[6]]
    ]
}

function Surrogate () {};
Surrogate.prototype = Objects.prototype;
Cube.prototype = new Surrogate();