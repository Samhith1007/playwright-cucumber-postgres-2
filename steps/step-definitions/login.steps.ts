import { Given, When, Then, After } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../../support/hooks';

Given('the user is on the login page', async () => {
  await page.goto('https://demoqa.com/login');
});

When('the user enters valid username and password', async () => {
  await page.fill('#userName', 'testuser'); // Replace with actual username
  await page.fill('#password', 'Test@123'); // Replace with actual password
  await page.click('#login');
});

Then('the user should be redirected to the dashboard', async () => {
  await page.waitForSelector('#userName-value', { timeout: 5000 });
  const userNameValue = await page.textContent('#userName-value');
  expect(userNameValue).toBe('testuser'); // Ensure this matches your test user
});

After(async () => {
  await page.goto('https://demoqa.com/profile');
  const logoutBtn = await page.$('#submit');
  if (logoutBtn) {
    await logoutBtn.click();
  }
});
