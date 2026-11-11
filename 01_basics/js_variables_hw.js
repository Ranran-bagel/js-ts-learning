// 01_basics 作业（JS）
// 运行：node 01_basics/js_variables_hw.js
//
// 大纲：
//   第 1 题：const 和 let
//   第 2 题：基本类型和 typeof
//   第 3 题：模板字符串
//   第 4 题：交换两个变量
//
// 规则：题目说明用中文，程序输出一律用英文

// ============================================================
// 第 1 题：const 和 let
// ============================================================
// 用变量描述你自己（内容可以虚构）：
//   - 名字（不会变）
//   - 年龄（每年会变）
//   - 所在城市（可能搬家）
//   - 出生年份（不会变）
//
// 要求：
//   1. 判断每个变量该用 const 还是 let
//   2. 让年龄 +1（过了一年），城市改成别的城市
//   3. 输出（英文）：My name is XX. I am XX years old, I live in XX, and I was born in XXXX.
//   4. 实验：试着给一个 const 变量重新赋值，运行看看报什么错，
//      把错误信息抄在注释里，然后把这行注释掉

// 在这里写你的代码 ↓

const name = 'RanRan';

let age = 42;

let city = 'Tokyo';

const birth_year = 2001;
//birth_year = 2023; TypeError: Assignment to constant variable.
age += 1;
city = 'Osaka';
console.log(`My name is ${name}, I am ${age} years old, I live in ${city}, and I was born in ${birth_year}.`);
console.log();



// ============================================================
// 第 2 题：基本类型和 typeof（先预测，再运行）
// ============================================================
// 先在「预测：」后面写答案，再运行，把结果写在「实际：」后面。
// 猜错的写一句原因。

console.log(typeof 42);            // 预测： number  实际： number
console.log(typeof 3.14);          // 预测： number    实际： number
console.log(typeof "hello");       // 预测： string    实际：string
console.log(typeof true);          // 预测： boolean   实际：boolean
console.log(typeof undefined);     // 预测： undefined  实际：undefined
console.log(typeof null);          // 预测： object  实际：object
console.log(typeof NaN);           // 预测： NaN   实际：number 真不知道
console.log(typeof [1, 2, 3]);     // 预测： list   实际：object 和python混淆
console.log(typeof { a: 1 });      // 预测： dictnary    实际：object 和python混淆
console.log(typeof function () {}); // 预测：object   实际：function 灵机一动
console.log();

// ============================================================
// 第 3 题：模板字符串
// ============================================================
// 已知：
  const product = "Coffee";
  const price = 450;
  const quantity = 3;
//
// 要求：
//   1. 用「+ 拼接」写一次，再用「模板字符串」写一次，都输出：
//        Coffee x 3 = 1350 yen
//   2. 用一个模板字符串（可以换行）输出下面的小票：
//        === Receipt ===
//        Item:  Coffee
//        Qty:   3
//        Total: 1350 yen

// 在这里写你的代码 ↓
    console.log(product + " x " + quantity + " = " + price * quantity + " yen");
    console.log(`${product} x ${quantity} = ${price * quantity} yen`);
    console.log();
    console.log(`=== Receipt ===\nItem: ${product}\nQty: ${quantity}\nTotal: ${price * quantity} yen`);


// ============================================================
// 第 4 题：交换两个变量
// ============================================================
// 已知 a = 1, b = 2，交换后输出：
//   a = 2, b = 1
//
// 要求：
//   1. 方法一：借助一个临时变量 temp
//   2. 方法二：用解构赋值一行完成  [a, b] = [b, a]
//      （解构会在 05_objects 详细学，这里先体验）
//   3. 想一想：a 和 b 应该用 const 还是 let？为什么？

// 在这里写你的代码 ↓

let a = 1;
let b = 2;
let temp = a;
a = b;
b = temp;
console.log(`Method 1: a = ${a}, b = ${b}`);

a = 1;
b = 2;
[a, b] = [b, a];
console.log(`Method 2: a = ${a}, b = ${b}`);

//用let 因为要重新赋值
