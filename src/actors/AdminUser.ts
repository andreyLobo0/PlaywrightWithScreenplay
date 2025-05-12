import { Page } from '@playwright/test';

// Define o tipo para as ações
interface Action {
    (page: Page): Promise<void>;
}

export class AdminUser {
    constructor(public page: Page) {}

    attemptTo = async (...actions: Action[]): Promise<void> => {
        for (const action of actions) {
            await action(this.page);
        }
    }
}