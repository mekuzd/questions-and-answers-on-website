//using selectors inside the element method 1
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

// traversing the dom Method 2
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
