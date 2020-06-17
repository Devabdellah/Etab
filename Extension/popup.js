const logoimg = document.querySelector("#logoimg")
const Browse_e_Zonesbtn = document.querySelector("#Browse_e_Zones")
const Tab_e_Homebtn = document.querySelector("#Tab_e_Home")
const darkModbtn = document.querySelector("#darkMod")
const collabsbtn = document.querySelector("#collabs")
const savebtn = document.querySelector("#doSave")


logoimg.addEventListener("click", (e) => {
    e.preventDefault()
    chrome.tabs.create({ url: "https://www.google.com" })
})
Browse_e_Zonesbtn.addEventListener("click", (e) => {
    e.preventDefault()
    alert("Coming Soon")
})
Tab_e_Homebtn.addEventListener("click", (e) => {
    e.preventDefault()
    chrome.tabs.create({ url: "dashboard.html" })
})
darkModbtn.addEventListener("click", (e) => {
    e.preventDefault()
    alert("Coming Soon")
})
collabsbtn.addEventListener("click", (e) => {
    e.preventDefault()
    alert("Coming Soon")
})
savebtn.addEventListener("click", (e) => {
    e.preventDefault()
    alert("Coming Soon")
})
