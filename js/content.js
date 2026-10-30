const ARTICLES = [
  {
    id: "de-ce",
    kicker: "Motivație",
    title: "De ce vor criminalii date medicale",
    lead: "Datele de sănătate nu sunt „doar o fișă”. Sunt un pachet rar: identitate, istoric, vulnerabilitate și bani.",
    body: [
      "Un dosar medical leagă adesea nume, dată de naștere, adresă, CNP sau echivalent, asigurare, diagnostice, medicamente, internări și uneori date despre familie. Este greu de schimbat: nu îți poți „reseta” istoricul de boli cum îți schimbi o parolă.",
      "Pe piața neagră, acest pachet valorează mai mult decât un număr de card, pentru că permite fraude de lungă durată: facturare falsă către asigurători, prescripții, identitate medicală furată și șantaj. Cine știe un diagnostic sensibil (sănătate mintală, HIV, infertilitate, dependențe) poate presa victima să tacă.",
      "Datele medicale ajută și la atacuri mai convingătoare. Un mesaj fals care citează un spital real, o analiză recentă sau un medic anume trece mai ușor de scepticism decât un email generic de „pachet netrimis”.",
      "Pentru rețelele de fraudă, dosarele complete reduc efortul: nu mai trebuie să combine scurgeri separate. Un singur incident (cabinet, laborator, aplicație de fitness, clinică) poate deschide ușa către mii de persoane odată."
    ],
    note: "Acest text este un cadru educațional. Cifrele, studiile de caz și sursele vor fi adăugate după revizuirea literaturii."
  },
  {
    id: "cum",
    kicker: "Metode",
    title: "Cum ajung datele la ei",
    lead: "Nu totul e „hacker în glugă”. Multe scurgeri încep cu un click, o poză sau o aplicație prea permisivă.",
    body: [
      "Phishingul medical imită laboratoare, spitale, farmacii sau case de asigurări. Atașamente „cu rezultate”, linkuri „confirmă programarea”, SMS-uri cu „taxa de internare”. Scopul: parole, date de autentificare sau instalarea de software.",
      "Ingineria socială folosește graba și emoția. Un apel „de la recepție” care cere CNP-ul „ca să găsească dosarul”, un grup online unde ți se cere poza biletului de ieșire „ca să te ajute cu un second opinion”.",
      "Dispozitivele și aplicațiile de sănătate (wearable, jurnal de simptome, test genetic, „checkup gratuit”) colectează uneori mai mult decât îți dai seama: locație, contacte, fotografii, microfon. Politicile de partajare cu terți sunt greu de citit și se schimbă.",
      "Rețelele sociale și mesageria scurg date prin supraexpunere: screenshot cu diagnosticul, story din salon cu brățara vizibilă, PDF-ul analizelor trimis într-un grup. Chiar dacă ștergi postarea, copia poate rămâne la alții.",
      "Infrastructura clinică rămâne o țintă: ransomware pe serverele spitalului, conturi de personal slabe, emailuri interne, dispozitive medicale conectate. Aici pacientul nu controlează tot, dar poate reduce ce lasă în afara sistemului oficial.",
      "Wi-Fi-ul public, calculatoarele de la recepție și sesiunile uitate deschise pe telefonul partajat sunt porți banale. Nu e nevoie de un atac sofisticat dacă portalul pacientului rămâne logat."
    ],
    note: "Lista de metode va fi rafinată cu exemple documentate din literatură și rapoarte de incidente, fără a reproduce instrucțiuni de atac."
  },
  {
    id: "protectie",
    kicker: "Practică",
    title: "Ce poți face ca să le protejezi",
    lead: "Nu trebuie să devii expert în securitate. Câteva obiceiuri scad drastic riscul de a-ți da datele fără să îți dai seama.",
    body: [
      "Folosește doar canalele oficiale: aplicația sau site-ul spitalului / laboratorului pe care le-ai deschis tu, nu dintr-un link primit pe email sau SMS. Dacă un mesaj e urgent, sună numărul de pe site-ul instituției, nu pe cel din mesaj.",
      "Nu fotografia și nu posta documente cu nume, CNP, număr de asigurare, cod de internare sau rezultate complete. Dacă ai nevoie de sfat, descrie situația fără identificatori. Acoperă brățara și ecranele în poze din spital.",
      "Parolă unică, lungă, pentru portalul de sănătate, plus autentificare în doi pași dacă există. Nu refolosi parola de email. Pe un telefon sau PC partajat, deconectează-te explicit.",
      "Citește permisiunile aplicațiilor de sănătate: au nevoie de contacte, galerie, microfon? Dezactivează partajarea cu rețele sociale și „cercetare” opțională dacă nu ai consimțit în cunoștință de cauză.",
      "Pe Wi-Fi public, evită autentificarea în dosarul medical. Dacă trebuie neapărat, folosește datele mobile sau un VPN de încredere. Nu introduce date pe pagini fără https și fără numele corect al instituției în adresă.",
      "Tratează testele genetice, „analize gratuite” și quiz-urile care cer date reale ca pe o cedare de informații. Un test de conștientizare (ca acesta) nu are nevoie de numele tău.",
      "Vorbește în familie despre ce nu se trimite pe WhatsApp: rezultate, trimiteri, carduri. Copiii și vârstnicii sunt adesea ținte mai ușoare pentru mesajele „de la spital”.",
      "Dacă suspectezi o fraudă: schimbă parolele, anunță unitatea medicală și, după caz, poliția / autoritatea de protecție a datelor. Păstrează dovezile (mesajul, expeditorul), nu atașamentul malițios."
    ],
    note: "Recomandările vor fi actualizate cu ghiduri din literatura de educație pentru pacienți și din documente de politici publice."
  }
];
