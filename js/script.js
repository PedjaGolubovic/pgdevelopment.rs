window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
        navbar.style.background = "rgb(43, 41, 30)";
    } else {
        navbar.style.background = "rgb(43, 41, 30)";
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(
    ".card, .project-card, .about, .contact"
);

hiddenElements.forEach((el) => observer.observe(el));

document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        let phone = "381606220403";

        let text =
            `Name: ${name}%0A` +
            `Email: ${email}%0A` +
            `Message: ${message}`;

        window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
    });

    const whatsappBtn = document.getElementById("whatsapp-btn");
const emailBtn = document.getElementById("email-btn");

function getFormData() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    return { name, email, message };
}

whatsappBtn.addEventListener("click", function () {
    const { name, email, message } = getFormData();

    let phone = "381606220403";

    let text =
        `Name: ${name}%0A` +
        `Email: ${email}%0A` +
        `Message: ${message}`;

    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
});

emailBtn.addEventListener("click", function () {
    const { name, email, message } = getFormData();

    let subject = "New Website Inquiry";
    let body =
        `Name: ${name}%0A` +
        `Email: ${email}%0A%0A` +
        `Message:%0A${message}`;

    window.location.href =
        `mailto:pgdevelopment.rs@gmail.com?subject=${subject}&body=${body}`;
});

const enBtn = document.getElementById("en-btn");
const srBtn = document.getElementById("sr-btn");

function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}

const translations = {
    en: {
        home: "Home",
        services: "Services",
        portfolio: "Portfolio",
        about: "About",
        contact: "Contact",

        heroTitle: "Modern Websites That Grow Your Business",
        heroText: "PG Development provides professional development of websites, landing pages and SEO optimization for companies, entrepreneurs and local businesses. We create modern, fast and responsive websites that help your business attract more customers and achieve better results on the Internet.",
        heroBtn1: "View Work",
        heroBtn2: "Contact Us",

        servicesTitle: "Our Services",

        servicespTitle: "We provide complete web solutions for individuals, entrepreneurs and companies. From idea to finished site, we focus on quality, performance and modern design.",

        serviceGridWeb: "Web Development 💻 Creating modern, fast and functional websites tailored to your needs.",
        serviceGridResponsive: "Responsive Design 📱Sites that work perfectly on phones, tablets and computers.",
        serviceGridLanding: "Landing Pages 🚀Pages optimized for promoting products, services and attracting customers.",
        serviceGridRedesign: "Website Redesign 🎨Modernization of existing sites with better appearance, speed and user experience.",
        serviceGridSeo: "SEO Optimization 📈Optimization of the site to be better positioned on search engines such as Google.",
        serviceGridMaintenance: "Maintenance & Support 🛠Regular maintenance, updates and technical support after the website is published.",

        portfolioTitle: "Portfolio",

        aboutTitle: "About Us",
        aboutText: "PG Development is a team dedicated to creating modern, fast and professional websites. Our goal is to help individuals, entrepreneurs and companies build a strong online presence through quality design and reliable web solutions. We believe that every project deserves attention, creativity and technical precision. That's why we develop each site with a focus on user experience, performance and adaptability to all devices. Regardless of whether you need a business website, a portfolio, a landing page or a completely customized web solution, we strive to turn your ideas into a modern and functional product that brings results. Your success online is our priority. We specialize in creating business websites, portfolio presentations, landing pages and optimization for Google search. Our goal is for every client to get a professional website that looks modern, loads fast and helps attract new clients.", 

        contactTitle: "Contact Us",
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
        whatsapp: "Send on WhatsApp",
        mail: "Send on Email",

        footer: "© 2026 PG Development. All rights reserved."
    },

    sr: {
        home: "Početna",
        services: "Usluge",
        portfolio: "Portfolio",
        about: "O Nama",
        contact: "Kontakt",

        heroTitle: "Модерни веб-сајтови који развијају ваше пословање",
        heroText: "PG Development pruža profesionalnu izradu web sajtova, landing stranica i SEO optimizaciju za firme, preduzetnike i lokalne biznise. Kreiramo moderne, brze i responsivne sajtove koji pomažu vašem poslovanju da privuče više klijenata i ostvari bolje rezultate na internetu.",
        heroBtn1: "Pogledaj Radove",
        heroBtn2: "Kontakt",

        servicesTitle: "Naše Usluge",

        servicespTitle: "Pružamo kompletna web rešenja za pojedince, preduzetnike i kompanije. Od ideje do gotovog sajta, fokusirani smo na kvalitet, performanse i moderan dizajn.",

        serviceGridWeb: "Web Development 💻 Izrada modernih, brzih i funkcionalnih web sajtova prilagođenih vašim potrebama.",
        serviceGridResponsive: "Responsive Design 📱 Sajtovi koji savršeno funkcionišu na telefonima, tabletima i računarima.",
        serviceGridLanding: "Landing Pages 🚀 Stranice optimizovane za promociju proizvoda, usluga i prikupljanje klijenata.",
        serviceGridRedesign: "Website Redesign 🎨 Modernizacija postojećih sajtova uz bolji izgled, brzinu i korisničko iskustvo.",
        serviceGridSeo: "SEO Optimization 📈 Optimizacija sajta kako bi bio bolje pozicioniran na pretraživačima kao što je Google.",
        serviceGridMaintenance: "Maintenance & Support 🛠️ Redovno održavanje, ažuriranja i tehnička podrška nakon objavljivanja sajta.",

        portfolioTitle: "Portfolio",

        aboutTitle: "O nama",
        aboutText: "PG Development je tim posvećen kreiranju modernih, brzih i profesionalnih web sajtova. Naš cilj je da pomognemo pojedincima, preduzetnicima i kompanijama da izgrade snažno prisustvo na mreži kroz kvalitetan dizajn i pouzdana web rešenja. Verujemo da svaki projekat zaslužuje pažnju, kreativnost i tehničku preciznost. Zato razvijamo svaki sajt sa fokusom na korisničko iskustvo, performanse i prilagodljivost svim uređajima. Bez obzira da li vam je potreban poslovni sajt, portfolio, landing stranica ili potpuno prilagođeno web rešenje, trudimo se da vaše ideje pretvorimo u moderan i funkcionalan proizvod koji donosi rezultate. Vaš uspeh na mreži je naš prioritet. Specijalizovani smo za izradu poslovnih sajtova, portfolio prezentacija, landing stranica i optimizaciju za Google pretragu. Naš cilj je da svaki klijent dobije profesionalan web sajt koji izgleda moderno, učitava se brzo i pomaže u privlačenju novih klijenata.", 


        contactTitle: "Kontakt",
        name: "Vaše ime",
        email: "Vaš email",
        message: "Vaša poruka",
        whatsapp: "Pošalji preko WhatsApp-a",
        mail: "Pošalji preko Email-a",

        footer: "© 2026 PG Development. Sva prava zadržana."
    }
};

function setLanguage(lang) {
    const t = translations[lang];

    setText("nav-home", t.home);
    setText("nav-services", t.services);
    setText("nav-portfolio", t.portfolio);
    setText("nav-about", t.about);
    setText("nav-contact", t.contact);

    setText("hero-title", t.heroTitle);
    setText("hero-text", t.heroText);

    setText("services-title", t.servicesTitle);

    setText("servicesp-title", t.servicespTitle);

    setText("service-grid-web", t.serviceGridWeb);
    setText("service-grid-responsive", t.serviceGridResponsive);
    setText("service-grid-landing", t.serviceGridLanding);
    setText("service-grid-redesign", t.serviceGridRedesign);
    setText("service-grid-seo", t.serviceGridSeo);
    setText("service-grid-maintenance", t.serviceGridMaintenance);

    setText("about-title", t.aboutTitle);
    setText("about-text", t.aboutText);

    setText("contact-title", t.contactTitle);
    setText("hero-btn-1", t.heroBtn1);
    setText("hero-btn-2", t.heroBtn2);

    setText("name", t.name);
    setText("email", t.email);
    setText("message", t.message);
    setText("whatsapp-btn", t.whatsapp);
    setText("email-btn", t.mail);

    setText("footer-text", t.footer);
}

if (enBtn && srBtn) {
    enBtn.addEventListener("click", () => setLanguage("en"));
    srBtn.addEventListener("click", () => setLanguage("sr"));
}

enBtn.addEventListener("click", () => {
    setLanguage("en");
    enBtn.classList.add("active");
    srBtn.classList.remove("active");
});

srBtn.addEventListener("click", () => {
    setLanguage("sr");
    srBtn.classList.add("active");
    enBtn.classList.remove("active");
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


const savedLang = localStorage.getItem("language") || "sr";
setLanguage(savedLang);