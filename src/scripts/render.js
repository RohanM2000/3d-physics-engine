import VertexTwo from "./vertextwo.js"
function OrthoProject (M) {
    return new VertexTwo(M.x, M.z);
}

export default function render(objects, ctx, distX, distY) {
    for (let i = 0; i < objects.length; i++) {
        for (let j = 0; j < objects[i].faces.length; j++) {
            const face = objects[i].faces[j];

            const p = OrthoProject(face[0]);
            ctx.beginPath();
            ctx.moveTo(p.x + distX, distY - p.z);

            for (let k = 1; k < face.length; k++) {
                const p = OrthoProject(face[k]);
                ctx.lineTo(p.x + distX, distY - p.z);
            }

            ctx.closePath();
            ctx.stroke();
        }
    }
}

