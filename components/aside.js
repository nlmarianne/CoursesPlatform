function createInterestingCourseElement(courseData) {
    const courseElement = document.createElement('li');

    courseElement.innerHTML = `
        <a href="${courseData.link || '#'}">
            <div class="may-be-interesting-option">
                <h4>${courseData.title || 'Untitled Course'}</h4>
                <img src="${courseData.image || 'images/default.jpg'}" alt="${courseData.alt || 'Course Image Alt Text'}" class="may-be-interesting-courses-logo">
            </div>
        </a>`;

    return courseElement;
}

const interestingCoursesData = [
    {
        title: 'HTML & CSS & JavaScript',
        image: 'images/courses_desc/html_pic.png',
        alt: 'html_pic',
        link: '#'
    },
    {
        title: 'C# game dev',
        image: 'images/courses_desc/c_jail.png',
        alt: 'c_jail',
        link: '#'
    },
    {
        title: 'French for specific purposes',
        image: 'images/courses_desc/french.jpg',
        alt: 'french',
        link: '#'
    },
];

const interestingCoursesContainer = document.querySelector('.may-be-interesting');

interestingCoursesData.forEach(courseData => {
    const courseElement = createInterestingCourseElement(courseData);
    interestingCoursesContainer.appendChild(courseElement);
});