import { expect } from "@playwright/test";
import { FillInput } from '../interactions/FillInput';

export const ItemCreatedIsVisible = (item:string) =>  async (page) => {
    const element = await FillInput.withRole('cell', item).executedAs(page);
    await expect(element).toBeTruthy();
}