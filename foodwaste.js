// Mengambil data-option dari tautan "home"
const homeLink = document.querySelector('a[href="#home"]');
const option = homeLink.getAttribute("data-option");

// Melakukan sesuatu berdasarkan opsi yang dipilih
if (option === "option1") {
  // Lakukan sesuatu untuk opsi 1
} else if (option === "option2") {
  // Lakukan sesuatu untuk opsi 2
} else {
  // Opsi lainnya
}
