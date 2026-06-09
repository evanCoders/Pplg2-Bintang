(function () {
    'use strict';

    // =============================================
    // DATA
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
        { id: 22, img: "./asset/img/galery/ini.jpeg", title: "Ini Itu", category: "kegiatan", user: "random_fun", likes: 15 },
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
        { id: 44, img: "./asset/img/galery/yesus.jpg", title: "Momen Rohani", category: "kegiatan", user: "spiritual", likes: 46 }
    ];

    const classOrgExtra = [
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
        { name: "FATIH RIZIQ ALFARIZI", img: "./asset/img/murid/FATIH_RIZIQ_ALFARIZI.webp", role: "Olahraga", color: "emerald", number: "16" }
    ];

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
        { name: "YOGA ADITYA ERLANGGA", img: "./asset/img/murid/YOGA_ADITYA_ERLANGGA.webp", number: "31" }
    ];

    // =============================================
    // TRANSLATIONS
    // =============================================

    const t = {
        id: {
            nav_about: 'Tentang', nav_structure: 'Struktur', nav_members: 'Anggota', nav_stats: 'Data', nav_gallery: 'Galeri', nav_contact: 'Kontak',
            hero_sub: 'Pengembangan Perangkat Lunak & Gim',
            hero_title_static: 'Kelas ', hero_title_type: 'XI PPLG 2',
            hero_desc: 'Membangun masa depan digital melalui kode, kolaborasi, dan disiplin.',
            hero_btn1: 'Kenali Kami', hero_btn2: 'Struktur Kelas',
            about_label: 'Tentang Kami', about_title: 'Lebih dari sekadar kelas',
            about_p1: 'XI PPLG 2 adalah kelas konsentrasi Pengembangan Perangkat Lunak dan Gim. Kami tidak hanya belajar menulis kode — kami belajar berpikir sistematis, bekerja dalam tim, dan memecahkan masalah nyata.',
            about_p2: 'Setiap siswa dibekali kemampuan di bidang pemrograman web, basis data, desain antarmuka, dan pengembangan aplikasi melalui praktik langsung.',
            struct_label: 'Struktur Kelas', struct_title: 'Pengurus Kelas',
            struct_desc: 'Mereka yang bertanggung jawab menjalankan roda organisasi kelas.',
            role_ketua: 'Ketua Kelas', role_wakil: 'Wakil Ketua', role_sekre: 'Sekretaris', role_benda: 'Bendahara',
            role_Keamanan: 'Keamanan', role_Kebersihan: 'Kebersihan', role_Kerohanian: 'Kerohanian',
            role_Kesenian: 'Kesenian', role_Olahraga: 'Olahraga',
            members_label: 'Anggota Kelas', members_title: 'Seluruh Siswa XI PPLG 2',
            members_desc: '31 siswa yang bersatu membangun masa depan digital.',
            stats_label: 'Data Kelas', stats_title: 'Dalam Angka',
            stat_total: 'Total Siswa', stat_male: 'Laki-laki', stat_female: 'Perempuan', stat_project: 'Proyek Selesai',
            gal_label: 'Galeri Kenangan', gal_title: 'Momen Berharga Kami',
            gal_desc: 'Kumpulan foto kegiatan, proyek, dan momen kebersamaan kelas XI PPLG 2.',
            contact_label: 'Kontak', contact_title: 'Hubungi Kami',
            contact_desc: 'Ada pertanyaan atau ingin berkolaborasi? Kirim pesan melalui form di bawah.',
            form_name: 'Nama', form_class: 'Kelas', form_subject: 'Subjek', form_message: 'Pesan', form_submit: 'Kirim Pesan',
            btn_show_all: 'Tampilkan Semua', btn_hide: 'Sembunyikan',
            toast_msg: 'Pesan berhasil dikirim.',
            footer_rights: 'Semua hak dilindungi.', footer_made: 'Dibuat dengan dedikasi',
        },
        en: {
            nav_about: 'About', nav_structure: 'Structure', nav_members: 'Members', nav_stats: 'Data', nav_gallery: 'Gallery', nav_contact: 'Contact',
            hero_sub: 'Software & Game Development',
            hero_title_static: 'Class ', hero_title_type: 'XI PPLG 2',
            hero_desc: 'Building the digital future through code, collaboration, and discipline.',
            hero_btn1: 'Get to Know Us', hero_btn2: 'Class Structure',
            about_label: 'About Us', about_title: 'More than just a class',
            about_p1: "XI PPLG 2 is a Software and Game Development concentration class. We don't just learn to write code — we learn to think systematically, work in teams, and solve real problems.",
            about_p2: 'Every student is equipped with skills in web programming, databases, interface design, and application development through hands-on practice.',
            struct_label: 'Class Structure', struct_title: 'Class Officers',
            struct_desc: 'Those responsible for running the class organization.',
            role_ketua: 'Class President', role_wakil: 'Vice President', role_sekre: 'Secretary', role_benda: 'Treasurer',
            role_Keamanan: 'Security', role_Kebersihan: 'Hygiene', role_Kerohanian: 'Spiritual',
            role_Kesenian: 'Arts', role_Olahraga: 'Sports',
            members_label: 'Class Members', members_title: 'All Students of XI PPLG 2',
            members_desc: '31 students united to build a digital future.',
            stats_label: 'Class Data', stats_title: 'In Numbers',
            stat_total: 'Total Students', stat_male: 'Male', stat_female: 'Female', stat_project: 'Projects Done',
            gal_label: 'Memory Gallery', gal_title: 'Our Precious Moments',
            gal_desc: 'A collection of photos from activities, projects, and togetherness of class XI PPLG 2.',
            contact_label: 'Contact', contact_title: 'Reach Us',
            contact_desc: 'Have questions or want to collaborate? Send a message through the form below.',
            form_name: 'Name', form_class: 'Class', form_subject: 'Subject', form_message: 'Message', form_submit: 'Send Message',
            btn_show_all: 'Show All', btn_hide: 'Hide',
            toast_msg: 'Message sent successfully.',
            footer_rights: 'All rights reserved.', footer_made: 'Made with dedication',
        }
    };

    // =============================================
    // STATE
    // =============================================

    let currentLang = 'id';
    let currentFilter = 'semua';
    let searchQuery = '';
    let filteredPins = [...pinData];
    let likedPins = new Set();
    let savedPins = new Set();
    let currentLightboxIndex = -1;
    let lightboxMode = 'photo'; // 'photo' = single image, 'gallery' = gallery navigation

    // =============================================
    // DOM REFERENCES
    // =============================================

    const $ = (sel) => document.querySelector(sel);
    const $$ = (sel) => document.querySelectorAll(sel);

    const masonryGrid = $('#masonryGrid');
    const filterBar = $('#filterBar');
    const gallerySearch = $('#gallerySearch');
    const galleryLoading = $('#galleryLoading');
    const noResults = $('#noResults');
    const lightboxEl = $('#lightbox');
    const lightboxImg = $('#lightboxImg');
    const lightboxTitle = $('#lightboxTitle');
    const lightboxMeta = $('#lightboxMeta');
    const lightboxInfoWrap = $('#lightboxInfoWrap');
    const lightboxCloseBtn = $('.lightbox-close');
    const lightboxPrevBtn = $('#lightboxPrev');
    const lightboxNextBtn = $('#lightboxNext');
    const scrollTopBtn = $('#scrollTop');
    const toastContainer = $('#toastContainer');
    const navbar = $('#navbar');

    // =============================================
    // UTILITY
    // =============================================

    function formatNumber(n) {
        return n >= 1000 ? Math.floor(n / 1000) + 'k' : n.toString();
    }

    function showToast(message, duration) {
        duration = duration || 3000;
        var toast = document.createElement('div');
        toast.className = 'toast animate-slideIn';
        toast.textContent = message;
        toastContainer.appendChild(toast);
        setTimeout(function () {
            toast.classList.add('exit');
            setTimeout(function () { toast.remove(); }, 300);
        }, duration);
    }

    // =============================================
    // LIGHTBOX (Unified)
    // =============================================

    function openLightbox() {
        lightboxEl.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightboxEl.classList.add('hidden');
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        currentLightboxIndex = -1;
        lightboxMode = 'photo';
    }

    // Mode 1: Foto tunggal (anggota / struktur)
    function openPhotoLightbox(src) {
        lightboxMode = 'photo';
        currentLightboxIndex = -1;
        lightboxImg.src = src;
        lightboxTitle.textContent = '';
        lightboxMeta.textContent = '';
        lightboxInfoWrap.style.display = 'none';
        lightboxPrevBtn.classList.add('hidden');
        lightboxNextBtn.classList.add('hidden');
        openLightbox();
    }

    // Mode 2: Gallery Pinterest (dengan navigasi)
    function openGalleryLightbox(index) {
        lightboxMode = 'gallery';
        currentLightboxIndex = index;
        var pin = filteredPins[index];
        if (!pin) return;
        lightboxImg.src = pin.img;
        lightboxImg.alt = pin.title;
        lightboxTitle.textContent = pin.title;
        lightboxMeta.textContent = '@' + pin.user + ' \u00B7 ' + formatNumber(pin.likes + (likedPins.has(pin.id) ? 1 : 0)) + ' suka \u00B7 ' + pin.category;
        lightboxInfoWrap.style.display = '';
        lightboxPrevBtn.classList.remove('hidden');
        lightboxNextBtn.classList.remove('hidden');
        openLightbox();
    }

    function navigateLightbox(dir) {
        if (currentLightboxIndex < 0 || lightboxMode !== 'gallery') return;
        var len = filteredPins.length;
        var newIndex = (currentLightboxIndex + dir + len) % len;
        openGalleryLightbox(newIndex);
    }

    // Lightbox events
    lightboxCloseBtn.addEventListener('click', function (e) { e.stopPropagation(); closeLightbox(); });
    lightboxPrevBtn.addEventListener('click', function (e) { e.stopPropagation(); navigateLightbox(-1); });
    lightboxNextBtn.addEventListener('click', function (e) { e.stopPropagation(); navigateLightbox(1); });
    lightboxEl.addEventListener('click', function (e) { if (e.target === lightboxEl) closeLightbox(); });
    document.addEventListener('keydown', function (e) {
        if (lightboxEl.classList.contains('hidden')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
    });

    // =============================================
    // GALLERY: PINTEREST
    // =============================================

    function renderSkeletons(count) {
        count = count || 12;
        var html = '';
        for (var i = 0; i < count; i++) {
            var h = 250 + Math.random() * 250;
            html += '<div class="skeleton"><div class="skeleton-img" style="height:' + h + 'px"></div></div>';
        }
        masonryGrid.innerHTML = html;
        galleryLoading.classList.remove('hidden');
        noResults.classList.add('hidden');
    }

    function renderPins(pins) {
        galleryLoading.classList.add('hidden');

        if (pins.length === 0) {
            masonryGrid.innerHTML = '';
            noResults.classList.remove('hidden');
            return;
        }

        noResults.classList.add('hidden');

        masonryGrid.innerHTML = pins.map(function (pin, index) {
            var isLiked = likedPins.has(pin.id);
            var isSaved = savedPins.has(pin.id);
            var avatarSeed = pin.user.replace(/[^a-z]/g, '');
            var heartFill = isLiked ? 'currentColor' : 'none';
            var heartClass = isLiked ? 'liked' : '';

            return '<div class="pin-card" data-index="' + index + '" tabindex="0" role="listitem">' +
                '<img src="' + pin.img + '" alt="' + pin.title + '" loading="lazy">' +
                '<button class="save-btn ' + (isSaved ? 'saved' : '') + '" data-id="' + pin.id + '">' + (isSaved ? 'Tersimpan' : 'Simpan') + '</button>' +
                '<div class="pin-overlay">' +
                '<div class="pin-overlay-top">' +
                '<button class="pin-action-btn" data-action="share" aria-label="Bagikan">' +
                '<i class="fa-solid fa-arrow-up-from-bracket" style="font-size:13px"></i>' +
                '</button>' +
                '<button class="pin-action-btn ' + heartClass + '" data-action="like" data-id="' + pin.id + '" aria-label="Suka">' +
                '<i class="fa-' + (isLiked ? 'solid' : 'regular') + ' fa-heart" style="font-size:13px"></i>' +
                '</button>' +
                '</div>' +
                '<div class="pin-overlay-bottom">' +
                '<img class="pin-avatar" src="https://picsum.photos/seed/' + avatarSeed + '/64/64.jpg" alt="' + pin.user + '" loading="lazy">' +
                '<span class="pin-username">@' + pin.user + '</span>' +
                '</div>' +
                '</div>' +
                '<div class="pin-info">' +
                '<div class="pin-title">' + pin.title + '</div>' +
                '<div class="pin-meta">' +
                '<span><i class="fa-' + (isLiked ? 'solid' : 'regular') + ' fa-heart" style="font-size:11px"></i> ' + formatNumber(pin.likes + (isLiked ? 1 : 0)) + '</span>' +
                '<span>' + pin.category + '</span>' +
                '</div>' +
                '</div>' +
                '</div>';
        }).join('');

        setupPinEvents();
        observePins();
    }

    function applyFilters() {
        filteredPins = pinData.filter(function (pin) {
            var matchCat = currentFilter === 'semua' || pin.category === currentFilter;
            var matchSearch = !searchQuery ||
                pin.title.toLowerCase().indexOf(searchQuery) !== -1 ||
                pin.user.toLowerCase().indexOf(searchQuery) !== -1 ||
                pin.category.toLowerCase().indexOf(searchQuery) !== -1;
            return matchCat && matchSearch;
        });
        renderPins(filteredPins);
    }

    function setupPinEvents() {
        masonryGrid.querySelectorAll('.pin-card').forEach(function (card, index) {
            // Klik gambar → gallery lightbox
            card.addEventListener('click', function (e) {
                if (e.target.closest('.save-btn') || e.target.closest('.pin-action-btn')) return;
                openGalleryLightbox(index);
            });

            // Simpan
            var saveBtn = card.querySelector('.save-btn');
            if (saveBtn) saveBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                toggleSave(parseInt(saveBtn.dataset.id));
            });

            // Like
            var likeBtn = card.querySelector('[data-action="like"]');
            if (likeBtn) likeBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                toggleLike(parseInt(likeBtn.dataset.id));
            });

            // Share
            var shareBtn = card.querySelector('[data-action="share"]');
            if (shareBtn) shareBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(window.location.href).then(function () {
                        showToast('Link berhasil disalin!');
                    });
                } else {
                    showToast('Link berhasil disalin!');
                }
            });
        });
    }

    function toggleLike(id) {
        if (likedPins.has(id)) {
            likedPins.delete(id);
            showToast('Batal menyukai');
        } else {
            likedPins.add(id);
            showToast('Disukai!');
        }
        applyFilters();
    }

    function toggleSave(id) {
        if (savedPins.has(id)) {
            savedPins.delete(id);
            showToast('Dihapus dari simpanan');
        } else {
            savedPins.add(id);
            showToast('Disimpan!');
        }
        applyFilters();
    }

    function observePins() {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px 50px 0px' });
        masonryGrid.querySelectorAll('.pin-card:not(.revealed)').forEach(function (pin) {
            observer.observe(pin);
        });
    }

    // Filter pills
    filterBar.addEventListener('click', function (e) {
        var pill = e.target.closest('.filter-pill');
        if (!pill) return;
        filterBar.querySelectorAll('.filter-pill').forEach(function (p) {
            p.classList.remove('active', 'bg-blue-500/20', 'text-blue-300', 'border-blue-500/30');
            p.classList.add('bg-white/5', 'text-neutral-400', 'border-white/10');
        });
        pill.classList.add('active', 'bg-blue-500/20', 'text-blue-300', 'border-blue-500/30');
        pill.classList.remove('bg-white/5', 'text-neutral-400', 'border-white/10');
        currentFilter = pill.dataset.filter;
        applyFilters();
    });

    // Search
    var searchTimeout;
    gallerySearch.addEventListener('input', function () {
        clearTimeout(searchTimeout);
        searchQuery = gallerySearch.value.toLowerCase().trim();
        searchTimeout = setTimeout(applyFilters, 300);
    });

    // =============================================
    // MEMBERS
    // =============================================

    function renderMembers() {
        var visible = $('#membersVisible');
        var hidden = $('#membersHidden');
        if (!visible || !hidden) return;

        visible.innerHTML = studentsAll.slice(0, 4).map(function (s, idx) {
            return '<div class="anggota-card rounded-xl overflow-hidden reveal-on-scroll" style="transition-delay:' + (idx * 0.04) + 's" onclick="openPhotoLightbox(\'' + s.img + '\')">' +
                '<div class="aspect-[4/5] overflow-hidden">' +
                '<img src="' + s.img + '" alt="' + s.name + '" class="anggota-img img-cover w-full h-full object-cover" onerror="this.src=\'https://picsum.photos/400/500.jpg\'">' +
                '</div>' +
                '<div class="p-4">' +
                '<p class="anggota-name text-white font-bold text-xs">' + s.name + '</p>' +
                '<p class="text-neutral-500 text-[0.65rem] mt-0.5">' + s.number + ' anggota</p>' +
                '</div>' +
                '</div>';
        }).join('');

        hidden.innerHTML = '<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5 pt-5">' +
            studentsAll.slice(4).map(function (s) {
                return '<div class="anggota-card rounded-xl overflow-hidden group hover:shadow-lg transition-shadow duration-300" onclick="openPhotoLightbox(\'' + s.img + '\')">' +
                    '<div class="aspect-[4/5] overflow-hidden">' +
                    '<img src="' + s.img + '" alt="' + s.name + '" class="anggota-img img-cover w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onerror="this.src=\'https://picsum.photos/400/500.jpg\'">' +
                    '</div>' +
                    '<div class="p-4">' +
                    '<p class="anggota-name text-white font-bold text-xs">' + s.name + '</p>' +
                    '<p class="text-neutral-500 text-[0.65rem] mt-0.5">' + s.number + ' anggota</p>' +
                    '</div>' +
                    '</div>';
            }).join('') +
            '</div>';

        hidden.classList.remove('show');
        var btn = $('#membersToggle');
        if (btn) { btn.dataset.open = 'false'; btn.textContent = t[currentLang].btn_show_all; }
    }

    function toggleMembers() {
        var hidden = $('#membersHidden');
        var btn = $('#membersToggle');
        if (!hidden || !btn) return;
        if (hidden.classList.contains('show')) {
            hidden.classList.remove('show');
            btn.dataset.open = 'false';
            btn.textContent = t[currentLang].btn_show_all;
        } else {
            hidden.classList.add('show');
            btn.dataset.open = 'true';
            btn.textContent = t[currentLang].btn_hide;
        }
    }

    // =============================================
    // STRUCTURE EXTRA
    // =============================================

    function renderStructureExtra() {
        var container = $('#structureExtra');
        if (!container) return;
        container.innerHTML = classOrgExtra.map(function (item, i) {
            var roleKey = 'role_' + item.role;
            var roleText = t[currentLang][roleKey] || item.role;
            return '<div class="member-card glass-soft rounded-xl overflow-hidden reveal-on-scroll" style="transition-delay:' + (i * 0.05) + 's" onclick="openPhotoLightbox(\'' + item.img + '\')">' +
                '<div class="aspect-[4/3]"><img src="' + item.img + '" class="img-cover" onerror="this.src=\'https://picsum.photos/400/300\'"></div>' +
                '<div class="p-6">' +
                '<p class="member-name text-white font-bold text-sm">' + item.name + '</p>' +
                '<p class="text-' + item.color + '-400 text-xs mt-1 font-semibold">' + item.number + ' \u00B7 ' + roleText + '</p>' +
                '</div>' +
                '</div>';
        }).join('');
    }

    function toggleStructureExtra() {
        var container = $('#structureExtra');
        var btn = $('#structureToggle');
        if (!container || !btn) return;
        if (container.classList.contains('show')) {
            container.classList.remove('show');
            btn.dataset.open = 'false';
            btn.textContent = t[currentLang].btn_show_all;
        } else {
            container.classList.add('show');
            btn.dataset.open = 'true';
            btn.textContent = t[currentLang].btn_hide;
        }
    }

    // =============================================
    // LANGUAGE
    // =============================================

    function setLang(lang) {
        currentLang = lang;

        // Toggle tombol aktif
        ['btnID', 'btnEN', 'btnIDm', 'btnENm'].forEach(function (id) {
            var el = document.getElementById(id);
            if (!el) return;
            var isActive = (id === 'btnID' || id === 'btnIDm') ? lang === 'id' : lang === 'en';
            el.classList.toggle('active', isActive);
        });

        // Update teks i18n
        $$('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (t[lang][key] && el.id !== 'typingText') el.textContent = t[lang][key];
        });
        $$('[data-i18n-placeholder]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-placeholder');
            if (t[lang][key]) el.placeholder = t[lang][key];
        });

        // Update toggle buttons
        ['membersToggle', 'structureToggle'].forEach(function (id) {
            var btn = document.getElementById(id);
            if (btn) btn.textContent = btn.dataset.open === 'true' ? t[lang].btn_hide : t[lang].btn_show_all;
        });

        renderStructureExtra();
        startTyping(lang);
        document.documentElement.lang = lang;
    }

    // =============================================
    // TYPING EFFECT
    // =============================================

    function startTyping(lang) {
        var typingEl = $('#typingText');
        var cursorEl = $('#typingCursor');
        if (!typingEl) return;

        if (window._typingTimeout) clearTimeout(window._typingTimeout);

        typingEl.textContent = '';
        if (cursorEl) cursorEl.style.display = 'inline-block';

        var staticText = t[lang].hero_title_static;
        var typeText = t[lang].hero_title_type;
        var i = 0;
        var phase = 'static';

        function tick() {
            if (phase === 'static') {
                if (i < staticText.length) {
                    typingEl.textContent += staticText[i];
                    i++;
                    window._typingTimeout = setTimeout(tick, 50);
                } else {
                    phase = 'type';
                    i = 0;
                    window._typingTimeout = setTimeout(tick, 200);
                }
            } else if (phase === 'type') {
                if (i < typeText.length) {
                    typingEl.innerHTML = staticText + '<span class="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">' + typeText.substring(0, i + 1) + '</span>';
                    i++;
                    window._typingTimeout = setTimeout(tick, 80);
                } else {
                    phase = 'done';
                }
            }
        }
        tick();
    }

    // =============================================
    // SCROLL EFFECTS
    // =============================================

    // Navbar shadow
    window.addEventListener('scroll', function () {
        if (navbar) {
            if (window.scrollY > 20) {
                navbar.style.borderBottomColor = 'rgba(255,255,255,0.05)';
                navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.3)';
                navbar.style.background = 'rgba(5,5,5,0.8)';
            } else {
                navbar.style.borderBottomColor = 'transparent';
                navbar.style.boxShadow = 'none';
                navbar.style.background = 'rgba(5,5,5,0.6)';
            }
        }

        // Scroll to top
        if (window.scrollY > 800) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.transform = 'translateY(0)';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.transform = 'translateY(1rem)';
        }
    }, { passive: true });

    scrollTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Reveal on scroll
    var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    $$('.reveal-on-scroll').forEach(function (el) { revealObserver.observe(el); });

    // =============================================
    // MOBILE MENU
    // =============================================

    var mobileMenuBtn = $('#mobileMenuBtn');
    var mobileMenu = $('#mobileMenu');
    var menuOpen = false;

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function () {
            menuOpen = !menuOpen;
            mobileMenu.classList.toggle('hidden', !menuOpen);
        });
        $$('.mobile-link').forEach(function (link) {
            link.addEventListener('click', function () {
                menuOpen = false;
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // =============================================
    // CONTACT FORM
    // =============================================

    var contactForm = $('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            showToast(t[currentLang].toast_msg);
            contactForm.reset();
        });
    }

    // =============================================
    // INIT
    // =============================================

    function init() {
        renderMembers();
        renderStructureExtra();
        startTyping('id');

        // Gallery: tampilkan skeleton dulu, lalu render
        renderSkeletons(12);
        setTimeout(function () {
            applyFilters();
        }, 800);
    }

    // Expose ke window untuk HTML onclick
    window.setLang = setLang;
    window.openPhotoLightbox = openPhotoLightbox;
    window.closeLightbox = closeLightbox;
    window.toggleMembers = toggleMembers;
    window.toggleStructureExtra = toggleStructureExtra;

    // Jalankan setelah DOM siap
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();