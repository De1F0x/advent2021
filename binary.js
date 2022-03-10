const fs = require('fs');

function binaryDiag(filename){
    const data = fs.readFileSync(`./resources/problem3/${filename}`, 'utf8').split('\n').map(el => el.replace("\r", ""));
    let gamma = "";
    let epsilon = "";
    for (let i = 0; i < data[0].length; i++) {
        let sum = 0;
        for (let j = 0; j < data.length; j++) {
            if(data[j][i] == "1")sum++;
        }
        gamma += (sum > data.length/2) ? "1":"0";
        epsilon += (sum > data.length/2) ? "0":"1";
    }
    let result = parseInt(Number(gamma), 2) * parseInt(Number(epsilon), 2);
    console.log(result);
}

binaryDiag("input.txt")

