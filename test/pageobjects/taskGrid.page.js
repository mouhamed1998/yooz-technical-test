const { $, browser } = require('@wdio/globals')

class TaskGridPage {

    get filterCandidatTestAuto() { return $('div.groupingElement').$('div.firstElement=CANDIDAT TEST AUTO (CAND001)') };

    get taskGrid() { return $('div.grid-left-pinned-row').$('div.grid-left-cell')};

    get filterLikeTests() { return $("(//div[contains(text(), \"J'aime les tests (L1)\")])[2]") };

    get taskGridRow() { return $('div.grid-row') };

    // Checking the content of the ‘To do’ grid
    async checkTaskGridToDo() {

        // Selecting "CANDIDAT TEST AUTO (CAND001)" organisation
        await this.filterCandidatTestAuto.waitForDisplayed();

        // Check cells are present
        await this.taskGrid.waitForDisplayed();
        await expect(this.taskGrid).toHaveText("Facture d'achat 250207090335323");
        await expect(this.taskGridRow).toHaveText(expect.stringContaining("Enregistrement"));
        await expect(this.taskGridRow).toHaveText(expect.stringContaining("30/12/2024"));

        // Selecting "l’organisation J’aime les tests (L1)" organisation
        await this.filterLikeTests.waitForDisplayed();
        await this.filterLikeTests.click();
        await browser.pause(5000);

        // Check cells are present
        await expect(this.taskGrid).toHaveText("Facture de vente 250207093247882");
        await expect(this.taskGridRow).toHaveText(expect.stringContaining("Enregistrement"));
        await expect(this.taskGridRow).toHaveText(expect.stringContaining("111,74"));
    }


}

module.exports = new TaskGridPage();