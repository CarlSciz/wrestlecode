const puppeteer = require("puppeteer");
const fs = require('fs/promises');

async function start() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.cagematch.net/?id=2&view=workers");

    const wrestlerData = await page.evaluate(() => {
        const wrestlerRows = Array.from(document.querySelectorAll('tr.TRow1, tr.TRow2')); // Select all rows with class TRow1 or TRow2
        const wrestlerInfo = wrestlerRows.map(row => {
            const columns = row.querySelectorAll('td.TCol'); // Select all columns in the row
            const gimmick = columns[1].querySelector('a').textContent.trim(); // Get the gimmick from the second column
            const birthplace = columns[3].textContent.trim(); // Get the birthplace from the fourth column
            const promotion = columns[4].textContent.trim(); // Get the promotion from the fifth column
            return { gimmick, birthplace, promotion }; // Return an object with all extracted data
        });
        return wrestlerInfo;
    });

    await fs.writeFile('wrestlerData.json', JSON.stringify(wrestlerData, null, 2)); // Convert wrestlerData array to JSON and write it to wrestlerData.json
    await browser.close();
}

start();
