//对对象的形状进行描述
interface Person {
    readonly id: number;
    name: string;
    age?: number;
}
let niuniu: Person = {
    id: 1,
    name: 'niuniu',
    age: 28,
}