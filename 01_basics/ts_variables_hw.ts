// 01_basics 作业（TS）
// 运行：npm run ts 01_basics/ts_variables_hw.ts
// 类型检查：npm run check
//
// 大纲：
//   第 1 题：类型注解
//   第 2 题：类型推断
//   第 3 题：修复类型错误
//
// 规则：题目说明用中文，程序输出一律用英文

// ============================================================
// 第 1 题：类型注解
// ============================================================
// 把 JS 第 1 题（名字、年龄、城市、出生年份）用 TS 重写一遍。
//
// 要求：
//   1. 每个变量都写上类型注解，例：const name: string = "...";
//   2. 输出：My name is XX. I am XX years old, I live in XX, and I was born in XXXX.
//   3. 实验：把一个 number 类型的变量赋值成字符串，
//      运行 npm run check，把错误信息抄在注释里，然后把这行注释掉
//   4. 想一想：用 npm run ts 运行时会报错吗？为什么？ 不会报错 因为ts不检查类型错误

// 在这里写你的代码 ↓
const name: string = 'RanRan';

let age: number = 42;

let city: string = 'Tokyo';

const birthYear: number = 2001;

//age = 'hello'; error TS2322: Type 'string' is not assignable to type 'number'.
age += 1;
city = 'Osaka';
console.log(`My name is ${name}. I am ${age} years old, I live in ${city}, and I was born in ${birthYear}.`);
console.log();



// ============================================================
// 第 2 题：类型推断
// ============================================================
// 不写类型注解，TS 也会自动推断类型。
// 在 VS Code 里把鼠标停在变量名上，看看显示的类型是什么，填在注释里。

let score = 100;          // 显示的类型：number
const maxScore = 100;     // 显示的类型：const maxScore: 100
let greeting = "hello";   // 显示的类型：string
const fixedGreeting = "hello"; // 显示的类型："hello"
let isActive = true;      // 显示的类型：boolean

// 想一想：为什么 let 和 const 推断出的类型不一样？
//想不出来

// ============================================================
// 第 3 题：修复类型错误
// ============================================================
// 把下面的代码取消注释，运行 npm run check 看看错误信息，
// 然后修改代码，让所有错误消失（可以改值，也可以改类型或改成 let）。
// 修好后输出：
//   count: 10, done: false, user: Bob, pi: 3.14159

let count: number = 10;
const isDone: boolean = false;
let userName: string = "Bob";
let pi: number = 3.14;
pi = 3.14159;
console.log(`count: ${count}, done: ${isDone}, user: ${userName}, pi: ${pi}`);

// 在这里写修好的代码 ↓

