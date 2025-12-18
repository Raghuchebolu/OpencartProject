import{Page,Locator,expect}from "@playwright/test";

export class HomePage{
    private readonly page:Page;

    // Locators

    private readonly linkMyAccount:Locator;
    private readonly linkRegister:Locator;
    private readonly linkLogin:Locator;
    private readonly txtSearchbox:Locator;
    private readonly btnSearch:Locator;

    // constructor

    constructor(page:Page)
    {
        this.page=page;
        this.linkMyAccount=page.locator('span:has-text("My Account")');
        this.linkRegister=page.locator('page.locator("a:has-text("Register")")');
        this.linkLogin=page.locator('a').filter({ hasText: 'Login' }).first();
        this.txtSearchbox=page.getByRole('textbox', { name: 'Search' });
        this.btnSearch=page.locator("button[class='btn btn-default btn-lg']");


    }

    // action methods 

    // check if Home page is exists

 async isHomePageExists()
 {
    let title:string=await this.page.title();
    if(title)
    {
        return true;
    }

    return false;
 }

 // click my account link

 async clickMyAccountLink()
 {
    try{
        await this.linkMyAccount.click();
    }
    catch(error){
        console.log(`Exception occured while clicking 'My Account':${error}`);
        throw error;
    }
    
 }

    // click "Register" link

    async clickRegisterLink()
    {
        try{
            await this.linkRegister.click();
        }
        catch(error){
            console.log(`Exception occurred while clicking 'Register': ${error}`)
        }
    }
   
    // click "Login" link
    async clickLoginLink()
    {
        try{
            await this.linkLogin.click();
        }
        catch(error)
        {
            console.log(`Exception occurred while clicking 'Login': ${error}`);
        }
    } 

    // Enter the product in the Searchbox
    async enterProductName(pName:string)
    {
        try{
            await this.txtSearchbox.fill(pName);
        }
        catch(error){
            console.log(`Exception occurred while entering product name: ${error}`);
        }
    }


    // click the search button 

    async clickSearch(){

        try{
        await this.btnSearch.click();
    
    }
    catch (error) 
        {
            console.log(`Exception occurred while clicking 'Search': ${error}`);
            throw error;
        }
    }
}