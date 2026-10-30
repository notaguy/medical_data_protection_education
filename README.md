# Your medical data

Educational site about medical-data risks: why the data matter, who can see them, GDPR and HIPAA rights, and how to protect accounts.

The quiz runs **only in the browser**. Answers are **not sent** and **not saved** (not on a server, not in `localStorage`).

Repo: [notaguy/medical_data_protection_education](https://github.com/notaguy/medical_data_protection_education)

After GitHub Pages is enabled:

`https://notaguy.github.io/medical_data_protection_education/`

## Publish on GitHub Pages

The site is static (`index.html` at the root). On GitHub:

1. **Settings → Pages**
2. **Build and deployment → Source:** Deploy from a branch
3. **Branch:** `main`, folder `/ (root)`
4. Save

Paths in the HTML are relative so Pages works in the project subfolder.

## Run locally

Open `index.html` or, from this folder:

```bash
npx --yes serve
```

## Content

Draft educational text. Align it with the literature after research.

- Home: `index.html` (title, quiz button, four module sections)
- Modules: `why-data-matters.html`, `who-can-see.html`, `gdpr-hipaa.html`, `protect-accounts.html`
- Quiz: `quiz.html` and `js/quiz.js`
