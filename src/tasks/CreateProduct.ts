import { FillInput } from '../interactions/FillInput';
import { UploadFile} from '../interactions/UploadFile';
import { ClickButton } from '../interactions/ClickButton';
import { Page } from 'playwright';

export const CreateProduct = (name: string, price: number, description: string, quantity: number) => async (page: Page) => {
    await FillInput.withRole('nome', name).executedAs(page);
    await FillInput.withLabel('Preço: *', price.toString()).executedAs(page);
    await FillInput.withLabel('Descrição: *', description).executedAs(page);
    await FillInput.withLabel('Quantidade: *', quantity.toString()).executedAs(page);
    await UploadFile()(page)
    await ClickButton('cadastrar')(page);
}