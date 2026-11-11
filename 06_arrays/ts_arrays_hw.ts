// 06_arrays 作业（TS）
// 运行：npm run ts 06_arrays/ts_arrays_hw.ts
// 类型检查：npm run check
//
// 规则：题目说明用中文，程序输出一律用英文

// ============================================================
// 第 1 题：数组的类型
// ============================================================
// 要求：
//   1. 用 number[] 定义 scores = [90, 75, 82]
//   2. 用 Array<string> 定义 tags = ["js", "ts"]
//   3. 实验：scores.push("100") → 错误信息：
//   4. 不写类型，直接 const mixed = [1, "two", true];
//      鼠标停在 mixed 上，看看推断出的类型是什么：
//   5. 输出：
//        Scores: 90, 75, 82
//        Tags: js, ts

// 在这里写你的代码 ↓


// ============================================================
// 第 2 题：元组（tuple）
// ============================================================
// 元组是「长度和每个位置的类型都固定」的数组。
//
// 要求：
//   1. type Point = [number, number]; 创建一个点 [3, 4]
//   2. 写 distance(point: Point): number，返回到原点的距离（Math.sqrt）
//        Distance of (3, 4): 5
//   3. 创建 const entry: [string, number] = ["apple", 3]; 用解构取出两个值，输出：
//        apple x 3
//   4. 实验：给 Point 传 3 个数字，或者把顺序写反 ["apple", 3] → [3, "apple"]，看看错误信息

// 在这里写你的代码 ↓


// ============================================================
// 第 3 题：对象数组和数组方法
// ============================================================
// 要求：
//   1. 定义 type Product = { name: string; price: number; category: "tech" | "furniture" };
//   2. 把 JS 第 3 题的 products 写成 Product[] 类型
//   3. 重做 JS 第 3 题的 map / filter / reduce，并在 VS Code 里
//      鼠标停在每个结果上，确认 TS 自动推断出的类型
//   4. 实验：在数组里加一个 category: "food" 的商品，看看报什么错

// 在这里写你的代码 ↓


// ============================================================
// 第 4 题：可能取不到值的情况
// ============================================================
// noUncheckedIndexedAccess 开启后，products[0] 的类型是 Product | undefined。
// find 的返回值同样可能是 undefined。
//
// 要求：
//   1. 写 getFirstName(list: Product[]): string
//      列表为空时返回 "(empty)"
//        getFirstName(products) → Laptop
//        getFirstName([])       → (empty)
//   2. 写 findByName(list: Product[], name: string): string
//      找到时返回 "Desk: $300"，找不到返回 "Not found: Sofa"
//   3. 实验：不做 undefined 检查直接写 products[0].name，看看报什么错

// 在这里写你的代码 ↓

