function generateMatrixInputs() {
    const size = document.getElementById('size').value;
    const matrix1Div = document.getElementById('matrix1');
    const matrix2Div = document.getElementById('matrix2');
    matrix1Div.innerHTML = '';
    matrix2Div.innerHTML = '';

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const input1 = document.createElement('input');
            input1.type = 'number';
            input1.id = `matrix1-${i}-${j}`;
            matrix1Div.appendChild(input1);

            const input2 = document.createElement('input');
            input2.type = 'number';
            input2.id = `matrix2-${i}-${j}`;
            matrix2Div.appendChild(input2);
        }
        matrix1Div.appendChild(document.createElement('br'));
        matrix2Div.appendChild(document.createElement('br'));
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
            resultDiv.innerHTML += `<input type="number" value="${resultMatrix[i][j]}" disabled> `;
        }
        resultDiv.innerHTML += '<br>';
    }
}

document.addEventListener('DOMContentLoaded', generateMatrixInputs);
