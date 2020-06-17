const loginbtn = document.querySelector("#doLogin")
const usernameinp = document.querySelector("#username")
const passwordinp = document.querySelector("#password")
const skipbtn = document.querySelector("#doSkip")

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

loginbtn.addEventListener("click", ()=>{
    chrome.storage.local.set({
        [usernameinp.value]: makeid(10)
    })
})
skipbtn.addEventListener("click", ()=>{
    // var a = document.createElement("a")
    // a.href = chrome.runtime.getURL("popup.html")
    // a.href = "popup.html"
    document.querySelector("#gopopup").click()
})


// chrome.storage.local.get(key, data => {
//     resolve(data[key])
// })
