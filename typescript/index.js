// fetch
// 


// promise
// fetch('https://jsonplaceholder.typicode.com/posts/23')
// .then((response) =>{
//     console.log(response)
//     if(!response.ok){
//         throw new Error('Something went wrong')
//     }
//         return response.json()

// })
// .then(posts => {
//     console.log(posts)
// })
// .catch(err =>{
//     console.log(err)
// })

// async await

// async function
// await on promise

const fetchData = async(url) =>{
    try {
      const response = await  fetch(url)
    //   console.log(response)
      if(!response.ok){
        throw new Error('Something went wrong')
    }
   const data = await response.json()
    console.log(data)
    return data
        
    } catch (error) {
        console.log(error)
    }
}

const post = fetchData('https://jsonplaceholder.typicode.com/posts/23')
const user =  fetchData('https://jsonplaceholder.typicode.com/users/2')

// console.log(post)