window.history.pushState(null, "", window.location.href);

window.onpopstate = function () {
    window.history.pushState(null, "", window.location.href);
};

let currentQuestion = 0;
let score = 0;
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

const personalityQuestions = [

{
aspect:"stres",
reverse:true,
question:"Ketika menghadapi beberapa tuntutan sekaligus, saya cenderung kehilangan fokus pada prioritas utama."
},

{
aspect:"stres",
reverse:false,
question:"Saya tetap dapat berpikir jernih meskipun berada dalam tekanan yang tinggi."
},

{
aspect:"stres",
reverse:true,
question:"Kesalahan kecil yang saya buat sering terus saya pikirkan hingga mengganggu pekerjaan berikutnya."
},

{
aspect:"stres",
reverse:false,
question:"Saya mampu menjaga kualitas kerja meskipun menghadapi tenggat waktu yang ketat."
},

{
aspect:"stres",
reverse:true,
question:"Ketidakpastian dalam pekerjaan membuat saya sulit mengambil keputusan."
},

{
aspect:"stres",
reverse:false,
question:"Saya dapat memisahkan masalah pribadi dari tanggung jawab pekerjaan."
},

{
aspect:"stres",
reverse:true,
question:"Saat situasi tidak berjalan sesuai rencana, saya mudah kehilangan semangat."
},

{
aspect:"stres",
reverse:false,
question:"Saya tetap tenang ketika harus menangani keluhan atau komplain yang berat."
},

{
aspect:"stres",
reverse:true,
question:"Tekanan pekerjaan sering membuat saya menunda keputusan penting."
},

{
aspect:"stres",
reverse:false,
question:"Saya mampu beradaptasi dengan perubahan tanpa mengurangi produktivitas."
},

{
aspect:"percayaDiri",
reverse:true,
question:"Saya sering meragukan kemampuan saya meskipun memiliki pengalaman yang cukup."
},

{
aspect:"percayaDiri",
reverse:false,
question:"Saya berani menyampaikan pendapat meskipun berbeda dengan mayoritas."
},

{
aspect:"percayaDiri",
reverse:true,
question:"Saya lebih nyaman jika keputusan penting dibuat oleh orang lain."
},

{
aspect:"percayaDiri",
reverse:false,
question:"Saya yakin dapat mempelajari tugas baru dengan cepat."
},

{
aspect:"percayaDiri",
reverse:true,
question:"Saya sering menahan ide karena khawatir dianggap kurang tepat."
},

{
aspect:"percayaDiri",
reverse:false,
question:"Saya tetap yakin pada keputusan saya setelah mempertimbangkan berbagai informasi."
},

{
aspect:"percayaDiri",
reverse:true,
question:"Penilaian negatif dari orang lain mudah mempengaruhi keyakinan saya."
},

{
aspect:"percayaDiri",
reverse:false,
question:"Saya merasa nyaman mengambil tanggung jawab yang lebih besar."
},

{
aspect:"percayaDiri",
reverse:true,
question:"Saya cenderung menghindari situasi yang menuntut saya tampil di depan banyak orang."
},

{
aspect:"percayaDiri",
reverse:false,
question:"Saya percaya kemampuan saya dapat memberikan kontribusi yang berarti."
},

{
aspect:"penyesuaian",
reverse:true,
question:"Saya membutuhkan waktu yang lama untuk menerima perubahan cara kerja."
},

{
aspect:"penyesuaian",
reverse:false,
question:"Saya dapat bekerja dengan baik bersama orang yang memiliki karakter berbeda."
},

{
aspect:"penyesuaian",
reverse:true,
question:"Saya merasa tidak nyaman ketika harus berpindah dari rutinitas yang sudah terbiasa."
},

{
aspect:"penyesuaian",
reverse:false,
question:"Saya mudah menyesuaikan gaya komunikasi sesuai lawan bicara."
},

{
aspect:"penyesuaian",
reverse:true,
question:"Perubahan kebijakan sering membuat saya kehilangan motivasi kerja."
},

{
aspect:"penyesuaian",
reverse:false,
question:"Saya dapat menerima masukan tanpa merasa diserang secara pribadi."
},

{
aspect:"penyesuaian",
reverse:true,
question:"Saya lebih memilih mempertahankan cara lama dibanding mencoba pendekatan baru."
},

{
aspect:"penyesuaian",
reverse:false,
question:"Saya dapat bekerja efektif meskipun kondisi kerja berubah."
},

{
aspect:"penyesuaian",
reverse:true,
question:"Saya merasa sulit membangun hubungan dengan lingkungan kerja baru."
},

{
aspect:"penyesuaian",
reverse:false,
question:"Saya mampu melihat perubahan sebagai peluang untuk berkembang."
},

{
aspect:"integritas",
reverse:true,
question:"Dalam kondisi tertentu, mengabaikan prosedur dapat dibenarkan selama hasilnya baik."
},

{
aspect:"integritas",
reverse:false,
question:"Saya tetap mematuhi aturan meskipun tidak ada pengawasan langsung."
},

{
aspect:"integritas",
reverse:true,
question:"Menutupi kesalahan kecil terkadang lebih baik daripada memperbesar masalah."
},

{
aspect:"integritas",
reverse:false,
question:"Saya merasa bertanggung jawab atas dampak dari keputusan yang saya ambil."
},

{
aspect:"integritas",
reverse:true,
question:"Loyalitas kepada rekan kerja kadang lebih penting daripada melaporkan pelanggaran."
},

{
aspect:"integritas",
reverse:false,
question:"Saya berusaha menjaga kesesuaian antara ucapan dan tindakan."
},

{
aspect:"integritas",
reverse:true,
question:"Jika target tercapai, cara mencapainya tidak selalu perlu diperhatikan."
},

{
aspect:"integritas",
reverse:false,
question:"Saya tetap menyampaikan informasi penting meskipun berpotensi tidak menyenangkan."
},

{
aspect:"integritas",
reverse:true,
question:"Aturan tertentu dapat disesuaikan jika kondisi lapangan menuntut."
},

{
aspect:"integritas",
reverse:false,
question:"Saya lebih memilih hasil yang benar daripada hasil yang cepat."
},

{
aspect:"growth",
reverse:true,
question:"Jika cara yang saya gunakan sudah berhasil, saya jarang merasa perlu mencari pendekatan baru."
},

{
aspect:"growth",
reverse:false,
question:"Saya melihat kesalahan sebagai kesempatan untuk belajar."
},

{
aspect:"growth",
reverse:true,
question:"Saya lebih nyaman menguasai kemampuan yang sudah ada daripada mempelajari hal baru."
},

{
aspect:"growth",
reverse:false,
question:"Saya tertarik memahami alasan di balik keberhasilan maupun kegagalan suatu pekerjaan."
},

{
aspect:"growth",
reverse:true,
question:"Masukan yang bertentangan dengan cara berpikir saya biasanya sulit saya terima."
},

{
aspect:"growth",
reverse:false,
question:"Saya berusaha meningkatkan kemampuan meskipun tidak diminta atasan."
},

{
aspect:"growth",
reverse:true,
question:"Saya merasa kemampuan seseorang umumnya tidak banyak berubah seiring waktu."
},

{
aspect:"growth",
reverse:false,
question:"Saya menikmati tantangan yang memaksa saya belajar hal baru."
},

{
aspect:"growth",
reverse:true,
question:"Saya lebih memilih tugas yang sudah saya kuasai dibanding tugas yang belum pernah saya kerjakan."
},

{
aspect:"growth",
reverse:false,
question:"Saya percaya kemampuan dapat berkembang melalui usaha dan pembelajaran."
},

{
aspect:"beyond",
reverse:true,
question:"Saya cenderung bekerja sesuai target minimum yang ditetapkan."
},

{
aspect:"beyond",
reverse:false,
question:"Saya sering mencari cara untuk memberikan hasil yang lebih baik dari yang diminta."
},

{
aspect:"beyond",
reverse:true,
question:"Jika target sudah tercapai, saya jarang merasa perlu melakukan upaya tambahan."
},

{
aspect:"beyond",
reverse:false,
question:"Saya tetap berusaha memberikan kontribusi meskipun bukan tanggung jawab utama saya."
},

{
aspect:"beyond",
reverse:true,
question:"Saya lebih memilih menjaga ritme kerja yang nyaman daripada mengambil tantangan tambahan."
},

{
aspect:"beyond",
reverse:false,
question:"Saya terdorong untuk mencapai standar yang lebih tinggi daripada ekspektasi umum."
},

{
aspect:"beyond",
reverse:true,
question:"Saya menghindari tugas yang memiliki risiko gagal meskipun peluang keberhasilannya besar."
},

{
aspect:"beyond",
reverse:false,
question:"Saya bersedia menginvestasikan waktu dan tenaga ekstra demi hasil yang lebih baik."
},

{
aspect:"beyond",
reverse:true,
question:"Saya jarang mengevaluasi apakah hasil kerja saya bisa ditingkatkan lagi."
},

{
aspect:"beyond",
reverse:false,
question:"Saya merasa puas ketika mampu melampaui target yang diberikan."
},

{
aspect:"purposeful",
reverse:true,
question:"Bagi saya yang terpenting adalah pekerjaan selesai, terlepas dari dampaknya."
},

{
aspect:"purposeful",
reverse:false,
question:"Saya merasa pekerjaan saya memiliki kontribusi terhadap tujuan yang lebih besar."
},

{
aspect:"purposeful",
reverse:true,
question:"Saya jarang memikirkan bagaimana pekerjaan saya mempengaruhi orang lain."
},

{
aspect:"purposeful",
reverse:false,
question:"Saya memahami alasan mengapa tugas yang saya kerjakan penting untuk organisasi."
},

{
aspect:"purposeful",
reverse:true,
question:"Saya lebih fokus pada rutinitas harian daripada tujuan jangka panjang pekerjaan."
},

{
aspect:"purposeful",
reverse:false,
question:"Saya termotivasi ketika memahami manfaat pekerjaan bagi banyak pihak."
},

{
aspect:"purposeful",
reverse:true,
question:"Saya merasa cukup bekerja sesuai instruksi tanpa perlu memahami tujuan akhirnya."
},

{
aspect:"purposeful",
reverse:false,
question:"Saya berusaha menyelaraskan pekerjaan saya dengan tujuan organisasi."
},

{
aspect:"purposeful",
reverse:true,
question:"Saya jarang mempertanyakan apakah pekerjaan yang saya lakukan memberikan nilai tambah."
},

{
aspect:"purposeful",
reverse:false,
question:"Saya merasa lebih bersemangat ketika mengetahui dampak positif pekerjaan saya."
},

{
aspect:"dynamic",
reverse:true,
question:"Saya lebih nyaman menunggu arahan daripada mengambil inisiatif terlebih dahulu."
},

{
aspect:"dynamic",
reverse:false,
question:"Saya sering mengambil langkah awal ketika melihat peluang perbaikan."
},

{
aspect:"dynamic",
reverse:true,
question:"Saya biasanya menunggu kepastian penuh sebelum mulai bertindak."
},

{
aspect:"dynamic",
reverse:false,
question:"Saya mampu bergerak cepat meskipun informasi yang tersedia belum lengkap."
},

{
aspect:"dynamic",
reverse:true,
question:"Saya cenderung menunda tindakan sampai ada instruksi yang jelas."
},

{
aspect:"dynamic",
reverse:false,
question:"Saya aktif mencari solusi sebelum masalah menjadi lebih besar."
},

{
aspect:"dynamic",
reverse:true,
question:"Saya lebih suka menjadi pengikut daripada penggerak dalam suatu perubahan."
},

{
aspect:"dynamic",
reverse:false,
question:"Saya berinisiatif membantu menyelesaikan masalah meskipun tidak diminta."
},

{
aspect:"dynamic",
reverse:true,
question:"Saya sering menunggu orang lain memulai terlebih dahulu."
},

{
aspect:"dynamic",
reverse:false,
question:"Saya nyaman mengambil tindakan ketika situasi membutuhkan respons cepat."
},

];


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

   
        if (score <= 25) {

            iq = "< 85";
            kategori = "Low";

        } else if (score <= 31) {

            iq = "85 - 89";
            kategori = "Below Average";

        } else if (score <= 37) {

            iq = "90 - 94";
            kategori = "Average";

        } else if (score <= 40) {

            iq = "95 - 104";
            kategori = "Standard";

        } else if (score <= 43) {

            iq = "105 - 114";
            kategori = "Above Average";

        } else if (score <= 46) {

            iq = "115 - 119";
            kategori = "Superior";

        } else if (score <= 48) {

            iq = "120 - 124";
            kategori = "Very Superior";

        } else {

            iq = "125+";
            kategori = "Exceptional";

        }

    window.iqResult = iq;

    konfirmasiKepribadian();

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
let tahap = "iq";

let personalityAnswers = [];

let personalityScore = {
    stres: 0,
    percayaDiri: 0,
    penyesuaian: 0,
    integritas: 0,
    growth: 0,
    beyond: 0,
    purposeful: 0,
    dynamic: 0
};

function mulaiTesKepribadian(iq) {
    
    tahap = "personality";

    window.iqResult = iq;

    currentQuestion = 0;

    personalityAnswers =
        new Array(personalityQuestions.length);

    tampilSoalKepribadian();

    document.getElementById("timer").style.display =
    "none";

}

function tampilSoalKepribadian() {

    let q =
        personalityQuestions[currentQuestion];

    document.getElementById("text").innerHTML = `
        <h2>
            Kepribadian ${currentQuestion + 1}
        </h2>

        <p>
            ${q.question}
        </p>
    `;

    document.getElementById("answers").innerHTML = `

    <label>
    <input type="radio" name="answer" value="5">
    Sangat Setuju
    </label>

    <label>
    <input type="radio" name="answer" value="4">
    Setuju
    </label>

    <label>
    <input type="radio" name="answer" value="3">
    Netral
    </label>

    <label>
    <input type="radio" name="answer" value="2">
    Tidak Setuju
    </label>

    <label>
    <input type="radio" name="answer" value="1">
    Sangat Tidak Setuju
    </label>

    <button onclick="nextPersonality()">
    Next
    </button>

    `;
}

function nextPersonality() {

    let selected =
        document.querySelector(
            'input[name="answer"]:checked'
        );

    if (!selected) {

        alert("Pilih jawaban dahulu");

        return;
    }

    personalityAnswers[currentQuestion] =
        Number(selected.value);

    currentQuestion++;

    if (
        currentQuestion >=
        personalityQuestions.length
    ) {

        konfirmasiAkhir();

        return;
    }

    tampilSoalKepribadian();

}

function konfirmasiKepribadian() {

    document.getElementById("text").innerHTML = `
    
    <h2>Tes IQ Selesai</h2>

    <p>
    Terima kasih telah menyelesaikan Tes IQ.

    Tahapan selanjutnya adalah Tes Kepribadian
    yang terdiri dari 80 soal.

    Pada tes ini tidak terdapat batas waktu pengerjaan.

    Pastikan Anda menjawab sesuai kondisi diri yang sebenarnya.
    </p>

    `;

    document.getElementById("answers").innerHTML = `

    <button onclick="mulaiTesKepribadian(window.iqResult)">
        Mulai Tes Kepribadian
    </button>

    `;

}

function konfirmasiAkhir() {

    document.getElementById("text").innerHTML = `

    <h2>Konfirmasi Penyelesaian</h2>

    <p>
    Pastikan Anda sudah mengecek seluruh jawaban
    Tes Kepribadian.
    </p>

    <label>
        <input type="checkbox"
        id="confirmPersonality">

        Saya sudah memastikan seluruh jawaban.
    </label>

    `;

    document.getElementById("answers").innerHTML = `

    <button onclick="finishAllTest()">
        Selesai
    </button>

    `;

}   

function finishAllTest() {

    let check =
    document.getElementById("confirmPersonality");

    if (!check || !check.checked) {

        alert(
            "Silakan centang konfirmasi terlebih dahulu."
        );

        return;
    }

    hitungPersonalityScore();

    simpanHasil();

}

async function simpanHasil() {

    hitungPersonalityScore();

    console.log(personalityScore);

    await addDoc(collection(db, "hasil_tes"), {

        nama: peserta.nama,
        nip: peserta.nip,

        iq: window.iqResult,

        stres: personalityScore.stres,
        percayaDiri: personalityScore.percayaDiri,
        penyesuaian: personalityScore.penyesuaian,
        integritas: personalityScore.integritas,

        growth: personalityScore.growth,
        beyond: personalityScore.beyond,
        purposeful: personalityScore.purposeful,
        dynamic: personalityScore.dynamic,

        rekomendasi: getRecommendation(),

        alasan: getAlasan(),

        tanggal: new Date()

    });

    document.getElementById("answers").innerHTML = "";

    document.getElementById("text").innerHTML = `

        <h2>Terima Kasih</h2>

        <p>
        Terima kasih telah mengikuti seluruh rangkaian assessment.
        <br><br>
        Hasil assessment telah berhasil direkam.
        <br><br>
        Silakan menunggu proses selanjutnya dari Human Capital.
        </p>

    `;

}

function getPersonalityValue(value, reverse) {

    value = Number(value);

    if (reverse) {

        return 6 - value;

    }

    return value;

}

function hitungPersonalityScore() {

    personalityScore = {
        stres: 0,
        percayaDiri: 0,
        penyesuaian: 0,
        integritas: 0,
        growth: 0,
        beyond: 0,
        purposeful: 0,
        dynamic: 0
    };

    for (let i = 0; i < personalityQuestions.length; i++) {

        let soal = personalityQuestions[i];

        let nilai =
            getPersonalityValue(
                personalityAnswers[i],
                soal.reverse
            );

        personalityScore[soal.aspek] += nilai;

    }

    console.log("Jumlah Soal:", personalityQuestions.length);
    console.log("Skor:", personalityScore);

    function konversiSkor(skor){

    if(skor >= 48) return 3;

    if(skor >= 42) return 2;

    return 1;
    }

    personalityScore.stres =
    konversiSkor(personalityScore.stres);

    personalityScore.percayaDiri =
    konversiSkor(personalityScore.percayaDiri);

    personalityScore.penyesuaian =
    konversiSkor(personalityScore.penyesuaian);

    personalityScore.integritas =
    konversiSkor(personalityScore.integritas);

    personalityScore.growth =
    konversiSkor(personalityScore.growth);

    personalityScore.beyond =
    konversiSkor(personalityScore.beyond);

    personalityScore.purposeful =
    konversiSkor(personalityScore.purposeful);

    personalityScore.dynamic =
    konversiSkor(personalityScore.dynamic);

}

function getAlasan() {

    let alasan = [];

    if (personalityScore.stres === 1)
        alasan.push("Daya Tahan Stres");

    if (personalityScore.percayaDiri === 1)
        alasan.push("Kepercayaan Diri");

    if (personalityScore.penyesuaian === 1)
        alasan.push("Penyesuaian Diri");

    if (personalityScore.integritas === 1)
        alasan.push("Integritas");

    if (personalityScore.growth === 1)
        alasan.push("Growth Mindset");

    if (personalityScore.beyond === 1)
        alasan.push("Beyond The Limit");

    if (personalityScore.purposeful === 1)
        alasan.push("Purposeful Work");

    if (personalityScore.dynamic === 1)
        alasan.push("Dynamic Action");

    if (
        window.iqResult === "< 85" ||
        window.iqResult === "85 - 89" ||
        window.iqResult === "90 - 94"
    ) {

        return "IQ di bawah standar minimum";

    }

    if (alasan.length === 0) {

        return "-";

    }

    return alasan.join(", ");

}

function getRecommendation() {

    let iq = window.iqResult;

    let aspekRendah = 0;

    Object.values(personalityScore)
    .forEach(nilai => {

        if(nilai === 1){

            aspekRendah++;

        }

    });

    if (
        iq === "< 85" ||
        iq === "85 - 89" ||
        iq === "90 - 94"
    ) {

        return "Tidak Disarankan";

    }

    if (
        personalityScore.integritas === 1
    ) {

        return "Tidak Disarankan";

    }

    if (
        aspekRendah > 2
    ) {

        return "Tidak Disarankan";

    }

    if (
        aspekRendah > 0
    ) {

        return "Dipertimbangkan";

    }

    return "Disarankan";
}
