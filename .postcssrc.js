module.exports = {
  "modules": true,
  "plugins": {
    "postcss-modules": {
      "generateScopedName": "[local]--[hash:base64:5]" 
    },
    "autoprefixer": {
      browsers: [ "> 1%", "Last 2 versions" ]
    }
  } 
}