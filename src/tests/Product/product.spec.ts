import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { AdminUser } from '../../actors/AdminUser';
import { CreateProduct } from '../../tasks/CreateProduct';
import { IsPageVisible } from '../../questions/IsPageVisible';
test.describe('Product', () => {
    const productName = faker.commerce.productName ();
    const productPrice = faker.number.int({ min: 1, max: 100 });
    const productDescription = faker.commerce.productDescription();
    const productQuantity = faker.number.int({ min: 1, max: 100 });
   test.describe('Success', () => {
    test('Create Product - Should create a product successfully', async ({ page }) => {
        //Arrange
        await page.goto('https://front.serverest.dev/admin/cadastrarprodutos');
        const user = new AdminUser(page);
        //Act
        await user.attemptTo(CreateProduct(productName, productPrice, productDescription, productQuantity));
        //Assert
        await IsPageVisible('admin/listarprodutos', 'Lista dos Produtos');
        await expect(page.getByRole('cell', { name: productName })).toBeVisible();
    })
   })
   test.describe('Error', () => {
    test('Product Duplicate - Should exhibit alert message and not create product.', async ({ page }) => {
        //Arrange
        await page.goto('https://front.serverest.dev/admin/cadastrarprodutos');
        const user = new AdminUser(page);
        await user.attemptTo(CreateProduct(productName, productPrice, productDescription, productQuantity));
        await IsPageVisible('admin/listarprodutos', 'Lista dos Produtos');
        await expect(page.getByRole('cell', { name: productName })).toBeVisible();
        //Act
        await page.goto('https://front.serverest.dev/admin/cadastrarprodutos');
        await user.attemptTo(CreateProduct(productName, productPrice, productDescription, productQuantity));
        //Assert
        await IsPageVisible('admin/cadastrarprodutos', 'Já existe produto com esse nome');
    })
   });
});