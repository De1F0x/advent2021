const fs = require('fs');

function dive(filename){
    const data = fs.readFileSync(`./resources/problem2/${filename}`, 'utf8').split("\n").map(el => el.replace("\r", ""));
    const content = data.map(el => el.split(" "));
    let deep = 0;
    let horizontal = 0;

    for (let i = 0; i < content.length; i++) {
        if(content[i][0] == "forward"){
            horizontal += parseInt(content[i][1]);
        }
        if(content[i][0] == "up"){
            deep -= parseInt(content[i][1]);
        }
        if(content[i][0] == "down"){
            deep += parseInt(content[i][1]);
        }
    }
    console.log(deep * horizontal);
    return deep * horizontal;
}

dive("input.txt")
module.exports = dive;