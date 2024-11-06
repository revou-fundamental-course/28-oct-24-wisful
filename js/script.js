/**
 * Berdasarkan sumber dari link berikut:
 * Penyebab Terlalu Kurus dan Dampaknya pada Kesehatan: https://hellosehat.com/nutrisi/berat-badan-turun/dampak-badan-terlalu-kurus/
 * Jangan Anggap Remeh, Ini Dampak dari Obesitas:https://www.halodoc.com/artikel/jangan-anggap-remeh-ini-dampak-dari-obesitas?srsltid=AfmBOoqd-CHaBWJSUUGQSmq5Uyn7Fr_3pBsqvMVniBGziDra1rDZA5tc
 * Hati-hati Penyakit Komplikasi dari Obesitas: https://www.alodokter.com/hati-hati-penyakit-komplikasi-dari-obesitas
 */
/**Mini Project RevoU-Class 28-Oct-24 */
const KATEGORI_BMI = {
    KURANGBERAT: 'Kekurangan berat badan', 
    NORMAL: 'Normal (ideal)',
    LEBIHBERAT: 'Kelebihan berat badan',
    OBESITAS: 'Kegemukan (Obesitas)',
  };

  // Sintax ini digunakan untuk menghitung BMI berdasarkan berat badan dan tinggi badan
const calculateBMI = (berat, tinggi) => {
    let bmi = berat / ((tinggi / 100) ** 2);
    return bmi.toFixed(1);
  };
  
  // Sintax ini digunakan untuk memvalidasi input berat badan, tinggi badan, usia, dan jenis kelamin
const validateInput = (berat, tinggi, usia, jeniskelamin) => {
    // Mengambil elemen error message untuk masing-masing input
    const PesanErrorjeniskelamin = document.getElementById('PesanErrorjeniskelamin');
    const PesanErrorBerat = document.getElementById('PesanErrorBerat');
    const PesanErrorTinggi = document.getElementById('PesanErrorTinggi');
    const PesanErrorUsia = document.getElementById('PesanErrorUsia');

    // Sintax ini digunakan untuk Mengatur pesan error menjadi kosong untuk mereset pesan error sebelumnya
    const PesanError = document.querySelectorAll('.pesan-error');
    PesanError.forEach((element) => (element.innerText = ''));
    let isValid = true;
  
  // Sintax ini digunakan untuk Validasi Jenis Kelamin
  if (jeniskelamin === '' || !['Pria', 'Wanita'].includes(jeniskelamin)) {
    PesanErrorjeniskelamin.innerText = 'Silahkan Pilih jenis kelamin terlebih dahulu';
    isValid = false;
  }

// Sintax ini digunakan untuk Validasi berat badan
 if (isNaN(berat) || berat <= 0) 
        {
        PesanErrorBerat.innerText = 'Nilai Berat yang diinput harus dimasukan angka & nilai tidak boleh 0';
        isValid = false;
        }
// Sintax ini digunakan untuk Validasi usia
if (isNaN(usia) || usia <= 0) 
        {
        PesanErrorUsia.innerText = 'Nilai Usia yang diinput harus dimasukan angka & nilai tidak boleh 0';
        isValid = false;
        }
// Sintax ini digunakan untuk Validasi tinggi badan
if (isNaN(tinggi) || tinggi <= 0) 
  {
  PesanErrorTinggi.innerText = 'Nilai Tinggi badan harus dimasukan angka & nilai tidak boleh 0';
  isValid = false;
  }

return isValid;
};



// Sintax ini digunakan untuk Fungsi untuk mengecek status BMI berdasarkan nilai BMI dan jenis kelamin
function checkStatus(bmi, jeniskelamin) {
  let status = '';

  // Sintax ini digunakan untuk Menentukan status BMI berdasarkan kategori dan nilai BMI
  switch (jeniskelamin) {
    case 'Pria':
      if (bmi < 18.5) {
        status = KATEGORI_BMI.KURANGBERAT;
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = KATEGORI_BMI.NORMAL;
      } else if (bmi >= 25.0 && bmi <= 29.9) {
        status = KATEGORI_BMI.LEBIHBERAT;
      } else if (bmi >= 30.0) {
        status = KATEGORI_BMI.OBESITAS;
      }
      break;
    case 'Wanita':
      if (bmi < 17) {
        status = KATEGORI_BMI.KURANGBERAT;
      } else if (bmi >= 17 && bmi <= 23.9) {
        status = KATEGORI_BMI.NORMAL;
      } else if (bmi >= 23.0 && bmi <= 27.0) {
        status = KATEGORI_BMI.LEBIHBERAT;
      } else if (bmi > 27.0) {
        status = KATEGORI_BMI.OBESITAS;
      }
      break;
  }

  return status;
}

// Sintax ini digunakan untuk mendapatkan deskripsi teks berdasarkan status BMI
const getDescText = (status) => {
  if (status === KATEGORI_BMI.KURANGBERAT) {
    return 'Anda memiliki berat badan kurang dari normal.';
  } else if (status === KATEGORI_BMI.NORMAL) {
    return 'Anda memiliki berat badan dalam kisaran normal.';
  } else if (status === KATEGORI_BMI.LEBIHBERAT) {
    return 'Anda memiliki berat badan berlebih.';
  } else if (status === KATEGORI_BMI.OBESITAS) {
    return 'Anda memiliki berat badan yang sangat berlebih.';
  }
};

// Sintax ini digunakan untuk mendapatkan teks saran berdasarkan status BMI
const getSuggestionText = (status) => {
  if (status === KATEGORI_BMI.KURANGBERAT) {
    return 'Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menambah berat badan hingga batas normal.';
  } else if (status === KATEGORI_BMI.NORMAL) {
    return 'Jika BMI Anda berada dalam kategori ini maka Anda memiliki berat badan yang sehat.';
  } else if (status === KATEGORI_BMI.LEBIHBERAT) {
    return 'Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.';
  } else if (status === KATEGORI_BMI.OBESITAS) {
    return 'Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk mengurangi berat badan hingga batas normal.';
  }
};

// Sintax ini digunakan untuk mendapatkan teks saran gizi berdasarkan status BMI
const getAdviceText = (status) => {
  if (status === KATEGORI_BMI.KURANGBERAT) {
    return 'Perbanyak asupan makanan bergizi dan konsultasikan dengan ahli gizi untuk peningkatan berat badan.';
  } else if ( status === KATEGORI_BMI.NORMAL) {
    return 'Lanjutkan gaya hidup sehat dengan pola makan seimbang dan olahraga teratur.';
  } else if (status === KATEGORI_BMI.LEBIHBERAT) {
    return 'Lakukan penyesuaian pola makan dan rutin berolahraga untuk menurunkan berat badan.';
  } else if (status === KATEGORI_BMI.OBESITAS) {
    return 'Segera konsultasikan dengan ahli gizi untuk penurunan berat badan yang sehat.';
  }
};

// Sintax ini digunakan untuk mendapatkan daftar penyakit berdasarkan status BMI
const getDiseases = (status) => {
  if (status === KATEGORI_BMI.KURANGBERAT) {
    return ['Kekurangan gizi', 'Gangguan pertumbuhan', 'Sistem kekebalan tubuh lemah', 'Gangguan kesuburan'];
  } else if (status === KATEGORI_BMI.NORMAL) {
    return ['Tidak ada'];
  } else if (status === KATEGORI_BMI.LEBIHBERAT) {
    return ['Diabetes Tipe 2', 'Serangan Jantung', 'Hipertensi', 'Gastroesophageal Reflux Disease', 'Osteoarthritis', 'Kanker', 'Kolesterol Tinggi'];
  } else if (status === KATEGORI_BMI.OBESITAS) {
    return ['Penyakit Jantung', 'Stroke', 'Kanker', 'Masalah Pencernaan', 'Sleep Apnea', 'Osteoartritis']
  }
};

// Sintax ini digunakan untuk menampilkan hasil BMI, status, saran, dan risiko penyakit
const generateDisplay = (bmi, status) => {
  const resultTitle = document.getElementById('result-title');
  resultTitle.innerText = status;
  const resultBmi = document.getElementById('result-bmi');
  resultBmi.innerText = bmi;
  const resultDesc = document.getElementById('result-desc');
  resultDesc.innerText = getDescText(status);

  const resultText = document.getElementById('result-text');
  resultText.innerText = `Hasil BMI: ${bmi}`;

  const suggestionText = document.getElementById('suggestion-text');
  suggestionText.innerText = getSuggestionText(status);

  const adviceText = document.getElementById('advice-text');
  adviceText.innerText = getAdviceText(status);

  const riskTitle = document.getElementById('risk-title')
  riskTitle.innerText = `Beberapa resiko penyakit yang berasal dari tubuh ${status}`;

  const riskList = document.getElementById('list-risk');
  riskList.innerHTML = '';

  const diseases = getDiseases(status);
  diseases.forEach((disease) => {
    const listItem = document.createElement('li');
    listItem.innerText = disease;
    riskList.appendChild(listItem);
  });

// Sintax ini digunakan untuk Menyembunyikan form dan menampilkan hasil
  document.getElementById('form').reset();
};

// Sintax ini digunakan untuk mengecek BMI dan menampilkan hasil
const hitungbmi = () => {
  const jeniskelamin = document.querySelector('input[name="jeniskelamin"]:checked').value;
  const berat = +document.getElementById('berat').value;
  const usia = +document.getElementById('usia').value;
  const tinggi = +document.getElementById('tinggi').value;

  if (!validateInput(berat, tinggi, usia, jeniskelamin)) {
    return;
  }

  const bmi = calculateBMI(usia, tinggi);
  const status = checkStatus(bmi, jeniskelamin);
  generateDisplay(bmi, status);

};
