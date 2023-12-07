// function modo(){
//     const html = document.documentElement
//    html.classList.toggle("claro");
// }
document.querySelector("#back").innerHTML =
    Card("Java", "janeiro de", "2022") +
    Card("Python", "janeiro de", "2023") +
    Card("C++", "janeiro de", "2023")

document.querySelector("#front").innerHTML =
    Card("HTML5", "janeiro de", "2022") +
    Card("CSS3", "janeiro de", "2022", ) +
    Card("Angular", "janeiro de", "2022", ) +
    Card("TypeScript", "janeiro de", "2022", ) +
    Card("React", "setembro de", "2022", ) +
    Card("JavaScript", "setembro de", "2022", )

document.querySelector("#software").innerHTML =
    Card("VSCode", "janeiro de", "2022", ) +
    Card("SpringBoot", "janeiro de", "2022") +
    Card("MySQL", "janeiro de", "2022") +
    Card("NodeJS", "janeiro de", "2022") +
    Card("Arduino", "janeiro de", "2023") +
    Card("Postman", "janeiro de", "2022") +
    Card("Figma", "setembro de", "2022")

document.querySelector("#sO").innerHTML =
    Card("Windows", "fevereiro", "2009", ) +
    Card("Linux","setembro de", "2022")

function Card(nome, mes, data) {
    return `
    <div class="swiper-slide card">
        <div class="card-content">
            <div class="image"><img src="./assets/${nome}.png" alt=""></div>
            <div class="text-content">
                <h3>${nome}</h3>
                <p>Inicio de uso em:</p>
                <p>${mes} ${data}</p>
            </div>
        </div>
    </div>
    `
}