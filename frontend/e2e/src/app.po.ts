import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getPreText() {
    return element(by.css('.content-area--header-claim')).getText() as Promise<string>;
  }

  getPostText() {
    return element(by.css('.content-area--header-result')).getText() as Promise<string>;
  }

  getButton() {
    return element(by.css('.div-button-claim'));
  }
}
