let actionbtns = document.querySelectorAll(".btn");
let qty = document.querySelector(".qty");
let thumbnails = document.querySelectorAll(".thumbnail");
let productimgshower = document.querySelector(".produt-image");
let cartil = document.querySelector(".cart-ilu");
let cartcon = document.querySelector(".cart-container");
actionbtns.forEach((e) => {
    e.addEventListener("click", () => {
        lastqty = +qty.innerHTML;
        switch (e.id) {
            case "min":
                lastqty -= 1;
                qty.innerHTML = lastqty
                break;
            case "plus":
                lastqty += 1;
                qty.innerHTML = lastqty
                break;
        }
    })
})
thumbnails.forEach((e) => {
    e.addEventListener("click", () => {
        thumbnails.forEach((i) => { i.classList.remove("active") })
        productimgshower.style.backgroundImage = `url(${e.src.replace("-thumbnail", "")})`;
        e.classList.add("active")
    })
})

cartil.onmouseover = () => {
    cartcon.style.opacity = "1"
}
cartil.onmouseleave = () => {
    cartcon.style.opacity = "0"
}