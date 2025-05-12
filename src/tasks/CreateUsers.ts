import { FillInput } from '../interactions/FillInput';
import { ClickButton } from '../interactions/ClickButton';

export const CreateUsers = (name: string, email: string, password: string) => async (page: any) => {
    await FillInput.withRole('nome', name).executedAs(page);
    await FillInput.withRole('email', email).executedAs(page);
    await FillInput.withPlaceholder('Digite sua senha', password).executedAs(page);
    await ClickButton('cadastrar')(page);
}