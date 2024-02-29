import { type Locator } from "@playwright/test";

export class Button{
    _locator: Locator;
    constructor(locator: Locator){
        this._locator = locator;
    }

    /**
     * Click the selected button
     */
    public async Click(): Promise<void> {
        await this._locator.click();
    }
    
}