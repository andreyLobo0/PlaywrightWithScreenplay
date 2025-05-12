export class FillInput {
    constructor(
        private locatorType: 'role' | 'label' | 'placeholder' | 'selector',
        private identifier: string,
        private value: string,
    ) {}
    async executedAs(page) {
        let locator;
        switch (this.locatorType) {
            case 'role':
                locator = page.getByRole('textbox', { name: this.identifier });
                break;
            case 'label':
                locator = page.getByLabel(this.identifier);
                break;
            case 'placeholder':
                locator = page.getByPlaceholder(this.identifier);
                break;
            case 'selector':
                locator = page.locator(this.identifier);
        }
        await locator.fill(this.value);
    }
    static withRole( role: string, value: string) {
        return new FillInput('role', role, value);
    }
    static withLabel( label: string, value: string) {
        return new FillInput('label', label, value);
    }
    static withPlaceholder(placeholder: string, value: string) {
        return new FillInput('placeholder', placeholder, value);
      }
    static withSelector(selector: string, value: string) {
    return new FillInput('selector', selector, value);
    }
}