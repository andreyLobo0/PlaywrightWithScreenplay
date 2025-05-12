import { FillInput } from '../interactions/FillInput';
import { ClickButton } from '../interactions/ClickButton';

export const LoginAsAdmin = (email: string, password: string) => async (page: any) => {
    await FillInput.withRole('email', email).executedAs(page);
    await FillInput.withPlaceholder('Digite sua senha', password).executedAs(page);
    await ClickButton('Entrar')(page);
}