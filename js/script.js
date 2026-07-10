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
        portfolio: "Pricing",
        about: "About Us",
        contact: "Contact Us",

        home2: "Home",
        services2: "Services",
        portfolio2: "Pricing",
        contact2: "Contact Us",

        footerText1: "Turning Ideas Into Digital Experiences.",
        footerText2: "Creating modern, responsive and high-performance websites that help businesses grow online.",

        footerHeader1: "Navigation",
        footerHeader2: "Services",
        footerHeader3: "Get In Touch",

        servicesText1: "Web Development",
        servicesText2: "Responsive Design",
        servicesText3: "Landing Pages",
        servicesText4: "Website Redesign",
        servicesText5: "SEO Optimization",
        servicesText6: "Maintenance & Support",

        heroTitle: "MODERN WEBSITES THAT GROW YOUR BUSINESS",
        heroText: "PG Development provides professional development of websites, landing pages and SEO optimization for companies, entrepreneurs and local businesses. We create modern, fast and responsive websites that help your business attract more customers and achieve better results on the Internet.",
        heroBtn1: "View Pricing",
        heroBtn2: "Contact Us",

        statCardProjects: "Projects Completed",
        statCardResponsive: "Mobile Responsive",
        statCardSupport: "Support",
        statCardDelivery: "Days Delivery",

        servicesTitle: "Our Services",
        servicespTitle: "We provide complete web solutions for individuals, entrepreneurs and companies. From idea to finished site, we focus on quality, performance and modern design.",

        serviceGridWeb: "Web Development:  Creating modern, fast and functional websites tailored to your needs.",
        serviceGridResponsive: "Responsive Design:  Sites that work perfectly on phones, tablets and computers.",
        serviceGridLanding: "Landing Pages:  Pages optimized for promoting products, services and attracting customers.",
        serviceGridRedesign: "Website Redesign:  Modernization of existing sites with better appearance, speed and user experience.",
        serviceGridSeo: "SEO Optimization:  Optimization of the site to be better positioned on search engines such as Google.",
        serviceGridMaintenance: "Maintenance & Support:  Regular maintenance, updates and technical support after the website is published.",

        pricingTitle: "Pricing Plans",
        pricingCardStarter: "Starter",
        pricingCardBusiness: "Business",
        pricingCardPremium: "Premium",
        pricingCardWebShop: "Web Shop",
        pricingCardPopular: "POPULAR",

        priceLanding: "Landing Page",
        priceResponsive: "Mobile Responsive",
        priceContact: "Contact Form",
        priceSeo: "Basic SEO",

        pricePages: "Up to 5 Pages",
        priceModern: "Modern Design",
        priceSeoAdvanced: "SEO Optimization",
        priceMaps: "Google Maps Integration",

        priceUnlimited: "Unlimited Pages",
        priceAdvancedSeo: "Advanced SEO",
        priceAnimations: "Custom Animations",
        pricePriority: "Priority Support",

        priceOnlineStore: "Online Store",
        priceProductManagement: "Product Management",
        priceSecurePayments: "Secure Payments",
        priceMobileResponsive: "Mobile Responsive",
        priceSeoWebShop: "SEO Optimization",
        priceAdminDashboard: "Admin Dashboard",
        btnGet: "Get Started",

        portfolioTitle: "Portfolio",
        portfolioText1: "Coming Soon...",
        portfolioText2: "Coming Soon...",
        portfolioText3: "Coming Soon...",

        aboutTitle: "About Us",
        aboutText: "PG Development is a team dedicated to creating modern, fast and professional websites. Our goal is to help individuals, entrepreneurs and companies build a strong online presence through quality design and reliable web solutions. We believe that every project deserves attention, creativity and technical precision. That's why we develop each site with a focus on user experience, performance and adaptability to all devices. Regardless of whether you need a business website, a portfolio, a landing page or a completely customized web solution, we strive to turn your ideas into a modern and functional product that brings results. Your success online is our priority. We specialize in creating business websites, portfolio presentations, landing pages and optimization for Google search. Our goal is for every client to get a professional website that looks modern, loads fast and helps attract new clients.", 

        technologiesWeUse: "Technologies We Use",

        faqTitle: "Frequently Asked Questions",
        faqQuestionHow: "How long does a website take?",
        faqAnswerHow: "Usually 3–14 days depending on the complexity and requirements of the project.",
        faqQuestionHosting: "Do you provide hosting services?",
        faqAnswerHosting: "Yes, we can assist with hosting setup and recommend reliable hosting providers.",
        faqQuestionRedesign: "Can you redesign my existing website?",
        faqAnswerRedesign: "Absolutely! We can modernize your existing website with improved design, speed, and user experience.",
        faqQuestionMobile: "Will my website work on mobile devices?",
        faqAnswerMobile: "Yes, all websites are fully responsive and optimized for mobile, tablet, and desktop devices.",
        faqQuestionSeo: "Do you offer SEO services?",
        faqAnswerSeo: "Yes, we provide basic and advanced SEO optimization to help your site rank better on search engines.",
        faqQuestionUpdate: "Can I update the website myself?",
        faqAnswerUpdate: "Yes, depending on the project, we can provide an easy way for you to manage and update content.",
        faqQuestionOffer: "Do you offer website maintenance?",
        faqAnswerOffer: "Yes, we offer ongoing maintenance, updates, and technical support after launch.",
        faqQuestionCost: "How much does a website cost?",
        faqAnswerCost: "Pricing depends on the size and complexity of the project. Contact us for a free quote.",
        faqQuestionStore: "Can you build an online store?",
        faqAnswerStore: "Yes, we create fully functional e-commerce websites with product management and secure payments.",

        contactTitle: "Contact Us",
        //name: "Your Name",
        //email: "Your Email",
        //message: "Your Message",
        whatsapp: "Send on WhatsApp",
        mail: "Send on Email",

        footer: "© 2026 PG Development. All rights reserved."
    },
    

    sr: {
        home: "Početna",
        services: "Usluge",
        portfolio: "Cenovnik",
        about: "O Nama",
        contact: "Kontakt",

        home2: "Početna",
        services2: "Usluge",
        portfolio2: "Cenovnik",
        contact2: "Kontakt",

        footerText1: "Pretvaranje ideja u digitalna iskustva.",
        footerText2: "Kreiranje modernih, prilagodivih i visokoefikasnih veb stranica koje pomazu preduzecima da rastu onlajn.",

        footerHeader1: "Navigacija",
        footerHeader2: "Usluge",
        footerHeader3: "Kontaktirajte nas",

        servicesText1: "Izrada Sajtova",
        servicesText2: "Responzivni Dizajn",
        servicesText3: "Landing Stranice",
        servicesText4: "Vebsajt Redizajn",
        servicesText5: "SEO Optimizacija",
        servicesText6: "Odrzavanje & Podrska",

        heroTitle: "MODERNI VEB-SAJTOVI KOJI RAZVIJAJU VASE POSLOVANJE",
        heroText: "PG Development pruža profesionalnu izradu web sajtova, landing stranica i SEO optimizaciju za firme, preduzetnike i lokalne biznise. Kreiramo moderne, brze i responsivne sajtove koji pomažu vašem poslovanju da privuče više klijenata i ostvari bolje rezultate na internetu.",
        heroBtn1: "Pogledaj Cenovnik",
        heroBtn2: "Kontakt",

        statCardProjects: "Završenih Projekata",
        statCardResponsive: "Mobilno Prilagođeno",
        statCardSupport: "Podrška",
        statCardDelivery: "Dana Isporuke",

        servicesTitle: "Naše Usluge",
        servicespTitle: "Pružamo kompletna web rešenja za pojedince, preduzetnike i kompanije. Od ideje do gotovog sajta, fokusirani smo na kvalitet, performanse i moderan dizajn.",

        serviceGridWeb: "Izrada Sajtova:  Izrada modernih, brzih i funkcionalnih web sajtova prilagođenih vašim potrebama.",
        serviceGridResponsive: "Responzivni Dizajn:  Sajtovi koji savršeno funkcionišu na telefonima, tabletima i računarima.",
        serviceGridLanding: "Landing Stranice:  Stranice optimizovane za promociju proizvoda, usluga i prikupljanje klijenata.",
        serviceGridRedesign: "Vebsajt Redizajn:  Modernizacija postojećih sajtova uz bolji izgled, brzinu i korisničko iskustvo.",
        serviceGridSeo: "SEO Optimizacija:  Optimizacija sajta kako bi bio bolje pozicioniran na pretraživačima kao što je Google.",
        serviceGridMaintenance: "Odrzavanje & Podrska:  Redovno održavanje, ažuriranja i tehnička podrška nakon objavljivanja sajta.",

        pricingTitle: "Cenovnik",
        pricingCardStarter: "Starter",
        pricingCardBusiness: "Biznis",
        pricingCardPremium: "Premium",
        pricingCardWebShop: "Prodavnica",
        pricingCardPopular: "POPULARNO",

        priceLanding: "Landing Stranica",
        priceResponsive: "Mobilno Prilagođeno",
        priceContact: "Kontakt Forma",
        priceSeo: "Osnovna SEO Optimizacija",

        pricePages: "Do 5 Stranica",
        priceModern: "Moderan Dizajn",
        priceSeoAdvanced: "Napredna SEO Optimizacija",
        priceMaps: "Integracija Google Mapa",

        priceUnlimited: "Neograničen Broj Stranica",
        priceAdvancedSeo: "Napredna SEO Optimizacija",
        priceAnimations: "Prilagođene Animacije",
        pricePriority: "Prioritetna Podrška",

        priceOnlineStore: "Online Prodavnica",
        priceProductManagement: "Upravljanje Proizvodima",
        priceSecurePayments: "Sigurna Plaćanja",
        priceMobileResponsive: "Mobilno Prilagođeno",
        priceSeoWebShop: "SEO Optimizacija",
        priceAdminDashboard: "Administrativni Panel",
        btnGet: "Počni Sada",

        portfolioTitle: "Naši Radovi",
        portfolioText1: "Uskoro...",
        portfolioText2: "Uskoro...",
        portfolioText3: "Uskoro...",

        aboutTitle: "O Nama",
        aboutText: "PG Development je tim posvećen kreiranju modernih, brzih i profesionalnih web sajtova. Naš cilj je da pomognemo pojedincima, preduzetnicima i kompanijama da izgrade snažno prisustvo na mreži kroz kvalitetan dizajn i pouzdana web rešenja. Verujemo da svaki projekat zaslužuje pažnju, kreativnost i tehničku preciznost. Zato razvijamo svaki sajt sa fokusom na korisničko iskustvo, performanse i prilagodljivost svim uređajima. Bez obzira da li vam je potreban poslovni sajt, portfolio, landing stranica ili potpuno prilagođeno web rešenje, trudimo se da vaše ideje pretvorimo u moderan i funkcionalan proizvod koji donosi rezultate. Vaš uspeh na mreži je naš prioritet. Specijalizovani smo za izradu poslovnih sajtova, portfolio prezentacija, landing stranica i optimizaciju za Google pretragu. Naš cilj je da svaki klijent dobije profesionalan web sajt koji izgleda moderno, učitava se brzo i pomaže u privlačenju novih klijenata.", 

        technologiesWeUse: "Tehnologije Koje Koristimo",

        faqTitle: "Često Postavljana Pitanja",
        faqQuestionHow: "Koliko vremena je potrebno za izradu sajta?",
        faqAnswerHow: "Obično 3–14 dana, u zavisnosti od složenosti i zahteva projekta.",
        faqQuestionHosting: "Da li pružate hosting usluge?",
        faqAnswerHosting: "Da, možemo vam pomoći oko postavljanja hostinga i preporučiti pouzdane hosting provajdere.",
        faqQuestionRedesign: "Možete li redizajnirati moj postojeći sajt?",
        faqAnswerRedesign: "Apsolutno! Možemo modernizovati vaš postojeći sajt sa poboljšanim dizajnom, brzinom i korisničkim iskustvom.",
        faqQuestionMobile: "Da li će moj sajt raditi na mobilnim uređajima?",
        faqAnswerMobile: "Da, svi sajtovi su potpuno responsivni i optimizovani za mobilne telefone, tablete i desktop uređaje.",
        faqQuestionSeo: "Da li nudite SEO usluge?",
        faqAnswerSeo: "Da, pružamo osnovnu i naprednu SEO optimizaciju kako bi vaš sajt bio bolje rangiran na pretraživačima.",
        faqQuestionUpdate: "Mogu li samostalno ažurirati sajt?",
        faqAnswerUpdate: "Da, u zavisnosti od projekta, možemo vam omogućiti jednostavan način za upravljanje i ažuriranje sadržaja.",
        faqQuestionOffer: "Da li nudite održavanje sajta?",
        faqAnswerOffer: "Da, nudimo kontinuirano održavanje, ažuriranja i tehničku podršku nakon lansiranja.",
        faqQuestionCost: "Koliko košta izrada sajta?",
        faqAnswerCost: "Cena zavisi od veličine i složenosti projekta. Kontaktirajte nas za besplatnu ponudu.",
        faqQuestionStore: "Možete li napraviti online prodavnicu?",
        faqAnswerStore: "Da, kreiramo potpuno funkcionalne e-commerce sajtove sa upravljanjem proizvodima i sigurnim plaćanjima.",

        contactTitle: "Kontakt",
        //name: "Vaše ime",
        //email: "Vaš email",
        //message: "Vaša poruka",
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

    setText("nav-home2", t.home2);
    setText("nav-services2", t.services2);
    setText("nav-portfolio2", t.portfolio2);
    setText("nav-contact2", t.contact2);

    setText("footer-text1", t.footerText1)
    setText("footer-text2", t.footerText2)

    setText("footer-header1", t.footerHeader1)
    setText("footer-header2", t.footerHeader2)
    setText("footer-header3", t.footerHeader3)

    setText("services-text1", t.servicesText1)
    setText("services-text2", t.servicesText2)
    setText("services-text3", t.servicesText3)
    setText("services-text4", t.servicesText4)
    setText("services-text5", t.servicesText5)
    setText("services-text6", t.servicesText6)


    setText("hero-title", t.heroTitle);
    setText("hero-text", t.heroText);

    setText("stat-card-projects", t.statCardProjects);
    setText("stat-card-responsive", t.statCardResponsive);
    setText("stat-card-support", t.statCardSupport);
    setText("stat-card-delivery", t.statCardDelivery);

    setText("services-title", t.servicesTitle);
    setText("servicesp-title", t.servicespTitle);

    setText("service-grid-web", t.serviceGridWeb);
    setText("service-grid-responsive", t.serviceGridResponsive);
    setText("service-grid-landing", t.serviceGridLanding);
    setText("service-grid-redesign", t.serviceGridRedesign);
    setText("service-grid-seo", t.serviceGridSeo);
    setText("service-grid-maintenance", t.serviceGridMaintenance);

    setText("pricing-title", t.pricingTitle);
    setText("pricing-card-starter", t.pricingCardStarter);
    setText("price-landing", t.priceLanding);
    setText("price-responsive", t.priceResponsive);
    setText("price-contact", t.priceContact);
    setText("price-seo", t.priceSeo);

    setText("pricing-card-business", t.pricingCardBusiness);
    setText("price-pages", t.pricePages);
    setText("price-modern", t.priceModern);
    setText("price-seo-advanced", t.priceSeoAdvanced);
    setText("price-maps", t.priceMaps);

    setText("pricing-card-premium", t.pricingCardPremium);
    setText("price-unlimited", t.priceUnlimited);
    setText("price-advanced-seo", t.priceAdvancedSeo);
    setText("price-animations", t.priceAnimations);
    setText("price-priority", t.pricePriority);

    setText("pricing-card-web-shop", t.pricingCardWebShop);
    setText("pricing-card-popular", t.pricingCardPopular);
    setText("price-online-store", t.priceOnlineStore);
    setText("price-product-management", t.priceProductManagement);
    setText("price-secure-payments", t.priceSecurePayments);
    setText("price-mobile-responsive", t.priceMobileResponsive);
    setText("price-seo-web-shop", t.priceSeoWebShop);
    setText("price-admin-dashboard", t.priceAdminDashboard);
    setText("btn-get", t.btnGet);
    setText("btn-get-business", t.btnGet);
    setText("btn-get-premium", t.btnGet);
    setText("btn-get-web-shop", t.btnGet);

    setText("portfolio-title", t.portfolioTitle);

    setText("portfolio-text1", t.portfolioText1);
    setText("portfolio-text2", t.portfolioText2);
    setText("portfolio-text3", t.portfolioText3);

    setText("about-title", t.aboutTitle);
    setText("about-text", t.aboutText);

    setText("technologies-we-use", t.technologiesWeUse);

    setText("faq-title", t.faqTitle);
    setText("faq-question-how", t.faqQuestionHow);
    setText("faq-answer-how", t.faqAnswerHow);
    setText("faq-question-hosting", t.faqQuestionHosting);
    setText("faq-answer-hosting", t.faqAnswerHosting);
    setText("faq-question-redesign", t.faqQuestionRedesign);
    setText("faq-answer-redesign", t.faqAnswerRedesign);
    setText("faq-question-mobile", t.faqQuestionMobile);
    setText("faq-answer-mobile", t.faqAnswerMobile);
    setText("faq-question-seo", t.faqQuestionSeo);
    setText("faq-answer-seo", t.faqAnswerSeo);
    setText("faq-question-update", t.faqQuestionUpdate);
    setText("faq-answer-update", t.faqAnswerUpdate);
    setText("faq-question-offer", t.faqQuestionOffer);
    setText("faq-answer-offer", t.faqAnswerOffer);
    setText("faq-question-cost", t.faqQuestionCost);
    setText("faq-answer-cost", t.faqAnswerCost);
    setText("faq-question-store", t.faqQuestionStore);
    setText("faq-answer-store", t.faqAnswerStore);

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



const paragraphs = document.querySelectorAll("p");

const paragraphObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add("show");
            }, index * 150);
        }
    });
});

paragraphs.forEach((p) => observer.observe(p));


const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle("active");
    });
});