// Moved from inline script in index.html

// =============================================
// 1. DATA COLLECTION
// =============================================
const pinData = [
    { id: 1, img: "./asset/img/galery/ala_ala.jpg", title: "Ala Ala Kegiatan", category: "kegiatan", user: "tim_pplg", likes: 42 },
    { id: 2, img: "./asset/img/galery/apalah.jpg", title: "Momen Santai", category: "siswa", user: "kelas_xi", likes: 38 },
    { id: 3, img: "./asset/img/galery/artis.jpeg", title: "Artis Kelas", category: "siswa", user: "pplg_fun", likes: 56 },
    { id: 4, img: "./asset/img/galery/bakar.jpg", title: "Bakaran Bersama", category: "kegiatan", user: "tim_bbq", likes: 71 },
    { id: 5, img: "./asset/img/galery/bapak_bapak.jpg", title: "Kunjungan Guru", category: "guru", user: "guru_besar", likes: 29 },
    { id: 6, img: "./asset/img/galery/baris.JPG", title: "Baris Berbaris", category: "upacara", user: "pbb_team", likes: 33 },
    { id: 7, img: "./asset/img/galery/bataktoba.jpeg", title: "Batak Toba Pride", category: "siswa", user: "batak_vibes", likes: 48 },
    { id: 8, img: "./asset/img/galery/bataktoba2.jpeg", title: "Batak Toba 2", category: "siswa", user: "batak_vibes", likes: 44 },
    { id: 9, img: "./asset/img/galery/belajar.jpg", title: "Sesi Belajar", category: "kegiatan", user: "study_group", likes: 65 },
    { id: 10, img: "./asset/img/galery/bersih_bersih.jpg", title: "Bersih Bersih Kelas", category: "kegiatan", user: "clean_team", likes: 22 },
    { id: 11, img: "./asset/img/galery/briping.JPG", title: "Briefing Tim", category: "kegiatan", user: "project_lead", likes: 37 },
    { id: 12, img: "./asset/img/galery/ee.jpeg", title: "Foto Ee", category: "siswa", user: "ee_photos", likes: 19 },
    { id: 13, img: "./asset/img/galery/gaya.jpg", title: "Gaya Keren", category: "siswa", user: "fashion_pplg", likes: 83 },
    { id: 14, img: "./asset/img/galery/gaya2.jpg", title: "Gaya Keren 2", category: "siswa", user: "fashion_pplg", likes: 77 },
    { id: 15, img: "./asset/img/galery/gaya4.jpeg", title: "Gaya 4", category: "siswa", user: "style_team", likes: 51 },
    { id: 16, img: "./asset/img/galery/hari_guru_day2.JPG", title: "Hari Guru Day 2", category: "guru", user: "guru_day", likes: 62 },
    { id: 17, img: "./asset/img/galery/hari_guru.jpg", title: "Hari Guru", category: "guru", user: "guru_day", likes: 58 },
    { id: 18, img: "./asset/img/galery/hari_guru5.jpg", title: "Hari Guru 5", category: "guru", user: "guru_day", likes: 45 },
    { id: 19, img: "./asset/img/galery/hitam.jpeg", title: "Foto Hitam", category: "siswa", user: "dark_mode", likes: 34 },
    { id: 20, img: "./asset/img/galery/hitam2.jpeg", title: "Foto Hitam 2", category: "siswa", user: "dark_mode", likes: 31 },
    { id: 21, img: "./asset/img/galery/hukum.JPG", title: "Pelajaran Hukum", category: "kegiatan", user: "civic_team", likes: 27 },
    { id: 22, img: "./asset/img/galery/ini.jpeg", title: "Batak toba era", category: "kegiatan", user: "random_fun", likes: 15 },
    { id: 23, img: "./asset/img/galery/jalan2.jpg", title: "Jalan Jalan", category: "kegiatan", user: "outing_team", likes: 69 },
    { id: 24, img: "./asset/img/galery/lapor1.jpg", title: "Laporan 1", category: "kegiatan", user: "report_team", likes: 24 },
    { id: 25, img: "./asset/img/galery/lapor2.jpg", title: "Laporan 2", category: "kegiatan", user: "report_team", likes: 21 },
    { id: 26, img: "./asset/img/galery/lapor3.jpg", title: "Laporan 3", category: "kegiatan", user: "report_team", likes: 18 },
    { id: 27, img: "./asset/img/galery/lapor4.jpg", title: "Laporan 4", category: "kegiatan", user: "report_team", likes: 20 },
    { id: 28, img: "./asset/img/galery/lomba.JPG", title: "Lomba Seru", category: "lomba", user: "competition", likes: 88 },
    { id: 29, img: "./asset/img/galery/lomba2.JPG", title: "Lomba 2", category: "lomba", user: "competition", likes: 74 },
    { id: 30, img: "./asset/img/galery/nangis.jpeg", title: "Momen Emosional", category: "siswa", user: "emotional", likes: 92 },
    { id: 31, img: "./asset/img/galery/olga.jpg", title: "Olga Moment", category: "siswa", user: "olga_photos", likes: 55 },
    { id: 32, img: "./asset/img/galery/olga2.jpg", title: "Olga 2", category: "siswa", user: "olga_photos", likes: 49 },
    { id: 33, img: "./asset/img/galery/parit1.JPG", title: "Parit Bersih", category: "kegiatan", user: "clean_team", likes: 16 },
    { id: 34, img: "./asset/img/galery/pbb.JPG", title: "Latihan PBB", category: "upacara", user: "pbb_team", likes: 40 },
    { id: 35, img: "./asset/img/galery/piala.JPG", title: "Trofi Juara", category: "lomba", user: "winner_team", likes: 96 },
    { id: 36, img: "./asset/img/galery/piala1.JPG", title: "Piala 1", category: "lomba", user: "winner_team", likes: 89 },
    { id: 37, img: "./asset/img/galery/piala2.JPG", title: "Piala 2", category: "lomba", user: "winner_team", likes: 81 },
    { id: 38, img: "./asset/img/galery/piala3.JPG", title: "Piala 3", category: "lomba", user: "winner_team", likes: 73 },
    { id: 39, img: "./asset/img/galery/piala4.JPG", title: "Piala 4", category: "lomba", user: "winner_team", likes: 67 },
    { id: 40, img: "./asset/img/galery/pp.jpg", title: "PP Kegiatan", category: "kegiatan", user: "pp_team", likes: 35 },
    { id: 41, img: "./asset/img/galery/pramuka.jpeg", title: "Pramuka Adventure", category: "kegiatan", user: "scout_team", likes: 63 },
    { id: 42, img: "./asset/img/galery/renang.jpg", title: "Lomba Renang", category: "lomba", user: "swim_team", likes: 78 },
    { id: 43, img: "./asset/img/galery/variasi.JPG", title: "Variasi Kreatif", category: "kegiatan", user: "creative_team", likes: 52 },
    { id: 44, img: "./asset/img/galery/yesus.jpg", title: "Momen Rohani", category: "kegiatan", user: "spiritual", likes: 46 },
];

const classStructure = [
    { name: "DEWI ROBIATUL ADAWIYAH", img: "./asset/img/murid/DEWI_ROBIATUL_ADAWIYAH.webp", role: "Wali kelas", color: "rose", number: "01" },
    { name: "RAKA SYAPUTRA PRATAMA", img: "./asset/img/murid/RAKA_SYAPUTRA_PRATAMA.webp", role: "Sekertaris", color: "rose", number: "02" },
    { name: "ALDI SAEFUL NIZAR", img: "./asset/img/murid/ALDI_SAEFUL_NIZAR.webp", role: "Sekertaris", color: "rose", number: "03" },
    { name: "KAILA AZAHRA", img: "./asset/img/murid/KAILA_AZAHRA.webp", role: "Sekertaris", color: "rose", number: "04" },
    { name: "NAZWA AULIA RULYIANTI", img: "./asset/img/murid/NAZWA_AULIA_RULYIANTI.webp", role: "Sekertaris", color: "rose", number: "05" },
    { name: "SINTIA SALSABILA", img: "./asset/img/murid/SINTIA_SALSABILA.webp", role: "Bendahara", color: "rose", number: "06" },
    { name: "RIPA ADITIA RAMADANI", img: "./asset/img/murid/RIPA_ADITIA_RAMADANI.webp", role: "Keamanan", color: "sky", number: "07" },
    { name: "AGUNG RAHMANUDIN", img: "./asset/img/murid/AGUNG_RAHMANUDIN.webp", role: "Keamanan", color: "sky", number: "08" },
    { name: "FIKRI", img: "./asset/img/murid/FIKRI.webp", role: "Kebersihan", color: "teal", number: "09" },
    { name: "NINDY TRIYANTI SOMANTRI", img: "./asset/img/murid/NINDY_TRIYANTI_SOMANTRI.webp", role: "Kebersihan", color: "teal", number: "10" },
    { name: "NOVITA RIZKI", img: "./asset/img/murid/NOVITA_RIZKI.webp", role: "Kerohanian", color: "orange", number: "11" },
    { name: "META DWI ALFIANA", img: "./asset/img/murid/META_DWI_ALFIANA.webp", role: "Kerohanian", color: "orange", number: "12" },
    { name: "ADE RAMDANI", img: "./asset/img/murid/ADE_RAMDANI.webp", role: "Kesenian", color: "violet", number: "13" },
    { name: "PANI PELISA", img: "./asset/img/murid/PANI_PELISA.webp", role: "Kesenian", color: "violet", number: "14" },
    { name: "YOGA ADITYA ERLANGGA", img: "./asset/img/murid/YOGA_ADITYA_ERLANGGA.webp", role: "Olahraga", color: "emerald", number: "15" },
    { name: "FATIH RIZIQ ALFARIZI", img: "./asset/img/murid/FATIH_RIZIQ_ALFARIZI.webp", role: "Olahraga", color: "emerald", number: "16" },
];

// 1. Kelompokkan data berdasarkan Role
const grouped = {};
classStructure.forEach(person => {
    const key = person.role.toLowerCase();
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(person);
});

// 2. Fungsi pembuat Kartu
const createCard = (person) => `
        <div class="org-card border-${person.color}">
            <img src="${person.img}" alt="${person.name}" loading="lazy" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&background=random'">
            <h3>${person.name}</h3>
            <p>${person.role}</p>
        </div>
    `;

// 3. Fungsi pembuat Level
const createLevel = (roleKey, isTop = false) => {
    const people = grouped[roleKey];
    if (!people) return '';

    let levelClass = isTop ? 'level-top' : '';
    let connectorH = '';

    // Hitung lebar garis horizontal (disesuaikan dengan jumlah anggota)
    if (!isTop && people.length > 1) {
        const widthCalc = `calc(${people.length * 140}px + ${(people.length - 1) * 24}px - 140px)`;
        connectorH = `<div class="connector-h" style="width: ${widthCalc};"></div>`;
    } else if (!isTop && people.length === 1) {
        // Jika hanya 1 orang di level bawah, tidak perlu garis horizontal
        connectorH = '';
    }

    return `
            <div class="connector-v"></div>
            <div class="org-level ${levelClass}">
                ${connectorH}
                ${people.map(p => createCard(p)).join('')}
            </div>
        `;
};

// 4. Render Semuanya (legacy)
// NOTE: index.html tidak memiliki elemen #org-container,
// jadi blok ini harus aman agar tidak mematikan script.
const container = document.getElementById('org-container');
if (container) {
    container.innerHTML = `
            <!-- Level 1: Wali Kelas -->
            ${createLevel('wali kelas', true)}
            
            <!-- Level 2: Inti (Sekertaris & Bendahara) -->
            ${createLevel('sekertaris')}
            ${createLevel('bendahara')}
            
            <!-- Level 3: Sie-Sie -->
            ${createLevel('keamanan')}
            ${createLevel('kebersihan')}
            ${createLevel('kerohanian')}
            ${createLevel('kesenian')}
            ${createLevel('olahraga')}
        `;
}


const studentsAll = [
    { name: "ABDUL KARIM", img: "./asset/img/murid/ABDUL_KARIM.webp", number: "01" },
    { name: "ADE RAMDANI", img: "./asset/img/murid/ADE_RAMDANI.webp", number: "02" },
    { name: "ADIF ENDRIAN", img: "./asset/img/murid/ADIF_ENDRIAN.webp", number: "03" },
    { name: "AGUNG RAHMANUDIN", img: "./asset/img/murid/AGUNG_RAHMANUDIN.webp", number: "04" },
    { name: "ALDI SAEFUL NIZAR", img: "./asset/img/murid/ALDI_SAEFUL_NIZAR.webp", number: "05" },
    { name: "ANI YULIANI", img: "./asset/img/murid/ANI_YULIANI.webp", number: "06" },
    { name: "ARIE WIRAWAN", img: "./asset/img/murid/ARIE_WIRAWAN.webp", number: "07" },
    { name: "DUDU BADRUJAMAN", img: "./asset/img/murid/DUDU_BADRUJAMAN.webp", number: "08" },
    { name: "EVAN PURNAMALILA KOSASIH", img: "./asset/img/murid/EVAN_PURNAMALILA_KOSASIH.webp", number: "09" },
    { name: "FATIH RIZIQ ALFARIZI", img: "./asset/img/murid/FATIH_RIZIQ_ALFARIZI.webp", number: "10" },
    { name: "FIKRI", img: "./asset/img/murid/FIKRI.webp", number: "11" },
    { name: "KAILA AZAHRA", img: "./asset/img/murid/KAILA_AZAHRA.webp", number: "12" },
    { name: "M. RAHADIAN BAISUNI", img: "./asset/img/murid/M_RAHADIAN_BAISUNI.webp", number: "13" },
    { name: "MAYA", img: "./asset/img/murid/MAYA.webp", number: "14" },
    { name: "META DWI ALFIANA", img: "./asset/img/murid/META_DWI_ALFIANA.webp", number: "15" },
    { name: "MOCH FAHMI", img: "./asset/img/murid/MOCH_FAHMI.webp", number: "16" },
    { name: "MUHAMAD ADI", img: "./asset/img/murid/MUHAMAD_ADI.webp", number: "17" },
    { name: "MUHAMMAD AL FARIDZY", img: "./asset/img/murid/MUHAMMAD_AL_FARIDZY.webp", number: "18" },
    { name: "NANI NURONIAH", img: "./asset/img/murid/NANI_NURONIAH.webp", number: "19" },
    { name: "NAZWA AULIA RULYIANTI", img: "./asset/img/murid/NAZWA_AULIA_RULYIANTI.webp", number: "20" },
    { name: "NINDY TRIYANTI SOMANTRI", img: "./asset/img/murid/NINDY_TRIYANTI_SOMANTRI.webp", number: "21" },
    { name: "NOVITA RIZKI", img: "./asset/img/murid/NOVITA_RIZKI.webp", number: "22" },
    { name: "PANI PELISA", img: "./asset/img/murid/PANI_PELISA.webp", number: "23" },
    { name: "PERA HERAWATI", img: "./asset/img/murid/PERA_HERAWATI.webp", number: "24" },
    { name: "RAKA SYAPUTRA PRATAMA", img: "./asset/img/murid/RAKA_SYAPUTRA_PRATAMA.webp", number: "25" },
    { name: "REYGA AGUNG PRATAMA", img: "./asset/img/murid/REYGA_AGUNG_PRATAMA.webp", number: "26" },
    { name: "RIPA ADITIA RAMADANI", img: "./asset/img/murid/RIPA_ADITIA_RAMADANI.webp", number: "27" },
    { name: "RIZKI ANDIKA ADITIA", img: "./asset/img/murid/RIZKI_ANDIKA_ADITIA.webp", number: "28" },
    { name: "SHEREN HUMAIROH", img: "./asset/img/murid/SHEREN_HUMAIROH.webp", number: "29" },
    { name: "SINTIA SALSABILA", img: "./asset/img/murid/SINTIA_SALSABILA.webp", number: "30" },
    { name: "YOGA ADITYA ERLANGGA", img: "./asset/img/murid/YOGA_ADITYA_ERLANGGA.webp", number: "31" },
];

const projects = [
    { name: "E-Learning Platform", tech: ["Laravel", "Vue"], desc: "Platform pembelajaran daring untuk siswa SMK", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80" },
    { name: "Inventory System", tech: ["React", "Node"], desc: "Sistem inventaris barang sekolah", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" },
    { name: "Game Edukasi", tech: ["Unity", "C#"], desc: "Game adventure edukasi sejarah indonesia", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80" }
];

// =============================================
// 2. TRANSLATIONS
// =============================================
const translations = {
    id: {
        nav_students: "Students", nav_portfolio: "Portfolio", nav_project: "Project", nav_contact: "Contact",
        hero_major: "Pengembangan Perangkat Lunak dan Gim",
        hero_desc: "Kelas yang inovatif, kolaboratif, dan berprestasi di bidang teknologi informasi.",
        hero_btn_explore: "Jelajahi Kelas", hero_btn_contact: "Hubungi Kami",
        hero_stat_students: "Siswa", hero_stat_org: "Pengurus", hero_stat_act: "Aktivitas", hero_stat_achieve: "Prestasi",
        hero_typing: ["Kode Masa Depan", "Inovasi Tanpa Batas", "Bersatu dalam Teknologi"],
        about_title: "Tentang Kelas", about_subtitle: "Mengenal lebih dekat kelas XII PPLG",
        about_visi: "Visi", about_visi_text: "Menjadi kelas yang unggul dalam kompetisi, erat dalam kebersamaan, dan cekatan dalam berkarya teknologi.",
        about_misi: "Misi", about_misi_text: "Membangun budaya belajar yang efektif, mengembangkan bakat setiap siswa, dan mewujudkan project nyata yang bermanfaat.",
        about_nilai: "Nilai Kelas", about_nilai_text: "Integritas, Inovasi, Kolaborasi, dan Kerja Keras menjadi fondasi utama kami dalam berkarya.",
        port_title: "Galeri", proj_title: "Project Kami", contact_title: "Hubungi Kami",
        contact_name: "Nama", contact_email: "Email", contact_msg: "Pesan", contact_btn: "Kirim Pesan",
        footer_desc: "Kelas unggulan yang berfokus pada pengembangan perangkat lunak dan gim di SMK.",
        footer_contact: "Hubungi Kami",
        alert_success: "Pesan Berhasil Dikirim", alert_msg: "Terima kasih telah menghubungi kami!",
        search_placeholder: "Cari nama siswa...", filter_all: "Semua Absen",
        members_label: "Anggota Kelas", members_title: "Seluruh Siswa XII PPLG",
        members_desc: "31 siswa yang bersatu membangun masa depan digital.",
        members_search: "Cari nama siswa...", members_filter_all: "Semua Absen",
        members_empty: "Siswa tidak ditemukan", btn_show_all: "Tampilkan Semua", btn_show_less: "Tampilkan Sedikit"
    },
    en: {
        nav_students: "Students", nav_portfolio: "Portfolio", nav_project: "Project", nav_contact: "Contact",
        hero_major: "Software and Game Development",
        hero_desc: "An innovative, collaborative, and accomplished class in information technology.",
        hero_btn_explore: "Explore Class", hero_btn_contact: "Contact Us",
        hero_stat_students: "Students", hero_stat_org: "Org Members", hero_stat_act: "Activities", hero_stat_achieve: "Achievements",
        hero_typing: ["Coding the Future", "Endless Innovation", "United in Technology"],
        about_title: "About Class", about_subtitle: "Getting to know class XII PPLG",
        about_visi: "Vision", about_visi_text: "To be a class excelling in competition, close in togetherness, and adept at creating technology.",
        about_misi: "Mission", about_misi_text: "Building an effective learning culture, developing every student's talent, and realizing useful real projects.",
        about_nilai: "Class Values", about_nilai_text: "Integrity, Innovation, Collaboration, and Hard Work are our main foundations in creating.",
        port_title: "Gallery", proj_title: "Our Projects", contact_title: "Contact Us",
        contact_name: "Name", contact_email: "Email", contact_msg: "Message", contact_btn: "Send Message",
        footer_desc: "An outstanding class focused on software and game development at Vocational High School.",
        footer_contact: "Contact Us",
        alert_success: "Message Sent Successfully", alert_msg: "Thank you for contacting us!",
        search_placeholder: "Search student name...", filter_all: "All Numbers",
        members_label: "Class Members", members_title: "All Students XII PPLG",
        members_desc: "31 students united to build the digital future.",
        members_search: "Search student name...", members_filter_all: "All Numbers",
        members_empty: "Student not found", btn_show_all: "Show All", btn_show_less: "Show Less"
    }
};


// =============================================
// 3. STATE & INITIALIZATION
// =============================================


let currentLang = localStorage.getItem('lang') || 'id';
let isDark = localStorage.getItem('dark') === 'true';
let currentModalIndex = -1;
let filteredPins = [...pinData];
const INITIAL_DISPLAY_COUNT = 10;

document.documentElement.classList.toggle('dark', isDark);

window.onload = () => {
    setTimeout(() => {
        document.getElementById('loader').style.opacity = '0';
        setTimeout(() => document.getElementById('loader').style.display = 'none', 500);
    }, 1000);

    AOS.init({ once: true, duration: 800 });
    setLanguage(currentLang);
    initTyping();
    initCounters();
    renderStructure();
    initMembers();
    renderGallery('all');
    renderProjects();
    initFAQ();
    initListeners();
};

// =============================================
// 4. CORE FUNCTIONS
// =============================================
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.getElementById('lang-toggle').innerText = lang === 'id' ? 'EN' : 'ID';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    const memberSearch = document.getElementById('member-search');
    if (memberSearch) memberSearch.placeholder = translations[lang].members_search;

    const toggleBtn = document.getElementById('membersToggle');
    if (toggleBtn && toggleBtn.getAttribute('data-open') === 'false') {
        toggleBtn.innerText = translations[lang].btn_show_all;
    } else if (toggleBtn && toggleBtn.getAttribute('data-open') === 'true') {
        toggleBtn.innerText = translations[lang].btn_show_less;
    }
}

function initTyping() {
    const el = document.getElementById('typing-text');
    const texts = translations[currentLang].hero_typing;
    let textIdx = 0, charIdx = 0, isDeleting = false;

    function type() {
        const currentText = texts[textIdx];
        el.textContent = currentText.substring(0, charIdx);

        if (!isDeleting && charIdx < currentText.length) {
            charIdx++; setTimeout(type, 100);
        } else if (!isDeleting && charIdx === currentText.length) {
            isDeleting = true; setTimeout(type, 2000);
        } else if (isDeleting && charIdx > 0) {
            charIdx--; setTimeout(type, 50);
        } else {
            isDeleting = false; textIdx = (textIdx + 1) % texts.length; setTimeout(type, 500);
        }
    }
    type();
}

function initCounters() {
    const counters = document.querySelectorAll('.counter');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = +el.getAttribute('data-target');
                let count = 0;
                const updateCount = () => {
                    const increment = target / 60;
                    if (count < target) {
                        count += increment; el.innerText = Math.ceil(count); requestAnimationFrame(updateCount);
                    } else el.innerText = target + '+';
                };
                updateCount();
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(c => observer.observe(c));
}

// =============================================
// 5. RENDER LAYOUTS
// =============================================
function renderStructure() {
    const container = document.getElementById('org-container');
    if (!container) return;

    // 1) Kelompokkan data berdasarkan role
    const grouped = {};
    classStructure.forEach(person => {
        const key = person.role.toLowerCase();
        if (!grouped[key]) grouped[key] = [];
        grouped[key].push(person);
    });

    // 2) Kartu anggota
    const createCard = (person) => `
        <div class="org-card border-${person.color}">
            <img src="${person.img}" alt="${person.name}" loading="lazy" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&background=random'">
            <h3>${person.name}</h3>
            <p>${person.role}</p>
        </div>
    `;

    // 3) Level
    const createLevel = (roleKey, isTop = false) => {
        const people = grouped[roleKey];
        if (!people) return '';

        const levelClass = isTop ? 'level-top' : '';
        let connectorH = '';

        if (!isTop && people.length > 1) {
            const widthCalc = `calc(${people.length * 140}px + ${(people.length - 1) * 24}px - 140px)`;
            connectorH = `<div class="connector-h" style="width: ${widthCalc};"></div>`;
        }

        return `
            <div class="connector-v"></div>
            <div class="org-level ${levelClass}">
                ${connectorH}
                ${people.map(p => createCard(p)).join('')}
            </div>
        `;
    };

    // 4) Render semuanya
    container.innerHTML = `
        <!-- Level 1: Wali Kelas -->
        ${createLevel('wali kelas', true)}

        <!-- Level 2: Inti (Sekertaris & Bendahara) -->
        ${createLevel('sekertaris')}
        ${createLevel('bendahara')}

        <!-- Level 3: Sie-Sie -->
        ${createLevel('keamanan')}
        ${createLevel('kebersihan')}
        ${createLevel('kerohanian')}
        ${createLevel('kesenian')}
        ${createLevel('olahraga')}
    `;
}


function renderMembers(filter = 'all', search = '') {
    const visibleGrid = document.getElementById('membersVisible');
    const hiddenGrid = document.getElementById('membersHidden');

    let data = [...studentsAll];

    if (filter !== 'all') data = data.filter(s => s.number === filter);
    if (search) data = data.filter(s => s.name.toLowerCase().includes(search.toLowerCase()));

    const cardHTML = (s) => `
        <div class="group relative aspect-[4/5] overflow-hidden cursor-pointer"
             onclick="openMemberModal('${s.name}', '${s.img}', '${s.number}')">

            <img src="${s.img}" alt="${s.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy">

            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div class="absolute bottom-0 left-0 right-0 p-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h4 class="font-bold text-[11px] md:text-xs text-white truncate">${s.name}</h4>
                <p class="text-[9px] md:text-[10px] text-accent font-medium mt-0.5">No. ${s.number}</p>
            </div>
        </div>
    `;

    visibleGrid.innerHTML = '';
    hiddenGrid.innerHTML = '';
    hiddenGrid.classList.add('hidden');

    const toggleBtn = document.getElementById('membersToggle');
    toggleBtn.setAttribute('data-open', 'false');
    toggleBtn.innerText = translations[currentLang].btn_show_all || 'Tampilkan Semua';

    if (data.length === 0) {
        visibleGrid.innerHTML = `<div class="col-span-full text-center text-soft dark:text-gray-400 py-10">${translations[currentLang].members_empty}</div>`;
        toggleBtn.classList.add('hidden');
        return;
    }

    if (data.length <= INITIAL_DISPLAY_COUNT) {
        toggleBtn.classList.add('hidden');
        visibleGrid.innerHTML = data.map(cardHTML).join('');
    } else {
        toggleBtn.classList.remove('hidden');
        visibleGrid.innerHTML = data.slice(0, INITIAL_DISPLAY_COUNT).map(cardHTML).join('');
        hiddenGrid.innerHTML = data.slice(INITIAL_DISPLAY_COUNT).map(cardHTML).join('');
    }
}

function renderGallery(filter) {
    const container = document.getElementById('masonry-container');

    // Deduplikasi data galeri untuk mencegah item tampil ganda
    const pins = filter === 'all' ? pinData : pinData.filter(p => p.category === filter);
    const seen = new Set();
    filteredPins = pins.filter(p => {
        const key = `${p.img}__${p.title}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });

    container.innerHTML = filteredPins.map((p, idx) => `
        <div class="masonry-item fade-in" onclick="openImageModal(${idx})">
            <img src="${p.img}" alt="${p.title}" loading="lazy" class="w-full">
            <div class="masonry-overlay">
                <i class="fas fa-search-plus text-white text-2xl"></i>
            </div>
        </div>
    `).join('');
}

function renderProjects() {
    const grid = document.getElementById('project-grid');
    if (!grid) return;

    grid.innerHTML = projects.map(p => `
        <div class="bg-white dark:bg-secondary rounded-2xl shadow-lg p-6 hover:shadow-2xl transition" data-aos="fade-up">
            <div class="h-40 rounded-xl overflow-hidden mb-4">
                <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover" loading="lazy">
            </div>
            <h3 class="text-xl font-bold text-accent mb-2">${p.name}</h3>
            <p class="text-soft dark:text-gray-300 text-sm mb-4">${p.desc}</p>
            <div class="flex flex-wrap gap-2">
                ${p.tech.map(t => `<span class="px-3 py-1 rounded-full bg-soft text-primary text-xs font-semibold">${t}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function initFAQ() {
    const container = document.getElementById('faq-container');
    const faqs = [
        { q: "Apa itu PPLG?", a: "PPLG adalah singkatan dari Pengembangan Perangkat Lunak dan Gim, jurusan keahlian di SMK yang mempelajari pemrograman software dan game." },
        { q: "Berapa jumlah siswa?", a: "Terdapat 31 siswa aktif di kelas XII PPLG." },
        { q: "Apa kegiatan unggulan kelas?", a: "Kegiatan unggulan meliputi coding bersama, hackathon, dan pengembangan project nyata." },
        { q: "Bagaimana cara menghubungi kelas?", a: "Anda bisa menghubungi kami melalui formulir kontak di bawah atau email resmi sekolah." }
    ];

    container.innerHTML = faqs.map((f, i) => `
        <div class="bg-white dark:bg-primary rounded-xl shadow-md overflow-hidden">
            <button class="faq-btn w-full flex justify-between items-center p-5 text-left font-medium hover:text-accent transition" onclick="toggleFAQ(${i})">
                <span>${f.q}</span>
                <i class="fas fa-chevron-down transition-transform duration-300" id="faq-icon-${i}"></i>
            </button>
            <div class="faq-content max-h-0 overflow-hidden transition-all duration-300 px-5" id="faq-content-${i}">
                <p class="pb-5 text-soft dark:text-gray-300 text-sm">${f.a}</p>
            </div>
        </div>
    `).join('');
}

// =============================================
// 6. UI INTERACTIONS & LISTENERS
// =============================================
function initMembers() {
    const filterSelect = document.getElementById('member-filter');
    const searchInput = document.getElementById('member-search');

    studentsAll.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s.number;
        opt.innerText = s.number;
        filterSelect.appendChild(opt);
    });

    searchInput.addEventListener('input', () => renderMembers(filterSelect.value, searchInput.value));
    filterSelect.addEventListener('change', () => renderMembers(filterSelect.value, searchInput.value));

    renderMembers();
}

function toggleMembers() {
    const hiddenGrid = document.getElementById('membersHidden');
    const toggleBtn = document.getElementById('membersToggle');
    const isOpen = toggleBtn.getAttribute('data-open') === 'true';

    if (isOpen) {
        hiddenGrid.classList.add('hidden');
        toggleBtn.innerText = translations[currentLang].btn_show_all;
        toggleBtn.setAttribute('data-open', 'false');
    } else {
        hiddenGrid.classList.remove('hidden');
        toggleBtn.innerText = translations[currentLang].btn_show_less;
        toggleBtn.setAttribute('data-open', 'true');
    }
}

function openMemberModal(name, img, number) {
    const data = {
        title: name,
        img: img,
        category: currentLang === 'id' ? 'Siswa' : 'Student',
        desc: currentLang === 'id' ? `Nomor Absen: ${number}` : `Student Number: ${number}`,
        likes: 0
    };

    filteredPins = [data];
    currentModalIndex = 0;
    openImageModal(0);
}

function initListeners() {
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        const btt = document.getElementById('back-to-top');

        if (window.scrollY > 50) nav.classList.add('nav-scrolled');
        else nav.classList.remove('nav-scrolled');

        if (window.scrollY > 500) {
            btt.classList.remove('hidden');
            btt.classList.add('flex');
        } else {
            btt.classList.add('hidden');
            btt.classList.remove('flex');
        }

        const sections = document.querySelectorAll('section[id]');
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) current = section.getAttribute('id');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('text-accent');
            if (link.getAttribute('href') === `#${current}`) link.classList.add('text-accent');
        });
    });

    document.getElementById('dark-toggle').addEventListener('click', () => {
        isDark = !isDark;
        document.documentElement.classList.toggle('dark', isDark);
        localStorage.setItem('dark', isDark);
    });

    document.getElementById('lang-toggle').addEventListener('click', () => {
        setLanguage(currentLang === 'id' ? 'en' : 'id');
    });

    document.getElementById('hamburger').addEventListener('click', () => {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('hidden');
    });

    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => document.getElementById('mobile-menu').classList.add('hidden'));
    });

    document.getElementById('back-to-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    document.querySelectorAll('.gal-filter').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.gal-filter').forEach(b => b.classList.replace('bg-accent', 'bg-soft'));
            this.classList.replace('bg-soft', 'bg-accent');
            renderGallery(this.getAttribute('data-filter'));
        });
    });

    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        document.getElementById('alert-title').innerText = translations[currentLang].alert_success;
        document.getElementById('alert-msg').innerText = translations[currentLang].alert_msg;
        document.getElementById('alert-modal').classList.remove('hidden');
        e.target.reset();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.getElementById('image-modal').classList.add('hidden');
            document.getElementById('alert-modal').classList.add('hidden');
        }

        if (!document.getElementById('image-modal').classList.contains('hidden')) {
            if (e.key === 'ArrowLeft') navigateModal(-1);
            if (e.key === 'ArrowRight') navigateModal(1);
        }
    });

    document.getElementById('modal-close').addEventListener('click', () => document.getElementById('image-modal').classList.add('hidden'));
    document.getElementById('modal-prev').addEventListener('click', () => navigateModal(-1));
    document.getElementById('modal-next').addEventListener('click', () => navigateModal(1));
}

function toggleFAQ(idx) {
    const content = document.getElementById(`faq-content-${idx}`);
    const icon = document.getElementById(`faq-icon-${idx}`);
    const isOpen = content.style.maxHeight;

    document.querySelectorAll('.faq-content').forEach(el => el.style.maxHeight = null);
    document.querySelectorAll('.faq-btn i').forEach(el => el.classList.remove('rotate-180'));

    if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.classList.add('rotate-180');
    }
}

function openImageModal(index) {
    currentModalIndex = index;
    const data = filteredPins[index];

    document.getElementById('modal-img').src = data.img;
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-cat').innerText = data.category;
    document.getElementById('modal-desc').innerText = data.desc || 'Deskripsi kegiatan kelas XII PPLG';
    document.getElementById('modal-likes').innerText = data.likes;

    document.getElementById('image-modal').classList.remove('hidden');
    document.getElementById('image-modal').classList.add('flex');
}

function navigateModal(dir) {
    let newIdx = currentModalIndex + dir;
    if (newIdx < 0) newIdx = filteredPins.length - 1;
    if (newIdx >= filteredPins.length) newIdx = 0;
    openImageModal(newIdx);
}

// Expose functions used by inline onclick
window.toggleMembers = toggleMembers;
window.openMemberModal = openMemberModal;
window.openImageModal = openImageModal;
window.toggleFAQ = toggleFAQ;
window.renderGallery = renderGallery;
window.setLanguage = setLanguage;
window.navigateModal = navigateModal;
window.renderStructure = renderStructure;
window.initMembers = initMembers;
window.renderProjects = renderProjects;

