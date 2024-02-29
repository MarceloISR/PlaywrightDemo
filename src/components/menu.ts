import { Locator, Page } from "@playwright/test";
import { subscribe } from "diagnostics_channel";


export class Menu{
    
    private _page: Page;

    public Allitems: SubMenu;
    public About: SubMenu;
    public Logout: SubMenu;
    public ResetAppState: SubMenu;
    
    constructor(page: Page){
        this._page = page;
        const menu = this._page.getByRole('button', {name: 'Open Menu'});
        
        this.Allitems = new SubMenu(menu, this._page.getByRole('link', {name: 'All Items'}));
        this.About = new SubMenu(menu,this._page.getByRole('link', {name: 'About'}));
        this.Logout = new SubMenu(menu,this._page.getByRole('link', {name: 'Logout'}));
        this.ResetAppState = new SubMenu(menu, this._page.getByRole('link', {name: 'Rest App State'}));

    }

}

export class SubMenu{
    private _locator: Locator;
    private _parent: Locator;

    constructor(parent: Locator, loctaror: Locator){
        this._parent = parent;
        this._locator = loctaror;
    }

    /**
     * performs the click action on the selected object
     */
    public async Click(): Promise<void> {
        await this._parent.click()
        await this._locator.click();
    }
}