import { Locator } from "@playwright/test";


export class LabelField{
    private _locator : Locator;
    constructor(locator: Locator){
        this._locator = locator;
    }

    public async GetContent(): Promise<string>{

        return await this._locator.innerHTML() ?? '';
    }

    public GetLocator() {
        return this._locator;
    }
}