import VertexTwo from "./vertextwo.js"
function OrthoProject (M) {
    return new VertexTwo(M.x, M.z);
}

function ProtoProject (M, d) {
    return new VertexTwo(0.1 * d * M.x / M.y, 0.1 * d * M.z / M.y);
}

function painterQuickSort (objects) {
    if (objects.length <= 1) {
        return objects;
    }
    const left = [];
    const right = [];
    const ob = objects[0];
    const mid = [ob];
    for (let i = 1; i < objects.length; i++) {
        const element = objects[i];
        if (element.center.y < ob.center.y) {
            right.push(element);
        } else {
            left.push(element);
        }
    }
    const sortedLeft = painterQuickSort(left);
    const sortedRight = painterQuickSort(right);

    const newObjects = sortedLeft.concat(mid).concat(sortedRight);
    return newObjects;
}



export default function render(objects, ctx, distX, distY, d) {
    const rotatedObjects = [];
    for (let i = 0; i < objects.length; i++) {
        rotatedObjects.push(objects[i].rotate());
    }
    // console.log(objects, rotatedObjects);
    const sortedObjects = painterQuickSort(rotatedObjects);
    // console.log(sortedObjects);
    for (let i = 0; i < sortedObjects.length; i++) {
        // const sortedFaces = painterQuickSort(sortedObjects[i].faces);
        if (sortedObjects[i].center.y > 100) {

            const sortedFaces = sortedObjects[i].faces;
            // console.log(sortedFaces);
            for (let j = 0; j < sortedFaces.length; j++) {
                const face = sortedFaces[j];
                const avg = [0, 0];
                const p = ProtoProject(face[0], d);
                avg[0] += p.x;
                avg[1] += p.z;
                ctx.beginPath();
                ctx.moveTo(p.x + distX, distY - p.z);
                
                for (let k = 1; k < face.length - 1; k++) {
                    const p = ProtoProject(face[k], d);
                    avg[0] += p.x;
                    avg[1] += p.z;
                    ctx.lineTo(p.x + distX, distY - p.z);
                }
                ctx.fillStyle = face[face.length - 1];
                ctx.closePath();
                
                avg[0] = avg[0] / (face.length - 1);
                avg[1] = avg[1] / (face.length - 1);
                
                
                const r = ProtoProject(face[0], d);
                const q = ProtoProject(face[1], d);
                
                const a = [r.x - avg[0], r.z - avg[1]];
                const b = [q.x - avg[0], q.z - avg[1]];
                
                
                if (a[0] *b[1] > a[1] *b[0]) {
                    // console.log(face, sortedObjects[i].center, a, b);
                    ctx.stroke();
                    ctx.fill();
                }
                
            }
        }
    }
}

