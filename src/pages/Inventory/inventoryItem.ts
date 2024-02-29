import { Locator } from "@playwright/test";
import { Button } from "../../components/button";
import { LabelField } from "../../components/labelField";

export class InventoryItem{

    private _locator: Locator;
    public titleLabel: LabelField;
    public descriptionLabel: LabelField;
    public priceLabel: LabelField;
    public addToCartButton: Button;
    constructor(locator: Locator){
        this._locator = locator;

        this.titleLabel = new LabelField(this._locator.locator('.inventory_item_name'));
        this.descriptionLabel = new  LabelField(this._locator.locator('.inventory_item_desc'));
        this.priceLabel = new LabelField(this._locator.locator('.inventory_item_price'));

        this.addToCartButton = new Button(this._locator.locator('[data-test=add-to-cart-sauce-labs-backpack]'));
    }

    /**
     * @description click in the item title to redirect to the item detail
     */
    public async Click():Promise<void>{
        await this.titleLabel.GetLocator().click();
    }

    
}