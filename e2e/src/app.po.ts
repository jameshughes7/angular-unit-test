import { browser, by, element, promise } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeadingText() {
    return element(by.css('app-root h5')).getText();
  }

  getQuoteInput() {
    return element(by.css('app-root .form-control'));
  }

  getQuoteSubmitButton() {
    return element(by.css('.btn.btn-primary'));
  }

  getFirstQuoteOutputCard(): promise.Promise<string> {
    return element(by.css('.card h6')).getText();
  }
}
