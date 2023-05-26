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