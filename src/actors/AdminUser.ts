import { Page } from '@playwright/test';

export class AdminUser {
    constructor(public page: Page   ) {}
    attemptTo = async ( ...actions: Function[]) => {
        for(const action of actions){
            await action(this.page);
            }
        }
}