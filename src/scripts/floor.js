import Vertex from "./vertex.js";
import Objects from "./objects.js";
import Matrix from "./matrix.js";
export default function Floor () {
    this.center = new Vertex(0,1000, -1000);
    this.velocity = new Vertex(0, 0, 0);
    this.size = 0;
    this.rotations = new Matrix([
        [1,0,0],
        [0,1,0],
        [0,0,1]
    ]);
    this.vertices = [
        new Vertex(this.center.x + 1000, this.center.y - 700, this.center.z),
        new Vertex(this.center.x + 1000, this.center.y + 1000, this.center.z),
        new Vertex(this.center.x - 1000, this.center.y + 1000, this.center.z),
        new Vertex(this.center.x - 1000, this.center.y - 700, this.center.z),
    ];
    this.faces = [
        [this.vertices[0], this.vertices[1], this.vertices[2], this.vertices[3], "black"]
    ];
}

function Surrogate () {

}

Surrogate.prototype = Objects.prototype;

Floor.prototype = new Surrogate();

Floor.prototype.dupe = function () {
    const result = new Floor();
    // result.center = this.center.dupe();
    result.rotations = this.rotations.dupe();
    for (let i = 0; i < result.vertices; i++) {
        result.vertices[i] = this.vertices[i].dupe();
    }
    return result;
}

Floor.prototype.fixFaces = function () {
    
}