function generateMatrixInputs() {
    const size = document.getElementById('size').value;
    const matricesDiv = document.getElementById('matrices');
    matricesDiv.innerHTML = '';

    for (let k = 1; k <= 2; k++) {
        const matrix = document.createElement('div');
        matrix.className = 'matrix';
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const input = document.createElement('input');
                input.type = 'number';
                input.id = `matrix${k}-${i}-${j}`;
                matrix.appendChild(input);
            }
            matrix.appendChild(document.createElement('br'));
        }
        matricesDiv.appendChild(matrix);
    }
}

function calculateSum() {
    const size = document.getElementById('size').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    const resultMatrix = [];
    for (let i = 0; i < size; i++) {
        resultMatrix[i] = [];
        for (let j = 0; j < size; j++) {
            const value1 = parseFloat(document.getElementById(`matrix1-${i}-${j}`).value) || 0;
            const value2 = parseFloat(document.getElementById(`matrix2-${i}-${j}`).value) || 0;
            resultMatrix[i][j] = value1 + value2;
        }
    }

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            resultDiv.innerHTML += resultMatrix[i][j] + ' ';
        }
        resultDiv.innerHTML += '<br>';
    }
}

document.addEventListener('DOMContentLoaded', generateMatrixInputs);
