// 05_objects 作业（TS）
// 运行：npm run ts 05_objects/ts_objects_hw.ts
// 类型检查：npm run check
//
// 规则：题目说明用中文，程序输出一律用英文

// ============================================================
// 第 1 题：用 type 定义对象的形状
// ============================================================
// 要求：
//   1. 定义 type Book：title (string)、author (string)、year (number)、
//      isRead (boolean)、pages（可选，number）
//   2. 创建一个 Book 类型的 book，输出：
//        1984 by George Orwell (1949)
//   3. 实验（每做完一个就注释掉）：
//      a. 少写一个必填属性 → 错误信息：
//      b. 多写一个 Book 里没有的属性 rating: 5 → 错误信息：
//      c. 把 year 写成 "1949" → 错误信息：

// 在这里写你的代码 ↓


// ============================================================
// 第 2 题：用 interface 定义带方法的对象
// ============================================================
// 要求：
//   1. 定义 interface Player：name (string)、score (number)、
//      addPoints(points: number): void、describe(): string
//   2. 用它创建 player 对象（和 JS 第 2 题一样的逻辑），输出：
//        Alice has 15 points

// 在这里写你的代码 ↓


// ============================================================
// 第 3 题：readonly
// ============================================================
// 要求：
//   1. 定义 type Point = { readonly x: number; readonly y: number };
//   2. 创建一个 Point，试着修改 x，把错误信息抄下来
//   3. 想一想：readonly 和 const 有什么不同？
//   4. 用展开运算符创建一个 x 改为 10 的新 Point，输出：
//        Moved: (10, 2)

// 在这里写你的代码 ↓


// ============================================================
// 第 4 题：扩展类型 —— extends 和 &
// ============================================================
// 要求：
//   1. interface Animal { name: string }
//   2. 用 interface 的 extends 定义 Dog：多一个 breed (string)
//   3. 用 type 的 & 定义 Cat：在 Animal 的基础上多一个 isIndoor (boolean)
//   4. 各创建一个，输出：
//        Dog: Max (Shiba)
//        Cat: Luna (indoor)
//   5. 总结：type 和 interface 有什么区别？（可以查资料，用自己的话写）

// 在这里写你的代码 ↓


// ============================================================
// 第 5 题：函数的参数是对象
// ============================================================
// 要求：
//   1. 定义 type Product：id、name、price、specs: { cpu: string; ram: number }
//   2. 写 describeProduct(product: Product): string，在参数里解构，返回：
//        Laptop (M3, 16GB): $1200
//   3. 写 applyDiscount(product: Product, rate: number): Product
//      返回打折后的「新对象」，不修改原对象
//        applyDiscount(laptop, 0.1) 的价格 → 1080

// 在这里写你的代码 ↓


// ============================================================
// 第 6 题：Record 和 noUncheckedIndexedAccess
// ============================================================
// 这个项目的 tsconfig 开启了 noUncheckedIndexedAccess，
// 所以用 [key] 取值时，TS 会认为结果「可能是 undefined」。

const scores: Record<string, number> = { math: 90, english: 75 };

// 要求：
//   1. const math = scores["math"]; 鼠标停在 math 上，看看类型是什么
//   2. 试着写 scores["art"] + 10，看看报什么错
//   3. 用 ?? 给不存在的科目默认 0 分，输出：
//        math: 90
//        art: 0

// 在这里写你的代码 ↓

