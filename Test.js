const loader = require('./loader2');

const content = `
################
################
// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = require("!!../node_modules/css-loader/index.js??ref--0-2!./index.css");
if(typeof content === 'string') content = [[module.id, content, '']];
// add the styles to the DOM
var update = require("!../node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(module.hot) {
        // When the styles change, update the <style> tags
        if(!content.locals) {
                module.hot.accept("!!../node_modules/css-loader/index.js??ref--0-2!./index.css", function() {
                        var newContent = require("!!../node_modules/css-loader/index.js??ref--0-2!./index.css");
                        if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
                        update(newContent);
                });
        }
        // When the module is disposed, remove the <style> tags
        module.hot.dispose(function() { update(); });
}
`;

const result = loader(content);

console.log(result);
