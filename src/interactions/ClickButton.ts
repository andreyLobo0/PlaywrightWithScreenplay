export const ClickButton = (namebutton) => async (page: any) => {
    await page.getByRole('button', { name: namebutton }).click()
}