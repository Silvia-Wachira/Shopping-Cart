//variales
const courses = document.querySelector('#courses-list')



//listeners

loadEventListeners()

function loadEventListeners() {
    //when a new course is added
    courses.addEventListener('click',buyCourse)
}





//Functions

function buyCourse(e) {
    e.preventDefault();
    //use delegation to find the course that was added
    if(e.target.classList.contains('add-to-cart')) {
        //Read the course values
        const course = e.target.parentElement.parentElement;

        // read the values
        getCourseInfo(course)
    }
}
//