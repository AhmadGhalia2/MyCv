export default class Dice {
  #last = null
  #graphical = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅']

  roll() {
    const dice = Math.floor(Math.random() * 6) + 1
    this.#last = dice
    return   this.#last 
  }
  value(){
    return this.#last
  }
  graphical_value(){
    return this.#graphical[this.#last - 1]
  }
}