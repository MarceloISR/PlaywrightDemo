import { type Locator, type Page } from "@playwright/test";
import { Button } from "../../components/button";
import { TextField } from "../../components/textfield";

export class Login{
    private _container: Locator;

    public submitButton: Button;
    public userField: TextField;
    public passwordField: TextField;
    static userField: any;

    constructor(page: Page){
        this._container = page.locator('.login-box');

        this.userField = new TextField(this._container.locator('[data-test=username]'));
        
        this.passwordField = new TextField(this._container.locator('[data-test=password]'));

        this.submitButton = new Button(this._container.locator('[data-test=login-button]'))
    }

    /**
     * 
     * @param user The username to use for the login attempt.
     * @param pass The password to use for the login attempt.
     * 
     */
    public async Access(user: string, pass: string): Promise<void> {
        await this.userField.setText(user),
        await this.passwordField.setText(pass);
        await this.submitButton.Click();
    }

    /**
     * 
     * @returns returns true if the Login box is displayed
     */
    public async IsVisible(): Promise<boolean>{
        return await this._container.isVisible();
    }
}