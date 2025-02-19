// loading heading user agent size 
let headingEleArray = ["h1", "h2", "h3", "h4", "h5", "h6"]

headingEleArray.forEach((ele) => {
    let e = document.querySelector(ele)
    let displayEle = document.querySelector("." + ele)

    let size = window.getComputedStyle(e).fontSize

    displayEle.textContent = size
})

