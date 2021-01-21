module.exports = {
  presets: [
    ["@babel/preset-env", 
      {
        "targets": "last 2 versions, ie 11",
        "modules": false
      }
    ],
    ["@babel/preset-react"],
    ["@babel/preset-typescript"]
  ],
  plugins: [
    // "babel-plugin-styled-components"
  ]
};
