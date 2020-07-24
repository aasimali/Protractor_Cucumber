let pageObject = function(){

    var deferred = protractor.promise.defer();

    this.OpenWebUrl = async function(){
        await browser.get('https://www.protractortest.org/#/');
        deferred.fulfill();     
    }

    this.clickOnButton = async function(){
        let viewOnGitHub = element(by.css("img[alt='github logo']"));
        await viewOnGitHub.click();
        deferred.fulfill(); 
        
    }

}
module.exports = new pageObject;