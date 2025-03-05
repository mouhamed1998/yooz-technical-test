const { $, browser } = require('@wdio/globals')
const Page = require('./page');

class HomePage {
    get captureSection() { return $('//span[text()="Capture"]'); }
    get tasksSection() { return $('//span[text()="Mes tâches"]'); }
    get exportsSection() { return $('//span[text()="Mes exports"]'); }
    get importFiles() { return $('//div[text()="Import de fichiers"]'); }
    get tasksGrid() { return $('//span[contains(text(), "A faire")]'); }

    // Function to check the visibility of workspaces
    async checkWorkspaces() {

        // Check workspaces : "Capture", "Mes tâches", "Mes exports"
        await this.captureSection.waitForDisplayed();
        await this.tasksSection.waitForDisplayed();
        await this.exportsSection.waitForDisplayed();
    }

    // Function to navigate capture workspace
    async navigateToCapture() {
        await this.captureSection.click();
        await this.importFiles.waitForDisplayed();
    }

    // Function to navigate tasks grid
    async navigateToTasks() {
        await this.tasksSection.click();
        await this.tasksGrid.waitForDisplayed();
    }
}


module.exports = new HomePage();