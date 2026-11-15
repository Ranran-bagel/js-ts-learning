// 04_functions 作业（TS）
// 运行：npm run ts 04_functions/ts_functions_hw.ts
// 类型检查：npm run check
//
// 规则：题目说明用中文，程序输出一律用英文

// ============================================================
// 第 1 题：参数类型和返回值类型
// ============================================================
// 要求：
//   1. 写 add(a: number, b: number): number
//   2. 实验：调用 add("1", 2) 和 add(1)，把两个错误信息抄下来
//   3. 把返回值类型 : number 删掉，鼠标停在 add 上，看看 TS 推断出了什么 推断出了number
//   输出：add(2, 3): 5

// 在这里写你的代码 ↓
{
	const add = (a: number, b: number): number => a + b;
	//console.log(add("1", 2)); //error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
	//console.log(add(1)); //error TS2554: Expected 2 arguments, but got 1.
	console.log(`add(2, 3): ${add(2, 3)}`);
	console.log();
}


// ============================================================
// 第 2 题：可选参数、默认值、剩余参数
// ============================================================
// 要求：
//   1. greet(name: string, greeting = "Hello")：鼠标停在 greeting 上，看看推断出的类型: string
//   2. introduce(name: string, age?: number)：age 可以不传
//        introduce("Alice", 30) → I'm Alice, 30 years old.
//        introduce("Bob")       → I'm Bob.
//      提示：在函数里面，鼠标停在 age 上，看看它的类型是什么: number | undefined
//   3. sum(...numbers: number[]): number
//        sum(1, 2, 3, 4) → 10

// 在这里写你的代码 ↓
function greet(name: string, greeting = "Hello") {
	return `${greeting}, ${name}!`;
}

console.log(`greet("Alice")     → ${greet("Alice")}`);
console.log(`greet("Bob", "Hi") → ${greet("Bob", "Hi")}`);
console.log();

function introduce(name: string, age?: number) {
	if (age !== undefined) {
		return `I'm ${name}, ${age} years old.`;
	}
	return `I'm ${name}.`;
}

console.log(`introduce("Alice", 30) → ${introduce("Alice", 30)}`);
console.log(`introduce("Bob")       → ${introduce("Bob")}`);
console.log();

function sum(...numbers: number[]): number {
	let result = 0;

	for (const nums of numbers) {
		result += nums;
	}
	return result;
}

console.log(`sum(1, 2, 3, 4) → ${sum(1, 2, 3, 4)}`);
console.log();


// ============================================================
// 第 3 题：把以前的作业改写成带类型的函数
// ============================================================
// 要求：把 JS 第 3 题的 3 个函数加上类型
//   formatTime(totalSeconds: number): string
//   isLeapYear(year: number): boolean
//   getGrade(score: number): "A" | "B" | "C" | "D" | "F" | "Invalid score"
// 实验：在 getGrade 里故意 return "E"，看看报什么错 //Type '"E"' is not assignable to type '"A" | "B" | "C" | "D" | "F" | "Invalid score"'.

// 在这里写你的代码 ↓

const formatTime = function (totalSeconds: number): string {
	const hour = Math.floor(totalSeconds / (60 ** 2));
	const minute = Math.floor((totalSeconds - hour * (60 ** 2)) / 60);
	const second = totalSeconds % 60;
	return `${hour}h ${minute}m ${second}s`;
}

const isLeapYear = function (year: number): boolean {
	return (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0));
}

const getGrade = function (score: number): "A" | "B" | "C" | "D" | "F" | "Invalid score" {
	if (score > 100 || score < 0) {
		return ("Invalid score");
	}
	else if (score >= 90 && score <= 100) {
		return ("A");
	}
	else if (score >= 80) {
		return ("B");
	}
	else if (score >= 70) {
		return ("C");
	}
	else if (score >= 60) {
		return ("D");
	}
	else {
		return ("F");
	}
}

console.log(`formatTime(3725): ${formatTime(3725)}`);
console.log(`isLeapYear(1900): ${isLeapYear(1900)}`);
console.log(`getGrade(72): ${getGrade(72)}`);
console.log();

// ============================================================
// 第 4 题：函数类型
// ============================================================
// 要求：
//   1. 定义一个函数类型：
//        type MathOperation = (a: number, b: number) => number;
//   2. 用它定义 add、subtract、multiply 三个箭头函数，
//      注意：写了 MathOperation 以后，参数 a、b 就不用再写类型了
//   3. 写 calculate(a: number, b: number, operation: MathOperation): number
//   4. 输出：
//        10 + 5 = 15
//        10 - 5 = 5
//        10 * 5 = 50

// 在这里写你的代码 ↓
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;
const multiply: MathOperation = (a, b) => a * b;

const calculate = (a: number, b: number, operation: MathOperation): number => operation(a, b);

console.log(`10 + 5 = ${calculate(10, 5, add)}`);
console.log(`10 - 5 = ${calculate(10, 5, subtract)}`);
console.log(`10 * 5 = ${calculate(10, 5, multiply)}`);
console.log();

// ============================================================
// 第 5 题：void 和返回函数的函数
// ============================================================
// 要求：
//   1. logMessage(message: string): void —— 输出 [LOG] message，不返回任何值
//   2. 把 JS 第 5 题的 createCounter 加上类型：
//        function createCounter(): () => number
//   3. 输出：
//        [LOG] Counter started
//        count: 1
//        count: 2

// 在这里写你的代码 ↓

function logMessage(message: string): void {
	console.log(`[LOG] ${message}`);
}

function createCounter(): () => number {
	let count = 0;
	return () => {
		count += 1;
		return count;
	};
}

logMessage("Counter started");
const counter = createCounter();
console.log(`count: ${counter()}`);
console.log(`count: ${counter()}`);