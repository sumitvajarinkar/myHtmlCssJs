// Generators - 

function* num(){
    let i = 0
    // yield 1
    // yield 2
    // yield 3
    // yield 4

    while(true){
        yield (i++)
        // yield (i++).toString()
    }
}

const gen = num()
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
