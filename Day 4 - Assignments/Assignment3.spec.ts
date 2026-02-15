
/* 
Assignment: 3 Create Individuals
Test Steps: 
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher
4. Click on the Dropdown icon in the Individuals tab
5. Click on New Individual
6. Enter the Last Name
7. Click save and verify Individuals Name */

import { test,  chromium } from "@playwright/test"; 
import { expect } from "@playwright/test"; 
    test.setTimeout(0);
test.only('Assignment3', async({page})=>{ 
await page.goto("https://ford-f1-dev-ed.develop.my.salesforce.com");
await page.waitForTimeout(3000); 
await page.locator(`#username`).fill('sindhujas@testleaf.com');
await page.fill("#password", "***");
await page.waitForTimeout(3000); 
await page.click("#Login");
console.log(await page.title());
await page.waitForTimeout(5000); 
await page.getByRole('button', { name: 'App Launcher' }).click();
console.log(await page.title());
await page.waitForTimeout(5000); 
await page.getByText("View All").click();
await page.waitForTimeout(3000); 
await page.click("//p[contains(text(),'Individuals')]");
await page.waitForTimeout(3000); 
await page.locator("//span[contains(text(),'Individuals List')]").click();
await page.waitForTimeout(3000); 
await page.locator("//span[contains(text(),'New Individual')]").click();
await page.waitForTimeout(3000); 
await page.getByPlaceholder("First Name").fill("Sindhuja");
    await page.waitForTimeout(3000); 
    await page.getByPlaceholder("Last Name").fill("S");
    await page.locator(`//button[(':nth-match(:text("Save"), 2')][3]`).click();
    await page.waitForTimeout(3000); 
    const locator = page.getByRole('link', { name: 'Sindhuja S', exact: true });
await expect(locator).toHaveText('Sindhuja S');   
   /*  const locator = await page.getByText("Sindhuja S");
    //const locator = page.getByRole('link', { name: 'Sindhuja S', exact: true });
   const textDisplayed = await page.getByTitle('text message').textContent();
    console.log(textDisplayed);
    expect('Test message').toBe(textDisplayed); 
await expect(locator).toHaveText('Sindhuja S');   */ 


})  
