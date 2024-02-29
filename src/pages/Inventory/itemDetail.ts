import { type Locator, type Page } from "@playwright/test";
import { Button } from "../../components/button";
import { LabelField } from "../../components/labelField";


export class ItemDetail{
    private _page : Page;
    private _locator: Locator;
    public Title: LabelField;
    public Description: LabelField;
    public Price: LabelField;
    public AddToCart: Button;
    public BackToProduct: Button;
    constructor(page: Page){
        this._page = page;
        this.Title = new LabelField(this._page.locator('.inventory_details_name'));
        this.Description = new LabelField(this._page.locator('.inventory_details_desc'));
        this.Price = new LabelField(this._page.locator('.inventory_details_price'));
        this.AddToCart = new Button(this._page.getByRole('button', {name: 'Add to cart'}));
        this.BackToProduct = new Button(this._page.getByRole('button', {name: 'back to products'}));
    }

  
}