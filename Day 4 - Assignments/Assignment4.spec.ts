/* Assignment: 4 Edit Individuals
Test Steps:
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher 
4. Click on the Individuals tab 
5. Search the Individuals last name
6. Click on the Dropdown icon and Select Edit
7. Select Salutation as 'Mr'
8. Now enter the first name
9. Click on Save and Verify the first name 
  */

import { test,  chromium } from "@playwright/test"; 
import { expect } from "@playwright/test"; 
    test.setTimeout(0);
test.only('Assignment4', async({page})=>{ 
await page.goto("https://ford-f1-dev-ed.develop.my.salesforce.com");
await page.waitForTimeout(3000); 
await page.locator(`#username`).fill('sindhujas@testleaf.com');
await page.fill("#password", "MyJob@1993!");
await page.waitForTimeout(3000); 
await page.click("#Login");
console.log(await page.title());
await page.waitForTimeout(3000); 
await page.getByRole('button', { name: 'App Launcher' }).click();
console.log(await page.title());
await page.waitForTimeout(5000); 
await page.getByText("View All").click();
await page.waitForTimeout(3000); 
await page.waitForSelector("//p[contains(text(),'Individuals')]");
await page.click("//p[contains(text(),'Individuals')]");
await page.waitForTimeout(3000); 
await page.click(".forceActionLink");
await page.waitForTimeout(3000); 
await page.click(".select");
await page.waitForTimeout(3000); 
await page.click("//a[contains(text(),'Mrs.')]");
    await page.waitForTimeout(3000); 
    await page.getByPlaceholder("First Name").fill("Sindhuja");
    await page.waitForTimeout(3000); 
    await page.getByPlaceholder("Last Name").fill("S");
    const firstnme = await page.getByPlaceholder("First Name");
    await page.waitForTimeout(3000); 
    await page.locator(`//button[(':nth-match(:text("Save"), 2')][3]`).click();
    await page.waitForTimeout(3000); 
    console.log(await page.getByTitle("firstnme"));
    console.log(firstnme);
const verify =  page.getByTitle("firstnme");
await page.waitForTimeout(3000); 
const locator = page.getByRole('link', { name: 'Sindhuja S', exact: true });
await expect(locator).toHaveText('Sindhuja S');   

/* const textDisplayed = await page.getByTitle('Sindhuja S').textContent();
console.log(textDisplayed);
expect('Sindhuja S').toBe(textDisplayed); */


})  

/* await page.selectOption(".ui-selectonemenu",{index:1});
await page.selectOption(".ui-selectonemenu",{label:"Playwright"}); / */