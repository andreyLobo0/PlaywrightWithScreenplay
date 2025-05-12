import { test, expect } from '@playwright/test';
import { AdminUser } from '../../actors/AdminUser';
import { LoginAsAdmin } from '../../tasks/LoginAsAdmin';
import { IsPageVisible } from '../../questions/IsPageVisible';

test.describe('Login', () => {
  test.describe('Success', () => {
    test.use({ storageState: { cookies: [], origins: [] } });
    test('Valid Credentials - Should log in successfully and open the home screen', async ({ page }) => {
    // Arrange
    await page.goto('https://front.serverest.dev/login');
    const user = new AdminUser(page);
    // Act
    await user.attemptTo(LoginAsAdmin('fulano@qa.com', 'teste'));
    // Assert
    await IsPageVisible('admin/home', 'Este é seu sistema para administrar seu ecommerce.');
    });
  })
  test.describe('Error', () => {
    test.use({ storageState: { cookies: [], origins: [] } });
    test('Invalid Credentials - Should log in without successfully and display message of the error', async ({ page }) => {
      // Arrange
    await page.goto('https://front.serverest.dev/login');
    const user = new AdminUser(page);
    // Act
    await user.attemptTo(LoginAsAdmin('fulano@qa.com', 'teste123456'));
    // Assert
    await IsPageVisible('login', 'Email e/ou senha inválidos');
    });
  })
})


