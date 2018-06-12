class App extends HTMLElement {
    connectedCallback() {
        let paragraph = document.createElement("p");
        paragraph.textContent = "This is not inside of Shadow DOM"
        this.appendChild(paragraph);
        let sideBar = document.createElement("side-bar");
        sideBar.setAttribute('text', 'second sidebar');
        this.appendChild(sideBar);
        
    }
}
customElements.define('my-app', App);

class SideBar extends HTMLElement {
    
    constructor() {
        super();

        // Create a shadow root
        let shadow = this.attachShadow({mode: 'open'});

        let style = document.createElement('style');
        style.textContent = "p { background: sandybrown; color: darkblue; }";
        this.paragraph = document.createElement('p');    
        this.paragraph.textContent = "Lorem ipsum";
        shadow.appendChild(style);
        shadow.appendChild(this.paragraph);
    }

    connectedCallback() {
        this.paragraph.textContent = this.getAttribute('text');
    }
}
customElements.define('side-bar', SideBar);

class GuidesContent extends HTMLElement {
    constructor() {
        super();

        let shadow = this.attachShadow({mode: 'open'});

        let style = document.createElement('style');
        style.textContent = `
            p {
                background: red;
                color: white;
            }
        `;

        let paragraph = document.createElement('p');
        paragraph.textContent = "I'll need to figure out a lot of things which I would do through framework and/or state management library.";

        shadow.appendChild(style);
        shadow.appendChild(paragraph);
    }
}
customElements.define('guides-content', GuidesContent);