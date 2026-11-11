// 10_ts_advanced 作业（仅 TS）
// 运行：npm run ts 10_ts_advanced/ts_ts_advanced_hw.ts
// 类型检查：npm run check
//
// 大纲：
//   第 1 题：联合类型和字面量类型
//   第 2 题：类型收窄 typeof / in / instanceof
//   第 3 题：可辨识联合 + 穷尽检查
//   第 4 题：泛型函数
//   第 5 题：泛型类型和泛型类
//   第 6 题：泛型约束 extends 和 keyof
//   第 7 题：工具类型
//   第 8 题：综合 —— 待办事项管理器
//
// 规则：题目说明用中文，程序输出一律用英文

// ============================================================
// 第 1 题：联合类型和字面量类型
// ============================================================
// 要求：
//   1. type Status = "loading" | "success" | "error";
//   2. 写 getStatusMessage(status: Status): string
//        loading → Loading...
//        success → Done!
//        error   → Something went wrong.
//   3. type Id = string | number; 写 formatId(id: Id): string
//        formatId(42)      → ID-0042（数字补齐成 4 位，提示：String(id).padStart(4, "0")）
//        formatId("abc")   → ID-ABC（字符串转大写）

// 在这里写你的代码 ↓


// ============================================================
// 第 2 题：类型收窄
// ============================================================
// 要求：
//   1. typeof 收窄：写 describe(value: string | number | boolean): string
//        "hi"  → String of length 2
//        3.5   → Number: 3.50
//        true  → Boolean: yes
//   2. in 收窄：
//        type Fish = { swim: () => string };
//        type Bird = { fly: () => string };
//      写 move(animal: Fish | Bird): string，用 "swim" in animal 区分，
//      分别返回 animal.swim() 或 animal.fly() 的结果：
//        Swimming...
//        Flying...
//   3. instanceof 收窄：写 formatDate(input: Date | string): string
//        Date 对象 → 用 toISOString().slice(0, 10) 输出，如 2026-11-01
//        字符串    → 原样返回

// 在这里写你的代码 ↓


// ============================================================
// 第 3 题：可辨识联合 + 穷尽检查
// ============================================================
// 每个类型都有一个共同的字面量属性 kind，用它来区分。

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; height: number }
  | { kind: "triangle"; base: number; height: number };

// 要求：
//   1. 写 area(shape: Shape): number，用 switch (shape.kind)
//      在每个 case 里，鼠标停在 shape 上，看看类型变成了什么
//   2. 用 radius 5 的圆、4 x 6 的长方形、base 4 height 3 的三角形测试，输出：
//        circle: 78.54
//        rectangle: 24.00
//        triangle: 6.00
//   3. 穷尽检查：在 default 里写
//        const unreachable: never = shape;
//        throw new Error(`Unknown shape: ${JSON.stringify(unreachable)}`);
//      然后往 Shape 里加一个 { kind: "square"; side: number }，
//      看看 TS 在哪里报错 —— 这就是「忘了处理新情况」时 TS 的提醒

// 在这里写你的代码 ↓


// ============================================================
// 第 4 题：泛型函数
// ============================================================
// 要求：
//   1. 写 first<T>(items: T[]): T | undefined，返回第一个元素
//        first([1, 2, 3])     → 1
//        first(["a", "b"])    → a
//        first([])            → undefined
//      鼠标停在每个调用上，看看 T 被推断成了什么
//   2. 写 wrapInArray<T>(value: T): T[]
//   3. 写 pair<A, B>(a: A, b: B): [A, B]
//        pair("age", 30) → [ 'age', 30 ]
//   4. 想一想：如果把 T 都换成 any，会失去什么？

// 在这里写你的代码 ↓


// ============================================================
// 第 5 题：泛型类型和泛型类
// ============================================================
// 要求：
//   1. 定义 API 响应的泛型类型：
//        type ApiResponse<T> = { data: T | null; error: string | null };
//      分别创建 ApiResponse<User> 的成功响应和 ApiResponse<string[]> 的失败响应
//      （User 自己定义：{ id: number; name: string }）
//   2. 写 class Stack<T>：push(item: T)、pop(): T | undefined、peek()、get size()
//   3. 输出：
//        const stack = new Stack<number>();
//        push 1, 2, 3 后 → Size: 3, Top: 3
//        pop 一次后     → Popped: 3, Size: 2
//   4. 实验：stack.push("4") → 错误信息：

// 在这里写你的代码 ↓


// ============================================================
// 第 6 题：泛型约束 extends 和 keyof
// ============================================================
// 要求：
//   1. 写 longest<T extends { length: number }>(a: T, b: T): T
//        longest("apple", "kiwi")   → apple
//        longest([1, 2], [1, 2, 3]) → [ 1, 2, 3 ]
//      实验：longest(10, 20) → 错误信息：
//   2. 写 getProperty<T, K extends keyof T>(obj: T, key: K): T[K]
//        const user = { id: 1, name: "Alice", active: true };
//        getProperty(user, "name") → Alice
//      鼠标停在返回值上，看看类型是不是 string
//      实验：getProperty(user, "email") → 错误信息：

// 在这里写你的代码 ↓


// ============================================================
// 第 7 题：工具类型
// ============================================================

type Member = {
  id: number;
  name: string;
  email: string;
  age: number;
};

// 要求（每个都鼠标停上去看看生成的类型）：
//   1. Partial<Member>：写 updateMember(member: Member, changes: Partial<Member>): Member
//        updateMember(alice, { age: 31 }) → 只有 age 变了
//   2. Pick<Member, "id" | "name">：定义 MemberPreview，创建一个
//   3. Omit<Member, "email">：定义 PublicMember，创建一个
//   4. Readonly<Member>：创建一个，试着修改 name 看看报错
//   5. Record<"admin" | "editor" | "viewer", string[]>：定义每个角色的权限
//        admin: read, write, delete
//        editor: read, write
//        viewer: read
//   6. ReturnType<typeof updateMember>：看看得到什么类型

// 在这里写你的代码 ↓


// ============================================================
// 第 8 题：综合 —— 待办事项管理器
// ============================================================
// 把这一路学到的东西都用上。
//
// 要求：
//   1. type Priority = "low" | "medium" | "high";
//      type Todo = { readonly id: number; title: string; done: boolean; priority: Priority };
//   2. class TodoList：
//        add(title: string, priority?: Priority): Todo   —— priority 默认 "medium"，id 自动递增
//        toggle(id: number): void                         —— 切换完成状态，找不到时输出 Todo #id not found
//        remove(id: number): boolean                      —— 删除成功返回 true
//        filter(by: "all" | "done" | "pending"): Todo[]
//        print(): void                                    —— 按下面的格式输出全部
//   3. 依次执行：添加 3 个 → 完成第 1 个 → 删除第 2 个 → toggle(99) → print()，输出：
//        Todo #99 not found
//        [x] #1 Buy milk (high)
//        [ ] #3 Read a book (low)
//        2 items, 1 done
//      （第 2 个是 "Write homework"，medium）
//   4. 进阶：print() 时按优先级 high → medium → low 排序

// 在这里写你的代码 ↓

