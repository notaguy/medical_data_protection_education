const QUIZ = [
  {
    id: "email-results",
    prompt: "You get an email: “Your lab results are ready. Open the attachment.” What do you do?",
    options: [
      { text: "Open it now — I need the results.", score: 0 },
      { text: "Open the lab portal myself, not from the email link.", score: 2 },
      { text: "Open it if the clinic logo looks familiar.", score: 1 }
    ],
    tip: "“Results attached” emails are a classic medical phishing move. Use the address or app you already know."
  },
  {
    id: "online-group",
    prompt: "You want a second opinion in a Facebook or WhatsApp group. What do you post?",
    options: [
      { text: "A photo of the discharge letter or lab sheet, so everything is visible.", score: 0 },
      { text: "A description with no name, ID number, hospital, or other identifiers.", score: 2 },
      { text: "Initials, the city, and a photo with the name roughly covered.", score: 1 }
    ],
    tip: "A medical document is an identity file. Even in a “closed group,” copies stay with other people."
  },
  {
    id: "public-wifi",
    prompt: "You are on café or waiting-room Wi-Fi and need the patient portal.",
    options: [
      { text: "Log in now — it is the same site as at home.", score: 0 },
      { text: "Wait for mobile data or a trusted network. I do not open the record on public Wi-Fi.", score: 2 },
      { text: "Log in, but I will not download PDFs.", score: 1 }
    ],
    tip: "On a stranger’s network, a login page can be intercepted or imitated. The portal is not a café emergency."
  },
  {
    id: "fitness-app",
    prompt: "A sleep / steps / symptoms app asks for contacts, photos, and the microphone.",
    options: [
      { text: "Allow everything or it will not work.", score: 0 },
      { text: "Refuse permissions that are not needed for the core feature, and check third-party sharing.", score: 2 },
      { text: "Allow them, but turn notifications off.", score: 1 }
    ],
    tip: "Many wellness apps share data. A step counter does not need your gallery or address book."
  },
  {
    id: "portal-password",
    prompt: "The password for your hospital or insurer portal:",
    options: [
      { text: "Is the same as my email, so I will not forget it.", score: 0 },
      { text: "Is unique and long, and I turned on two-factor authentication if it exists.", score: 2 },
      { text: "Is a variant of my usual password plus my birth year.", score: 1 }
    ],
    tip: "If email is breached, attackers try the same password on health portals. Uniqueness matters more than a clever pattern."
  },
  {
    id: "sms-clinic",
    prompt: "SMS: “Your appointment was cancelled. Confirm your details here” plus a short link.",
    options: [
      { text: "Open the link and enter my national ID so I do not lose the slot.", score: 0 },
      { text: "Ignore the link and check in the official app or website, or call the number listed there.", score: 2 },
      { text: "Open it, but I only enter my phone number, not my ID.", score: 1 }
    ],
    tip: "Fake urgency plus identity data is the basic pattern. The number in the SMS is not the clinic’s number."
  },
  {
    id: "ward-photo",
    prompt: "You want to send family a photo from hospital or a consultation.",
    options: [
      { text: "Send it as-is: wristband, monitor, and name on the screen are visible.", score: 0 },
      { text: "Frame it without wristbands, monitors, documents, or other patients.", score: 2 },
      { text: "Send it to the family group — that is safe.", score: 1 }
    ],
    tip: "Wristbands and screens carry identifiers. Family chats get forwarded, backed up, and lost with a phone."
  },
  {
    id: "real-data-quiz",
    prompt: "A website offers a “free risk assessment” if you enter your name, phone, and conditions.",
    options: [
      { text: "I fill it in — it is free and useful.", score: 0 },
      { text: "I do not give identity data. An awareness test does not need to know who I am.", score: 2 },
      { text: "I use a fake name but my real phone so I get the result.", score: 1 }
    ],
    tip: "Collecting data under the cover of a test is a common method. This site does not ask for your name."
  },
  {
    id: "shared-pc",
    prompt: "You viewed results on a work computer or a parent’s laptop.",
    options: [
      { text: "I close the page. That is enough.", score: 0 },
      { text: "I sign out of the portal, then close the page.", score: 2 },
      { text: "I clear the browser history.", score: 1 }
    ],
    tip: "The session can stay open. Logging out is not the same as closing the window."
  },
  {
    id: "genetic-test",
    prompt: "A home kit asks for saliva and consent to use the data “for research and partners.”",
    options: [
      { text: "I accept everything — I want the result fast.", score: 0 },
      { text: "I read what is stored, who gets access, and I refuse optional sharing if I disagree.", score: 2 },
      { text: "I send the sample but open the account in my partner’s name.", score: 1 }
    ],
    tip: "Genetic data is permanent and also concerns relatives. “Research” can mean commercial third parties. Read consent before the sample, not after."
  }
];

const BANDS = [
  {
    min: 0,
    max: 9,
    title: "High risk of handing data over without noticing",
    summary: "Under urgency or trust, the habit is to open, fill in, or photograph. That is exactly what fake “from the hospital” messages exploit.",
    tone: "alert"
  },
  {
    min: 10,
    max: 15,
    title: "Partial caution — a few habits still expose you",
    summary: "You know the risks, but you make exceptions: a familiar logo, the family chat, Wi-Fi “just this once.” Exceptions are the usual leak path.",
    tone: "mid"
  },
  {
    min: 16,
    max: 20,
    title: "Solid habits — keep them, and share them",
    summary: "You check the official channel, limit what you post, and do not give your identity to free tests. Next step: the same rules for family, especially children and older relatives.",
    tone: "good"
  }
];
