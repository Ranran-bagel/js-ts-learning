// 02_operators 作业（JS）
// 运行：node 02_operators/js_operators_hw.js

// ============================================================
// 第 1 题：算术运算符  + - * / % **
// ============================================================
// 给定总秒数 totalSeconds = 3725
// 请计算出它是「几小时 几分钟 几秒」，并输出：
//   1小时 2分钟 5秒
//
// 要求：
//   1. 只用算术运算符，以及 Math.floor()（向下取整，例：Math.floor(2.7) → 2）
//   2. 小时、分钟、秒分别存进 hours / minutes / seconds 三个变量
//   3. 用模板字符串 `${}` 输出
//   4. 写完后把 totalSeconds 改成 86399 再跑一次，应该输出 23小时 59分钟 59秒
//
// 提示：% 是取余数，例：7 % 3 → 1

const totalSeconds = 86399;

// 在这里写你的代码 ↓
let hours = Math.floor(totalSeconds / (60 ** 2));

let minutes = Math.floor((totalSeconds - 60 ** 2 * hour) / 60)

let seconds = totalSeconds - hour * 60 ** 2 - minutes * 60

console.log(`${hour}小时${minutes}分钟${seconds}秒`)


