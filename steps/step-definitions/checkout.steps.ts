import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../../support/hooks';
import { queryDB } from '../../utils/helpers';

let booksFromDB: { id: number; title: string; author: string }[];

Before(async () => {
  // Setup if needed
});

After(async () => {
  // Cleanup if needed
});

Given('the user is logged in', async () => {
  await page.goto('https://demoqa.com/login');
  await page.fill('#userName', 'testuser');
  await page.fill('#password', 'Test@123');
  await page.click('#login');
  await page.waitForSelector('#submit', { timeout: 10000 });
});

When('the user verifies all books from database are visible on the books page', async () => {
  booksFromDB = await queryDB('SELECT * FROM books');
  if (booksFromDB.length !== 3) {
    throw new Error(`Expected 3 books in DB, found ${booksFromDB.length}`);
  }

  await page.goto('https://demoqa.com/books');

  // Verify each book title is visible on the page
  for (const book of booksFromDB) {
    const bookLocator = page.locator(`text=${book.title}`);
    await expect(bookLocator).toBeVisible();
  }
});

Then('the user can logout after verifying all books', async () => {
  // Click logout button - update selector as needed
  await page.click('#submit');  // Assuming '#submit' is the logout button id on demoqa.com/profile page

  // Wait for login page to confirm logout success
  await page.waitForSelector('#login', { timeout: 10000 });
});
