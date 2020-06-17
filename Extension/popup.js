const logoimg = document.querySelector("#logoimg")


logoimg.addEventListener("click", (e) => {
    e.preventDefault()
    chrome.tabs.create({ url: "https://www.google.com" })
})
