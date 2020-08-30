let hitokoto = document.querySelector("#hitokoto");
hitokoto.addEventListener("click", () => {
    fetch("https://v1.hitokoto.cn/?encode=text")
        .then(response => {
            return response.text();
        })
        .then(text => {
            console.log("请求了一言:" + text);
            hitokoto.innerText = `“${text}”`;
        })
})