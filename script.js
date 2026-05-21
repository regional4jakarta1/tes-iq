let countdown;
let timeLeft = 30 * 60;
let questions = [

    {
    question: "2, 6, 12, 20, 30, ?",
    options: ["36", "40", "42", "44"],
    answer: "42"
    },

    {
    question: "3, 9, 27, 81, ?",
    options: ["162", "243", "324", "729"],
    answer: "243"
    },

    {
    question: "7, 10, 8, 11, 9, 12, ?",
    options: ["10", "11", "13", "14"],
    answer: "10"
    },

    {
    question: "Jika semua bunga adalah tanaman, dan sebagian tanaman adalah pohon, maka:",
    options: [
    "Semua bunga adalah pohon",
    "Sebagian bunga adalah pohon",
    "Tidak dapat disimpulkan",
    "Semua pohon adalah bunga"
    ],
    answer: "Tidak dapat disimpulkan"
    },

    {
    question: "144, 121, 100, 81, ?",
    options: ["72", "64", "49", "36"],
    answer: "64"
    },

    {
    question: "5 orang membangun rumah dalam 20 hari. Berapa hari jika 10 orang?",
    options: ["5", "10", "15", "40"],
    answer: "10"
    },

    {
    question: "Kata yang tidak sesuai:",
    options: ["Segitiga", "Persegi", "Lingkaran", "Kubus"],
    answer: "Kubus"
    },

    {
    question: "1, 1, 2, 3, 5, 8, ?",
    options: ["11", "12", "13", "21"],
    answer: "13"
    },

    {
    question: "Jika SENIN = 5, SELASA = 6, maka RABU = ?",
    options: ["3", "4", "5", "6"],
    answer: "4"
    },

    {
    question: "Ayah lebih tua 24 tahun dari anaknya. Jika umur ayah 3 kali umur anak, umur anak?",
    options: ["10", "12", "14", "16"],
    answer: "12"
    },

    {
    question: "16, 8, 4, 2, ?",
    options: ["1", "0", "3", "4"],
    answer: "1"
    },

    {
    question: "Kucing : Anak :: Sapi : ?",
    options: ["Pedet", "Anak", "Domba", "Kuda"],
    answer: "Pedet"
    },

    {
    question: "9, 18, 36, 72, ?",
    options: ["96", "108", "144", "152"],
    answer: "144"
    },

    {
    question: "Jika 5x = 45, maka x² = ?",
    options: ["9", "18", "81", "90"],
    answer: "81"
    },

    {
    question: "Mobil : Bensin :: Manusia : ?",
    options: ["Darah", "Air", "Makanan", "Udara"],
    answer: "Makanan"
    },

    {
    question: "8, 27, 64, 125, ?",
    options: ["144", "196", "216", "256"],
    answer: "216"
    },

    {
    question: "Semua dokter sarjana. Andi dokter. Maka:",
    options: [
    "Andi bukan sarjana",
    "Andi sarjana",
    "Semua sarjana dokter",
    "Tidak pasti"
    ],
    answer: "Andi sarjana"
    },

    {
    question: "Huruf berikutnya: A, C, F, J, O, ?",
    options: ["S", "T", "U", "V"],
    answer: "U"
    },

    {
    question: "2, 5, 10, 17, 26, ?",
    options: ["35", "36", "37", "38"],
    answer: "37"
    },

    {
    question: "Jika kemarin adalah hari Minggu, maka 3 hari setelah besok adalah?",
    options: ["Selasa", "Rabu", "Kamis", "Jumat"],
    answer: "Kamis"
    },

    {
    question: "64, 32, 16, 8, ?",
    options: ["2", "4", "6", "12"],
    answer: "4"
    },

    {
    question: "4, 9, 16, 25, ?",
    options: ["30", "35", "36", "49"],
    answer: "36"
    },

    {
    question: "Air : Haus :: Makanan : ?",
    options: ["Lapar", "Kenyang", "Minum", "Tidur"],
    answer: "Lapar"
    },

    {
    question: "Jika semua A adalah B, dan semua B adalah C, maka:",
    options: [
    "Semua C adalah A",
    "Semua A adalah C",
    "Semua B adalah A",
    "Tidak pasti"
    ],
    answer: "Semua A adalah C"
    },

    {
    question: "3, 6, 11, 18, 27, ?",
    options: ["36", "38", "40", "42"],
    answer: "38"
    },

    {
    question: "Berapa sudut pada segi delapan?",
    options: ["6", "7", "8", "9"],
    answer: "8"
    },

    {
    question: "Kata yang berbeda:",
    options: ["Apel", "Mangga", "Wortel", "Jeruk"],
    answer: "Wortel"
    },

    {
    question: "10, 20, 40, 80, ?",
    options: ["120", "140", "160", "180"],
    answer: "160"
    },

    {
    question: "Jika 12 pekerja selesai dalam 15 hari, 6 pekerja selesai dalam?",
    options: ["20", "25", "30", "35"],
    answer: "30"
    },

    {
    question: "2, 4, 8, 16, ?",
    options: ["24", "30", "32", "64"],
    answer: "32"
    },

    {
    question: "7² + 3² = ?",
    options: ["52", "58", "60", "64"],
    answer: "58"
    },

    {
    question: "Jika semua ikan hidup di air, paus hidup di air, maka:",
    options: [
    "Paus adalah ikan",
    "Semua yang hidup di air adalah ikan",
    "Tidak dapat disimpulkan",
    "Paus bukan hewan"
    ],
    answer: "Tidak dapat disimpulkan"
    },

    {
    question: "5, 10, 20, 35, 55, ?",
    options: ["75", "80", "82", "85"],
    answer: "80"
    },

    {
    question: "Buku : Membaca :: Pensil : ?",
    options: ["Menulis", "Menggambar", "Menghapus", "Belajar"],
    answer: "Menulis"
    },

    {
    question: "125, 64, 27, 8, ?",
    options: ["1", "2", "4", "6"],
    answer: "1"
    },

    {
    question: "Jika hari ini Rabu, maka 100 hari lagi adalah?",
    options: ["Jumat", "Sabtu", "Minggu", "Senin"],
    answer: "Jumat"
    },

    {
    question: "36, 49, 64, 81, ?",
    options: ["90", "100", "121", "144"],
    answer: "100"
    },

    {
    question: "Semua mobil punya roda. Ferrari adalah mobil. Maka:",
    options: [
    "Ferrari punya roda",
    "Semua roda Ferrari",
    "Ferrari bukan mobil",
    "Tidak pasti"
    ],
    answer: "Ferrari punya roda"
    },

    {
    question: "11, 22, 44, 88, ?",
    options: ["132", "166", "176", "188"],
    answer: "176"
    },

    {
    question: "Jika 2 jam = 120 menit, maka 5 jam = ?",
    options: ["150", "200", "250", "300"],
    answer: "300"
    },

    {
    question: "13, 17, 23, 31, ?",
    options: ["39", "41", "43", "47"],
    answer: "41"
    },

    {
    question: "Kata yang tidak sesuai:",
    options: ["Piano", "Gitar", "Drum", "Sepatu"],
    answer: "Sepatu"
    },

    {
    question: "1, 4, 9, 16, 25, ?",
    options: ["30", "35", "36", "49"],
    answer: "36"
    },

    {
    question: "Jika 8 orang makan 8 roti dalam 8 menit, maka 1 orang makan 1 roti dalam?",
    options: ["1 menit", "2 menit", "4 menit", "8 menit"],
    answer: "8 menit"
    },

    {
    question: "Arah berlawanan dari Timur Laut adalah?",
    options: ["Barat Laut", "Tenggara", "Barat Daya", "Selatan"],
    answer: "Barat Daya"
    },

    {
    question: "6, 12, 24, 48, ?",
    options: ["72", "84", "96", "108"],
    answer: "96"
    },

    {
    question: "Jika semua burung punya sayap, ayam adalah burung, maka:",
    options: [
    "Ayam punya sayap",
    "Semua sayap ayam",
    "Ayam bukan burung",
    "Tidak pasti"
    ],
    answer: "Ayam punya sayap"
    },

    {
    question: "15, 14, 12, 9, 5, ?",
    options: ["0", "-1", "-2", "-3"],
    answer: "0"
    },

    {
    question: "Jam 03.15, sudut kecil antara jarum jam?",
    options: ["0°", "7,5°", "15°", "22,5°"],
    answer: "7,5°"
    },

    {
    question: "2, 3, 5, 8, 13, 21, ?",
    options: ["29", "31", "34", "36"],
    answer: "34"
    }

];


let currentQuestion = 0;

let userAnswers = new Array(questions.length);

function mulaiTes() {

    let nama = document.getElementById("nama").value;
    let nip = document.getElementById("nip").value;
    
    peserta = {
        nama: nama,
        nip: nip,
    };


    if (
        nama == "" ||
        nip == ""
     ) {

        alert("Harap isi seluruh data diri.");

        return;
    }

    document.getElementById("formAwal").remove();

    document.getElementById("startButton").style.display = "none";
    startTimer();
    tampilSoal();

}

function tampilSoal() {

    let q = questions[currentQuestion];

    document.getElementById("text").innerHTML =
    `
        <h2>
            Soal ${currentQuestion + 1}
        </h2>

        <p>
            ${q.question}
        </p>
    `;

    let buttons = "";

    for (let i = 0; i < q.options.length; i++) {

        let checked = "";

        if (userAnswers[currentQuestion] == q.options[i]) {
            checked = "checked";
        }

        buttons += `
            <label>
                <input type="radio"
                name="answer"
                value="${q.options[i]}"
                ${checked}>

                ${q.options[i]}
            </label>
        `;
    }

    buttons += `

        <button onclick="prevQuestion()">
            Previous
        </button>

        <button onclick="nextQuestion()">
            Next
        </button>

    `;

    document.getElementById("answers").innerHTML =
        buttons;

}


function nextQuestion() {

    let selected =
        document.querySelector('input[name="answer"]:checked');

    if (selected) {

        userAnswers[currentQuestion] = selected.value;

    }

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        konfirmasiSelesai();

        return;

    }

    tampilSoal();

}



function prevQuestion() {

    let selected =
        document.querySelector('input[name="answer"]:checked');

    if (selected) {

        userAnswers[currentQuestion] = selected.value;

    }

    currentQuestion--;

    if (currentQuestion < 0) {

        currentQuestion = 0;

    }

    tampilSoal();

}


function selesaiTes() {
    clearInterval(countdown);
    let score = 0;

    for (let i = 0; i < questions.length; i++) {

        if (userAnswers[i] == questions[i].answer) {

            score++;

        }

    }

    let iq = "";
    let kategori = "";

   
        if (score <= 19) {

            iq = "< 85";
            kategori = "Low";

        } else if (score <= 24) {

            iq = "85 - 89";
            kategori = "Below Average";

        } else if (score <= 29) {

            iq = "90 - 94";
            kategori = "Average";

        } else if (score <= 34) {

            iq = "95 - 104";
            kategori = "Standard";

        } else if (score <= 39) {

            iq = "105 - 114";
            kategori = "Above Average";

        } else if (score <= 44) {

            iq = "115 - 124";
            kategori = "Superior";

        } else {

            iq = "125+";
            kategori = "Very Superior";

        }

    addDoc(collection(db, "hasil_tes"), {

        nama: peserta.nama,

        nip: peserta.nip,

        jumlahBenar: score,

        iq: iq,

        kategori: kategori,

        tanggal: new Date()

    });

    document.getElementById("text").innerHTML =
        "Tes Selesai 🎉";

    document.getElementById("answers").innerHTML =
        "";

    document.getElementById("result").innerHTML =

        "Skor Benar: " + score +
        " dari " + questions.length +

        "<br><br>" +

        "Estimasi IQ: " + iq +

        "<br><br>";


}


function konfirmasiSelesai() {

    document.getElementById("text").innerHTML = `
    
        <h2>Konfirmasi Penyelesaian</h2>

        <p>
        Pastikan Anda sudah mengecek seluruh jawaban.
        </p>

        <label>
            <input type="checkbox" id="confirmCheck">
            Saya sudah memastikan jawaban saya.
        </label>

    `;

    document.getElementById("answers").innerHTML = `

        <button onclick="kembaliCek()">
            Cek Ulang
        </button>

        <button onclick="finishTest()">
            Finish
        </button>

    `;

}

function kembaliCek() {

    currentQuestion = 0;

    tampilSoal();

}

function finishTest() {
    
    let check =
        document.getElementById("confirmCheck");

    if (!check.checked) {

        alert("Silakan centang konfirmasi terlebih dahulu.");

        return;

    }

    selesaiTes();

}

function startTimer() {

    const timer =
        document.getElementById("timer");

    countdown = setInterval(() => {

        let minutes =
            Math.floor(timeLeft / 60);

        let seconds =
            timeLeft % 60;

        seconds =
            seconds < 10
            ? "0" + seconds
            : seconds;

        timer.innerHTML =
            `${minutes}:${seconds}`;

        timeLeft--;

        if (timeLeft < 0) {

            clearInterval(countdown);

            alert("Waktu habis!");

            selesaiTes();

        }

    }, 1000);

}
