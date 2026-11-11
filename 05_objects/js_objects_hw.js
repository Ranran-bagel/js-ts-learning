// 05_objects 作业（JS）
// 运行：node 05_objects/js_objects_hw.js
//
// 大纲：
//   第 1 题：创建对象、访问和修改属性
//   第 2 题：方法和 this
//   第 3 题：解构赋值
//   第 4 题：展开运算符 ...
//   第 5 题：引用和复制（先预测，再运行）
//   第 6 题：Object.keys / values / entries
//
// 规则：题目说明用中文，程序输出一律用英文

// ============================================================
// 第 1 题：创建对象、访问和修改属性
// ============================================================
// 要求：
//   1. 创建 book 对象：title "1984"、author "George Orwell"、year 1949、isRead false
//   2. 用「点」访问输出：
//        1984 by George Orwell (1949)
//   3. 用「方括号」访问：const key = "author"; 用 book[key] 输出：
//        Author: George Orwell
//   4. 把 isRead 改成 true，再新增一个属性 pages: 328，然后用 delete 删除 year
//   5. console.log(book) 输出整个对象，确认修改结果
//   想一想：book 是 const，为什么还能修改它的属性？

// 在这里写你的代码 ↓


// ============================================================
// 第 2 题：方法和 this
// ============================================================
// 要求：
//   1. 创建 player 对象：name "Alice"、score 0，以及两个方法：
//        addPoints(points)：把 score 加上 points
//        describe()：返回 "Alice has 0 points" 这样的字符串
//   2. 调用 addPoints(10) 和 addPoints(5) 后，输出：
//        Alice has 15 points
//   3. 实验：把 describe 改成箭头函数，看看输出变成了什么，然后改回来

// 在这里写你的代码 ↓


// ============================================================
// 第 3 题：解构赋值
// ============================================================

const product = {
  id: 1,
  name: "Laptop",
  price: 1200,
  specs: { cpu: "M3", ram: 16 },
};

// 要求：
//   1. 一行解构出 name 和 price
//   2. 解构时把 price 改名为 cost
//   3. 解构一个不存在的属性 stock，给它默认值 0
//   4. 解构出嵌套的 specs.cpu
//   输出：
//     Laptop costs $1200, CPU: M3, stock: 0
//   5. 写 describeProduct({ name, price })：在「参数」里直接解构，返回：
//        Laptop: $1200

// 在这里写你的代码 ↓


// ============================================================
// 第 4 题：展开运算符 ...
// ============================================================
// 要求：
//   1. 用 ... 复制 product，同时把 price 改成 999，存进 discounted
//      输出 product.price 和 discounted.price，确认原对象没有被修改：
//        Original: $1200, Discounted: $999
//   2. 合并默认设置和用户设置（后面的覆盖前面的）：
//        const defaults = { theme: "light", fontSize: 14, language: "en" };
//        const userPrefs = { fontSize: 18, theme: "dark" };
//      输出合并后的对象：
//        { theme: 'dark', fontSize: 18, language: 'en' }
//      想一想：把 defaults 和 userPrefs 的顺序反过来，结果会怎样？

// 在这里写你的代码 ↓


// ============================================================
// 第 5 题：引用和复制（先预测，再运行）
// ============================================================

const a = { n: 1 };
const b = a;
b.n = 2;
console.log(a.n);                  // 预测：      实际：

const c = { ...a };
c.n = 3;
console.log(a.n);                  // 预测：      实际：

console.log(a === b);              // 预测：      实际：
console.log(a === c);              // 预测：      实际：
console.log({ n: 1 } === { n: 1 }); // 预测：     实际：

const original = { info: { level: 1 } };
const copy = { ...original };
copy.info.level = 99;
console.log(original.info.level);  // 预测：      实际：

// 总结：「浅拷贝」是什么意思？
//

// ============================================================
// 第 6 题：Object.keys / values / entries
// ============================================================

const scores = { math: 90, english: 75, science: 82 };

// 要求：
//   1. 分别输出 Object.keys(scores)、Object.values(scores)、Object.entries(scores)
//   2. 用 for...of 遍历 Object.entries(scores)，并用解构 [subject, score]，输出：
//        math: 90
//        english: 75
//        science: 82
//   3. 计算总分和平均分（保留 1 位小数），输出：
//        Total: 247, Average: 82.3

// 在这里写你的代码 ↓

