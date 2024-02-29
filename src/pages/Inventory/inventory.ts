import { type Page, type Locator } from "@playwright/test";
import { InventoryItem } from "./inventoryItem";


export class Inventory{
    private _locator: Locator;
    constructor(page: Page){
        this._locator = page.locator('.inventory_container');
    }

    /**
     * @returns Returns if the inventory page is visible.
     */
    public async IsDisplayed(): Promise<Boolean>{
        return this._locator.isVisible();
    }

    public GetLocator() : Locator{
        return this._locator;
    }

    /**
     * 
     * @param index Obtain the desired item by its index
     * @returns a InventoryItem object
     */
    public  GetInventoryItemByIndex(index: number): InventoryItem{
        return new InventoryItem(this._locator.locator('.inventory_item').nth(index));
    }
}