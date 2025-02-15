import {router} from "../main.js";

function renderHome(){
    document.querySelector("#app").innerHTML = `
        <div>
        <p>Đây là trang chủ</p>
        <a href="/lta" data-navigo>LTA</a>
        <a href="/lta2" data-navigo>LTA 2</a>
        <button id="chuyentiep">Chuyen tiep</button>
        </div>
    `

    document.querySelector("#chuyentiep").addEventListener("click", function(){
        router.navigate("/lta")
    })

}

function renderLta(){
    document.querySelector("#app").innerHTML = `
        <p>Đây là trang Lta</p>
    `
}

function renderLta2(){
    document.querySelector("#app").innerHTML = `
        <p>Đây là trang Lta 2</p>
    `
}
//export function
export {renderLta, renderLta2}
export default renderHome;
