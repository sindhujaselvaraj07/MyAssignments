// HomeAssignments
// -----------------
//1. MergeContact (Alert and windowHandle)
// -----------		  
// 1. Launch URL "http://leaftaps.com/opentaps/control/login"
// 2. Enter UserName and Password Using Id Locator
// 3. Click on Login Button using Class Locator
// 4. Click on CRM/SFA Link
// 5. Click on contacts Button
// 6. Click on Merge Contacts using Xpath Locator
// 7. Click on Widget of From Contact
// 8. Click on First Resulting Contact
// 9. Click on Widget of To Contact
// 10. Click on Second Resulting Contact
// 11. Click on Merge button using Xpath Locator
// 12. Accept the Alert
// 13. Verify the title of the page

import { test,  expect, chromium } from "@playwright/test"; 
    test.setTimeout(0);
test('Assignmet', async({page,context})=>{

    //test.setTimeout(5000);

    const browser = await chromium.launch();
    const Context=await browser.newContext();
    //const page = await browserContext.newPage();
    await page.goto("http://leaftaps.com/opentaps/control/main");
    const credentials = page.locator("[class='inputLogin']");
    await credentials.nth(0).fill("demoSalesManager");
    await credentials.nth(1).fill("crmsfa");
    await page.click(".decorativeSubmit");
    await page.click("//a[contains(text(),'CRM/SFA')]"); //using xpath
    await page.waitForTimeout(5000);
    await page.locator(':nth-match(a:has-text("Leads"), 1)').click();
    await page.locator("//a[text()='Merge Leads']").click();


   const pagePromise = context.waitForEvent('page');
await page.locator("(//img[@alt='Lookup'])[1]").click();
const newPage1 = await pagePromise;
await newPage1.waitForLoadState();
console.log(await newPage1.title());
const allpages = context.pages()
await expect(newPage1).toHaveTitle("Find Leads"); 

await newPage1.locator("//td[@class='x-grid3-col x-grid3-cell x-grid3-td-partyId x-grid3-cell-first '][1]").click();
//await page.waitForTimeout(3000);
await page.locator("(//img[@alt='Lookup'])[2]").click();
const pageePromise = context.waitForEvent('page');

const newPage2 = await pageePromise;
await newPage2.waitForLoadState();
console.log(await newPage2.title());
const allpagess = context.pages()
//await expect(newPage).toHaveTitle("Find Leads"); 

await newPage2.locator("//td[@class='x-grid3-col x-grid3-cell x-grid3-td-partyId x-grid3-cell-first '][1]").nth(2).click();
await page.locator("//a[normalize-space()='Merge']").click();
page.on('dialog', async dialog => {
   // expect(dialog.type()).toContain('alert')
    //expect(dialog.message()).toContain('Are you sure?')
    await dialog.accept();
    
    })
    await page.locator("//a[normalize-space()='Merge']").click();
    await page.waitForTimeout(5000);
console.log(await page.title());


})





    


