//variabes
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
//Reads the HTML information of the selected course
function getCourseInfo(course) {
    //Create an object with course data
    const  courseInfo = {
         image: course.querySelector('img').src,
         title: course.querySelector('h4').textContent,
         price: course.querySelector('.price span').textContent,
         id: course.querySelector('a').getAttribute('data-id')
    }
    //Insert into the shopping cart
    addIntoCart(courseInfo)
}
//Display the selected course into the shopping cart

function addIntoCart(course){
    //Create a <tr>
    const row = document.createElement('tr')

    //Build the template
    row.innerHTML = `
        <tr>
            <td>
                <img src="${course.image}">
            </td>
            
        </tr>

    `;
}