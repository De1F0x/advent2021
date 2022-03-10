const fs = require('fs');

function dive(filename){
    const data = fs.readFileSync(`./resources/problem2/${filename}`, 'utf8')
    .split("\n").map(el => el.replace("\r", ""));
    const result = data.map((element) => ({
        str: element.split(' ')[0],
        n: Number(element.split(' ')[1])
    }))
    const position = {horizontal: 0, depth: 0, aim: 0}
    result.forEach(el => {
        if(el.str === "forward"){
            position.horizontal += el.n 
            position.depth += position.aim * el.n;
        }
        if(el.str === "down")position.aim += el.n;
        if(el.str === "up")position.aim -= el.n;
    })
    let final = position.horizontal * position.depth;
    return final
}
module.exports = dive;