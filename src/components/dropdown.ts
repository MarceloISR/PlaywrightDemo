import { Locator } from "@playwright/test";

export class Dropdown{
    private _locator: Locator;


    constructor(locator: Locator){
        this._locator = locator;


    }

    /**
     * Select a given option from the dropdown
     * @param option option to select from the dropdown
     */
    public async SelectOption(option: string):Promise<void>{
         await this._locator.click();
         await this._locator.selectOption({label: option});
    }


    public async Click(): Promise<void> {
        await this._locator.click();
    }
    

    
}