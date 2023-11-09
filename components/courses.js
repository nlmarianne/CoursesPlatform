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

const coursesData = [
    {
        title: 'Python intro',
        image: 'images/courses_desc/python.jpg',
        alt: 'python',
        code: 'print("Hello world!")',
        link: '#'
    },
    {
        title: 'C++ & algorithms',
        image: 'images/courses_desc/cpp_logo.png',
        alt: 'cpp_logo',
        code: 'std::cout << "Hello world!" << std::endl;',
        link: 'course_example.html'
    },
    {
        title: 'Thai: your first phrases',
        image: 'images/courses_desc/thai.jpg',
        alt: 'thai_alphabet',
        lang: 'th',
        langText: 'สวัสดีค่ะ',
        link: '#'
    },
];

const coursesContainer = document.getElementById('courses-container');

coursesData.forEach(courseData => {
    const courseElement = createCourseElement(courseData);
    coursesContainer.appendChild(courseElement);
});