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
    console.log('Course added');
}
