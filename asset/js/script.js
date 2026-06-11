// Moved from inline script in index.html

// =============================================
// 1. DATA COLLECTION - GALLERY ONLY
// =============================================
const pinData = [
    { id: 1, img: "./asset/img/galery/ala_ala.jpg", category: "siswa", user: "tim_pplg" },
    // { id: 2, img: "./asset/img/galery/apalah.jpg", category: "siswa", user: "kelas_xi" },
    { id: 3, img: "./asset/img/galery/artis.jpeg", category: "siswa", user: "pplg_fun" },
    { id: 4, img: "./asset/img/galery/bakar.jpg", category: "kegiatan", user: "tim_bbq" },
    // { id: 5, img: "./asset/img/galery/bapak_bapak.jpg", category: "guru", user: "guru_besar" },
    // { id: 6, img: "./asset/img/galery/baris.JPG", category: "upacara", user: "pbb_team" },
    { id: 7, img: "./asset/img/galery/bataktoba.jpeg", category: "siswa", user: "batak_vibes" },
    // { id: 8, img: "./asset/img/galery/bataktoba2.jpeg", category: "siswa", user: "batak_vibes" },
    { id: 9, img: "./asset/img/galery/belajar.jpg", category: "kegiatan", user: "study_group" },
    { id: 10, img: "./asset/img/galery/bersih_bersih.jpg", category: "kegiatan", user: "clean_team" },
    { id: 11, img: "./asset/img/galery/briping.JPG", category: "kegiatan", user: "project_lead" },
    // { id: 12, img: "./asset/img/galery/ee.jpeg", category: "siswa", user: "ee_photos" },
    { id: 13, img: "./asset/img/galery/gaya.jpg", category: "siswa", user: "fashion_pplg" },
    { id: 14, img: "./asset/img/galery/gaya2.jpg", category: "siswa", user: "fashion_pplg" },
    { id: 15, img: "./asset/img/galery/gaya4.jpeg", category: "siswa", user: "style_team" },
    { id: 16, img: "./asset/img/galery/hari_guru_day2.JPG", category: "guru", user: "guru_day" },
    { id: 17, img: "./asset/img/galery/hari_guru.jpg", category: "guru", user: "guru_day" },
    { id: 18, img: "./asset/img/galery/hari_guru5.jpg", category: "guru", user: "guru_day" },
    { id: 19, img: "./asset/img/galery/hitam.jpeg", category: "siswa", user: "dark_mode" },
    { id: 20, img: "./asset/img/galery/hitam2.jpeg", category: "siswa", user: "dark_mode" },
    // { id: 21, img: "./asset/img/galery/hukum.JPG", category: "kegiatan", user: "civic_team" },
    // { id: 22, img: "./asset/img/galery/ini.jpeg", category: "kegiatan", user: "random_fun" },
    { id: 23, img: "./asset/img/galery/jalan2.jpg", category: "siswa", user: "outing_team" },
    { id: 24, img: "./asset/img/galery/lapor1.jpg", category: "kegiatan", user: "report_team" },
    { id: 25, img: "./asset/img/galery/lapor2.jpg", category: "kegiatan", user: "report_team" },
    { id: 26, img: "./asset/img/galery/lapor3.jpg", category: "kegiatan", user: "report_team" },
    { id: 27, img: "./asset/img/galery/lapor4.jpg", category: "kegiatan", user: "report_team" },
    { id: 28, img: "./asset/img/galery/lomba.JPG", category: "lomba", user: "competition" },
    { id: 29, img: "./asset/img/galery/lomba2.JPG", category: "lomba", user: "competition" },
    { id: 30, img: "./asset/img/galery/nangis.jpeg", category: "siswa", user: "emotional" },
    { id: 31, img: "./asset/img/galery/olga.jpg", category: "siswa", user: "olga_photos" },
    { id: 32, img: "./asset/img/galery/olga2.jpg", category: "siswa", user: "olga_photos" },
    // { id: 33, img: "./asset/img/galery/parit1.JPG", category: "kegiatan", user: "clean_team" },
    { id: 34, img: "./asset/img/galery/pbb.JPG", category: "lomba", user: "pbb_team" },
    { id: 35, img: "./asset/img/galery/piala.JPG", category: "lomba", user: "winner_team" },
    { id: 36, img: "./asset/img/galery/piala1.JPG", category: "prestasi", user: "winner_team" },
    { id: 37, img: "./asset/img/galery/piala2.JPG", category: "prestasi", user: "winner_team" },
    { id: 38, img: "./asset/img/galery/piala3.JPG", category: "prestasi", user: "winner_team" },
    { id: 39, img: "./asset/img/galery/piala4.JPG", category: "prestasi", user: "winner_team" },
    { id: 44, img: "./asset/img/galery/juara_lomba.jpg", category: "prestasi", user: "winner_team" },
    { id: 40, img: "./asset/img/galery/pp.jpg", category: "kegiatan", user: "pp_team" },
    { id: 41, img: "./asset/img/galery/pramuka.jpeg", category: "kegiatan", user: "scout_team" },
    { id: 42, img: "./asset/img/galery/renang.jpg", category: "kegiatan", user: "swim_team" },
    { id: 43, img: "./asset/img/galery/variasi.JPG", category: "lomba", user: "creative_team" },
    { id: 45, img: "./asset/img/galery/fls3n.jpg", category: "prestasi", user: "creative_team" },
    { id: 46, img: "./asset/img/galery/juara_1_video.jpg", category: "prestasi", user: "winner_team" },
    { id: 47, img: "./asset/img/galery/juara_2_cipta_puisi.jpg", category: "prestasi", user: "winner_team" },
    { id: 48, img: "./asset/img/galery/juara_2_komik_digital.jpg", category: "prestasi", user: "winner_team" },

    // { id: 44, img: "./asset/img/galery/yesus.jpg", category: "kegiatan", user: "spiritual" },
];



// =============================================
// 2. TRANSLATIONS
// =============================================
const translations = {
    id: {
        nav_home: "Beranda",
        nav_about: "Tentang",
        nav_portfolio: "Galeri",
        nav_contact: "Kontak",
        hero_major: "Pengembangan Perangkat Lunak dan Gim",
        hero_desc: "Kelas yang inovatif, kolaboratif, dan berprestasi di bidang teknologi informasi.",
        hero_btn_explore: "Jelajahi Kelas",
        hero_btn_contact: "Hubungi Kami",
        hero_typing: ["Kode Masa Depan", "Inovasi Tanpa Batas", "Bersatu dalam Teknologi"],
        about_title: "Tentang Kelas",
        about_subtitle: "Mengenal lebih dekat kelas XII PPLG",
        about_visi: "Visi",
        about_visi_text: "Menjadi kelas yang unggul dalam kompetisi, erat dalam kebersamaan, dan cekatan dalam berkarya teknologi.",
        about_misi: "Misi",
        about_misi_text: "Membangun budaya belajar yang efektif, mengembangkan bakat setiap siswa, dan mewujudkan project nyata yang bermanfaat.",
        about_nilai: "Nilai Kelas",
        about_nilai_text: "Integritas, Inovasi, Kolaborasi, dan Kerja Keras menjadi fondasi utama kami dalam berkarya.",
        port_title: "Galeri Kegiatan",
        contact_title: "Hubungi Kami",
        contact_name: "Nama",
        contact_email: "Email",
        contact_msg: "Pesan",
        contact_btn: "Kirim Pesan",
        footer_desc: "Kelas unggulan yang berfokus pada pengembangan perangkat lunak dan gim di SMK.",
        footer_contact: "Hubungi Kami",
        alert_success: "Pesan Berhasil Dikirim",
        alert_msg: "Terima kasih telah menghubungi kami!",
        filter_all: "Semua",
        filter_kegiatan: "Kegiatan",
        filter_siswa: "Siswa",
        filter_guru: "Guru",
        filter_lomba: "Lomba",
        filter_upacara: "Upacara"
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_portfolio: "Gallery",
        nav_contact: "Contact",
        hero_major: "Software and Game Development",
        hero_desc: "An innovative, collaborative, and accomplished class in information technology.",
        hero_btn_explore: "Explore Class",
        hero_btn_contact: "Contact Us",
        hero_typing: ["Coding the Future", "Endless Innovation", "United in Technology"],
        about_title: "About Class",
        about_subtitle: "Getting to know class XII PPLG",
        about_visi: "Vision",
        about_visi_text: "To be a class excelling in competition, close in togetherness, and adept at creating technology.",
        about_misi: "Mission",
        about_misi_text: "Building an effective learning culture, developing every student's talent, and realizing useful real projects.",
        about_nilai: "Class Values",
        about_nilai_text: "Integrity, Innovation, Collaboration, and Hard Work are our main foundations in creating.",
        port_title: "Activity Gallery",
        contact_title: "Contact Us",
        contact_name: "Name",
        contact_email: "Email",
        contact_msg: "Message",
        contact_btn: "Send Message",
        footer_desc: "An outstanding class focused on software and game development at Vocational High School.",
        footer_contact: "Contact Us",
        alert_success: "Message Sent Successfully",
        alert_msg: "Thank you for contacting us!",
        filter_all: "All",
        filter_kegiatan: "Activities",
        filter_siswa: "Students",
        filter_guru: "Teachers",
        filter_lomba: "Competitions",
        filter_upacara: "Ceremonies"
    }
};


// =============================================
// 3. STATE & INITIALIZATION
// =============================================
let currentLang = localStorage.getItem('lang') || 'id';
let isDark = localStorage.getItem('dark') === 'true';
let currentModalIndex = -1;
let filteredPins = [...pinData];

document.documentElement.classList.toggle('dark', isDark);

window.onload = () => {
    // Hide loader
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 500);
        }
    }, 1000);

    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({ once: true, duration: 800 });
    }
    
    // Initialize all components
    setLanguage(currentLang);
    initTyping();
    initCounters();
    renderGallery('all');
    initFAQ();
    initListeners();
};

// =============================================
// 4. CORE FUNCTIONS
// =============================================
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) langToggle.innerText = lang === 'id' ? 'EN' : 'ID';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // Update filter button texts
    const filterButtons = document.querySelectorAll('.gal-filter');
    filterButtons.forEach(btn => {
        const filterKey = btn.getAttribute('data-filter');
        const translationKey = `filter_${filterKey}`;
        if (translations[lang][translationKey]) {
            btn.innerText = translations[lang][translationKey];
        }
    });
}

function initTyping() {
    const el = document.getElementById('typing-text');
    if (!el) return;
    
    const texts = translations[currentLang].hero_typing;
    let textIdx = 0, charIdx = 0, isDeleting = false;

    function type() {
        const currentText = texts[textIdx];
        el.textContent = currentText.substring(0, charIdx);

        if (!isDeleting && charIdx < currentText.length) {
            charIdx++; 
            setTimeout(type, 100);
        } else if (!isDeleting && charIdx === currentText.length) {
            isDeleting = true; 
            setTimeout(type, 2000);
        } else if (isDeleting && charIdx > 0) {
            charIdx--; 
            setTimeout(type, 50);
        } else {
            isDeleting = false; 
            textIdx = (textIdx + 1) % texts.length; 
            setTimeout(type, 500);
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
                        count += increment; 
                        el.innerText = Math.ceil(count); 
                        requestAnimationFrame(updateCount);
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
function renderGallery(filter) {
    const container = document.getElementById('masonry-container');
    if (!container) return;

    const pins = filter === 'all' ? pinData : pinData.filter(p => p.category === filter);
    
    const seen = new Set();
    filteredPins = pins.filter(p => {
        if (seen.has(p.id)) return false;
        seen.add(p.id);
        return true;
    });

    if (filteredPins.length === 0) {
        container.innerHTML = `<div class="col-span-full text-center text-soft dark:text-gray-400 py-10">No images found</div>`;
        return;
    }

    container.innerHTML = filteredPins.map((p, idx) => `
        <div class="masonry-item tilt-card fade-in opacity-0 translate-y-4" style="transition-delay: ${idx * 50}ms" onclick="openImageModal(${idx})">
            <img src="${p.img}" alt="${p.category}" loading="lazy" class="w-full" 
                 onerror="this.src='https://picsum.photos/id/${(p.id % 100) + 1}/400/300.jpg'">
            <div class="masonry-overlay">
                <i class="fas fa-search-plus text-white text-2xl"></i>
            </div>
        </div>
    `).join('');

    // Trigger stagger animation setelah render
    requestAnimationFrame(() => {
        container.querySelectorAll('.masonry-item').forEach(el => {
            el.classList.remove('opacity-0', 'translate-y-4');
            el.classList.add('opacity-100', 'translate-y-0');
        });
    });
}

function initFAQ() {
    const container = document.getElementById('faq-container');
    if (!container) return;
    
    const faqs = [
        { q: "Apa itu PPLG?", a: "PPLG adalah singkatan dari Pengembangan Perangkat Lunak dan Gim, jurusan keahlian di SMK yang mempelajari pemrograman software dan game." },
        { q: "Berapa jumlah siswa di kelas ini?", a: "Terdapat 31 siswa aktif yang terdiri dari berbagai macam bakat dan minat di bidang teknologi." },
        { q: "Apa saja kegiatan unggulan kelas?", a: "Kegiatan unggulan meliputi coding bersama, hackathon, pengembangan project nyata, dan berbagai kompetisi teknologi." },
        { q: "Framework apa saja yang dipelajari?", a: "Kami mempelajari framework modern seperti Laravel, React, Vue.js, dan Tailwind CSS untuk membangun aplikasi web yang scalable." },
        { q: "Bagaimana cara menghubungi kelas?", a: "Anda bisa menghubungi kami melalui formulir kontak di bawah atau email resmi sekolah. Kami juga aktif di media sosial." }
    ];

    container.innerHTML = faqs.map((f, i) => `
        <div class="bg-white dark:bg-secondary rounded-2xl shadow-md border border-gray-100 dark:border-gray-700/50 overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-900/30">
            <button class="faq-btn w-full flex justify-between items-center p-5 md:p-6 text-left font-semibold text-lg text-primary dark:text-gray-100 hover:text-accent dark:hover:text-accent transition" onclick="toggleFAQ(${i})">
                <span class="pr-4">${f.q}</span>
                <i class="fas fa-chevron-down text-accent transition-transform duration-300 flex-shink-0" id="faq-icon-${i}"></i>
            </button>
            <div class="faq-content max-h-0 overflow-hidden transition-all duration-300" id="faq-content-${i}">
                <div class="px-5 md:px-6 pb-5 md:pb-6 pt-0 border-t border-gray-100 dark:border-gray-700/50">
                    <p class="text-soft dark:text-gray-400 text-sm leading-relaxed mt-4">${f.a}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// =============================================
// 5. UI INTERACTIONS & LISTENERS
// =============================================
function initListeners() {
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        const btt = document.getElementById('back-to-top');

        if (window.scrollY > 50) {
            if (nav) nav.classList.add('nav-scrolled');
        } else {
            if (nav) nav.classList.remove('nav-scrolled');
        }

        if (window.scrollY > 500) {
            if (btt) {
                btt.classList.remove('hidden');
                btt.classList.add('flex');
            }
        } else {
            if (btt) {
                btt.classList.add('hidden');
                btt.classList.remove('flex');
            }
        }

        // Active link highlighting
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

    // Dark mode toggle
        // Dark mode toggle dengan Animasi View Transition
    const darkToggle = document.getElementById('dark-toggle');
    if (darkToggle) {
        darkToggle.addEventListener('click', () => {
            isDark = !isDark;
            
            // Cek apakah browser mendukung View Transition API
            if (document.startViewTransition) {
                document.startViewTransition(() => {
                    document.documentElement.classList.toggle('dark', isDark);
                    localStorage.setItem('dark', isDark);
                });
            } else {
                // Fallback jika browser lama
                document.documentElement.classList.toggle('dark', isDark);
                localStorage.setItem('dark', isDark);
            }
        });
    }

    // Language toggle
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            setLanguage(currentLang === 'id' ? 'en' : 'id');
            // Re-render gallery to update any language-dependent content
            const activeFilter = document.querySelector('.gal-filter.active');
            const filter = activeFilter ? activeFilter.getAttribute('data-filter') : 'all';
            renderGallery(filter);
        });
    }

    // Hamburger menu
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Close mobile menu on link click
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu) mobileMenu.classList.add('hidden');
        });
    });

    // Back to top
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // Gallery filters
    document.querySelectorAll('.gal-filter').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.gal-filter').forEach(b => {
                b.classList.remove('bg-accent', 'text-white');
                b.classList.add('bg-soft', 'text-primary');
            });
            this.classList.remove('bg-soft', 'text-primary');
            this.classList.add('bg-accent', 'text-white');
            renderGallery(this.getAttribute('data-filter'));
        });
    });

    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const alertTitle = document.getElementById('alert-title');
            const alertMsg = document.getElementById('alert-msg');
            const alertModal = document.getElementById('alert-modal');
            
            if (alertTitle) alertTitle.innerText = translations[currentLang].alert_success;
            if (alertMsg) alertMsg.innerText = translations[currentLang].alert_msg;
            if (alertModal) alertModal.classList.remove('hidden');
            e.target.reset();
        });
    }

    // Keyboard navigation for modal
    document.addEventListener('keydown', (e) => {
        const imageModal = document.getElementById('image-modal');
        const alertModal = document.getElementById('alert-modal');
        
        if (e.key === 'Escape') {
            if (imageModal) imageModal.classList.add('hidden');
            if (alertModal) alertModal.classList.add('hidden');
        }

        if (imageModal && !imageModal.classList.contains('hidden')) {
            if (e.key === 'ArrowLeft') navigateModal(-1);
            if (e.key === 'ArrowRight') navigateModal(1);
        }
    });

    // Modal close buttons
    const modalClose = document.getElementById('modal-close');
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            const modal = document.getElementById('image-modal');
            if (modal) modal.classList.add('hidden');
        });
    }

    const modalPrev = document.getElementById('modal-prev');
    if (modalPrev) {
        modalPrev.addEventListener('click', () => navigateModal(-1));
    }

    const modalNext = document.getElementById('modal-next');
    if (modalNext) {
        modalNext.addEventListener('click', () => navigateModal(1));
    }
}

function toggleFAQ(idx) {
    const content = document.getElementById(`faq-content-${idx}`);
    const icon = document.getElementById(`faq-icon-${idx}`);
    if (!content || !icon) return;
    
    const isOpen = content.classList.contains('open');

    // Close all other FAQs
    document.querySelectorAll('.faq-content').forEach(el => {
        el.style.maxHeight = null;
        el.classList.remove('open');
    });
    document.querySelectorAll('.faq-btn i').forEach(el => {
        el.classList.remove('rotate-180');
    });

    // If the clicked one was closed, open it
    if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.classList.add('open');
        icon.classList.add('rotate-180');
    }
}
function openImageModal(index) {
    if (!filteredPins.length || index < 0 || index >= filteredPins.length) return;
    
    currentModalIndex = index;
    const data = filteredPins[index];

    const modalImg = document.getElementById('modal-img');
    const imageModal = document.getElementById('image-modal');

    if (modalImg) {
        modalImg.src = data.img;
        // Reset animasi
        modalImg.classList.remove('scale-95', 'opacity-0');
        modalImg.classList.add('scale-100', 'opacity-100');
    }
    
    if (imageModal) {
        imageModal.classList.remove('hidden');
        imageModal.classList.add('flex', 'active'); // Tambah class active untuk trigger CSS
    }
}

// Fungsi untuk Alert Modal
function closeAlertModal() {
    const alertBox = document.getElementById('alert-box');
    const alertModal = document.getElementById('alert-modal');
    
    if(alertBox) {
        alertBox.classList.remove('scale-100', 'opacity-100');
        alertBox.classList.add('scale-90', 'opacity-0');
    }
    
    setTimeout(() => {
        if(alertModal) alertModal.classList.add('hidden');
    }, 300);
}

// =============================================
// 6. PREMIUM JS ANIMATIONS (Tilt Effect)
// =============================================
function initTiltEffect() {
    const tiltCards = document.querySelectorAll('.tilt-card');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 15; // Kecepatan putar
            const rotateY = (centerX - x) / 15;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            card.style.transition = 'transform 0.5s ease';
        });
        
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'none';
        });
    });
}

// Panggil fungsi tilt di dalam window.onload
// Tambahkan initTiltEffect(); setelah initFAQ(); di dalam window.onload
// Expose fungsi baru
window.closeAlertModal = closeAlertModal;

// =============================================
// 7. MODAL IMAGE - CLOSE ON CLICK
// =============================================
// Klik di mana saja untuk menutup modal (kecuali klik gambar)
const imageModal = document.getElementById('image-modal');
if (imageModal) {
    imageModal.addEventListener('click', (e) => {
        if (e.target.id !== 'modal-img') {
            const modalImg = document.getElementById('modal-img');
            if (modalImg) {
                modalImg.classList.remove('scale-100', 'opacity-100');
                modalImg.classList.add('scale-95', 'opacity-0');
            }

            setTimeout(() => {
                imageModal.classList.add('hidden');
                imageModal.classList.remove('flex', 'active');
            }, 300); // Tunggu animasi selesai
        }
    });
}

// Expose functions for inline onclick
window.toggleFAQ = toggleFAQ;
window.openImageModal = openImageModal;
window.navigateModal = navigateModal;
window.renderGallery = renderGallery;
window.setLanguage = setLanguage;
