/*
 * @Author: Emma Forslund - emfo2102 
 * @Date: 2022-09-05 17:40:13 
 * @Last Modified by:   Emma Forslund - emfo2102 
 * @Last Modified time: 2022-09-05 17:40:13 
 */


const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click" , () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})