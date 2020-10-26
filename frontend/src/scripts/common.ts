import sayHello from "./lib";
import "../styles/shell.less";

import "../pages/index.pug";
import "../resource/stars.jpg";

sayHello();
let say:String = "hello world";
console.log(say);
export default sayHello;