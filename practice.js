 let main1 =  document.querySelector('.main')
 let btn = document.querySelector('button')


async function myFunc(){
    const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
const result = await response.json()

let p1 = document.createElement('p')
 let p2 = document.createElement('p')
for( i of result){
    // console.log(i.email)

p1.innerHTML += i.email
p2.innerHTML += i.body

main1.innerHTML += ` <div class="coment-block1">
<div class="comment">
     <p class="first"> ${i.email}</p>
     <p class="word">${i.body}</p>

  
  </div>
 <div>
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"/></svg>

  </div>
  </div>`

 
}
}


myFunc()




























    

   











const container = document.querySelector('.main')

function change(element){
    element.style.fill = 'red'
}

function handleClick(e){
 if(e.target.tagName === 'path'){
  change(e.target)
 }
}

container.addEventListener('click',handleClick)

