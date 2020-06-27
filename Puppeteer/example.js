/*
 * @Author: Li Hang
 * @Date: 2020-06-26 21:05:44
 * @LastEditTime: 2020-06-26 21:06:07
 */ 
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();