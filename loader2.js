module.exports = function (source) {
    const lines = source.split('\n');
    const index = lines.findIndex((line) => line.indexOf('module.exports') !== -1);
    const resultLines = lines.slice(0, index);
    resultLines.push(
`if(content.locals && (typeof Proxy === 'function')) module.exports = new Proxy(content.locals, {
    get: function(target, prop) {
        if (prop === '__esModule') return;
        if (target[prop]) return target[prop];
        console.warn('Cannot found className: ' + prop+' in ${this.resourcePath.replace(this.context, '.')}');
        return;
    }
});
`);
    return resultLines.concat(lines.slice(index + 1, lines.length)).join('\n');
};
