class SideBar extends HTMLElement {
    constructor() {
        super();

        // Create a shadow root
        let shadow = this.attachShadow({mode: 'open'});

        let style = document.createElement('style');
        style.textContent = "p { background: sandybrown; color: darkblue; }";
        let paragraph = document.createElement('p');
        paragraph.textContent = "Hello, this is my first custom element and future sidebar!";
        shadow.appendChild(style);
        shadow.appendChild(paragraph);
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