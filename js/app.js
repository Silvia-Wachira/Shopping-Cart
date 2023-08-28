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
    //use delegation to find the course that was added
    if(e.target.classList.contains('add-to-cart')) {
        console.log('Added')
    }
}
