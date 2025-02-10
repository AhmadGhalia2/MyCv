import Dice from "./Dice.js"

export default class Player {
  #dice = new Dice()
  #rolls = ''
  #sum = 0

  roll(){
    if (this.#sum>=21) {
      return
    }
    this.#sum += this.#dice.roll()
    this.#rolls += this.#dice.graphical_value()+' '

  }
  sum(){
    return this.#sum
  }
  rolls(){
    return this.#rolls
  }
  reset(){
    this.#rolls = ''
    this.#sum = 0
  }
}