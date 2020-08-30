import {fetchData} from "./dataApi";
exports.fetchData = fetchData;

let turbolinks = require("turbolinks");
turbolinks.start();

class A {
    constructor() {
        this.b = "i ❤️ u";
    }
}


// pug的前端用法
// let test = require("pug-loader!../frontend/test.pug")

