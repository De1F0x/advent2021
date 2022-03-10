const fs = require('fs');

function greater(filename){
    const data = fs.readFileSync(`./resources/problem1/${filename}`, 'utf8');
    let lines = data.split("\n").map(el => parseInt(el));
    let result = 0;
    for (let i = 1; i < lines.length; i++) {
        if(lines[i]> lines[i-1])result++;
    }
    return result;
}

module.exports = greater;
