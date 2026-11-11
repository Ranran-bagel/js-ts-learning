// 09_modules 作业（TS）
// 运行：npm run ts 09_modules/ts_modules_hw.ts
// 类型检查：npm run check
//
// 这一章要用到多个文件：
//   ts_math.ts   ← 第 1 题
//   ts_types.ts  ← 第 2 题
//
// 规则：题目说明用中文，程序输出一律用英文

// ↓ 在这里写 import


// ============================================================
// 第 1 题：TS 里的 import 路径
// ============================================================
// 要求：
//   1. 在 ts_math.ts 里完成带类型的 export
//   2. 在这里导入。注意：文件是 ts_math.ts，但 import 路径要写成 "./ts_math.js"！
//        import { add, PI } from "./ts_math.js";
//   3. 实验：
//      a. 把路径写成 "./ts_math"（不写扩展名）→ 错误信息：
//      b. 把路径写成 "./ts_math.ts" → 错误信息：
//   4. 输出：
//        2 + 3 = 5
//   想一想：为什么要写 .js？（提示：TS 最终会被编译成 .js 来运行）

// 在这里写你的代码 ↓


// ============================================================
// 第 2 题：导入类型 import type
// ============================================================
// 这个项目开启了 verbatimModuleSyntax，导入「类型」时必须明确写 type。
//
// 要求：
//   1. 在 ts_types.ts 里完成 export
//   2. 实验：用普通的 import { User } 导入类型，运行 npm run check → 错误信息：
//   3. 改成下面两种写法之一：
//        import type { User, Role } from "./ts_types.js";
//        import { createUser, type User } from "./ts_types.js";
//   4. 创建两个用户，输出：
//        #1 Alice (admin)
//        #2 Bob (member)
//   想一想：为什么类型要单独标记出来？（提示：类型在运行时还存在吗？）

// 在这里写你的代码 ↓

