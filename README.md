<p align='center'>
  <a href="https://www.w3.org/standards/webdesign/htmlcss">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/></a>&nbsp;&nbsp;
  <a href="https://www.w3.org/standards/webdesign/htmlcss">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/></a>&nbsp;&nbsp;
  <a href="https://www.javascript.com/">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/></a>&nbsp;&nbsp;
</p>

<div align="center">

| Profile       |                                           |
| ------------- | ----------------------------------------- |
| Nama          | Nur Muhammad Himawan                      |
| Learning Path | Machine Learning & Front End Development  |
| Progam        | Studi Independen Batch 3 - Kampus Merdeka |

</div>

# MLFE - Belajar Dasar Pemrograman Web

Proyek submission untuk kelas **Belajar Dasar Pemrograman Web Dicoding**.

<div align="center">
<figure>
    <img src ="https://github.com/nurmuhimawann/MLFE-Belajar-Dasar-Pemrograman-Web/blob/main/assets/img/home.gif?raw=true" alt="home">
    <figcaption align="center"><b>Display Home</b></figcaption>
</figure>
</div>



## About

Pada proyek ini, saya mengembangkan website dengan mengambil tema **personal website**. Yang mana pada website ini akan menampilkan informasi singkat mengenai diri saya pribadi, mulai dari identitas, social media, experience hingga apa yang saya sukai. Website yang dikembangkan cukup sederhana, namun saya pastikan itu sudah bisa memberikan gambaran dan informasi yang jelas mengenai diri saya.



## Resource

- HTML

- CSS

- JavaScript

- Visual Studio Code (VSCode)

  

## Student Notes (Javascript Implementation)

Saya mengimplementasikan JavaScript pada website yang dikembangkan, berikut cara pengaksesannya:

- **Hamburger Menu**

  Pada kerangka html saya membuat class `.menu-toggle` dan mengisinya menggunakan `input` dan 3 `span` kosong. menu ini hanya akan terlihat pada device mobile, yang mana akan menggantikan menu navbar. Saya menyebutnya dengan **hamburger menu**, karena memiliki bentuk seperti hamburger. 

  Pada script.js, function DOM **querySelector()** digunakan untuk **mencari element** input dan navbar yang terdapat pada dokumen HTML dan menyimpannya ke dalam variabel constant.

  ```javascript
  const menuToggle = document.querySelector('.menu-toggle input');
  const nav = document.querySelector('nav ul');
  ```

  Kemudian, dengan menambahkan *event handler* menggunakan method **addEventListener()** pada class input, ketika kotak input ditekan maka akan menampilkan display slide yang sebelumnya tersembunyi dari layout.

  ```javascript
  menuToggle.addEventListener('click', function () {
      nav.classList.toggle('slide');
  });
  ```

- **My Favorite Artist**

  Pada konten *my favorite artist*, saya melakukan looping untuk menampilkan kontennya. karena bentuknya berupa card. maka, cukup membuat satu card dan melooping nya sesuai dengan jumlah isi kontennya. Ini akan menghemat waktu dan tidak perlu menuliskan kode yang berulang.

  Pertama, saya mencari Id `#artist-cards-container` yang bertindak sebagai parent dari card-nya dan menyimpannya dalam variabel constant bernama `container`. Kemudian, saya juga mengisikan values pada variabel `valuesCard` untuk masing-masing card mulai dari *path-image*, *title*, dan data *social media*.

  ```javascript
  const container = document.getElementById('artist-cards-container');
  const valuesCards = [{
      image: 'assets/img/1.png',
      title: 'Ariana Grandong',
      instagram: 'https://www.instagram.com/arianagrande/',
      youtube: 'https://www.youtube.com/c/ArianaGrande/'
  },
  ...
  {
      image: 'assets/img/5.png',
      title: 'Billie Arisan',
      instagram: 'https://www.instagram.com/billieeilish/',
      youtube: 'https://www.youtube.com/c/BillieEilish/'
  }
  ];
  ```

  Kemudian, membuat function untuk melakukan return value dengan membuat template card yang disimpan pada div dengan class `card`. values pada variabel `const valuesCard` akan dilooping sesuai urutan dengan mengisikan values pada setiap element yang dibutuhkan pada card.

  ```javascript
  function returnCards(valuesCards) {
      return valuesCards.map(valuesCard => `<div class='card'>
          <img class="round" src="${valuesCard.image}" alt="${valuesCard.title}" />
          <h3>${valuesCard.title}</h3>
          <div class="info-artist">
              <ul>
                  <li class="socmed"><a href="${valuesCard.instagram}">Instagram</a></li>
                  <li class="socmed"><a href="${valuesCard.youtube}">Youtube</a></li>
              </ul>
          </div>
      </div>`).join('');
  }
  ```

  ---

  Terakhir, saya menambahkan element card pada element parent yang ada pada variabel container dengan menggunakan method `innerHTML`. Method ini akan menuliskan ulang  tag html dan menggabungkan nilainya pada element. Untuk menjalankannya, tinggal memanggil function `returnCards` yang sudah di custom sebelumnya.

  ```javascript
  container.innerHTML = returnCards(valuesCards);
  ```

  ---

- **Gallery-Box**

  Caranya sama persis dengan menerapkan card pada konten **My Favorite Artist**, yang mana pertama menginisiasi variabel dengan menemukan Id pada dokumen html dan mengisikan values pada variabel `valuesImage` untuk menampung relative-path dari gambar.

  ```javascript
  const column1 = document.getElementById('column1');
  const valuesImage = [{
      img: 'assets/img/gallery-box/1.jpeg',
  }, 
  {
      img: 'assets/img/gallery-box/2.jpg',
  }, 
  {
      img: 'assets/img/gallery-box/3.jpg',
  }
  ];
  ```

  ---

  Selanjutnya, membuat function untuk melakukan return values. 

  ```javascript
  function returnImage(valuesImage) {
      return valuesImage.map(valuesImage => `<div class='image-item'>
              <img src="${valuesImage.img}" alt="" />
              <div class="overlay"></div>
          </div>`).join('');
  };
  ```

  ---

  Dan yang terakhir, menjalankan function dan menggunakan method `innerHTML` untuk menuliskan element pada dokumen HTML.

  ```javascript
  column1.innerHTML = returnImage(valuesImage);
  ```



## Kriteria Submission

Berikut kriteria submission yang harus Anda penuhi:

- [x] Terdapat elemen <header>, <footer>, <main>, <article>, dan <aside> di berkas HTML.
- [x] Masing-masing elemen wajib berisi konten yang peruntukkannya sesuai dengan elemen tersebut (menerapkan konsep *semantic HTML* dalam menyusun struktur website).
  Sebagai contoh: Header berisi judul dan navigation. Sedangkan konten artikel tidak boleh berada pada Header.
- [x] Wajib menampilkan identitas diri (biodata diri) yang minimal harus berisi foto asli diri dan nama sesuai profil Dicoding. Identitas diri wajib ditampilkan dalam elemen <aside>.
- [x] Menyusun layout dengan menggunakan float atau flexbox.
- [x] Tema yang ditampilkan bebas, **kecuali** tema Bandung.
- [x] Semakin detail dan lengkap website Anda maka nilai submission bisa lebih tinggi.

<div align="center">
<figure>
    <img src ="https://github.com/nurmuhimawann/MLFE-Belajar-Dasar-Pemrograman-Web/blob/main/assets/img/sketsa.png?raw=true" alt="images">
	<figcaption align = "center"><b>Sketsa Layout</b></figcaption>
</figure>
</div>



## Tips

- [x] Ketika melakukan *import* suatu resource pada file HTML, pastikan untuk menggunakan **relative path,** dan hindari menggunakan **absolute path** karena berpotensi menyebabkan resource tersebut tidak dapat dibaca ketika dilakukan reviu. Berikut adalah contohnya :
  **Absolute path :** C:\Users\Documents\Projects\styles\style.css **atau** /home/user/Projects/styles/style.css
  **Relative path :** styles/style.css
- [x] Masih dalam topik yang sama mengenai asset/resource, pastikan dalam penulisan nama file atau folder **sama persis** dengan keadaan sebenarnya. Misalnya pada folder proyek, ada gambar dengan nama **profile.jpg**, maka harus di import juga dengan nama **profile.jpg** (bukan **Profile.jpg**). Hal ini bertujuan agar beberapa file tersebut bisa dimuat dengan baik oleh browser pada beberapa Sistem Operasi, seperti Linux.
- [x] Agar memudahkan Anda dalam membuat submission, gunakanlah IDE (Integrated Development Environtment) yang mendukung produktivitas dalam menuliskan kode. Misalnya **Atom, VSCode,** atau yang lainnya.



## Penilaian & Saran

Submission Anda akan dinilai oleh reviewer dengan **skala 1-5** berdasarkan dari parameter yang ada. Anda dapat menerapkan beberapa **saran** untuk mendapatkan nilai tinggi, berikut sarannya:

- [x] Menerapkan tampilan aplikasi yang menarik:

  - Memiliki pemilihan warna yang pas dengan tema aplikasi (Dalam memilih warna, Anda dapat memanfaatkan tools pemilihan warna seperti [colorhunt.co](http://colorhunt.co/)). **(Done)**
  - Tata letak elemen yang pas. **(Done)**
    Contoh : Tidak ada konten yang bertumpuk.
  - Penggunaan font yang pas dengan tema. **(Done)**
  - Penerapan padding dan margin yang pas. **(Done)**

- [x] Menerapkan layout yang responsif: 

  - Menggunakan *media query* untuk menyesuaikan layout pada berbagai ukuran layar device.
    Pastikan untuk tidak terdapat konten yang menumpuk maupun keluar dari kontainer ketika dicoba pada dekstop, tablet, dan juga mobile. **(Done)**

  - Menerapkan flexbox dalam menyusun layout. **(Done, besides using flexbox, I also use float)**

- [x] Terdapat penerapan JavaScript dalam memanipulasi DOM, seperti: *(pilih satu)*

  - Membuat drop down.
  - Memanfaatkan logika seperti looping dalam menampilkan elemen dan konten. **(Done, i use looping in javascript to display card content)**
  - Membuat slider. **(Done, i use hamburger menu for nav)**
  - dan lainnya yang mendukung tampilan website agar lebih hidup. **(Done)**



Detail penilaian submission:

- **Bintang 1** : Semua ketentuan terpenuhi, namun terdapat indikasi plagiat yaitu dengan menggunakan proyek orang lain dan hanya mengubah kontennya saja.
- **Bintang 2** : Semua ketentuan terpenuhi, namun terdapat kekurangan pada tampilan website. Seperti tidak menerapkan responsibilitas, kombinasi warna tidak tepat, dsb.
- **Bintang 3** : Semua ketentuan terpenuhi, namun hanya mengikuti apa yang ada pada modul.
- **Bintang 4** : Semua ketentuan terpenuhi dan menerapkan *minimal salah satu* saran di atas.
- **Bintang 5** : Semua ketentuan terpenuhi dan menerapkan *semua* saran di atas.  **(Done)**



## Ketentuan Berkas Submission

Beberapa poin yang perlu diperhatikan ketika mengirimkan berkas submission:

- Mengirimkan proyek Submission dalam bentuk **folder Proyek**, yang **diarsipkan dalam format ZIP**. **(Done)**
- Di dalam folder proyek tersebut **terdiri dari HTML, CSS, JS**, dan **aset** yang digunakan dalam halaman web yang Anda buat. Jika tidak lengkap maka proyek Submission akan ditolak. **(Done)**



## Reference and library or external repository/API used:

Secara keseluruhan apabila dilihat dari garis besarnya (*major*), website yang dikembangkan hanya menggunakan **HTML + CSS + JS**. kebanyakan masih secara **manual**, mulai dari **layouting** hingga **styling**. Untuk memperindah tampilan website, saya memakai beberapa reference atau library external. penggunaan library ini hanyalah untuk memperbaiki *styling minor* akhir, tidak terpengaruh oleh layouting utama yang disusun dari awal (*major*). Berikut beberapa reference-nya.

- **Google Fonts**

  Saya memakai font *Montserrat* untuk menyesuaikan display dari card profile dan *Roboto* pada footer.

  https://fonts.google.com/specimen/Montserrat

  https://fonts.google.com/specimen/Roboto

- **Micro Clearfix by Nicholas Gallagher**

  Referensi ini saya dapatkan dari youtube pak Sandhika Galih, yang mana fungsinya untuk membersihkan float.

  https://nicolasgallagher.com/micro-clearfix-hack/

- **KursorJS**

  Saya bereksperimen mencoba external library untuk mengganti display dari kursor yang digunakan pada website.

  https://lusaxweb.github.io/Kursor/

- **Awesome for Badge Icon**

  Saya cukup kesulitan saat menyusun icon secara manual menggunakan `HTML + CSS only` , akhirnya saya menemukan solusi melalui website [W3schools](https://www.w3schools.com/howto/howto_css_social_media_buttons.asp) dengan memakai icon library dari **awesome**.

  https://www.w3schools.com/howto/howto_css_social_media_buttons.asp

- **Typing Animation**

  Saya berfikir untuk menampilkan animasi berjalan pada text di tag jumbotron. Namun, saya kurang memahami cara pengimplementasiannya. Akhirnya, saya menemukan library untuk mengimplementasikan animasi tersebut melalui repository open source di Github.

  https://github.com/mattboldt/typed.js/

- **Canva**

  https://www.canva.com/
  
- **ColorHunt**

  https://colorhunt.co/
