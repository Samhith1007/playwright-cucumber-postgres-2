import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../../support/hooks';

Given('the user is on the books page', async () => {
  console.log('Navigating to books page');
  await page.goto('https://demoqa.com/books');
});

When('the user searches for {string}', async (bookTitle: string) => {
  await page.fill('#searchBox', bookTitle);
});

Then('the book should be visible in the results', async () => {
  const bookVisible = await page.isVisible('text=Git Pocket Guide');
  expect(bookVisible).toBe(true);
});
