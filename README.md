# Datele tale medicale

Site de informare despre riscurile legate de datele medicale: de ce sunt căutate, cum sunt obținute și cum le poți proteja.

Quiz-ul rulează **doar în browser**. Răspunsurile **nu sunt trimise** și **nu sunt salvate** (nici pe server, nici în `localStorage`).

Repo: [notaguy/medical_data_protection_education](https://github.com/notaguy/medical_data_protection_education)

După activarea GitHub Pages, adresa publică va fi:

`https://notaguy.github.io/medical_data_protection_education/`

## Publicare pe GitHub Pages

Site-ul este static (`index.html` în rădăcină). În GitHub:

1. **Settings → Pages**
2. **Build and deployment → Source:** Deploy from a branch
3. **Branch:** `main`, folder `/ (root)`
4. Save

Căile din HTML sunt relative, ca să funcționeze și în subfolderul proiectului Pages.

## Rulare locală

Deschide `index.html` în browser sau, din acest folder:

```bash
npx --yes serve
```

## Conținut

Textele informative sunt un **draft educațional**. Vor fi aliniate la literatura de specialitate după cercetare. Editează `js/content.js` (articole) și `js/quiz.js` (întrebări).
