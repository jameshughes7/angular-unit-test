import { AppPage } from './app.po';

describe('workspace-project App', () => {
  const page: AppPage = new AppPage();

  beforeEach(() => {
    page.navigateTo();
  });

  it('should display welcome message', () => {
    expect(page.getHeadingText()).toEqual('What Quote is on your mind ?');
  });

  it(`should display 'Create a new quote`, () => {
    expect(page.getQuoteSubmitButton().getText()).toEqual('Create a new quote');
  });

  it(`should display quote input box`, () => {
    const inputBox = page.getQuoteInput();
    const textInput = 'To be or not to be...that is the question';
    inputBox.sendKeys(textInput);
    const submitButton = page.getQuoteSubmitButton();
    submitButton.click();
    expect(page.getFirstQuoteOutputCard()).toEqual(textInput);
  });
});
