class Schedule extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <form id="schedule-form">
                <label for="days">Number of days:</label>
                <select id="days" name="days">
                    <option value="5">5 Days</option>
                    <option value="6">6 Days</option>
                </select>

                <label for="max-lessons">Maximum lessons per day:</label>
                <input type="number" id="max-lessons" name="max-lessons" min="1" max="10">

                <label for="language">Language:</label>
                <select id="language" name="language">
                    <option value="en">English</option>
                    <option value="ru">Russian</option>
                </select>

                <button id="generate-button" type="submit">Generate schedule</button>
                <button id="save-schedule">Save schedule</button>
                <button id="load-schedule">Load schedule</button>
            </form>
            <div id="schedule-container"></div>
        `;

        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'css/schedule.css');
        this.shadowRoot.appendChild(linkElem);
        this.shadowRoot.getElementById('load-schedule').addEventListener('click', () => this.loadFromLocalStorage());
        this.shadowRoot.querySelector('#schedule-form').addEventListener('submit', e => this.handleSubmit(e));
    }

    handleSubmit(e) {
        e.preventDefault();
        const days = this.shadowRoot.getElementById('days').value;
        const lessons = this.shadowRoot.getElementById('max-lessons').value;
        const language = this.shadowRoot.getElementById('language').value;

        this.generateSchedule(days, lessons, language);
    }

    generateSchedule(days, lessons, lang) {
        let scheduleContainer = this.shadowRoot.getElementById('schedule-container');
        scheduleContainer.innerHTML = '';

        let table = '<table><tr>';
        for (let i = 0; i < days; i++) {
            table += `<th>Day ${i + 1}</th>`;
        }
        table += '</tr>';

        for (let j = 0; j < lessons; j++) {
            table += '<tr>';
            for (let k = 0; k < days; k++) {
                table += `<td><input type="text" id="lesson-${j}-${k}" placeholder="Lesson ${j + 1}"></td>`;
            }
            table += '</tr>';
        }
        table += '</table>';

        scheduleContainer.innerHTML = table;

        this.shadowRoot.getElementById('save-schedule').addEventListener('click', () => this.saveToLocalStorage(days, lessons, lang));
    }

    saveToLocalStorage(days, lessons, lang) {
        localStorage.setItem('schedule-days', days);
        localStorage.setItem('schedule-lessons', lessons);
        localStorage.setItem('schedule-language', lang);

        let inputData = {};
        for (let j = 0; j < lessons; j++) {
            for (let k = 0; k < days; k++) {
                let inputId = `lesson-${j}-${k}`;
                inputData[inputId] = this.shadowRoot.getElementById(inputId).value;
            }
        }
        localStorage.setItem('schedule-input', JSON.stringify(inputData));

        console.log("Saved to local storage");
    }

    loadFromLocalStorage() {
        const days = localStorage.getItem('schedule-days') || 5;
        const lessons = localStorage.getItem('schedule-lessons') || 5;
        const language = localStorage.getItem('schedule-language') || 'en';

        this.shadowRoot.getElementById('days').value = days;
        this.shadowRoot.getElementById('max-lessons').value = lessons;
        this.shadowRoot.getElementById('language').value = language;

        this.generateSchedule(days, lessons, language);

        requestAnimationFrame(() => {
            let inputData = JSON.parse(localStorage.getItem('schedule-input')) || {};
            for (let inputId in inputData) {
                let inputElement = this.shadowRoot.getElementById(inputId);
                if (inputElement) {
                    inputElement.value = inputData[inputId];
                }
            }

            console.log("Loaded from local storage");
        });
    }
}

customElements.define('schedule-component', Schedule);
