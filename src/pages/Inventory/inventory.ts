import { type Page, type Locator } from "@playwright/test";
import { InventoryItem } from "./inventoryItem";
import { Dropdown } from "../../components/dropdown";


export class Inventory{
    private _locator: Locator;
    public Filter: Dropdown;
    constructor(page: Page){
        this._locator = page.locator('div#page_wrapper');
        this.Filter = new  Dropdown(this._locator.locator("select.product_sort_container"));
    }

    /**
     * @returns Returns if the inventory page is visible.
     */
    public async IsDisplayed(): Promise<Boolean>{
        return this._locator.locator('.inventory_list').isVisible();
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