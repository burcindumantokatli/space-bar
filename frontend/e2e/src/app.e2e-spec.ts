import {AppPage} from './app.po';
import {browser, logging} from 'protractor';

describe('App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display Ajax Response correctly at first stage', () => {
        page.navigateTo();
        expect(page.getPreText()).toEqual('50 Free Spins on Gemix');
    });

    it('should display Ajax Response correctly at second stage after button clicked', () => {
        page.navigateTo();
        page.getButton().click();
        expect(page.getPostText()).toEqual('You’ve 50 Free Spins to use now');
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });
});
