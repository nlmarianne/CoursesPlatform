
function createCourseElement(courseData) {
    const courseElement = document.createElement('li');

    courseElement.innerHTML = `
        <a href="${courseData.link || '#'}">
            <div class="available-courses-option">
                <h3>${courseData.title || 'Untitled Course'}</h3>
                <img src="${courseData.image || 'images/default.jpg'}" alt="${courseData.alt || 'Course Image Alt Text'}" class="available-courses-logo">
                <div class="available-course-description">
                    ${courseData.code ? `<code>${courseData.code}</code>` : ''}
                    ${courseData.lang ? `<span lang="${courseData.lang}">${courseData.langText || ''}</span>` : ''}
                </div>
            </div>
        </a>`;

    return courseElement;
}

function displayAllCourses() {
    coursesContainer.textContent = '';
    coursesData.forEach(courseData => {
        const courseElement = createCourseElement(courseData);
        coursesContainer.appendChild(courseElement);
    });
}

function filterSubject(subject) {
    if (subject === 'All') {
        displayAllCourses();
    } else {
        window.location.href = 'index.html?subject=' + subject;
    }
}
function filterSchool(school) {
    if (subject === 'All') {
        displayAllCourses();
    } else {
        window.location.href = 'index.html?school=' + school;
    }
}

const coursesData = JSON.parse(document.getElementById('available-courses-data').textContent);

const coursesContainer = document.getElementById('courses-container');
let selectedCourses;
let subject = new URLSearchParams(window.location.search).get('subject');
let school = new URLSearchParams(window.location.search).get('school');

if (subject) {
    selectedCourses = coursesData.filter(course => subject === '' || course.subject === subject);
}
else if (school) {
    selectedCourses = coursesData.filter(course => school === '' || course.school === school);
}
else {
    selectedCourses = coursesData;
}

selectedCourses.forEach(courseData => {
    const courseElement = createCourseElement(courseData);
    coursesContainer.appendChild(courseElement);
});