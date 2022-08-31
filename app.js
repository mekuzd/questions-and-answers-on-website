// method 1
// using selectors inside the element 
// querySelectorAll returns a nodelist so an a loop had to be made to access each article i.e  question
//
const questions = document.querySelectorAll(".question");
questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn")
  btn.addEventListener("click", function () {
    question.classList.toggle("show-text");
    questions.forEach((article) => {
      if (article !== question) {
        article.classList.remove("show-text");
      }
    });
  });
});

// Method 2
// traversing the dom
//  used the buttons to target articles by passing an event as an argument in the button function
// a compare condition was used to remove classlist ('show-text') when a new button is clicked
// const btns = document.querySelectorAll(".question-btn");
// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const ClickedArticle = e.currentTarget.parentElement.parentElement;
//     questions.forEach((article) => {
//       if (article !== ClickedArticle) {
//         article.classList.remove("show-text");
//       }
//     })
//     ClickedArticle.classList.toggle("show-text");
//   });
// });
