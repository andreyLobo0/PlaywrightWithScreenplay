import { expect } from "@playwright/test";

export const IsPageVisible = (path:string, validation:string) =>  async (page) => {
    await page.waitForURL(`${path}`);
    await expect(page).toHaveURL(`https://front.serverest.dev/${path}`);
    await expect(page.getByText(validation)).toHaveText(validation);
}