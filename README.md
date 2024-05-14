This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

# HOCARES [FRONT END]

## Panduan Instalasi dan Penggunaan

Selamat datang di panduan instalasi dan penggunaan untuk frontend Hocares. Frontend ini merupakan bagian dari sistem informasi manajemen aset berbasis cloud yang kami kembangkan. Panduan ini akan membantu Anda dalam menginstal dan menjalankan frontend secara lokal di komputer Anda. Dengan mengikuti langkah-langkah yang disediakan, Anda akan dapat melakukan konfigurasi awal dan mengakses frontend untuk mengelola aset Anda secara efisien. Silakan ikuti langkah-langkah di bawah ini dengan cermat untuk memulai penggunaan frontend Hocares.

## Prasyarat
Sebelum memulai, pastikan Anda telah menginstal:
- [Node.js](https://nodejs.org/en) dan npm (Node Package Manager)
- [Git](https://git-scm.com/downloads)

### Langkah 1: Clone Repository

1. Buka terminal atau command prompt.
2. Clone repositori frontend Hocares dengan perintah berikut:
```
git clone https://github.com/alvansoleh/HocaresFE.git
```
3. Masuk ke direktori proyek:
```
cd HocaresFE
```

### Langkah 2: Instal Dependensi

1. Instal semua dependensi proyek dengan perintah berikut:
```
npm install
```

### Langkah 3: Konfigurasi Environment
1. Buat file .env di root direktori proyek.
2. Tambahkan konfigurasi environment yang diperlukan. Contoh konfigurasi:
```
REACT_APP_API_URL=http://localhost:5000/api
```

### Langkah 4: Menjalankan Aplikasi
1. Jalankan aplikasi frontend dengan perintah berikut:
```
npm start
```

### Langkah 5: Membuat Build untuk Produksi
1. Untuk membuat build produksi, jalankan perintah berikut:
```
npm run build
```
2. File build akan dihasilkan di folder build/ dan siap untuk di-deploy.

## Troubleshooting
- Jika Anda menghadapi masalah saat menginstal dependensi, pastikan versi Node.js dan npm Anda sesuai dengan yang diperlukan oleh proyek.
- Periksa konfigurasi environment Anda jika aplikasi tidak dapat terhubung ke backend.
















In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br /> Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br /> You will also see any lint errors
in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br /> See the section
about
[running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br /> It correctly bundles
React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br /> Your app is
ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can
`eject` at any time. This command will remove the single build dependency from
your project.

Instead, it will copy all the configuration files and the transitive
dependencies (webpack, Babel, ESLint, etc) right into your project so you have
full control over them. All of the commands except `eject` will still work, but
they will point to the copied scripts so you can tweak them. At this point
you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for
small and middle deployments, and you shouldn’t feel obligated to use this
feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Learn More

You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
