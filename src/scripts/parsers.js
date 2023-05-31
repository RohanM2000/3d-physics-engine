import OrthoCamera from "./camera";
import Vertex from "./vertex.js";
import Cube from "./cube.js";
import Pyramid from "./pyramid.js";
import Scene from "./scene.js";
import Background from "./background";
import Matrix from "./matrix.js"


function parseCamera (options) {
    const result = new OrthoCamera(new Vertex(0, 0, 0));

    result.position.x = options.position.x;
    result.position.y = options.position.y;
    result.position.z = options.position.z;

    result.zTheta = options.zTheta;
    result.zPhi = options.zPhi;
    result.zOmega = options.zOmega;

    return result;
}

function parseCube (options) {

}

function parsePyramid (options) {

}

function parseFloor (options) {

}

export function parseScene (options) {

}