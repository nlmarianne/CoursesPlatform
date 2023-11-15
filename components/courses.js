
function createCourseElement(courseData) {
    console.log(window.location.pathname)

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

function filterSubject(subject) {
    window.location.href = 'index.html?subject=' + subject;
}
function filterSchool(school) {
    const selectedCourses = coursesData.filter(course => course.school === school);
    coursesContainer.textContent = '';
    selectedCourses.forEach(courseData => {
        const courseElement = createCourseElement(courseData);
        coursesContainer.appendChild(courseElement);
    });
}

const coursesData = [
    {
        title: 'Python intro',
        image: 'images/courses_desc/python.jpg',
        alt: 'python',
        code: 'print("Hello world!")',
        link: '#',
        subject: 'Programming',
        school: 'ITMO'
    },
    {
        title: 'C++ & algorithms',
        image: 'images/courses_desc/cpp_logo.png',
        alt: 'cpp_logo',
        code: 'std::cout << "Hello world!" << std::endl;',
        link: 'course_example.html',
        subject: 'Programming',
        school: 'EPITECH'
    },
    {
        title: 'Thai: your first phrases',
        image: 'images/courses_desc/thai.jpg',
        alt: 'thai_alphabet',
        lang: 'th',
        langText: 'สวัสดีค่ะ',
        link: '#',
        subject: 'Languages',
        school: 'Other'
    },
];

const coursesContainer = document.getElementById('courses-container');

let subject = new URLSearchParams(window.location.search).get('subject');
const selectedCourses = coursesData.filter(course => subject === '' || course.subject === subject);
selectedCourses.forEach(courseData => {
    const courseElement = createCourseElement(courseData);
    coursesContainer.appendChild(courseElement);
});