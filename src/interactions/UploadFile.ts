export const UploadFile = () => async (page: any) => {
    await page.setInputFiles('input[type="file"]', './src/uploads/img.png');
}