import { Page } from 'playwright';

export const UploadFile = () => async (page: Page) => {
    await page.setInputFiles('input[type="file"]', './src/uploads/img.png');
}