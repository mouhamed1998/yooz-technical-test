const { $, browser } = require('@wdio/globals')

class LogoutPage {
    get openIconProfil() {return $('button.avatar-toggle').$('i.material-icons=keyboard_arrow_down'); }
    
    get logoutButton() { return $('button.logout').$('mat-icon.mat-icon=power_settings_new'); }

    get loginForm() { return $('.login-form') };

    async logout() {
        
        // Open profil 
        await this.openIconProfil.waitForDisplayed();
        await this.openIconProfil.click();
        await browser.pause(2000);

        // Click logout button to disconnect
        await this.logoutButton.click();
        await browser.pause(2000);

        // Check visibility of login form
        await this.loginForm.waitForDisplayed();
    }
}

module.exports = new LogoutPage();