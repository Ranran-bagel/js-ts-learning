// 03_conditions 作业（JS）
// 运行：node 03_conditions/js_conditions_hw.js
//
// 大纲：
//   第 1 题：if / else if / else —— 成绩评级
//   第 2 题：switch —— 星期
//   第 3 题：三元运算符
//   第 4 题：truthy / falsy
//   第 5 题：综合 —— FizzBuzz
//
// 规则：题目说明用中文，程序输出一律用英文

// ============================================================
// 第 1 题：if / else if / else —— 成绩评级
// ============================================================
// 规则：90 以上 A，80 以上 B，70 以上 C，60 以上 D，其余 F。
//       小于 0 或大于 100 是无效分数。
//
// 要求：把 score 依次改成 95 / 85 / 72 / 60 / 30 / 120 测试，输出：
//   Score 95: A
//   Score 85: B
//   Score 72: C
//   Score 60: D
//   Score 30: F
//   Score 120: Invalid score
// 想一想：无效分数的判断应该放在最前面还是最后面？
// 放在最前面

const score = 85;

// 在这里写你的代码 ↓
if (score > 100 || score < 0){
	console.log("Invalid score");
}
else if (score >= 90 && score <= 100){
	console.log(`Score ${score}: A`)
}
else if (score >= 80){
	console.log(`Score ${score}: B`)
}
else if (score >= 70){
	console.log(`Score ${score}: C`)
}
else if (score >= 60){
	console.log(`Score ${score}: D`)
}
else {
	console.log(`Score ${score}: F`)
}

console.log();

// ============================================================
// 第 2 题：switch —— 星期
// ============================================================
// day 是 0〜6 的数字（0 是 Sunday，6 是 Saturday）。
//
// 要求：
//   1. 用 switch 把数字转换成英文星期名，存进 dayName
//   2. 再写一个 switch 判断是周末还是工作日：
//      case 0 和 case 6 共用同一段代码（利用「不写 break 会继续往下执行」）
//   3. 不在 0〜6 范围内时，用 default 输出 Invalid day
//   输出例：
//     Day 6: Saturday (weekend)
//     Day 3: Wednesday (weekday)
//     Day 9: Invalid day

const day = 6;

let dayName;
switch (day) {
	case 0: dayName = "Sunday"; break;
	case 1: dayName = "Monday"; break;
	case 2: dayName = "Tuesday"; break;
	case 3: dayName = "Wednesday"; break;
	case 4: dayName = "Thursday"; break;
	case 5: dayName = "Friday"; break;
	case 6: dayName = "Saturday"; break;
	default: dayName = "Invalid day";
}

switch (day) {
	case 0:
	case 6:
		console.log(`Day ${day}: ${dayName} (weekend)`);
		break;
	case 1:
	case 2:
	case 3:
	case 4:
	case 5:
		console.log(`Day ${day}: ${dayName} (weekday)`);
		break;
	default:
		console.log(`Day ${day}: Invalid day`)
}


// ============================================================
// 第 3 题：三元运算符 ? :
// ============================================================
// 要求：
//   1. 用一行三元运算符判断成年（18 岁以上）还是未成年，输出：
//        Age 20: adult
//        Age 15: minor
//   2. 用「嵌套三元运算符」判断气温：30 以上 hot，15 以上 warm，其余 cold，输出：
//        25°C is warm
//   3. 想一想：嵌套三元运算符和 if / else if，哪种更好读？ 当然是if/else if 更好读

let age = 20;
let temperature = 25;
// 在这里写你的代码 ↓
console.log(`Age ${age}: ${age >= 18 ? "adult" : "minor"}`);
age = 15
console.log(`Age ${age}: ${age >= 18 ? "adult" : "minor"}`);
console.log()
console.log(`${temperature}°C is ${temperature >= 30 ? "hot" : temperature >= 15 ? "warm" : "cold"}`);
console.log();

// ============================================================
// 第 4 题：truthy / falsy（先预测，再运行）
// ============================================================
// Boolean(x) 等于把 x 放进 if (x) 时被当成 true 还是 false。

console.log(Boolean(0));         // 预测：falsy      实际：false
console.log(Boolean("0"));       // 预测：truthy      实际：true
console.log(Boolean(""));        // 预测：falsy      实际：false
console.log(Boolean(" "));       // 预测：true      实际：true
console.log(Boolean(null));      // 预测：falsy      实际：false
console.log(Boolean(undefined)); // 预测：falsy      实际：false
console.log(Boolean(NaN));       // 预测：falsy      实际：false
console.log(Boolean([]));        // 预测：truthy      实际：true
console.log(Boolean({}));        // 预测：truthy      实际：true
console.log(Boolean(-1));        // 预测：truthy      实际：true
console.log(Boolean("false"));   // 预测：truthy      实际：true

// 总结：falsy 的值一共有哪几个？
// 6个 0 "" null undefined NaN false
 
// ============================================================
// 第 5 题：综合 —— FizzBuzz
// ============================================================
// 规则：n 能被 3 和 5 整除输出 FizzBuzz，只能被 3 整除输出 Fizz，
//       只能被 5 整除输出 Buzz，否则输出数字本身。
//
// 要求：把 n 依次改成 15 / 9 / 10 / 7 测试，输出：
//   15: FizzBuzz
//   9: Fizz
//   10: Buzz
//   7: 7
// 想一想：判断的顺序为什么很重要？ 因为比如先判断3的话可以被3和5同时整除的数就会在判断3的时候被截断
// （学了循环后，会在 06_arrays 里把 1〜20 一次性输出）

// 在这里写你的代码 ↓
for (const n of [15, 9, 10, 7]){
	if (n % 15 === 0){
		console.log(`${n}: FizzBuzz`);
	}
	else if (n % 3 === 0){
		console.log(`${n}: Fizz`);
	}
	else if (n % 5 === 0){
		console.log(`${n}: Buzz`);
	}
	else {
		console.log(`${n}: ${n}`);
	}
}
