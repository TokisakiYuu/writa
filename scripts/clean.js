const rimraf = require("rimraf");

const callback = err => err ? console.error(err) : 0;

rimraf("dist", callback);
rimraf("frontend/dist", callback);