const m = require('./test');

m.test();

if (module.hot) {
    console.log('Hot enabled #####################');
    module.hot.accept('./test', () => {
        console.log('Acceppt');
        const newModule = require('./test');
        newModule.test();
    })
}
