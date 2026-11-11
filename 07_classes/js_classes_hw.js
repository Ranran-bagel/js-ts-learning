// 07_classes 作业（JS）
// 运行：node 07_classes/js_classes_hw.js
//
// 大纲：
//   第 1 题：class / constructor / 方法 —— 银行账户
//   第 2 题：getter 和 static
//   第 3 题：继承 extends / super
//   第 4 题：私有字段 #
//   第 5 题：多态 —— 图形面积
//
// 规则：题目说明用中文，程序输出一律用英文

// ============================================================
// 第 1 题：银行账户
// ============================================================
// 要求：
//   1. 写 class BankAccount：
//        constructor(owner, balance = 0)
//        deposit(amount)：存钱
//        withdraw(amount)：取钱，余额不足时不扣钱
//   2. 按下面的顺序操作，并输出：
//        const account = new BankAccount("Alice", 100);
//        account.deposit(50);    → Deposited $50. Balance: $150
//        account.withdraw(30);   → Withdrew $30. Balance: $120
//        account.withdraw(500);  → Insufficient funds. Balance: $120
//   3. 进阶：存入或取出 0 以下的金额时，输出 Invalid amount

// 在这里写你的代码 ↓


// ============================================================
// 第 2 题：getter 和 static
// ============================================================
// 要求（在第 1 题的 BankAccount 上继续改）：
//   1. 加一个 getter：get summary()，返回 "Alice: $120"
//      调用时不加括号：account.summary
//   2. 加一个 static 属性 count，每创建一个账户就 +1
//   3. 再创建一个账户 new BankAccount("Bob")，输出：
//        Alice: $120
//        Bob: $0
//        Accounts created: 2
//   想一想：count 为什么要用 static，而不是放在每个账户里？

// 在这里写你的代码 ↓


// ============================================================
// 第 3 题：继承 extends / super
// ============================================================
// 要求：
//   1. 写 class SavingsAccount extends BankAccount：
//        constructor(owner, balance, interestRate)：用 super 调用父类的 constructor
//        addInterest()：按利率增加利息
//   2. 重写 summary，在父类结果后面加上利率（用 super.summary 获取父类的结果）
//   3. 输出：
//        const savings = new SavingsAccount("Carol", 1000, 0.05);
//        savings.addInterest();  → Interest added: $50. Balance: $1050
//        savings.summary         → Carol: $1050 (savings, 5%)
//        savings.deposit(100);   → Deposited $100. Balance: $1150
//   4. 输出 savings instanceof SavingsAccount 和 savings instanceof BankAccount 的结果

// 在这里写你的代码 ↓


// ============================================================
// 第 4 题：私有字段 #
// ============================================================
// 要求：
//   1. 写 class Wallet，用 #balance 保存余额，外部不能直接修改
//   2. 提供 add(amount) 和 get balance()
//   3. 输出：
//        const wallet = new Wallet();
//        wallet.add(30);
//        wallet.balance  → Wallet balance: $30
//   4. 实验：
//      a. 在 class 外面写 wallet.#balance = 1000000，运行看看报什么错
//      b. 写 wallet.balance = 1000000（没有 setter），再输出 wallet.balance，结果是？

// 在这里写你的代码 ↓


// ============================================================
// 第 5 题：多态 —— 图形面积
// ============================================================
// 要求：
//   1. class Shape：constructor(name)，area() 返回 0，describe() 返回
//      "Circle area: 78.54" 这样的字符串（面积保留两位小数）
//   2. class Circle extends Shape：半径 radius，重写 area()
//   3. class Rectangle extends Shape：宽 width、高 height，重写 area()
//   4. class Square extends Rectangle：只接收边长 side
//   5. 把它们放进同一个数组，用 forEach 调用 describe()，输出：
//        Circle area: 78.54
//        Rectangle area: 24.00
//        Square area: 9.00
//      （new Circle(5)、new Rectangle(4, 6)、new Square(3)）
//   想一想：forEach 里根本不知道每个元素是什么图形，为什么能算出正确的面积？

// 在这里写你的代码 ↓

