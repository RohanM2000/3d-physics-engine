import VertexTwo from "./vertextwo.js"
function ProtoProject (M, d) {
    return new VertexTwo(0.1 * d * M.x / M.y, 0.1 * d * M.z / M.y);
}
export function renderBackground (background, ctx, distX, distY, d) {
    const faces = background.faces;
    for (let j = 0; j < faces.length; j++) {
        const face = faces[j];
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
        
        
        if (a[0] *b[1] < a[1] *b[0]) {
            // console.log(face, sortedObjects[i].center, a, b);
            ctx.stroke();
            ctx.fill();
        }
        
    }
}