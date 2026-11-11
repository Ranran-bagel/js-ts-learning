// 03_conditions 作业（TS）
// 运行：npm run ts 03_conditions/ts_conditions_hw.ts
// 类型检查：npm run check
//
// 规则：题目说明用中文，程序输出一律用英文

// ============================================================
// 第 1 题：成绩评级 + 字面量类型
// ============================================================
// 要求：
//   1. 把 JS 第 1 题用 TS 重写，结果存进 grade 变量，输出：
//        Score 85: B
//   2. 先把 grade 的类型写成 string
//   3. 再把类型改成只允许这几个值：
//        "A" | "B" | "C" | "D" | "F" | "Invalid"
//      然后试着写 grade = "E"，运行 npm run check，把错误信息抄下来
//   4. 想一想：限定成这几个值有什么好处？ 避免拼写错误

const score: number = 85;

// 在这里写你的代码 ↓
let grade: "A" | "B" | "C" | "D" | "F" | "Invalid" = "A";
//grade = "E"; //error TS2322: Type '"E"' is not assignable to type '"A" | "B" | "C" | "D" | "F" | "Invalid"'.
if (score > 100 || score < 0){
	grade = "Invalid";
	console.log(`Score ${score}: ${grade}`);
}
else if (score >= 90 && score <= 100){
	grade = "A";
	console.log(`Score ${score}: ${grade}`);
}
else if (score >= 80){
	grade = "B";
	console.log(`Score ${score}: ${grade}`);
}
else if (score >= 70){
	grade = "C";
	console.log(`Score ${score}: ${grade}`);
}
else if (score >= 60){
	grade = "D";
	console.log(`Score ${score}: ${grade}`);
}
else {
	grade = "F";
	console.log(`Score ${score}: ${grade}`);
}


// ============================================================
// 第 2 题：switch + 联合类型
// ============================================================
// 已知信号灯只有三种颜色：

type Light = "red" | "yellow" | "green";
// 写成 as Light，是为了让 TS 把它当成「三种颜色之一」，而不是固定的 "yellow"
let light = "yellow" as Light;

// 要求：
//   1. 用 switch 输出对应的动作：
//        red    → Stop
//        yellow → Caution
//        green  → Go
//      输出例：yellow: Caution
//   2. 实验：加一个 case "purple":，看看 TS 报什么错
//   3. 实验：在 VS Code 里输入 case " 时，看看编辑器的自动补全提示了什么 提示了type Light

// 在这里写你的代码 ↓
switch (light){
	case "red": console.log(`${light}: Stop`);
	break;
	case "yellow": console.log(`${light}: Caution`);
	break;
	case "green": console.log(`${light}: Go`);
	//case "purple": console.log(`${light}: Error`); //error TS2678: Type '"purple"' is not comparable to type 'Light'.
}

// ============================================================
// 第 3 题：类型收窄（预习）
// ============================================================
// input 可能是字符串，也可能是数字。
//
// 要求：
//   1. 用 if (typeof input === "string") 区分两种情况
//      - 字符串：输出长度          → "hello" has length 5
//      - 数字：保留两位小数输出    → 3.14159 rounded is 3.14
//   2. 在 if 里面和 else 里面，分别把鼠标停在 input 上，看看类型有什么变化
//   3. 实验：在 if 外面直接写 input.length，看看报什么错
//
// 提示：数字保留小数用 toFixed(2)

// 写成 as，是为了让 TS 把它当成「字符串或数字」，而不是固定的字符串（as 以后会学）
let input = "hello" as string | number;

// 在这里写你的代码 ↓
//console.log(input.length);//error TS2339: Property 'length' does not exist on type 'string | number'.
if (typeof input === "string"){
	console.log(`"${input}" has length ${input.length}`);
}
else if (typeof input === "number"){
	console.log(`${input} rounded is ${input.toFixed(2)}`);
}

