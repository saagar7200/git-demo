// setTimeout

// console.log('Start')

// const timerId =  setTimeout((name,age)=>{
//     console.log('processing',name,age)
// },2000,'Bob',18)

// clearTimeout(timerId)
// console.log('end')

// setInterval
// let count = 0

// const intervalId = setInterval((name)=>{
//     console.log(count,name)
//     count += 1;
//     if(count === 10 ){
//     clearInterval(intervalId)
//     }
// },1000,'abc')

// EVENT LOOP

// callStack (code execute -> one task at a time)[LIFO]
// micro task queue  (higher priority)[FIFO]
// macro task queue (less priority task)
// event loop (looping mecha.)

// timers
// call back (set timeout,interval)
// timer (2sec)
// network task
// ....

// call back hell ()

const register = (callBack) => {
  setTimeout(() => {
    console.log("register");
    callBack("Register failed", { name: "Abc" });
  }, 3000);
};

const login = (callBack) => {
  setTimeout(() => {
    console.log("Login");
    callBack(null, { _id: 1 });
  }, 2000);
};

const showProfile = (data) => {
  setTimeout(() => {
    console.log("show profile", data._id);
  }, 3000);
};

// register()
// login()
// showProfile()
register((err, data) => {
  if (err) {
    console.log("error", err);
    return;
  }
  console.log(data);
  login((err, data) => {
    if (err) {
      console.log("error", err);
      return;
    }
    console.log(data);
    showProfile(data);
  });
});

// promises
// async await

//? Promise
//! js object that represents eventual completion or failure of async operation

// TODO: States pf promise
// * pending
// * fulfilled
// * rejected

// const promise = new Promise((resolve,reject)=>{
//     resolve()
// })

// console.log(promise)

// get posts comments
// user id
// posts
// comments

const getUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("register user");
      resolve({ id: 1, userName: "alice123" });
      // reject('register failed')
    }, 4000);
  });
};

const getPosts = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ userId, title: "abc", id: "POSTID" });
    }, 3000);
  });
};

const getComments = (postId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, userId: 1, postId, comment: "xyz" },
        { id: 1, userId: 1, postId, comment: "xyz" },
        { id: 1, userId: 1, postId, comment: "xyz" },
      ]);
      // reject('comment fetch failed')
    }, 2000);
  });
};

const asyncFunc = async () => {
  try {
    const user = await getUser();
    console.log(user);
    const post = await getPosts(user.id);
    console.log(post);
    const comments = await getComments(post.id);
    console.log(comments);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally");
  }
};

asyncFunc();

// fetch('')

// let loading = true
// getUser()
// .then((user) => {
//     console.log('then')
//     console.log(user)
//    return getPosts(user.id) //! promise
// })
// .then((post)=>{
//     console.log(post)
//     return getComments(post.id) //! promise

// })
// .then(comments =>{
//     console.log(comments)
// })
// .catch((err)=>{
//     console.log('catch')
//     console.log('error',err)
// })
// .finally(()=>{
//     console.log('finally')
//     loading = false

// })

// UserLogin()
// .then((data) => {
//     console.log('then')
//     console.log(data)
// })
// .catch((err)=>{
//     console.log('catch')
//     console.log('error',err)
// })

// UserProfile()
// .then((data) => {
//     console.log('then')
//     console.log(data)
// })
// .catch((err)=>{
//     console.log('catch')
//     console.log('error',err)
// })

// git -> vcs
// changes -> version

// commands
// 1. git init (initialize git -> folder (pwd))
// 2. git add file_path (stage files)
// 3.git commit -m '<message>'
// 4. git status

// 5. git branch
// 6. git branch branch_name [to create new branch]
// 7. git switch new_branch / git checkout branch_name
// to create and switch at same time
// git checkout -b branch_name

// git merge branch_name [merge changes form multiple local branch]
