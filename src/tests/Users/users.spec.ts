import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { AdminUser } from '../../actors/AdminUser';
import { CreateUsers } from '../../tasks/CreateUsers';
import { IsPageVisible } from '../../questions/IsPageVisible';
import { ItemCreatedIsVisible } from '../../questions/ItemCreatedIsVisible';
test.describe('Users', () => {
    const userName = faker.person.fullName();
    const userEmail = faker.internet.email();
    const userPassword = faker.string.uuid();
   test.describe('Success', () => {
    test('Create User - Should create a product successfully.', async ({ page }) => {
        //Arrange
        await page.goto('https://front.serverest.dev/admin/cadastrarusuarios');
        const user = new AdminUser(page);
        //Act
        await user.attemptTo(CreateUsers(userName, userEmail, userPassword));
        //Assert
        await IsPageVisible('admin/listarusuarios', 'Lista dos usuários');
        await ItemCreatedIsVisible(userName)
    })
   })
   test.describe('Error', () => {
    test('User Duplicate - Should exhibit alert message and not create user.', async ({ page }) => {
        //Arrange
        await page.goto('https://front.serverest.dev/admin/cadastrarusuarios');
        const user = new AdminUser(page);
        await user.attemptTo(CreateUsers(userName, userEmail, userPassword));
        await IsPageVisible('admin/listarusuarios', 'Lista dos usuários');
        await ItemCreatedIsVisible(userName)
        //Act
        await page.goto('https://front.serverest.dev/admin/cadastrarusuarios');
        await user.attemptTo(CreateUsers(userName, userEmail, userPassword));
        //Assert
        await IsPageVisible('admin/cadastrarprodutos', 'Já existe produto com esse nome');
    })
   });
});