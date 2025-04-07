"use strict";

export default class TBootstrapComponent extends HTMLElement {
    constructor() {
        super();
        //this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.injectBootstrap();
        this.render();
    }

    injectBootstrap() {
        const linkElement = document.createElement("link");
        linkElement.setAttribute("rel", "stylesheet");
        linkElement.setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css");
        this.shadowRoot.appendChild(linkElement);
    }
}