import {type Page, type Locator} from '@playwright/test';
import { Inventory, InventoryItem, ItemDetail } from './pages/Inventory';
import { Login } from './pages/login/page_login';
import { Menu } from './components/menu';


class Main{


    Login : Login;
    Inventory: Inventory;
    ItemDetail: ItemDetail;
    Menu : Menu;
    constructor(){

    }

    Initialize(page: Page){
        this.Login = new Login(page);
        this.Inventory = new Inventory(page);
        this.ItemDetail = new ItemDetail(page);
        this.Menu = new Menu(page);
    }

  
}


export const Luxury= new Main();


