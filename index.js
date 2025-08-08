document.getElementById("show-btn").addEventListener("click", function (event) {
    event.preventDefault(); 


    const messageBox = document.getElementById("showme");
    messageBox.style.display = "block";


    const pictures = document.querySelectorAll(".Pictures");
    pictures.forEach(picSet => picSet.style.display = "flex");

    const footer = document.querySelector('footer');
    footer.style.display = 'block';

    messageBox.scrollIntoView({ behavior: "smooth" });
});







function createElement(type, emoji) {
    const container = document.querySelector('.container'); 
    const element = document.createElement('div');
    element.classList.add(type);
    element.innerHTML = emoji;
    element.style.animationDuration = Math.random() * 3 + 2 + 's';
    element.style.left = Math.random() * 100 + 'vw';
    container.appendChild(element);
    console.log(element);
}

function hearts() {
    createElement('hearts', '❤️');
}

function stars() {
    createElement('stars', '⭐');
}

function butterfly() {
    createElement('butterfly', '🦋');
}

// Set intervals for each element
setInterval(hearts, 1000);
setInterval(stars, 1000);
setInterval(butterfly, 1000);
