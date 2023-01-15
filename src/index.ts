//Typescript Learning

let sales: number = 12345678;
let course: string = 'Typescript';
let is_published: boolean = true;
let level: any;
function render(document: any) {
    console.log(document)
}

//Typescript array as number
let numbers: number[] = [1, 2, 3, 4]

//Array of number and string
let user: [number, string, number, string] = [1, 'string', 10, 'string2']

//Enums - Pascal
enum Size { Small = 1, Medium, Large }
let mySize = Size.Large;

//Functions
function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022) {
        return income * 1.2
    }
    return income * 1.3
}

//Objects 
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}
let employee: Employee = {
    id: 1,
    name: 'Mosh',
    retire: (date: Date) => {
        console.log(date)
    }
}

//Union
function kgToLbs(weight: number | string): number {
    //Narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight)
}
kgToLbs(10);
kgToLbs('10kg');

// Intersect
type Draggable = {
    drag: () => void
};
type Resizable = {
    resize: () => void
};
type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => { },
    resize: () => { }
}

//Limiting variable length
//Literal(exact,specific)
type Quantity = 50 | 100
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch'

//Nullable Types
function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase())
    else
        console.log('Hola!')
}
greet(null)

type Customer = {
    birthday: Date
};
//Optional chaining
function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(0);
//Optional property access operator
console.log(customer?.birthday.getFullYear())

//Optional call 
let log: any = null;
log?.('a')