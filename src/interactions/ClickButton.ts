import { Page } from 'playwright';

export const ClickButton = (namebutton: string) => async (page: Page) => {
    await page.getByRole('button', { name: namebutton }).click()
}