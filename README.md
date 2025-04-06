# Web Scraping Döviz Kurları

Bu proje, [kur.doviz.com](https://kur.doviz.com) web sitesinden döviz kurlarını çekmek ve bu verileri bir JSON dosyasına kaydetmek için geliştirilmiştir. Program, her 10 saniyede bir döviz kurlarını otomatik olarak günceller ve `currencies.json` dosyasına yazar.

## Özellikler

- Döviz kurlarını ve değişim oranlarını çeker.
- Verileri `currencies.json` dosyasına kaydeder.
- Her 10 saniyede bir otomatik olarak çalışır.

## Gereksinimler

Bu projeyi çalıştırmak için aşağıdaki yazılımların yüklü olması gerekir:

- [Node.js](https://nodejs.org/) (v14 veya üzeri)
- npm (Node.js ile birlikte gelir)

## Kurulum

1. Bu projeyi bilgisayarınıza klonlayın veya indirin:
   ```bash
   git clone https://github.com/emirhann46/web-scrapping-1.git
   cd web-scrapping-1
