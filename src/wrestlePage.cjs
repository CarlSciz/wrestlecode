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
    await browser.close();
}

start();
