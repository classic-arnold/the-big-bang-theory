/** Utils */
function hideElem(elemId) {
    const elem = document.getElementById(elemId);
    elem.style.display = "none";
}

function showElem(elemId) {
    const elem = document.getElementById(elemId);
    elem.style.display = "revert";
}

/** Menu */
document.addEventListener("DOMContentLoaded", function (e) {
    document.querySelectorAll('.menu-item a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            if (width < 480) closeMenu();
        });
    });
})

function openMenu() {
    hideElem("menu-button");
    showElem("menu-close-button");
    showElem("menu");
}

function closeMenu() {
    showElem("menu-button");
    hideElem("menu-close-button");
    hideElem("menu");
}

/** Quiz */
// const quizQuestions = [
//     {
//         question: "Test",
//         options: [
//             {
//                 value: "test",
//                 isCorrect: true
//             }, {
//                 value: "test false",
//                 isCorrect: false
//             }, {
//                 value: "test false 2",
//                 isCorrect: false
//             }, {
//                 value: "test false 3",
//                 isCorrect: false
//             },
//         ]
//     }
// ]

// document.addEventListener("DOMContentLoaded", function (e) {
//     let no = 1;

//     const quizContainer = document.getElementById("quiz-container");

//     for (let question of quizQuestions) {
//         const questionElem = `
//         <h3>${no}. ${question.question}</h3
//         `;

//         const optionsElem = `
//         ${question.options.map(option => `
//             <button class="option-button">${option.value}</button>
//         `).join("\n")}
//         `;

//         quizContainer.innerHTML = questionElem + '\n' + optionsElem;
//     }
// })