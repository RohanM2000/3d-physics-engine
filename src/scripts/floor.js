import Vertex from "./vertex.js";
import Objects from "./objects.js";
export default function Floor () {
    this.center = new Vertex(0,1000, -1000);
    this.velocity = new Vertex(0, 0, 0);
    this.size = 0;
    this.vertices = [
        new Vertex(this.center.x + 1000, this.center.y - 700, this.center.z),
        new Vertex(this.center.x + 1000, this.center.y + 1000, this.center.z),
        new Vertex(this.center.x - 1000, this.center.y + 1000, this.center.z),
        new Vertex(this.center.x - 1000, this.center.y - 700, this.center.z),
    ]
    this.faces = [
        [this.vertices[0], this.vertices[1], this.vertices[2], this.vertices[3], "black"]
    ]
}

function Surrogate () {

}

Surrogate.prototype = Objects.prototype;

Floor.prototype = new Surrogate();
