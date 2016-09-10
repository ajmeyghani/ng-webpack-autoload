const testContext = require.context('./src', true, /\.test\.js$/);
testContext.keys().map(testContext);
