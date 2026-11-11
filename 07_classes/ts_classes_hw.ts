// 07_classes 作业（TS）
// 运行：npm run ts 07_classes/ts_classes_hw.ts
// 类型检查：npm run check
//
// 规则：题目说明用中文，程序输出一律用英文

// ============================================================
// 第 1 题：带类型的类、访问修饰符
// ============================================================
// 要求：
//   1. 把 JS 第 1 题的 BankAccount 用 TS 重写：
//        readonly owner: string
//        private balance: number
//   2. 输出和 JS 第 1 题一样
//   3. 实验（每个做完就注释掉）：
//      a. 在外部修改 account.owner → 错误信息：
//      b. 在外部读取 account.balance → 错误信息：
//   4. 想一想：TS 的 private 和 JS 的 # 有什么区别？
//      （提示：用 npm run ts 运行时，private 还能拦住吗？）

// 在这里写你的代码 ↓


// ============================================================
// 第 2 题：参数属性（简写）
// ============================================================
// TS 可以在 constructor 的参数上直接写修饰符，自动生成属性：
//   constructor(public readonly name: string, private age: number) {}
//
// 要求：
//   1. 用这种写法写 class User，包含 name（public readonly）和 email（private）
//   2. 加一个方法 getMaskedEmail()：把 "alice@example.com" 变成 "a****@example.com"
//   3. 输出：
//        Alice <a****@example.com>

// 在这里写你的代码 ↓


// ============================================================
// 第 3 题：抽象类
// ============================================================
// 要求：
//   1. 把 JS 第 5 题的 Shape 改成 abstract class，area() 改成 abstract area(): number
//   2. Circle、Rectangle 继承它并实现 area()
//   3. 实验：
//      a. new Shape("x") → 错误信息：
//      b. 写一个继承 Shape 但不实现 area() 的类 → 错误信息：
//   4. 用 Shape[] 类型的数组保存图形，输出和 JS 第 5 题一样

// 在这里写你的代码 ↓


// ============================================================
// 第 4 题：interface + implements
// ============================================================
// 要求：
//   1. interface Printable { print(): void }
//      interface Discountable { applyDiscount(rate: number): void }
//   2. class Book implements Printable：print() 输出 Book: 1984
//   3. class Product implements Printable, Discountable：
//        print() 输出 Product: Laptop ($1200)
//        applyDiscount(0.1) 后再 print() → Product: Laptop ($1080)
//   4. 把 Book 和 Product 放进 Printable[] 数组，循环调用 print()

// 在这里写你的代码 ↓


// ============================================================
// 第 5 题：protected
// ============================================================
// 要求：
//   1. class Employee：protected salary: number，private id: string
//   2. class Manager extends Employee：方法 getBonus() 返回 salary 的 20%
//   3. 实验：在 Manager 里访问 this.id，在外部访问 manager.salary，看看报错
//   4. 总结 public / protected / private 各自能在哪里访问：
//        public：
//        protected：
//        private：
//   输出：Bonus: $1000（salary 是 5000 时）

// 在这里写你的代码 ↓

