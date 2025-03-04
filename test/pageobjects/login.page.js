const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('input[type="submit"]');
    }

    get avatarContainer() { return $('.avatar-container')}
    
    get avatar() { return $('.avatar'); }


    // Login function using username and password
    async login (username, password) {

        // Enter login informations and submit connection
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();

    }

    // CheckAvatarContainer function to check avatar and full name
    async checkAvatarContainer() {

         // Waiting for the page to load
         await browser.pause(5000);

        // Check avatar is displayed
        await this.avatar.waitForDisplayed();

        // Check avatar container contains the full name "Mouhamed Thiam""
        const fullName = this.avatarContainer.$(".user-name");
        await expect(fullName).toHaveText("Mouhamed Thiam");
    }

    // Open function to open the yooz login page
    open () {
        return super.open('https://eu1.getyooz.com/');
    }
}

module.exports = new LoginPage();
