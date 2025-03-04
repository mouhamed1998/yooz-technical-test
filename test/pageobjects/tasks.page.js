const { $, browser } = require('@wdio/globals')

class TasksPage {
    
    get filterIcon(){ return $('mat-icon.mat-icon=keyboard_arrow_right')} ;

    get organisationLabel () {return  $('div.form-label-container').$('label.form-label=Organisation')};

    get candidatTestAuto() {return $('//yz-ngb-highlight[text()="CANDIDAT TEST AUTO (CAND001)"]')};

    get likeTests() {return  $("//yz-ngb-highlight[contains(text(), \"J'aime les tests (L1)\")]")}; 

    get submitButton() { return $('//yz-command-button/button[text()="OK"]') };

    get documentTypeLabel() { return $('label.form-label=Type de document')};

    get invoiceSales() { return $('//yz-ngb-highlight[contains(text(), "Facture de vente")]')};

    get invoicePurchase() { return $("//yz-ngb-highlight[contains(text(), \"Facture d'achat\")]")};

    get dateLabel() { return $('label.form-label=Date')};

    get moreThanOrEqualTo() { return $('span.trigger').$('i.material-icons=keyboard_arrow_down')};

    get newValue() { return $('div.dropdown-item=Supérieur ou égal à')};

    get date() { return $('//input[@name="config.code"]')};  


    async applyFilters() {
        
        // check filter icon is displayed and display component
        await this.filterIcon.waitForDisplayed();

        // Sélectionner les organisations
        await this.organisationLabel.waitForDisplayed();
        const organisationField = this.organisationLabel.parentElement().nextElement();
        await organisationField.click();
        await browser.pause(2000);

        // Sélectionner "CANDIDAT TEST AUTO"
        await this.candidatTestAuto.waitForDisplayed();
        await this.candidatTestAuto.click();

        // Sélectionner "J’aime les tests"
        await this.likeTests.waitForDisplayed();
        await this.likeTests.click();

        // Submit selections
        await this.submitButton.click();
        await browser.pause(3000);
        
        // Sélectionner les types de document
        await this.documentTypeLabel.waitForDisplayed();
        const documentTypeField = this.documentTypeLabel.parentElement().nextElement();
        await documentTypeField.click();
        await browser.pause(2000);

        // Sélectionner "Facture de vente"
        await this.invoiceSales.waitForDisplayed();
        await this.invoiceSales.click();

        // Sélectionner "Facture d’achat"
        await this.invoicePurchase.waitForDisplayed();
        await this.invoicePurchase.click();

        // Submit selections
        await this.submitButton.click();
        await browser.pause(3000);

        // Sélectionner la date
        await this.dateLabel.waitForDisplayed();
        const dateField = this.dateLabel.parentElement().nextElement();
        await dateField.click();
        await browser.pause(2000);

        // Sélectionner "Supérieur ou égal à : 07/02/2025"
        await this.moreThanOrEqualTo.waitForDisplayed();
        await this.moreThanOrEqualTo.click();
        await browser.pause(2000);

        await this.newValue.waitForDisplayed();
        await this.newValue.click();

        await this.date.waitForDisplayed();
        await this.date.setValue('07/02/2025');

        // Submit selections
        await this.submitButton.click();
        await browser.pause(3000);
    }

}

module.exports = new TasksPage();