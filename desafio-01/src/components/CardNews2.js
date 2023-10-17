class CardNews2 extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"});
        shadow.innerHTML = `Hello World <br> Marcos Vinício`;
    }
}

customElements.define("card-news2", CardNews2);