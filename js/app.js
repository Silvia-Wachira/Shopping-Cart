//variabes
const courses = document.querySelector('#courses-list');
      shoppingCartContent = document.querySelector('#cart-content tbody'),
      clearCartBtn = document.querySelector('#clear-cart');



//listeners

loadEventListeners()

function loadEventListeners() {
    //when a new course is added
    courses.addEventListener('click',buyCourse)

    //When the remove btn is clicked
    shoppingCartContent.addEventListener('click', removeCourse)
    clearCartBtn.addEventListener('click', clearCart)
}


    //Document Ready
    document.addEventListener('DOMContentLoaded', getFromLocalStorage)


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
                <img src="${course.image}" width=100px>
            </td>
            <td>${course.title}</td>
            <td>${course.price}</td>
            <td>
                <a href="#" class="remove" data-id="${course.id}">X</a>
            </td>

        </tr>

    `;
    //Add into shopping cart
    shoppingCartContent.appendChild(row);

    //Add course into storage
    saveIntoStorage(course)
}

//Add the courses into local storage

function saveIntoStorage(course) {
    let courses = getCoursesFromStorage()

    //Add the course into the array
    courses.push(course)

    //since storage only saves strings, we need to convert JSON into string
    localStorage.setItem('courses', JSON.stringify(courses));
}

//Get the contents from storage
function getCoursesFromStorage() {

    let courses;

    //if something exists on storage then we getthe value, otherwise create an empty array
    if(localStorage.getItem('courses') === null) {
        courses = [];
    } else {
        course = JSON.parse(localStorage.getItem('courses'));
    }
    return courses;

}
//remove course from the DOM
function removeCourse(e) {

    if(e.target.classList.contains('remove')){
        e.target.parentElement.parentElement.remove();
    }
}


//clears the shopping cart
function clearCart() {
    // shoppingCartContent.innerHTML = '';

    while(shoppingCartContent.firstChild) {
        shoppingCartContent.removeChild(shoppingCartContent.firstChild)
    }
}


//Loads when document is ready and prints coursesinto shopping cart

function getFromLocalStorage() {
    let coursesLS = getCoursesFromStorage();

    //Loop through the courses and print into the cart
    coursesLS.forEach(function(course) {
        //create the <tr>
        const row = document.createElement('tr');

        //Print the content
        row.innerHTML = `
        <tr>
            <td>
                <img src="${course.image}" width=100px>
            </td>
            <td>${course.title}</td>
            <td>${course.price}</td>
            <td>
                <a href="#" class="remove" data-id="${course.id}">X</a>
            </td>

        </tr>

    `;
    });
}