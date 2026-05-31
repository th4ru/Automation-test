class ContactPage {

    constructor(page) {
        this.page = page;

        this.nameInput = 'input[name="name"]';
        this.emailInput = 'input[name="email"]';
        this.messageInput = 'textarea';

        this.submitButton = 'button[type="submit"]';
    }

    async navigate() {
        await this.page.goto('https://safora.se/en/contact/');
    }

    async fillContactForm(name, email, message) {
        await this.page.fill(this.nameInput, name);
        await this.page.fill(this.emailInput, email);
        await this.page.fill(this.messageInput, message);
    }

    async submitForm() {
        await this.page.click(this.submitButton);
    }
}

module.exports = ContactPage;