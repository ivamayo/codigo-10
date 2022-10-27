//Los objetos HTMLElement tienen varias propiedades:
//una de ella es innerHTML
//otra es innerText
//otra es classList
class Card extends HTMLElement {

    constructor(){
        super();
        this.class = "card p-3 bg-primary"
    }

    static get observerAttributes() {
        return ["class","classname"];
    }

    attributeChangedCallback(prop, oldvalue, newvalue) {
        this[prop] = newvalue;
    }

    connectedCallback(){
        if(this.class){
            const lista_de_clases = this.class.split(" ");
            lista_de_clases.forEach((xclass) => {
                this.classList.add(xclass);
                console.log(this.classList);
            });
           
        }

        if(this.classname){
            const lista_de_clases = this.classname.split(" ");
            lista_de_clases.forEach((xclass) => {
                this.classList.add(xclass);
                console.log(this.classList);
            });
           
        }
        
    }

    disconnectedCallback() {

    }


}
customElements.define("my-card", Card);