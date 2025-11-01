// Unions
let code : string | number | boolean;

code = 5

let arr: (boolean|number)[]

arr = [true, false]

// Types persos

type mixedNumStr = number | string;
type booleanOrObject =  boolean | object

const baz = (param: mixedNumStr | booleanOrObject) => {
    console.log(param)
}

baz(8)
baz(true)
baz("value")

type element = {
    x: number,
    y: number,
    id: number | string,
    visible: boolean
}

const button : element = {
    x: 99,
    y: 50,
    id: 999,
    visible: true
}