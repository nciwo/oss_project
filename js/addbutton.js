btnAdd = document.querySelector('.btnAdd');
new_post = document.querySelector('.guest_book_new_post');

console.log("off");

btnAdd.addEventListener("click", () => {
    console.log("off");
    if(new_post.classList.contains("on")) {
        new_post.classList.remove("on");
        new_post.classList.add("off");
        console.log("off");
        return;
    }

    if(new_post.classList.contains("off")) {
        new_post.classList.remove("off");
        new_post.classList.add("on");
        console.log("on");
        return;
    }
    // new_post.classList.toggle("on");
    // console.log("on");
});