const puppeteer = require("puppeteer");
const fs = require('fs/promises');

async function start() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.cagematch.net/?id=2&view=statistics&page=3");

    const wrestlerData = await page.evaluate(() => {
        const wrestlerRows = Array.from(document.querySelectorAll('tr.TRow1, tr.TRow2')); // Select all rows with class TRow1 or TRow2
        const wrestlerInfo = wrestlerRows.map(row => {
            const columns = row.querySelectorAll('td.TCol'); // Select all columns in the row
            const gimmickLink = columns[1].querySelector('a'); // Select the gimmick link element
            const gimmick = gimmickLink.textContent.trim(); // Get the gimmick name
            const href = gimmickLink.href; // Get the href for the gimmick
            const birthplace = columns[2].textContent.trim(); // Get the birthplace from the fourth column
            return { gimmick, href, birthplace }; // Return an object with all extracted data including the href
        });
        return wrestlerInfo;
    });

    await fs.writeFile('wrestlerData.json', JSON.stringify(wrestlerData, null, 2)); // Convert wrestlerData array to JSON and write it to wrestlerData.json

    // Close the Page so we can call another one
    await page.close();

    // Still using the operating browser we create a new page
    const page2 = await browser.newPage();
    await page2.goto("https://www.cagematch.net/?id=8&view=promotions");


    //Similar set up as above to extract our promotion data from the website
    const promotionData = await page2.evaluate(() => {
        const promotionRows = Array.from(document.querySelectorAll('tr.TRow1, tr.TRow2'));
        const promotionInfo = promotionRows.map (row => {
            const columns = row.querySelectorAll('td.TCol');
            const promotionName = columns[2].querySelector('a').textContent.trim();
            const promotionHQ = columns[3].textContent.trim();
            const years = columns[4].textContent.trim();
            return { promotionName, promotionHQ, years };
        });
        return promotionInfo;
    })

    // Converting all the data from the promotionData to JSON and spitting it out into another file
    await fs.writeFile('promotionData.json', JSON.stringify(promotionData, null, 2));

    // Finally close the browser after we are finished scraping the data we need
    await browser.close();
}

start();
