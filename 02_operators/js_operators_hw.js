// 02_operators 作业（JS）
// 运行：node 02_operators/js_operators_hw.js

// ============================================================
// 第 1 题：算术运算符  + - * / % **
// ============================================================
// 给定总秒数 totalSeconds = 3725
// 请计算出它是「几小时 几分钟 几秒」，并输出：
//   1h 2m 5s
//
// 要求：
//   1. 只用算术运算符，以及 Math.floor()（向下取整，例：Math.floor(2.7) → 2）
//   2. 小时、分钟、秒分别存进 hours / minutes / seconds 三个变量
//   3. 用模板字符串 `${}` 输出
//   4. 写完后把 totalSeconds 改成 86399 再跑一次，应该输出 23h 59m 59s
//
// 提示：% 是取余数，例：7 % 3 → 1

const totalSeconds = 86399;

// 在这里写你的代码 ↓
let hours = Math.floor(totalSeconds / (60 ** 2));

let minutes = Math.floor((totalSeconds - 60 ** 2 * hours) / 60);

let seconds = totalSeconds - hours * 60 ** 2 - minutes * 60;

console.log(`${hours}h ${minutes}m ${seconds}s`);
console.log();


// ============================================================
// 第 2 题：隐式类型转换（先预测，再运行）
// ============================================================
// 步骤：
//   1. 不要运行！先在每行的「预测：」后面写上你认为的输出
//   2. 运行，把实际结果写在「实际：」后面
//   3. 猜错的行，用一句话写下原因
//
// 提示：思考 + 遇到字符串时会怎样，- * / 遇到字符串时又会怎样

console.log("5" + 3);       // 预测：   53   实际：53
console.log("5" - 3);       // 预测：   2   实际：2
console.log("5" * "2");     // 预测：   10   实际：10
console.log(1 + 2 + "3");   // 预测：   123   实际：33
console.log("1" + 2 + 3);   // 预测：   123 实际：123
console.log(true + 1);      // 预测：   2   实际：2
console.log("abc" * 2);     // 预测：   abcabc  实际：NaN
console.log(+"42");         // 预测：   42   实际：42
console.log(null + 1);      // 预测：   1  实际：1
console.log(undefined + 1); // 预测：   1  实际：NaN
console.log();

// 总结（用自己的话写）：
// 没考虑代码按顺序计算
// 和python的*号混淆
// 忘记了NaN的存在
//   + 的规则：遇到字符串会拼接
//   - * / 的规则：- 和 * 和 / 遇到数字的字符串会变成数字演算 如果遇到非数字会输出NaN

// ============================================================
// 第 3 题：比较运算符 == 和 ===（先预测，再运行）
// ============================================================

console.log(5 == "5");           // 预测：true     实际：true
console.log(5 === "5");          // 预测：false      实际：false
console.log(0 == false);         // 预测：true     实际：true
console.log(0 === false);        // 预测：false      实际：false
console.log("" == 0);            // 预测：true     实际：true
console.log(null == undefined);  // 预测：true      实际：true
console.log(null === undefined); // 预测：false      实际：false
console.log(null == 0);          // 预测：false      实际：false
console.log(NaN == NaN);         // 预测：true      实际：false NaN的特殊规则，它不等于任何值包括它自己
console.log("b" > "a");          // 预测：true     实际：true
console.log("10" > "9");         // 预测：true     实际：false unicode编码按每个字符来一个一个比

console.log();

// 总结：平时应该用 == 还是 ===？为什么？
//用=== 因为行为更精准 ==会自动转换 比如“”转换成0再去比较

// ============================================================
// 第 4 题：逻辑运算符 && || ?? ?.
// ============================================================
// (a) 先预测，再运行
console.log("hello" && "world"); // 预测：world      实际：world
console.log(0 && "world");       // 预测：0      实际：0
console.log("" || "default");    // 预测：default      实际：default
console.log("hi" || "default");  // 预测：hi      实际：hi
console.log(0 || 100);           // 预测：100      实际：100
console.log(0 ?? 100);           // 预测：0      实际：0
console.log(null ?? 100);        // 预测：100      实际：100
console.log(!"");                // 预测：true      实际：true
console.log(!!"abc");            // 预测：false      实际：true 双重取反 abc是truthy


console.log();
// (b) 写代码：用户设置的默认值
// 已知：
const settings = { volume: 0, username: "", theme: null };
const user = { name: "Alice", profile: null };
//
// 默认值：volume 是 50，username 是 "Guest"，theme 是 "light"
// 要求：
//   1. 分别用 || 和 ?? 求出音量，输出：
//        Volume (||): 50
//        Volume (??): 0
//      想一想：用户把音量设成 0（静音）时，哪种写法才是对的？
//   2. 求 username 和 theme 的值，输出：
//        Username: Guest
//        Theme: light
//   3. user.profile 是 null，直接访问 user.profile.email 会报错。
//      用 ?. 和 ?? 安全地取 email，输出：
//        Email: (none)

// 在这里写你的代码 ↓
console.log(`Volume (||): ${settings.volume || 50}`);
console.log(`Volume (??): ${settings.volume ?? 50}`);
//设置静音是??的写法是正确的
console.log(`Username: ${settings.username || "Guest"}`);
console.log(`Theme: ${settings.theme || "light"}`);
console.log(`Email: ${user?.profile?.email ?? "(none)"}`)


console.log();

// ============================================================
// 第 5 题：赋值和自增运算符（先预测，再运行）
// ============================================================

let i = 5;
console.log(i++); // 预测：  5    实际：5
console.log(i);   // 预测：  6   实际：6
console.log(++i); // 预测：  7    实际：7

let j = 10;
j += 5;
j *= 2;
j -= 10;
j /= 4;
console.log(j);   // 预测： 5     实际：5

let k = 3;
k **= 2;
console.log(k);   // 预测：  9    实际：9

let text = "Hi";
text += "!";
console.log(text); // 预测：  Hi!   实际：Hi!

console.log();

// ============================================================
// 第 6 题：综合 —— 判断闰年
// ============================================================
// 闰年规则：能被 4 整除但不能被 100 整除，或者能被 400 整除。
//
// 要求：
//   1. 不用 if，只用 % === && || 写成「一个表达式」，结果存进 isLeapYear
//   2. 用 year = 2024 / 1900 / 2000 / 2023 分别测试，输出：
//        2024 is a leap year: true
//        1900 is a leap year: false
//        2000 is a leap year: true
//        2023 is a leap year: false
//   提示：可以把 year 改成不同数字跑 4 次，学了函数后可以更方便

const years = [2024, 1900, 2000, 2023];

// 在这里写你的代码 ↓
for (const year of years){
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
    console.log(`${year} is a leap year: ${isLeapYear}`);
}
