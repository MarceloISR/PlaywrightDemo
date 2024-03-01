import { Locator } from "@playwright/test";


export class LabelField{
    private _locator : Locator;
    constructor(locator: Locator){
        this._locator = locator;
    }

    /**
     * 
     * @returns return the Text content in the label
     */
    public async GetContent(): Promise<string>{

        return await this._locator.innerHTML() ?? '';
    }

    public GetLocator() {
        return this._locator;
    }
}