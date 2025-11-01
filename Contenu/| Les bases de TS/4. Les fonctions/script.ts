function multiply(num1: number, num2: number, action?: string): number{
    return num1 * num2
}

console.log(multiply(6, 10))

let foo: Function;

foo = () => {}

// Function signtures

let baz : (a: number, b: number) => number;

baz = (a, b) => a + b

// Callback

function greeting(fn: (str: string) => void){
    fn('Hello world')
}

const print = (msg: string): void  => {
    console.log(msg)
}

greeting(print)