let template = document.createElement('template')
template.innerHTML =
`
<style>
:host {
  background: #002418;
  font-size: 1.2em;
  color: white;
  width: 500px;
  height: 200px;
  padding: 10px;
  border: 6px solid #9b3b00;
  border-bottom: 12px solid #9b3b00;
  overflow: hidden;
  margin: 10px;
  float: left;
  border-radius: 8px;
}
</style>
<p id=text></p>
`
export default class BlackBoard extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.p = this.shadowRoot.getElementById('text')
    this.intervalId = null
    this.letter = 0
    this.currentText="låt Stå"
    this.speed=50
  }

  static get observedAttributes() {
    return ['text','speed']
  }

  connectedCallback() {
    this.addEventListener('click', this._onWrite)
    // this.addEventListener('mouseup', this.stopWriting)
    this.addEventListener('mouseleave', this.stopWriting)

  }
  disconnectedCallback() {
    this.removeEventListener('mousedown', this._onWrite)
    this.removeEventListener('mouseup', this._onstopWriting)
    // stopWriting()

  }

  _onWrite(event) {
    this.intervalId = setInterval(() => {
      if(this.p.offsetHeight>= this.offsetHeight){
        this.dispatchEvent(new CustomEvent('filled'))  //sent the event
        this.stopWriting()
        return
      }
      if (this.getAttribute('text')) {
        this.p.textContent += this.currentText.charAt(this.letter++)
        if(this.letter>=this.getAttribute('text').length){
          this.p.textContent +=" " 
          this.letter=0
        }
      }
    }, this.speed)
  }
  stopWriting() {
    clearInterval(this.intervalId)
  }

  wipeBoard(){
    this.p.textContent =" " 
    this.letter=0
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if(name=== 'text'){
      this.currentText=newValue
    }
    else if(name==='speed'){ 
    this.speed=newValue
    }
  }

}
customElements.define('black-board', BlackBoard)