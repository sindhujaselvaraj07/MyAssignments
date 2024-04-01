
// 2 .ServiceNow -Ordering Mobile(Frames)
// ---------------------------
// Note: Steps to create your instance is attached under reference document. Kindly create your own instance and automate the application

// 1. Launch ServiceNow application
// 2. Login with valid credentials 
// 3. Click-All Enter Service catalog in filter navigator and press enter or Click the ServiceCatalog
// 4. Click on  mobiles
// 5. Select Apple iphone13pro
// 6. Choose yes option in lost or broken iPhone
// 7. Enter phonenumber as 99 in original phonenumber field
// 8. Select Unlimited from the dropdown in Monthly data allowance
// 9. Update color field to SierraBlue and storage field to 512GB
// 10. Click on Order now option
// 11. Verify order is placed
 
 
//Sample instance and credentials
//Url to be loaded
// https://dev205797.service-now.com/
// Credentials
// Username: admin
// Password; Testleaf@123

 
import { test,  expect, chromium } from "@playwright/test"; 
    test.setTimeout(0);
test('Assignmet', async({page,context})=>{

    //test.setTimeout(5000);

    const browser = await chromium.launch();
    const Context=await browser.newContext();
    //const page = await browserContext.newPage();
    await page.goto("https://dev99812.service-now.com/");
    await page.locator("//input[@class='form-control']").first().fill("admin")
    await page.locator("//input[@class='form-control']").last().fill("!exqL9AT8wC@");
    await page.locator("//button[@class='btn btn-primary']").click();

})