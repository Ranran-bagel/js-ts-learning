// 08_async 作业（JS）
// 运行：node 08_async/js_async_hw.js
//
// 大纲：
//   第 1 题：执行顺序（先预测，再运行）
//   第 2 题：回调函数
//   第 3 题：Promise
//   第 4 题：async / await
//   第 5 题：并行执行 Promise.all
//   第 6 题：真实的网络请求 fetch
//
// 规则：题目说明用中文，程序输出一律用英文
// 提示：这一章的输出会交错在一起。做某一题时，可以先把其他题的调用注释掉。

// ============================================================
// 第 1 题：执行顺序（先预测，再运行）
// ============================================================
// 预测下面 4 行的输出顺序，写在这里：
//   预测：
//   实际：
//   为什么：

console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");

// ============================================================
// 第 2 题：回调函数
// ============================================================
// 用 setTimeout 模拟「需要花时间」的操作（比如从服务器取数据）。
//
// 要求：
//   1. 写 getUserWithCallback(id, callback)：
//      500ms 后调用 callback({ id, name: `User${id}` })
//   2. 写 getPostsWithCallback(userId, callback)：
//      500ms 后调用 callback(["Post 1", "Post 2"])
//   3. 先取用户，拿到用户后再取他的文章（回调里面套回调），输出：
//        Got user: User1
//        User1's posts: Post 1, Post 2
//   想一想：如果还要继续取文章的评论、评论的作者……代码会变成什么样？

// 在这里写你的代码 ↓


// ============================================================
// 第 3 题：Promise
// ============================================================
// 要求：
//   1. 写 wait(ms)：返回一个 Promise，ms 毫秒后 resolve
//        wait(1000).then(() => console.log("1 second passed"));
//   2. 写 fetchUser(id)：返回一个 Promise，500ms 后
//        id > 0  → resolve({ id, name: `User${id}` })
//        id <= 0 → reject(new Error("Invalid user id"))
//   3. 用 .then / .catch 调用，输出：
//        fetchUser(1)  → Fetched: User1
//        fetchUser(-1) → Error: Invalid user id
//   4. 用 .then 链式调用，把第 2 题的「先取用户再取文章」改写成 Promise 版

// 在这里写你的代码 ↓


// ============================================================
// 第 4 题：async / await
// ============================================================
// 要求：
//   1. 写 async function main()，用 await 依次调用第 3 题的 fetchUser(1)、fetchUser(2)
//   2. 用 try / catch 处理 fetchUser(-1) 的错误，用 finally 输出结束信息
//   3. 输出：
//        Fetched: User1
//        Fetched: User2
//        Error: Invalid user id
//        Done
//   4. 对比：第 3 题的 .then 写法和这里的 await 写法，哪种更好读？

// 在这里写你的代码 ↓


// ============================================================
// 第 5 题：并行执行 Promise.all
// ============================================================
// 要求：
//   1. 用 await 依次取 3 个用户（fetchUser(1)、(2)、(3)），用 Date.now() 计时
//   2. 用 Promise.all 同时取这 3 个用户，同样计时
//   3. 输出（时间是大约值）：
//        Sequential: 3 users in ~1500ms
//        Parallel: 3 users in ~500ms
//   4. 实验：Promise.all 里放一个 fetchUser(-1)，会怎样？
//      再把 Promise.all 换成 Promise.allSettled 试试，有什么不同？

// 在这里写你的代码 ↓


// ============================================================
// 第 6 题：真实的网络请求 fetch（需要联网）
// ============================================================
// JSONPlaceholder 是一个免费的测试用 API。
//
// 要求：
//   1. 用 fetch + await 请求 https://jsonplaceholder.typicode.com/todos/1
//   2. 用 await response.json() 把结果转成对象，输出：
//        Todo #1: delectus aut autem (done: false)
//   3. 请求 https://jsonplaceholder.typicode.com/users，输出所有用户的名字
//   4. 进阶：用 response.ok 判断请求是否成功，
//      请求一个不存在的地址（如 /todos/99999），输出：
//        Request failed: 404

// 在这里写你的代码 ↓

