// 02_operators 作业（TS）
// 运行：npm run ts 02_operators/ts_operators_hw.ts
// 类型检查：npm run check
//
// 规则：题目说明用中文，程序输出一律用英文

// ============================================================
// 第 1 题：时间换算（带类型）
// ============================================================
// 把 JS 第 1 题用 TS 重写：所有变量都写上类型注解。
// 这次请用 % 来计算分钟和秒。
// 输出（totalSeconds = 3725 时）：
//   1h 2m 5s

const totalSeconds: number = 3725;

// 在这里写你的代码 ↓
const hour: number = Math.floor(totalSeconds / (60 ** 2));
const minute: number = Math.floor(totalSeconds / 60 % 60);
const second: number = totalSeconds % 60;
console.log(`${hour}h ${minute}m ${second}s`);
console.log();

// ============================================================
// 第 2 题：TS 会拦住哪些隐式类型转换？
// ============================================================
// 把下面每一行逐一取消注释，运行 npm run check：
//   - 报错的行：在后面写「❌」，并抄一句错误信息
//   - 不报错的行：写「✅」
// 最后总结：TS 允许哪些写法，禁止哪些写法？

console.log("5" + 3);       //✅
 //console.log("5" - 3);       //❌error TS2362: The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
 //console.log("5" * "2");     //❌error TS2363: The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
 //console.log(true + 1);      //❌error TS2365: Operator '+' cannot be applied to types 'boolean' and 'number'.
 //console.log("abc" * 2);     //❌error TS2362: The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
 console.log(+"42");         //✅
 //console.log(null + 1);      //❌error TS18050: The value 'null' cannot be used here.

 console.log();
// 总结：TS 只允许「明显是故意」的转换（字符串拼接、+x、Number(x)），禁止「偷偷」发生的隐式转换。
//

// ============================================================
// 第 3 题：TS 里的比较
// ============================================================
// 取消注释，看看 TS 对 5 == "5" 和 5 === "5" 说了什么，抄下错误信息。
//
const n: number = 5;
const s: string = "5";
//console.log(n == s);//error TS2367: This comparison appears to be unintentional because the types 'number' and 'string' have no overlap.
//console.log(n === s);//error TS2367: This comparison appears to be unintentional because the types 'number' and 'string' have no overlap.

// 然后：用 Number() 把 s 转换成数字，写出不报错、输出 true 的比较。
// 输出：
//   Equal: true

// 在这里写你的代码 ↓
console.log(`Equal: ${Number(s) === n}`);
console.log(`Equal: ${Number(s) == n}`);
console.log();


// ============================================================
// 第 4 题：?? 和 ?. 配合类型
// ============================================================
// `number | null` 的意思是「可能是数字，也可能是 null」（10_ts_advanced 会详细学）。
//
// 要求：
//   1. 默认音量是 50，用 ?? 求出最终音量
//   2. 把 savedVolume 依次改成 0 和 null，分别输出：
//        Volume: 0
//        Volume: 50
//   3. 实验：用 || 代替 ?? 试试看，结果有什么不同？
// ||的话是左边只有是falsy就return右边，？？是判断左边是否为空值
// 写成 as，是为了让 TS 把它当成「数字或 null」，而不是固定的 0（as 以后会学）
let savedVolume = 0 as number | null;
// 在这里写你的代码 ↓

console.log(`Volume: ${savedVolume ?? 50}`);
console.log(`Volume: ${savedVolume || 50}`);
console.log();
savedVolume = null;
console.log(`Volume: ${savedVolume ?? 50}`);
console.log(`Volume: ${savedVolume || 50}`);