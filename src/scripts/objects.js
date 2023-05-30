import * as ROTATIONS from "./rotations.js"
import Matrix from "./matrix.js"
import Floor from "./floor.js"
export default function Objects () {

}

Objects.prototype.move = function (x, y, z) {
    this.center.move(x, y, z);
    for (let i = 0; i < this.vertices.length; i++) {
        const vertex = this.vertices[i];
        vertex.move(x, y, z);
    }
    // if (this instanceof Floor) {
    //     console.log(this);
    // }
}


Objects.prototype.absRotateX = function (theta) {
    // const rotMatrix = ROTATIONS.rotationX(theta);
    // const centMat = new Matrix([
    //     [this.center.x],
    //     [this.center.y],
    //     [this.center.z]
    // ]);
    // const newCent = rotMatrix.multiply(centMat);
    // this.center.x = newCent.values[0][0];
    // this.center.y = newCent.values[1][0];
    // this.center.z = newCent.values[2][0];
    this.rotateX(theta);
    this.center.rotateX(theta);
    // this.velocity.rotateX(theta);
    for (let i = 0; i < this.vertices.length; i++) {
        // const oldPosMat = new Matrix([
        //     [this.vertices[i].x],
        //     [this.vertices[i].y],
        //     [this.vertices[i].z]
        // ]);
        // const newPosMat = rotMatrix.multiply(oldPosMat);
        // // [this.vertices[i].x, this.vertices[i].y, this.vertices[i].z] = newPosMat.values;
        // this.vertices[i].x = newPosMat.values[0][0];
        // this.vertices[i].y = newPosMat.values[1][0];
        // this.vertices[i].z = newPosMat.values[2][0];
        this.vertices[i].rotateX(theta);
    }
}

Objects.prototype.absRotateY = function (theta) {
    // const rotMatrix = ROTATIONS.rotationY(theta);
    // const centMat = new Matrix([
    //     [this.center.x],
    //     [this.center.y],
    //     [this.center.z]
    // ]);
    // const newCent = rotMatrix.multiply(centMat);
    // this.center.x = newCent.values[0][0];
    // this.center.y = newCent.values[1][0];
    // this.center.z = newCent.values[2][0];
    this.rotateY(theta);
    this.center.rotateY(theta);
    // this.velocity.rotateY(theta);
    for (let i = 0; i < this.vertices.length; i++) {
        // const oldPosMat = new Matrix([
        //     [this.vertices[i].x],
        //     [this.vertices[i].y],
        //     [this.vertices[i].z]
        // ]);
        // const newPosMat = rotMatrix.multiply(oldPosMat);
        // // [this.vertices[i].x, this.vertices[i].y, this.vertices[i].z] = newPosMat.values;
        // this.vertices[i].x = newPosMat.values[0][0];
        // this.vertices[i].y = newPosMat.values[1][0];
        // this.vertices[i].z = newPosMat.values[2][0];
        this.vertices[i].rotateY(theta);
    }
}

Objects.prototype.absRotateZ = function (theta) {
    // const rotMatrix = ROTATIONS.rotationZ(theta);
    // const centMat = new Matrix([
    //     [this.center.x],
    //     [this.center.y],
    //     [this.center.z]
    // ]);
    // const newCent = rotMatrix.multiply(centMat);
    // this.center.x = newCent.values[0][0];
    // this.center.y = newCent.values[1][0];
    // this.center.z = newCent.values[2][0];
    this.rotateZ(theta);
    this.center.rotateZ(theta);
    // this.velocity.rotateZ(theta);
    for (let i = 0; i < this.vertices.length; i++) {
        // const oldPosMat = new Matrix([
        //     [this.vertices[i].x],
        //     [this.vertices[i].y],
        //     [this.vertices[i].z]
        // ]);
        // const newPosMat = rotMatrix.multiply(oldPosMat);
        // // [this.vertices[i].x, this.vertices[i].y, this.vertices[i].z] = newPosMat.values;
        // this.vertices[i].x = newPosMat.values[0][0];
        // this.vertices[i].y = newPosMat.values[1][0];
        // this.vertices[i].z = newPosMat.values[2][0];
        this.vertices[i].rotateZ(theta);
    }
}

// Objects.prototype.relRotateX = function (theta) {
//     const rotMatrix = ROTATIONS.rotationX(theta);
//     for (let i = 0; i < this.relVertices.length; i++) {
//         const oldPosMat = new Matrix([
//             [this.relVertices[i].x],
//             [this.relVertices[i].y],
//             [this.relVertices[i].z]
//         ]);
//         const newPosMat = rotMatrix.multiply(oldPosMat);
//         [this.relVertices[i].x, this.relVertices[i].y, this.relVertices[i].z] = newPosMat.values;
//         this.vertices[i].x -= oldPosMat[0];
//         this.vertices[i].x += newPosMat[0];
//         this.vertices[i].y -= oldPosMat[1];
//         this.vertices[i].y += newPosMat[1];
//         this.vertices[i].z -= oldPosMat[2];
//         this.vertices[i].z += newPosMat[2];
//     }
// }
// Objects.prototype.relRotateY = function (theta) {
//     const rotMatrix = ROTATIONS.rotationY(theta);
//     for (let i = 0; i < this.relVertices.length; i++) {
//         const oldPosMat = new Matrix([
//             [this.relVertices[i].x],
//             [this.relVertices[i].y],
//             [this.relVertices[i].z]
//         ]);
//         const newPosMat = rotMatrix.multiply(oldPosMat);
//         [this.relVertices[i].x, this.relVertices[i].y, this.relVertices[i].z] = newPosMat.values;
//     }
// }
// Objects.prototype.relRotateZ = function (theta) {
//     const rotMatrix = ROTATIONS.rotationZ(theta);
//     for (let i = 0; i < this.relVertices.length; i++) {
//         const oldPosMat = new Matrix([
//             [this.relVertices[i].x],
//             [this.relVertices[i].y],
//             [this.relVertices[i].z]
//         ]);
//         const newPosMat = rotMatrix.multiply(oldPosMat);
//         [this.relVertices[i].x, this.relVertices[i].y, this.relVertices[i].z] = newPosMat.values;
//     }
// }

Objects.prototype.checkCollision = function(obj) {
    // if (Math.abs(this.center.z - obj.center.z) < (this.size/2 + obj.size/2) && !this.fixed) {
    //     return "Z";
    // }
    // return false;
    if (obj instanceof Floor) {
        if ((this.center.z - this.size/2) < obj.center.z) {
            return true;
        }
    }
    if (Math.abs(this.center.z - obj.center.z) < (this.size/2 + obj.size/2)) {
        if (obj instanceof Floor) {
        return true;
        } else {
            // const right = obj.center.x + obj.size;
            // const left = obj.center.x - obj.size;
            // const top = obj.center.y + obj.size;
            // const bottom = obj.center.y - obj.size;

            // for (let i = 0; i < this.vertices.length; i++) {
            //     const ele = this.vertices[i];
            //     if (ele.x > left && ele.x < right && ele.y > bottom && ele.y < top) {
            //         return true
            //     }
            // }
            if (this.center.x === obj.center.x && this.center.y === obj.center.y) {
                return true;
            }
        }
    }

    return false;
}

Objects.prototype.resolveCollisionZ = function(obj) {
    if (this instanceof Floor && obj instanceof Floor) {
        return false;
    }
    if (obj instanceof Floor) {
        // const correction = obj.center.z - (this.center.z - this.size/2);
        // this.move(0, 0, correction);
        // this.acceleration = 0;
        // this.velocity.z = 0;
        // console.log(this);
        // console.log(obj);
        // this.fixed = true;
        const correction = obj.center.z - (this.center.z - this.size/2);
        this.move(0, 0, correction);
        this.velocity.z = 0;
    } else {
        if ((this.center.z - this.size/2) > (obj.center.z - obj.size/2)) {
            const correction = (obj.center.z + obj.size/2) - (this.center.z - this.size/2);
            this.move(0, 0, correction);
            this.velocity.z = 0;
        } else {
            const correction = (this.center.z + this.size/2) - (obj.center.z - obj.size/2);
            obj.move(0, 0, correction);
            obj.velocity.z = 0;
        }
    }
}

Objects.prototype.rotateX = function (theta) {
    const rotMatrix = ROTATIONS.rotationX(theta);
    this.rotations = rotMatrix.multiply(this.rotations);
}

Objects.prototype.rotateY = function (theta) {
    const rotMatrix = ROTATIONS.rotationY(theta);
    this.rotations = rotMatrix.multiply(this.rotations);
}

Objects.prototype.rotateZ = function (theta) {
    const rotMatrix = ROTATIONS.rotationZ(theta);
    // console.log("rotation matrix", rotMatrix, "current rotations", this.rotations);
    this.rotations = rotMatrix.multiply(this.rotations);
}

Objects.prototype.rotate = function () {
    const dupe = this.dupe();
    dupe.center = dupe.center.multiplyBy(dupe.rotations);
    for (let i = 0; i < dupe.vertices.length; i++) {
        // console.log("doing this!")
        dupe.vertices[i] = dupe.vertices[i].multiplyBy(dupe.rotations);
    }
    dupe.fixFaces();
    return dupe;
}

Objects.prototype.jump = function (floorHeight) {
    let xVel;
    if (this.staticCenter.x > 0) {
        xVel = 3;
    } else {
        xVel = 2;
    }
    let yVel;
    if (this.staticCenter.y > 750) {
        yVel = 1.2;
    }else {
        yVel = 0.8;
    }
    this.velocity.z += 5 * (this.center.z - floorHeight)/100 * xVel * yVel;
    // this.velocity.z += this.center.x/10;
}