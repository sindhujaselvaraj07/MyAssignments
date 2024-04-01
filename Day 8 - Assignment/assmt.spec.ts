/**
 * Assignment:1
 * 
 * 
 * 
 * 1. Login to Servicenow application
 *          Load the url :https://dev87582.service-now.com/
 *          username: admin
 *          password:testleaf$123
 * 2. Click 'All'
 * 3. Enter 'Service Catalog' in the filter
 * 4. Click 'Service Catalog'
 * 5. Click 'Mobiles'
 * 6. Click 'Apple iPhone 13
 * 7. Fill all the fields present(handle dropdown and radio buttons)
 * 8. Click Order Now
 * 9. Verify the Order status
 * 
 */


import { test,  expect, chromium } from "@playwright/test"; 
    test.setTimeout(0);
test('Assignmet', async({page,context})=>{

    //test.setTimeout(5000);

    const browser = await chromium.launch();
    const Context=await browser.newContext();
    //const page = await browserContext.newPage();
    //await page.goto("https://dev99812.service-now.com/");
    await page.goto("https://dev185030.service-now.com/");
    await page.locator("//input[@class='form-control']").first().fill("admin")
    //await page.locator("//input[@class='form-control']").last().fill("!exqL9AT8wC@");
    await page.locator("//input[@class='form-control']").last().fill("ut1HXoWj=5L%");
    await page.locator("//button[@class='btn btn-primary']").click();
    await page.getByText("All").first().click();
    await page.getByText("Service Catalog").click();
    await page.waitForTimeout(3000)
    const allframes =await page.frames();
    console.log("no of frames", allframes.length)
    //await page.locator("//h2[normalize-space()='Mobiles']").click();
    const frameelement =await page.frameLocator(`#gsft_main`);
    await frameelement.locator("//h2[normalize-space()='Mobiles']").click(); //to get into the frame
   //await frameelement.locator("#gsft_main"); //click on the targetted element
   const secondframe =await page.frameLocator(`#gsft_main`);
   await secondframe.locator("//strong[text()='Apple iPhone 13']").click(); 
   await secondframe.locator("//label[text()='Yes']").click(); 
   await secondframe.locator("//input[@class='cat_item_option sc-content-pad form-control']").fill("7681425677"); 
   //await secondframe.locator("select[class='form-control cat_item_option ']").click();
   const data = await secondframe.locator("select[class='form-control cat_item_option ']")
   await data.click();
   await data.selectOption(`Unlimited`);
   //await secondframe.locator("//option[text()='Unlimited [add $4.00]']").click();
    //await firstClickElement.click();
    await secondframe.locator("//button[@title='Order Now']").click();
    await page.waitForTimeout(3000)

    console.log(await frameelement.locator("//div[@class='notification notification-success']").innerText());
})
