import BlackBoard from "./BlackBoard.js"
let container = document.getElementById('container')
let blackBoard= document.getElementById('black-board')
blackBoard.addEventListener('click',()=>{
  createBlackBoard()
})





function createBlackBoard(){
  let board1 = document.createElement('black-board')
  board1.setAttribute('text','hello From js')
  board1.setAttribute('speed','5')
  board1.addEventListener('filled',()=>{
    console.log("dfgd")
    board1.wipeBoard()
  })
  container.appendChild(board1)
}











