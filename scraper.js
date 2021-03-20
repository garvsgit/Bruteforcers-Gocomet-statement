const puppeteer = require('puppeteer');
// function to print the top 3 automobile companies of india through web scraping.
async function company(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    
    const [el1]= await page.$x('/html/body/div[1]/div/main/div[3]/div[1]/div/section[2]/ul[1]/li[1]/a');
    const txt1 = await el1.getProperty('textContent');
    const name1 = await txt1.jsonValue();

    const [el2]= await page.$x('/html/body/div[1]/div/main/div[3]/div[1]/div/section[2]/ul[1]/li[2]/a');
    const txt2 = await el2.getProperty('textContent');
    const name2 = await txt2.jsonValue();

    const [el3]= await page.$x('/html/body/div[1]/div/main/div[3]/div[1]/div/section[2]/ul[1]/li[3]/a');
    const txt3 = await el3.getProperty('textContent');
    const name3 = await txt3.jsonValue();
    
  
    await browser.close();
     
    console.log({name1,name2,name3});
  }
  company('https://en.m.wikipedia.org/wiki/List_of_automobile_manufacturers_of_India');