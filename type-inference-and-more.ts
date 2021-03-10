let str = 'str' //类型推论

//union 联合类型
let numberOrString: number | string;
numberOrString.toString()
numberOrString = 'abc'
numberOrString = 123

function getLength(input: string | number): number {
    const str = input as string;
    if (str.length) {
        return str.length
    } else {
        const number = input as number
        return number.toString().length;
    }
}

//type guard
function getLength2(input: string | number): number {
    if (typeof input === 'string') {
        return input.length
    } else {
        return input.toString().length
    }
}