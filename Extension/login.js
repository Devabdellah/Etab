const loginbtn = document.querySelector("#doLogin")
const usernameinp = document.querySelector("#username")
const passwordinp = document.querySelector("#password")
const skipbtn = document.querySelector("#doSkip")
const logoimg = document.querySelector("#logoimg")

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

loginbtn.addEventListener("click", (e) => {
    e.preventDefault()
    if (usernameinp.value == 'test@test.com' && passwordinp.value == "test") {
        chrome.storage.local.set({
            [usernameinp.value]: makeid(10)
        }, function name() {
            window.location.href = "popup.html"
        })
    }
})
skipbtn.addEventListener("click", (e) => {
    e.preventDefault()
    window.location.href = "popup.html"
})
logoimg.addEventListener("click", (e) => {
    e.preventDefault()
    chrome.tabs.create({ url: "https://www.google.com" })
})


// chrome.storage.local.get(key, data => {
//     resolve(data[key])
// })