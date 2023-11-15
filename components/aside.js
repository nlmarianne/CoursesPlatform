function createInterestingCourseElement(courseData) {
    const courseElement = document.createElement('li');

    courseElement.innerHTML = `
        <a href="${courseData.link || '#'}">
            <div class="aside-courses">
                <h4>${courseData.title || 'Untitled Course'}</h4>
                <img src="${courseData.image || 'images/default.jpg'}" alt="${courseData.alt || 'Course Image Alt Text'}" class="aside-courses-logo">
            </div>
        </a>`;

    return courseElement;
}

const interestingCoursesData = JSON.parse(document.getElementById('aside-courses-data').textContent);
console.log(interestingCoursesData);

const interestingCoursesContainer = document.querySelector('.aside-courses');
console.log(interestingCoursesContainer);

interestingCoursesData.forEach(courseData => {
    const courseElement = createInterestingCourseElement(courseData);
    interestingCoursesContainer.appendChild(courseElement);
});