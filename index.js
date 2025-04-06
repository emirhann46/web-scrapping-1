const axios = require('axios');
const fs = require('fs');
const cheerio = require('cheerio');

async function fetchData() {
  try {
    let response = await axios({ url: 'https://kur.doviz.com', method: 'GET' });
    if (response.status === 200) {
      let $ = cheerio.load(response.data);

      let currencies = [];
      let rows = $("#currencies > tbody > tr");
      rows.each(function () {
        let columns = $(this).children("td");

        let item = {
          code: $(columns[0]).text().trim().split("\n")[0], // Döviz kodu
          name: $(columns[0]).text().trim().split("\n")[1]?.trim(), // Döviz adı (boşluklar silindi)
          buy: $(columns[1]).text().trim(),
          sell: $(columns[2]).text().trim(),
          change: $(columns[3]).text().trim(),
        };

        currencies.push(item);
      });

      // Dosyayı döngüden sonra yaz
      fs.writeFileSync('currencies.json', JSON.stringify(currencies, null, 4), "utf-8");
      console.log("Veriler başarıyla kaydedildi.");
    } else {
      console.log('Error: ' + response.status);
    }
  } catch (error) {
    console.error("Bir hata oluştu:", error.message);
  }
}

// Her 10 saniyede bir fetchData fonksiyonunu çalıştır
// setInterval(fetchData, 10000);