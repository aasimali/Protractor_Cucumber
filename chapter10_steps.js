let pageObjectFile = require('./Pages/pageObject.js')

module.exports = function () {

    /********************************************************************************************************************************************/
    this.Given(/^Open protractor website$/, function (callback) {
        pageObjectFile.OpenWebUrl().then(function () {
            callback();
        }, function (err) {
            callback("error is >> " + err)
        });
    });

    /********************************************************************************************************************************************/
    
}; // end of main function
