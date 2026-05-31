const { test, expect } = require('@playwright/test');
const ContactPage = require('../pages/ContactPage');

test('Submit Contact Form Successfully', async ({ page }) => {

    const contactPage = new ContactPage(page);

    await contactPage.navigate();

    await contactPage.fillContactForm(
        'Tharushi Dilhara',
        'tharushi.test@gmail.com',
        'This is a QA automation assignment test.'
    );

    await contactPage.submitForm();

    await expect(page.locator('body')).toContainText(
        /thank|success|received/i
    );
});