require('./config$');

function success() {
require('../..//app');
require('../../pages/index/index');
require('../../pages/test/test');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
