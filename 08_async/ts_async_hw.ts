// 08_async 作业（TS）
// 运行：npm run ts 08_async/ts_async_hw.ts
// 类型检查：npm run check
//
// 规则：题目说明用中文，程序输出一律用英文

// ============================================================
// 第 1 题：Promise 的类型
// ============================================================
// 要求：
//   1. 写 wait(ms: number): Promise<void>
//   2. 定义 type User = { id: number; name: string };
//   3. 写 fetchUser(id: number): Promise<User>（逻辑同 JS 第 3 题）
//   4. 实验：在 fetchUser 里 resolve({ id }) 少传 name，看看报什么错
//   5. 输出：
//        Fetched: User1

// 在这里写你的代码 ↓


// ============================================================
// 第 2 题：async 函数的返回值类型
// ============================================================
// 要求：
//   1. 写 async function getUserName(id: number): Promise<string>
//      内部 await fetchUser(id)，返回名字
//   2. 实验：把返回值类型写成 string（不加 Promise），看看报什么错
//   3. 实验：const name = getUserName(1); 不加 await，鼠标停在 name 上看看类型
//   4. 输出：
//        Name: User1

// 在这里写你的代码 ↓


// ============================================================
// 第 3 题：catch 里的 error 是 unknown
// ============================================================
// TS 中 catch (error) 的 error 类型是 unknown，因为什么东西都可能被 throw。
//
// 要求：
//   1. 用 try / catch 调用 fetchUser(-1)
//   2. 实验：直接写 error.message，看看报什么错
//   3. 用 if (error instanceof Error) 收窄后再取 message，输出：
//        Error: Invalid user id
//   4. 不是 Error 的情况，输出：
//        Unknown error

// 在这里写你的代码 ↓


// ============================================================
// 第 4 题：Promise.all 的类型
// ============================================================
// 要求：
//   1. const users = await Promise.all([fetchUser(1), fetchUser(2)]);
//      鼠标停在 users 上，看看类型
//   2. const [user, count] = await Promise.all([fetchUser(1), wait(100).then(() => 42)]);
//      鼠标停在 user 和 count 上，看看类型（是元组！）
//   3. 输出：
//        Users: User1, User2

// 在这里写你的代码 ↓


// ============================================================
// 第 5 题：给 fetch 的结果加类型
// ============================================================
// response.json() 的返回类型是 Promise<any>，TS 不知道里面是什么。
//
// 要求：
//   1. 定义 type Todo = { userId: number; id: number; title: string; completed: boolean };
//   2. 写 async function fetchTodo(id: number): Promise<Todo>
//      用 (await response.json()) as Todo 告诉 TS 结果的类型
//   3. 输出：
//        Todo #1: delectus aut autem (done: false)
//   4. 想一想：as Todo 是「检查」还是「相信」？如果 API 返回的数据格式变了会怎样？

// 在这里写你的代码 ↓

