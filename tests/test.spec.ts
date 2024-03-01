import {test, expect } from '@playwright/test';
import { Luxury } from '../src/Main';
import { USER } from '../data/user-data';
import { SystemMessages } from '../data/system-messages';

let close = true;
test.beforeEach(async ({page})=> {
    await page.goto('https://www.saucedemo.com/');

    // Initialize the Luxury object
    Luxury.Initialize(page);

   
});

test.afterEach(async ({page})=> {
    if(close){
        // logout from the session
        await Luxury.Menu.Logout.Click();
    }
    close = true;
})

test.describe('Login test group', ()=>{
    test('Happy path', {tag: ['@login','@smoke']}, async ({page}) => {
        
        // login in to the app
        await Luxury.Login.Access(USER.standard.user, USER.standard.password);

        // Verify if the Inventory page is visible
        expect(await Luxury.Inventory.IsDisplayed(), 'Inventory page is not visible').toBe(true);
        
        // Get the First Item by its index
        await Luxury.Inventory.GetInventoryItemByIndex(0).Click();
        
        // Verify the title loaded is the expected one
        expect(await Luxury.ItemDetail.Title.GetContent(), 'error: the title is not the expected one').toEqual('Sauce Labs Backpack');

        // add the item to the cart
        await Luxury.ItemDetail.AddToCart.Click();

        // go back to the Inventory page
        await Luxury.ItemDetail.BackToProduct.Click();

        // Verify if the Inventory page is displayed
        expect(await Luxury.Inventory.IsDisplayed(), 'Error: Inventory page was not displayed').toBeTruthy();

    })

    test('Bloqued user', {tag: ['@login','@smoke']}, async ({page}) => {
        // before each will not be executed
        close = false;
        // login in to the app
        await Luxury.Login.Access(USER.locked.user, USER.locked.password);

        expect(await Luxury.Login.ErrorMessage(), 'Error: Locket user messages was not displayed').toEqual(SystemMessages.locked_error);

        // Verify if the Inventory page is visible
        expect(await Luxury.Inventory.IsDisplayed(), 'Inventory page should not be displayed').toBe(false);
    })
})