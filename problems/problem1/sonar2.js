const fs = require('fs');

function greater(filename, window){
    const data = fs.readFileSync(`./resources/problem1/${filename}`, 'utf8');
    let lines = data.split("\n").map(el => parseInt(el));
    let result = 0;
    let current = 0;
    let last = 0;
    for (let i = 1; i < lines.length; i++) {
        for (let j = 0; j < window; j++) {
            current += lines[i+j];
            last += lines[i-1+j];
        }
        if(current > last){
            result++;
        }
        current = 0;
        last = 0;
    }
    return result;
}
module.exports = greater;
