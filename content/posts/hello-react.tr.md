---
title: "Merhaba, React"
date: 2022-12-14T12:12:22+03:00
draft: false
tags: ['react', 'webdev']
---

React. Facebook ekibi tarafından geliştirilmiş, kullanıcı arayüzü geliştirmek için çok kullanılan (hatta bazı kaynaklara göre en çok kullanılan) JavaScript kütüphanesi. Aşırı dinamik sitelerin geliştirilmesinde işleri büyük ölçüde kolaylaştırıyor. Günümüzde Facebook, Twitter, Instagram gibi sitelerde yoğun bir şekilde kullanılıyor. Ayrıca örneğin Go'daki template çözümüne oranla server için yükü azaltıyor. HTML içeriğinin nasıl görüneceğine server karar vermiyor, sadece veri (API) ve JS dosyasını gönderiyor. Bunların yanı sıra React-Native aracılığıyla kolayca mobil uygulama da geliştirebiliyoruz.

React projelerimde NPM yerine Yarn kullanmayı tercih ediyorum. Yeni bir proje başlatırken;

```
npx create-react-app projeAdi
```

komutu, veya eğer TypeScript desteği istiyorsak;

```
npx create-react-app projeAdi --template typescript
```

komutu yeterli oluyor.

Projeyi yarattıktan sonra geliştirme ortamını başlatmak için;

```
yarn start
```

komutunu giriyorum. Böylece genellikle localhost:3000 adresinde başlangıç React projesi açılıyor. Zaten komut ile birlikte otomatik olarak web tarayıcı açılıp sayfaya yönlendirme yapıyor.