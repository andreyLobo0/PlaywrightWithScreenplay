import { test as setup} from '@playwright/test';
import { AdminUser } from '../actors/AdminUser';
import { LoginAsAdmin } from '../tasks/LoginAsAdmin';
import { IsPageVisible } from '../questions/IsPageVisible';
import path from 'path';

const authFile = path.join(__dirname, '../../src/utils/.auth/user.json');

setup('authenticate', async ({ page }) => {
    // Arrange
    await page.goto('/login');
    const user = new AdminUser(page);
    // Act
    await user.attemptTo(LoginAsAdmin('fulano2@qa.com', 'teste'));
    // Assert
    await page.waitForURL(/.*admin\/home/);
    await IsPageVisible('admin/home', 'Este é seu sistema para administrar seu ecommerce.');      
    await page.context().storageState({ path: authFile });
});