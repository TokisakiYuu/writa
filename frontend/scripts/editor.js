let {fetchData} = require("./common");
const Vue = require("vue").default;
const CKEditor = require("ckeditor4-vue");

Vue.config.productionTip = false;
Vue.config.devtools = false;

Vue.use(CKEditor);

let $ = (selector) => {
    return document.querySelector(selector);
}

let hitokoto = $("#hitokoto");
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

// ckeditor
new Vue({
    el: '#ckeditor',
    data: {
        title: "",
        editorData: '',
        editorConfig: {
            height: 400
        }
    },
    methods: {
        release: async function() {
            console.log("发布");
            // console.log(this.editorData);
            // let res = await fetchData('/article/save_new_article', {
            //     title: this.title,
            //     content: this.editorData
            // })
            // console.log(res);
            console.log(await fetchData("/article/article_list"));
            
        }
    }
});