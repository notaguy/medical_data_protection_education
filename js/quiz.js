const QUIZ = [
  {
    id: "email-analize",
    prompt: "Primești un email: „Rezultatele analizelor sunt gata. Deschide atașamentul.” Ce faci?",
    options: [
      { text: "Deschid atașamentul, e urgent să văd rezultatele.", score: 0 },
      { text: "Intru pe portalul laboratorului pe care îl deschid eu, nu din linkul din email.", score: 2 },
      { text: "Deschid dacă logo-ul și numele clinicii arată cunoscute.", score: 1 }
    ],
    tip: "Atașamentele și linkurile „cu rezultate” sunt un clasic de phishing medical. Folosește adresa sau aplicația pe care le cunoști deja."
  },
  {
    id: "grup-online",
    prompt: "Vrei un al doilea opinie pe un grup de Facebook sau WhatsApp. Ce publici?",
    options: [
      { text: "Poza biletului de ieșire sau a analizelor, ca să se vadă tot.", score: 0 },
      { text: "O descriere fără nume, CNP, spital sau date care te identifică.", score: 2 },
      { text: "Doar inițialele, orașul și o poză cu numele acoperit aproximativ.", score: 1 }
    ],
    tip: "Un document medical este un dosar de identitate. Chiar „în grup închis”, copiile rămân la alții."
  },
  {
    id: "wifi-public",
    prompt: "Ești pe Wi-Fi-ul din cafenea sau din sala de așteptare. Ai nevoie de portalul pacientului.",
    options: [
      { text: "Mă autentific acum, e același site ca acasă.", score: 0 },
      { text: "Aștept rețeaua mobilă sau o rețea de încredere; pe Wi-Fi public nu deschid dosarul.", score: 2 },
      { text: "Mă loghez, dar nu descarc PDF-uri.", score: 1 }
    ],
    tip: "Pe o rețea străină, pagina de login poate fi interceptată sau imitată. Dosarul medical nu e urgență de cafenea."
  },
  {
    id: "app-fitness",
    prompt: "O aplicație de somn / pași / simptome cere acces la contacte, poze și microfon.",
    options: [
      { text: "Accept tot, altfel nu merge.", score: 0 },
      { text: "Refuz permisiunile care nu țin de funcția de bază și citesc ce se partajează cu terți.", score: 2 },
      { text: "Accept, dar opresc notificările.", score: 1 }
    ],
    tip: "Multe app-uri de „wellness” vând sau partajează date. Permisiunea de galerie sau contacte nu e necesară ca să numeri pașii."
  },
  {
    id: "parola-portal",
    prompt: "Parola pentru portalul spitalului sau al asigurării:",
    options: [
      { text: "E aceeași ca la email, ca să nu o uit.", score: 0 },
      { text: "E unică, lungă, și am activat autentificarea în doi pași dacă există.", score: 2 },
      { text: "E o variantă a parolei mele obișnuite, plus anul nașterii.", score: 1 }
    ],
    tip: "Dacă emailul cade, atacatorul încearcă aceleași parole pe portalul de sănătate. Unicitatea contează mai mult decât „să fie greu de ghicit” în capul tău."
  },
  {
    id: "sms-spital",
    prompt: "SMS: „Programarea ta e anulată. Confirmă datele aici” + un link scurt.",
    options: [
      { text: "Intru pe link și completez CNP-ul ca să nu pierd locul.", score: 0 },
      { text: "Ignor linkul și sun / verific în aplicația sau pe site-ul oficial al unității.", score: 2 },
      { text: "Intru, dar nu completez CNP-ul, doar numărul de telefon.", score: 1 }
    ],
    tip: "Urgența falsă + date de identitate este schema de bază. Numărul din SMS nu e numărul spitalului."
  },
  {
    id: "poza-salon",
    prompt: "Vrei să trimiți familiei o poză din spital sau de la consultație.",
    options: [
      { text: "Trimit cum e: se vede brățara, monitorul, ecranul cu numele.", score: 0 },
      { text: "Încadrez fără brățară, monitoare, documente sau alte persoane.", score: 2 },
      { text: "Trimit în grupul familiei; acolo e sigur.", score: 1 }
    ],
    tip: "Brățara și ecranele conțin identificatori. Grupul de familie se înaintează, se face backup, se pierde telefonul."
  },
  {
    id: "quiz-date-reale",
    prompt: "Un site îți oferă „evaluare gratuită de risc” dacă completezi numele, telefonul și bolile.",
    options: [
      { text: "Completez, e gratuit și util.", score: 0 },
      { text: "Nu dau date de identitate; un test de conștientizare nu are nevoie de cine sunt.", score: 2 },
      { text: "Pun un nume fals, dar telefonul real, ca să primesc rezultatul.", score: 1 }
    ],
    tip: "Culegerea de date sub masca unui test este o metodă clasică. Acest site, de exemplu, nu îți cere numele."
  },
  {
    id: "pc-partajat",
    prompt: "Te-ai uitat pe analize pe calculatorul de la serviciu / al unui părinte.",
    options: [
      { text: "Închid pagina. E de ajuns.", score: 0 },
      { text: "Mă deconectez explicit din portal, apoi închid pagina.", score: 2 },
      { text: "Șterg istoricul browserului.", score: 1 }
    ],
    tip: "Sesiunea poate rămâne deschisă. Deconectarea (logout) nu e același lucru cu a închide fereastra."
  },
  {
    id: "test-genetic",
    prompt: "Un kit de acasă îți cere salivă și consimțământ ca datele să fie folosite „pentru cercetare și parteneri”.",
    options: [
      { text: "Accept tot, vreau rezultatul cât mai repede.", score: 0 },
      { text: "Citesc ce se stochează, cine are acces, și refuz partajarea opțională dacă nu sunt de acord.", score: 2 },
      { text: "Trimit proba; contul îl fac pe numele partenerului.", score: 1 }
    ],
    tip: "Datele genetice sunt permanente și privesc și familia. „Cercetare” poate însemna terți comerciali. Consimțământul merită citit înainte de probă, nu după."
  }
];

const BANDS = [
  {
    min: 0,
    max: 9,
    title: "Risc ridicat de a ceda date fără să îți dai seama",
    summary: "În situații de grabă sau încredere, tendința e să deschizi, să completezi sau să fotografiezi. Asta e exact ce exploatează mesajele false „de la spital”.",
    tone: "alert"
  },
  {
    min: 10,
    max: 15,
    title: "Atenție parțială — câteva obiceiuri te expun încă",
    summary: "Știi că există riscuri, dar faci excepții: logo cunoscut, grupul familiei, Wi-Fi „doar o dată”. Excepțiile sunt traseul obișnuit al scurgerilor.",
    tone: "mid"
  },
  {
    min: 16,
    max: 20,
    title: "Obiceiuri bune — merită păstrate și împărtășite",
    summary: "Verifici canalul oficial, limitezi ce publici și nu dai identitatea pe teste gratuite. Următorul pas: aceleași reguli pentru familie, mai ales copii și vârstnici.",
    tone: "good"
  }
];
