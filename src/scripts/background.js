import Vertex from "./vertex.js";
import Objects from "./objects.js";
import Matrix from "./matrix.js";
export default function Background () {
    this.center = new Vertex(0, 0, 0);
    this.vertices = [
        new Vertex(-5000, -5000, -5000),
        new Vertex(5000, -5000, -5000),
        new Vertex(5000, -5000, 5000),
        new Vertex(-5000, -5000, 5000),
        new Vertex(5000, 5000, -5000),
        new Vertex(-5000, 5000, -5000),
        new Vertex(-5000, 5000, 5000),
        new Vertex(5000, 5000, 5000)
    ];
    this.rotations = new Matrix([
        [1,0,0],
        [0,1,0],
        [0,0,1]
    ])
    this.faces = [
        [this.vertices[0], this.vertices[1], this.vertices[2], this.vertices[3], "gray"],
        [this.vertices[4], this.vertices[5], this.vertices[6], this.vertices[7], "gray"],
        [this.vertices[1], this.vertices[4], this.vertices[7], this.vertices[2], "lightblue"],
        [this.vertices[5], this.vertices[0], this.vertices[3], this.vertices[6], "lightblue"],
        [this.vertices[5], this.vertices[4], this.vertices[1], this.vertices[0], "black"],
        [this.vertices[3], this.vertices[2], this.vertices[7], this.vertices[6], "black"]
    ];
}

function Surrogate () {};
Surrogate.prototype = Objects.prototype;
Background.prototype = new Surrogate();