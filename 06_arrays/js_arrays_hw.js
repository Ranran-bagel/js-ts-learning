// 06_arrays 作业（JS）
// 运行：node 06_arrays/js_arrays_hw.js
//
// 大纲：
//   第 1 题：数组基础操作
//   第 2 题：循环
//   第 3 题：map / filter / reduce / find / some / every / sort
//   第 4 题：链式调用
//   第 5 题：FizzBuzz 完整版
//   第 6 题：综合 —— 统计单词出现次数
//
// 规则：题目说明用中文，程序输出一律用英文

// ============================================================
// 第 1 题：数组基础操作
// ============================================================
// 从 const fruits = ["apple", "banana", "cherry"]; 开始，依次完成并输出：
//   1. 长度                         → Length: 3
//   2. 第一个和最后一个元素（最后一个用 at(-1)）
//                                   → First: apple, Last: cherry
//   3. 用 push 在末尾加 "date"       → [ 'apple', 'banana', 'cherry', 'date' ]
//   4. 用 pop 删除末尾，输出删掉的值  → Removed: date
//   5. 用 unshift 在开头加 "kiwi"    → [ 'kiwi', 'apple', 'banana', 'cherry' ]
//   6. 用 shift 删除开头              → Removed: kiwi
//   7. 用 includes 和 indexOf：
//        Has banana: true
//        Index of cherry: 2
//        Index of grape: -1
//   想一想：fruits 是 const，为什么还能 push？

// 在这里写你的代码 ↓


// ============================================================
// 第 2 题：循环
// ============================================================
// 要求：
//   1. 用三种写法遍历 fruits，都输出「下标: 值」：
//        a. for (let i = 0; ...)
//        b. for...of（下标用 fruits.entries() 和解构 [index, fruit]）
//        c. forEach((fruit, index) => ...)
//      输出：
//        0: apple
//        1: banana
//        2: cherry
//   2. 用 for 循环求 1〜100 的总和，输出：
//        Sum of 1 to 100: 5050
//   3. 用 while 循环：从 1 开始不断乘以 2，找出第一个大于 1000 的数，输出：
//        First power of 2 over 1000: 1024

// 在这里写你的代码 ↓


// ============================================================
// 第 3 题：数组方法
// ============================================================

const products = [
  { name: "Laptop", price: 1200, category: "tech" },
  { name: "Mouse", price: 25, category: "tech" },
  { name: "Desk", price: 300, category: "furniture" },
  { name: "Chair", price: 150, category: "furniture" },
  { name: "Monitor", price: 400, category: "tech" },
];

// 要求（每一项都不用 for 循环，只用数组方法）：
//   1. map：所有商品名
//        [ 'Laptop', 'Mouse', 'Desk', 'Chair', 'Monitor' ]
//   2. filter：价格低于 200 的商品名
//        [ 'Mouse', 'Chair' ]
//   3. reduce：所有商品的总价
//        Total: $2075
//   4. find：第一个 furniture 商品的名字
//        First furniture: Desk
//   5. some / every：
//        Any over $1000: true
//        All over $10: true
//   6. 按价格从低到高排序后的商品名（注意：不能修改原数组 products！）
//        [ 'Mouse', 'Chair', 'Desk', 'Monitor', 'Laptop' ]
//      提示：sort 会修改原数组，可以先复制 [...products]，或者用 toSorted

// 在这里写你的代码 ↓


// ============================================================
// 第 4 题：链式调用
// ============================================================
// 要求：用一条「链」（filter → map → reduce）计算 tech 类商品的平均价格，
//       保留两位小数，输出：
//         Average tech price: $541.67

// 在这里写你的代码 ↓


// ============================================================
// 第 5 题：FizzBuzz 完整版
// ============================================================
// 用循环输出 1〜20 的 FizzBuzz（规则同 03 第 5 题），每行一个：
//   1
//   2
//   Fizz
//   4
//   Buzz
//   ...
//   FizzBuzz
//   ...
// 进阶：先用 map 生成一个包含 20 个结果的数组，再用 join(", ") 输出成一行

// 在这里写你的代码 ↓


// ============================================================
// 第 6 题：综合 —— 统计单词出现次数
// ============================================================

const sentence = "the quick brown fox jumps over the lazy dog and the cat";

// 要求：
//   1. 用 split(" ") 拆成单词数组
//   2. 统计每个单词出现的次数，存进一个对象，输出：
//        { the: 3, quick: 1, brown: 1, ... }
//   3. 找出出现次数最多的单词，输出：
//        Most frequent: the (3)
//   提示：第 2 步可以用 for...of，也可以挑战用 reduce

// 在这里写你的代码 ↓

