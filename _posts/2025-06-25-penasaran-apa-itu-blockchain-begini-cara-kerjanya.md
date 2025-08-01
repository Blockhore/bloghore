---
date: 2025-06-25
layout: post
title: Penasaran Apa Itu Blockchain? Begini Cara Kerjanya!
subtitle: 
description: Penasaran apa itu blockchain? Temukan pengertian dan cara kerjanya dalam penjelasan singkat dan mudah dipahami di sini!
image: https://res.cloudinary.com/deq13ln4r/image/upload/v1750785379/1_pntka8.png
optimized_image: https://res.cloudinary.com/deq13ln4r/image/upload/c_scale,w_380/v1750785379/1_pntka8.png
category: kelas-dasar
tags:
  - Blockchain
author: rafialiffari
paginate: true
---
Di era digital saat ini yang semakin maju, pasti kamu sering mendengar istilah *blockchain*. Tapi, sebenarnya *blockchain* itu apa sih? Kenapa kok banyak orang beranggapan kalau teknologi ini bisa mengubah masa depan?

Nah, di artikel ini aku akan bahas secara sederhana apa itu blockchain dan gimana cara kerjanya. Yuk kita bahas\!

[Join komunitas untuk belajar bareng](https://t.me/Blockhore)

![image 2](https://res.cloudinary.com/deq13ln4r/image/upload/v1750785361/2_rx4x5s.png)

# Apa Itu Blockchain?

**Blockchain** berasal dari dua kata, yaitu *block* (blok) dan *chain* (rantai). Sesuai namanya, blockchain adalah rangkaian blok yang saling terhubung oleh sebuah rantai. Nah, setiap blok itu menyimpan data digital seperti data transaksi atau informasi. Data-data yang tersimpan di blockchain itu bersifat **transparan** dan **gak bisa diubah (*immutable*)**. 

Karena teknologi ini memungkinkan data tersimpan dengan aman dan terbuka, Itulah mengapa blockchain banyak digunakan sebagai sistem penyimpanan data, mulai dari keuangan digital hingga pengelolaan data.

![image 3](https://res.cloudinary.com/deq13ln4r/image/upload/v1750785362/3_zepgjv.png)

# Bagaimana Cara Kerja Blockchain?

Setelah kamu sudah tau apa itu blockchain, pasti kamu bertanya-tanya “emang gimana sih cara kerjanya?” 

Simplenya gini, bayangin blockchain itu kayak buku besar digital. Setiap kali kamu melakukan transaksi, langsung dicatat di buku besar tersebut. Setiap halaman dalam buku besar berisi catatan transaksi dan saling terhubung satu sama lain. Misal kalau kamu kirim 1 BTC, transaksi itu akan dicatat, dikunci, dan halaman berikutnya akan membawa jejak dari halaman itu. Jadi catatan yang terjadi di halaman pertama (1 BTC), di halaman berikutnya akan ada catatan itu juga (1 BTC), ibaratnya kayak ngejiplak gitu dari halaman sebelumnya.

Nah, yang keren dari blockchain adalah ketika dicatat, data tersebut gak bisa diubah (immutable) dan siapa pun bisa melihat isinya (transparan). Ibarat kayak buku besar tapi disimpan bareng-bareng di banyak tempat.

Setelah aku kasih tau penjelasan secara simple pake analogi, lanjut aku bahas bagaimana cara kerja blockchain secara teknis. Tapi tenang, aku bakal jelasin secara sederhana dan mudah dimengerti buat kalian.

![image4](https://res.cloudinary.com/deq13ln4r/image/upload/v1750785362/4_zxh3h4.png)

Jadi, ada beberapa langkah demi langkah bagaimana blockchain bekerja.

1. **Transaksi**  
   Semuanya dimulai dari sebuah transaksi. Misalnya, aku ngirim aset digital (seperti bitcoin atau token lainnya) ke kamu. Transaksi ini berisi informasi seperti:  
* Alamat pengirim (aku) dan penerima (kamu) dalam bentuk kode atau wallet address,  
* Jumlah aset yang dikirim (misal 1 BTC),  
* Dan tanda tangan digital (digital signature) sebagai bukti bahwa transaksi tersebut sah dan dikirim oleh pemilik wallet.  
  Tapi transaksi ini belum langsung tercatat di blockchain, tapi akan masuk ke dalam  daftar transaksi yang menunggu untuk diverifikasi. 

2. **Verifikasi**  
   Blockchain menggunakan sistem jaringan komputer yang saling terhubung, disebut sebagai **node**. Nah, transaksi tadi akan disebarkan ke seluruh node di jaringan tersebut. Para node ini akan melakukan verifikasi seperti: 
* Apakah pengirim (aku) benar-benar punya cukup saldo?  
* Apakah tanda tangan digital valid?  
* Apakah transaksi ini tidak ganda (double spending)?  
  Jika semua verifikasi sudah valid, maka transaksi akan dikumpulkan bersama  transaksi lain ke dalam satu **blok**.  
    
3. **Konsensus**  
   Sebelum blok tersebut ditambahkan ke dalam jaringan blockchain, semua node harus mencapai kesepakatan bahwa blok ini valid. Nah, proses ini disebut **mekanisme konsensus**. Ada dua metode konsensus yang paling umum digunakan:  
* **Proof of Work (PoW)**, metode ini dipakai oleh bitcoin. Jadi, metode PoW ini node harus menyelesaikan teka-teki matematika yang rumit.  
* **Proof of Stake (PoS)**, nah kalo metode ini lebih simpel, node hanya perlu punya jumlah aset tertentu untuk bisa memvalidasi. banyak altcoin menggunakan metode ini.  
  Konsensus ini tujuannya adalah memastikan bahwa hanya blok yang valid dan tidak  dimanipulasi yang bisa masuk ke jaringan.  
    
4. **Blok ditambahkan ke blockchain**  
   Setelah lolos verifikasi dan konsensus, blok akan ditambahkan ke rantai blok sebelumnya. Nah, inilah yang disebut **blockchain** karena setiap blok saling terhubung satu sama lain secara berurutan. Dan setiap blok punya 
* Data transaksi,  
* Waktu pencatatan (timestamp),  
* Hash (kode unik yang menghubungkan antar blok) dari blok sebelumnya.  
  Jadi kalau ada satu blok yang isinya diubah, maka hash akan ikut berubah, dan blok  berikutnya akan jadi tidak valid. Inilah yang membuat blockchain **sulit dimanipulasi**.  
    
5. **Blok disebar dan disimpan oleh semua node**  
   Setelah blok baru ditambahkan, sistem akan menyebarkan salinan blok tersebut ke seluruh node di jaringan blockchain. Jadi, semua komputer yang terhubung dalam jaringan akan menyimpan salinan data yang sama. Itulah mengapa blockchain **terdesentralisasi dan transparan**, karena tidak ada satu pihak yang bisa menyembunyikan dan mengubah data secara diam-diam. Aman banget bukan?     

Gimana, sudah kebayang belum cara kerjanya? Nah, itulah kenapa sejak awal aku menyebutkan bahwa blockchain itu bersifat transparan dan immutable. Bukan asal sebut, tapi karena memang dari sistem kerja blockchain yang begitu unik dan canggih. Teknologi ini bukan cuma soal mencatat transaksi saja loh, tapi juga tentang menciptakan kepercayaan tanpa harus bergantung pada satu pihak pun.
