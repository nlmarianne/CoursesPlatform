class Schedule extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback()
    {
        this.attachShadow({mode: 'open'});
    }


}


customElements.define('schedule-component', Schedule);
