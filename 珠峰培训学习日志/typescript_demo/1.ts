export {};
let name: string = "tail";
let age: number = 2;
let married: boolean = true;
let hobbies: string[] = ["1", "2", "3"];
let interests: Array<string> = ["4", "5", "6"];
// 元祖类似一个数组 它是一个长度和类型都固定的数组
let point: [number, number] = [100, 100];
console.log(age);
enum Gender {
  BODY = 1,
  GIRL = 2
}

console.log(Gender.BODY);
console.log(Gender.GIRL);

// let root: HTMLElement | null = document.getElementById("root");
// root!.style.color = "red";

let myname1: string = null;
let myname2: string = undefined;

let x: number;
x = 1;
x = undefined;
x = null;

function greeting(name: string): void {
  console.log("hello world");
}
greeting("null");

// never 永远不
// nerver是其它 类型的子类型，代表不会出现的值

function createError(message: string): never {
  throw new Error('error')
}
