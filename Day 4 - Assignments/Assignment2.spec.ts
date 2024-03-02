/* * ---------------------------------------------------------------------------------------------------
Assignment: 2 Edit Lead
http://leaftaps.com/opentaps/control/main			
1. Launch the browser
2. Enter the username
3. Enter the password
4. Click Login
5. Click CRM/SFA link
6. Click Leads link
7. Click on Create Lead
8. Enter company name
9. Enter first name
10.Enter last name
11.Click on Create Lead button  
12.Click Edit
13.Change the company name
14.Click Update */ 

import { test,  chromium } from "@playwright/test"; 
    test.setTimeout(0);
test("Assignment2", async()=>{
    //test.setTimeout(5000);

    const browser = await chromium.launch();
    const browserContext=await browser.newContext();
    const page = await browserContext.newPage();
    await page.goto("http://leaftaps.com/opentaps/control/main");
    const credentials = page.locator("[class='inputLogin']");
    await credentials.nth(0).fill("demoSalesManager");
    await credentials.nth(1).fill("crmsfa");
    await page.click(".decorativeSubmit");
   // await page.click("text=CRM/SFA");
    await page.click("//a[contains(text(),'CRM/SFA')]"); //using xpath
    await page.waitForTimeout(5000);
   // await page.getByText('Leads').click();
    //await page.locator
    await page.locator(':nth-match(a:has-text("Leads"), 1)').click();

    // await page.click("text=Leads");
      //await page.click("//a[contains(text(),'Leads')]");
      await page.waitForTimeout(5000);
      await page.locator(':nth-match(a:has-text("Create Lead"), 1)').click();
      await page.locator(`#createLeadForm_companyName`).fill('Ford');
      await page.locator(`#createLeadForm_firstName`).fill('Sindhuja');
      await page.locator(`#createLeadForm_lastName`).fill('S');
      await page.waitForTimeout(2000);
      await page.click("[value='Create Lead']");
      await page.waitForTimeout(10000);
      console.log(await page.title());
      await page.click("//div/a[@class='subMenuButton'][3]");
      await page.waitForTimeout(3000);
      console.log(await page.title());
      await page.locator(`#updateLeadForm_companyName`).fill('Altimetrik');
      await page.click("[Value='Update']");
      await page.waitForTimeout(3000);
      console.log(await page.title());
})
 