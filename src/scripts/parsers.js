import OrthoCamera from "./camera";
import Vertex from "./vertex.js";
import Cube from "./cube.js";
import Pyramid from "./pyramid.js";
import Scene from "./scene.js";
import Background from "./background";
import Matrix from "./matrix.js"
import Floor from "./floor";


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
    const result = new Cube(new Vertex(0, 0, 0), options['size']);
    result.move(options['center']['x'], options['center']['y'], options['center']['z']);
    result.staticCenter.move(options['center']['x'], options['center']['y'], options['center']['z']);
    result.rotations.values = options['rotations']['values'];
    result.velocity.move(options['velocity']['x'], options['velocity']['y'], options['velocity']['z']);
    result.fixFaces();

    return result;
}

function parsePyramid (options) {
    const result = new Pyramid(new Vertex(0, 0, 0), options['size']);
    result.move(options['center']['x'], options['center']['y'], options['center']['z']);
    result.staticCenter.move(options['center']['x'], options['center']['y'], options['center']['z']);
    result.rotations.values = options['rotations']['values'];
    result.velocity.move(options['velocity']['x'], options['velocity']['y'], options['velocity']['z']);
    result.fixFaces();

    return result;
}

function parseFloor (options) {
    const result = new Floor();
    result.move(options['center']['x'] + 350, options['center']['y'] - 400, options['center']['z'] + 1000);
    result.rotations.values = options['rotations']['values'];
    result.velocity.move(options['velocity']['x'], options['velocity']['y'], options['velocity']['z']);
    result.fixFaces();

    return result;
}

export default function parseScene (options) {
    const camera = parseCamera(options['camera']);

    const scene = new Scene(camera, [], new Background());

    for (let i = 0; i < options['floors'].length; i++) {
        const floor = parseFloor(options['floors'][i]);
        scene.addObject(floor);
    }

    for (let i = 0; i < options['objects'].length; i++) {
        if (options['objects'][i]['name'] === 'cube') {
            const obj = parseCube(options['objects'][i]);
            scene.addObject(obj);
        }
        if (options['objects'][i]['name'] === 'pyramid') {
            const obj = parsePyramid(options['objects'][i]);
            scene.addObject(obj);
        }
    }

    scene.x = new Vertex(options['x']['x'], options['x']['y'], options['x']['z']);
    scene.y = new Vertex(options['y']['x'], options['y']['y'], options['y']['z']);
    scene.z = new Vertex(options['z']['x'], options['z']['y'], options['z']['z']);

    return scene;
}