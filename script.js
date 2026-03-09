document.addEventListener("DOMContentLoaded", function(){

const services = [
"SEO For Your Website",
"Google Ads Campaigns",
"Social Media Roadmap",
"Content Strategy Plan",
"Email Marketing Plan",
"Meta Ads Campaigning",
"Real Time Analytics"
];

let index = 0;
const textElement = document.getElementById("service-carousel");

function rotateServices(){

    textElement.classList.add("fade-out");

    setTimeout(() => {

        index = (index + 1) % services.length;
        textElement.textContent = services[index];

        textElement.classList.remove("fade-out");

    }, 400);

}

setInterval(rotateServices, 2000);

});