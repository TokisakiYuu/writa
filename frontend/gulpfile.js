const {
    styles,
    scripts,
    resource,
    template,
    build
} = require("./scripts/gulp-build-dev");

module.exports = {
    styles,
    scripts,
    resource,
    template,
    build,
    default: build
}