//global objects
const a: Array<number> = [1, 2, 3]
const data = new Date()
const reg = /abc/

//build-in object
Math.pow(2, 2)

//DOM and BOM
let body = document.body
let allLis = document.querySelectorAll('li')
allLis.keys()
document.addEventListener('click', (e) => {
    e.preventDefault()
})
//Utility Types
interface IPerson {
    name: string;
    age: number
}
let niuniu: IPerson = { name: 'niuniu', age: 1 }
type IPartial = Partial<IPerson>
let chengzi: IPartial = {}
type IOmit = Omit<IPerson, 'name'>
let zhuzhu: IOmit = { age: 3 }