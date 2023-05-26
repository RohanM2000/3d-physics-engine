export default function OrthoCamera (position, zTheta = 0, zPhi = 0, zOmega = 0) {
    this.position = position;
    this.zTheta = zTheta;
    this.zPhi = zPhi;
    this.zOmega = zOmega;
}

OrthoCamera.prototype.move = function(x, y, z) {
    this.position.x += x;
    this.position.y += y;
    this.position.z += z;
}

OrthoCamera.prototype.turn = function(zTheta) {
    this.zTheta += zTheta;
}

OrthoCamera.prototype.dip = function(zPhi) {
    this.zPhi -= zPhi;
}

OrthoCamera.prototype.screw = function(zOmega) {
    this.zOmega += zOmega;
}
