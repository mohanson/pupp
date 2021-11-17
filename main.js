// $ npm install puppeteer puppeteer-extra puppeteer-extra-plugin-stealth
const puppeteer = require('puppeteer-extra')

const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

puppeteer.launch({ headless: true }).then(async browser => {
  const page = await browser.newPage()
  await page.goto('http://basic.10jqka.com.cn/api/stock/finance/600519_cash.json')
  await page.waitForTimeout(1000)
  console.log((await page.content()).toString());
  await browser.close()
})
