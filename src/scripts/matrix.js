export default function Matrix (mat) {
    this.values = mat;
    this.lengthI = mat.length;
    this.lengthJ = mat[0].length;
}

Matrix.prototype.multiply = function (matrix) {
    const result = [];
    for (let i = 0; i < this.lengthI; i++) {
        const row = [];
        for (let j = 0; j < matrix.lengthJ; j++) {
            let sum = 0;
            for (let k = 0; k < this.lengthJ; k++ ) {
                sum += this.values[i][k] * matrix.values[k][j];
            }
            row.push(sum);
        }
        result.push(row);
    }
    return new Matrix(result);
}

Matrix.prototype.simplifyZeros = function () {
    for (let i = 0; i < this.lengthI; i++) {
        for (let j = 0; j < this.lengthJ; j++) {
            if (Math.abs(this.values[i][j]) < 0.001) this.values[i][j] = 0;
        }
    }
}

Matrix.prototype.dupe = function() {
    const mat = [];
    // console.log(this);
    for (let i = 0; i < this.lengthI; i++) {
        // console.log("getting to this point!")
        mat.push(this.values[i].slice());
        // console.log(mat);
    }
    return new Matrix(mat);
}