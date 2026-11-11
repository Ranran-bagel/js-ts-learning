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
//   3. 把返回值类型 : number 删掉，鼠标停在 add 上，看看 TS 推断出了什么
//   输出：add(2, 3): 5

// 在这里写你的代码 ↓


// ============================================================
// 第 2 题：可选参数、默认值、剩余参数
// ============================================================
// 要求：
//   1. greet(name: string, greeting = "Hello")：鼠标停在 greeting 上，看看推断出的类型
//   2. introduce(name: string, age?: number)：age 可以不传
//        introduce("Alice", 30) → I'm Alice, 30 years old.
//        introduce("Bob")       → I'm Bob.
//      提示：在函数里面，鼠标停在 age 上，看看它的类型是什么
//   3. sum(...numbers: number[]): number
//        sum(1, 2, 3, 4) → 10

// 在这里写你的代码 ↓


// ============================================================
// 第 3 题：把以前的作业改写成带类型的函数
// ============================================================
// 要求：把 JS 第 3 题的 3 个函数加上类型
//   formatTime(totalSeconds: number): string
//   isLeapYear(year: number): boolean
//   getGrade(score: number): "A" | "B" | "C" | "D" | "F" | "Invalid score"
// 实验：在 getGrade 里故意 return "E"，看看报什么错

// 在这里写你的代码 ↓


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

