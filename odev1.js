
let argument = process.argv.slice(2);


function alan(r) {
    alan = Math.PI * Math.pow(r,2);
    return alan;
}

console.log(Math.round(alan(argument[0]*1)));
