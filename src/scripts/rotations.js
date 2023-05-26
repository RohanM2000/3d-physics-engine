import Matrix from "./matrix.js"
export function rotationX (radians) {
    return new Matrix([
        [1, 0, 0],
        [0, Math.cos(radians), -Math.sin(radians)],
        [0, Math.sin(radians), Math.cos(radians)]
    ]);
}

export function rotationY (radians) {
    return new Matrix([
        [Math.cos(radians), 0, Math.sin(radians)],
        [0, 1, 0],
        [-Math.sin(radians), 0, Math.cos(radians)]
    ]);
}

export function rotationZ (radians) {
    return new Matrix([
        [Math.cos(radians), -Math.sin(radians), 0],
        [Math.sin(radians), Math.cos(radians), 0],
        [0, 0, 1]
    ]);
}