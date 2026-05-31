const { test, expect } = require('@playwright/test'); 
const ContactPage = require('../pages/ContactPage');

test('Verify Required Field Validation', async ({ page }) => {

    const contactPage = new ContactPage(page);

    await contactPage.navigate();

    await contactPage.submitForm();

    const emailField = page.locator('input[name="email"]');

    await expect(emailField).toBeVisible();
});

test('Verify Invalid Email Validation', async ({ page }) => {

    const contactPage = new ContactPage(page);

    await contactPage.navigate();

    await contactPage.fillContactForm(
        'Test User',
        'invalid-email',
        'Testing validation'
    );

    await contactPage.submitForm();

    const emailInput = page.locator('input[name="email"]');

    const validationMessage =
        await emailInput.evaluate(el => el.validationMessage);

    expect(validationMessage).not.toBe('');
});