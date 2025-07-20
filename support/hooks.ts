import { BeforeAll, AfterAll } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

let browser: Browser;
let context;
export let page: Page;

BeforeAll(async () => {
  browser = await chromium.launch({ headless: false }); // set true in CI
  context = await browser.newContext();
  page = await context.newPage();
});

AfterAll(async () => {
  await browser.close();
});
