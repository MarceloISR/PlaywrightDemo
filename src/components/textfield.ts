import { Locator, Page } from "@playwright/test";

export class TextField{
    private _locator: Locator;

    constructor(locator: Locator){
        this._locator = locator;

        
    }

    /**
     * @param {string} text - A string param
     */
    public async setText(text: string):Promise<void>{
        await this._locator.fill(text);
    }

    /**
     * @returns {string} return the content of the textfield 
     */
    public async getText(): Promise<string>{

        return await this._locator.inputValue();
    }
}