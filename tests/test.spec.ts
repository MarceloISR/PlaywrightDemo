import {test, expect } from '@playwright/test';
import { Luxury } from '../src/Main';
import { USER } from '../data/user-data';


test.beforeEach(async ({page})=> {
    await page.goto('https://www.saucedemo.com/');

    // Initialize the Luxury object
    Luxury.Initialize(page);

     // login in to the app
    await Luxury.Login.Access(USER.standard.user, USER.standard.password);
});

test.afterEach(async ({page})=> {
    // logout from the session
    await Luxury.Menu.Logout.Click()
})

test.describe('Login test group', ()=>{
    test('happy path',{tag: '@login'}, async ({page}) => {

        // Verify if the Inventory page is visible
        expect(await Luxury.Inventory.IsDisplayed(), 'Inventory page is not visible').toBeTruthy();
        Luxury.Inventory.GetLocator().getByText('')
        
        // Get the First Item by its index
        await Luxury.Inventory.GetInventoryItemByIndex(0).Click();
        
        // Verify the title loaded is the expected one
        expect(await Luxury.ItemDetail.Title.GetContent(), 'error: the title is not the expected one').toEqual('Sauce Labs Backpack');

        // add the item to the cart
        await Luxury.ItemDetail.AddToCart.Click();

        // go back to the Inventory page
        await Luxury.ItemDetail.BackToProduct.Click();

        expect(await Luxury.Inventory.IsDisplayed(), 'Error: Inventory page was not displayed').toBeTruthy();

    })

})