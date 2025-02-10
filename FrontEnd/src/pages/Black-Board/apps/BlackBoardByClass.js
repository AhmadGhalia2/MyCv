export default class BlackBoardByClass {
  constructor() {
    
  }
  doing(text="q"){
    let myDiv = document.createElement('div')
    myDiv.classList.add('myDiv')
    let cont= document.getElementById('container')
    cont.appendChild(myDiv)
    myDiv.innerHTML=text
  }

}