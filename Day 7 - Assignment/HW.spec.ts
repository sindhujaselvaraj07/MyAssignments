 /*
  //Sample instance and credentials
//Url to be loaded
// https://dev205797.service-now.com/
// Credentials
// Username: admin
// Password; Testleaf@123

    Homework: Window
    Login to "https://login.salesforce.com/"
    Enter Username, Password and click Login
    ClicK 'Learn More' button under Mobile Publisher 
    Click 'Confirm' on the new window
    Verify and validate the title, url of the page
*/
import {test, expect} from '@playwright/test'

test('Salesforce', async({page, context})=>{ 
    await page.goto("https://login.salesforce.com/");
    await page.waitForTimeout(3000); 
    await page.locator("//input[@id='username']").fill("sindhujas@testleaf.com")
    await page.locator("//input[@id='password']").fill("MyJob@1993!");
    await page.waitForTimeout(3000); 
    await page.locator("//input[@id='Login']").click();  
    const pagePromise = context.waitForEvent('page');
    await page.locator("//button[@title='Learn More']").click();
    const newPage1 = await pagePromise;
    await newPage1.waitForLoadState();
    //console.log(await page.title());
    console.log(await newPage1.title());
    //const allpages = context.pages()
   await newPage1.locator("//button[@class='slds-button slds-button_brand']").click();
   await newPage1.waitForLoadState();
   await expect(newPage1).toHaveTitle("Create and Publish Custom-Branded Mobile Apps - Salesforce.com");

})