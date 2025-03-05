const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')
const TasksPage = require('../pageobjects/tasks.page')
const LogoutPage = require('../pageobjects/logout.page')
const TaskGridPage = require('../pageobjects/taskGrid.page')

describe('Yooz user guide', () => {

    it("Connect to the application", async () => {
        await LoginPage.open();
        await LoginPage.login('mouhamed.thiam@ta.com', 'GHfg!87mopV52');
        await LoginPage.checkAvatarContainer();
    });

    it("Checking the content of the application", async () => {
        await HomePage.checkWorkspaces();
        await HomePage.navigateToCapture();
        await HomePage.navigateToTasks();
    });

    it('Selecting grid filters', async () => {
        await TasksPage.filterByOrganization();
        await TasksPage.filterByDocumentTypes();
        await TasksPage.filterByDate();
    });

    it("Checking the content of the ‘To do’ grid", async () => {
        await TaskGridPage.checkTaskGridToDo();
    });

    it('Disconnection', async () => {
        await LogoutPage.logout();
    });
})

