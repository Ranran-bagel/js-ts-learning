// 04_functions 作业（JS）
// 运行：node 04_functions/js_functions_hw.js
//
// 大纲：
//   第 1 题：三种写法
//   第 2 题：参数默认值和剩余参数
//   第 3 题：返回值 —— 把以前的作业改写成函数
//   第 4 题：作用域（先预测，再运行）
//   第 5 题：闭包 —— 计数器
//   第 6 题：把函数当参数传递
//
// 规则：题目说明用中文，程序输出一律用英文

// ============================================================
// 第 1 题：三种写法
// ============================================================
// 写一个求两个数之和的函数，用三种写法各写一次：
//   1. 函数声明     function add1(a, b) { ... }
//   2. 函数表达式   const add2 = function (a, b) { ... };
//   3. 箭头函数     const add3 = (a, b) => ...;
// 分别调用 (2, 3)，输出：
//   add1: 5
//   add2: 5
//   add3: 5
// 实验：在 add1 的定义「之前」调用 add1 和 add3，看看哪个会报错，为什么？
// 用 function 名字() {} 声明的函数会被提升,只要是赋给 const 的，执行到那一行之前都不能用。
// ReferenceError: Cannot access 'add3' before initialization

// 在这里写你的代码 ↓
//console.log(`add1: ${add1(2, 3)}`);
//console.log(`add3: ${add3(2, 3)}`);

function add1(a, b) {
	return a + b;
}

const add2 = function(a, b) {
	return a + b;
}

const add3 = (a, b) => a + b;

console.log(`add1: ${add1(2, 3)}`);
console.log(`add2: ${add2(2, 3)}`);
console.log(`add3: ${add3(2, 3)}`);
console.log();

// ============================================================
// 第 2 题：参数默认值和剩余参数
// ============================================================
// 要求：
//   1. greet(name, greeting)，greeting 默认是 "Hello"：
//        greet("Alice")       → Hello, Alice!
//        greet("Bob", "Hi")   → Hi, Bob!
//   2. sum(...numbers)，可以接收任意个数字并返回总和：
//        sum(1, 2, 3, 4) → 10
//        sum()           → 0
//      提示：numbers 是一个数组，可以先用 for...of 循环来加

// 在这里写你的代码 ↓

const greet = function(name, greeting="Hello") {
	console.log(`${greeting}, ${name}!`);
}
greet("Alice");
greet("Bob", "Hi");
console.log()

const sum = function(...numbers) {
	let result = 0;

	for (const nums of numbers) {
		result += nums;
	}
	return result;
}
console.log(` sum(1, 2, 3, 4) → ${sum(1, 2, 3, 4)}`);
console.log(` sum()           → ${sum()}`);
console.log();

// ============================================================
// 第 3 题：返回值 —— 把以前的作业改写成函数
// ============================================================
// 要求：写出下面 3 个函数，它们都「返回」结果（不在函数里面 console.log）
//   1. formatTime(totalSeconds)：返回 "1h 2m 5s" 这样的字符串（02 第 1 题）
//   2. isLeapYear(year)：返回 true / false（02 第 6 题）
//   3. getGrade(score)：返回 "A"〜"F" 或 "Invalid score"（03 第 1 题）
// 调用并输出：
//   formatTime(3725): 1h 2m 5s
//   isLeapYear(1900): false
//   getGrade(72): C
// 想一想：「返回值」和「在函数里 console.log」有什么区别？哪种更好复用？
// 返回值不会在调用的时候在终端打印结果，函数里console会直接打印结果。返回值更好服用，可以让用途更加灵活。

// 在这里写你的代码 ↓

const formatTime = function(totalSeconds) {
	const hour = Math.floor(totalSeconds / (60 ** 2));
	const minute = Math.floor((totalSeconds - hour * (60 ** 2)) / 60);
	const second = totalSeconds % 60;
	return `${hour}h ${minute}m ${second}s`;
}

const isLeapYear = function(year) {
	return (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0));
}

const getGrade = function(score) {
	if (score > 100 || score < 0){
		return("Invalid score");
	}
	else if (score >= 90 && score <= 100){
		return("A");
	}
	else if (score >= 80){
		return("B");
	}
	else if (score >= 70){
		return("C");
	}
	else if (score >= 60){
		return("D");
	}
	else {
		return("F");
	}
}
console.log(`formatTime(3725): ${formatTime(3725)}`);
console.log(`isLeapYear(1900): ${isLeapYear(1900)}`);
console.log(`getGrade(72): ${getGrade(72)}`);
console.log();

// ============================================================
// 第 4 题：作用域（先预测，再运行）
// ============================================================

const x = "global";

function outer() {
  const x = "outer";
  function inner() {
    console.log(x); // 预测：outer      实际：outer
  }
  inner();
}
outer();
console.log(x);     // 预测：global      实际：global

{
  const y = "block";
  console.log(y);   // 预测：block      实际：block
}
// console.log(y);  // 取消注释，预测：会发生什么？ ReferenceError   实际：ReferenceError 

// ============================================================
// 第 5 题：闭包 —— 计数器
// ============================================================
// 要求：
//   1. 写 createCounter()，它返回一个函数；每调用一次返回的函数，计数就 +1 并返回
//   2. 创建两个计数器，确认它们互不影响：
//        const counterA = createCounter();
//        const counterB = createCounter();
//      输出：
//        counterA: 1
//        counterA: 2
//        counterA: 3
//        counterB: 1
//   3. 想一想：count 变量明明在 createCounter 里面，为什么函数结束后还能记住它？
//   JS（和 Python）**里，如果一个局部变量被内层函数用到了，它就不会随着外层函数结束而消失。只要返回出去的那个函数（counterA）还在，它用到的 count 就一直活着

// 在这里写你的代码 ↓
const createCounter = function() {
	let count = 0;
	return function() {
		++count;
		return count;
	}
}
const counterA = createCounter();
const counterB = createCounter();
console.log(`counterA: ${counterA()}`);
console.log(`counterA: ${counterA()}`);
console.log(`counterA: ${counterA()}`);
console.log(`counterB: ${counterB()}`);
console.log();

// ============================================================
// 第 6 题：把函数当参数传递
// ============================================================
// 要求：
//   1. 写 applyTwice(fn, value)：把 fn 连续作用两次，返回 fn(fn(value))
//        applyTwice((n) => n * 2, 5)     → 20
//        applyTwice((n) => n + 10, 1)    → 21
//        applyTwice((s) => s + "!", "Hi") → Hi!!
//   2. 写 calculate(a, b, operation)，operation 是一个函数：
//        calculate(10, 5, add3)               → 15
//        calculate(10, 5, (a, b) => a * b)    → 50
//   输出格式自由，但要用英文

// 在这里写你的代码 ↓

const applyTwice = function(fn, value) {
	return fn(fn(value));
}
console.log(`applyTwice((n) => n * 2, 5)     → ${applyTwice((n) => n * 2, 5)}`);
console.log(`applyTwice((n) => n + 10, 1)    → ${applyTwice((n) => n + 10, 1)}`);
console.log(`applyTwice((s) => s + "!", "Hi") → ${applyTwice((s) => s + "!", "Hi")}`);
console.log();

const calculate = function(a, b, operation) {
	return operation(a, b);
}
console.log(`calculate(10, 5, add3)               → ${calculate(10, 5, add3)}`);
console.log(`calculate(10, 5, (a, b) => a * b)    → ${calculate(10, 5, (a, b) => a * b)}`);
