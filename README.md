# SkillSwap

SkillSwap je web aplikacija za razmjenu znanja i vještina bez direktnog plaćanja novcem.

## Kako funkcioniše?

Korisnik nudi vještine koje zna i traži vještine koje želi naučiti.

**Pravilo kredita:** 1 sat podučavanja = 1 kredit, a 1 kredit = 1 sat učenja.

## Tim

- **Saida Džuho** — Team Leader, UI/UX Designer i DevOps
- **Saira Handžić** — Backend Developer
- **Emina Hodžić** — Frontend Developer i Backend Support

## Tehnologije

### Frontend
- React
- Vite
- React Router
- Axios
- CSS

### Backend
- Node.js
- Express
- bcrypt
- JWT
- Socket.IO

### Baza podataka
- MySQL
- MySQL Workbench

### Ostali alati
- Git i GitHub
- Jira
- Visual Studio Code
- Postman
- Chrome

## Struktura projekta

```text
SkillSwap/
├── frontend/       # React aplikacija — Emina
├── backend/        # Node.js/Express API — Saira
├── docs/           # Dokumentacija — Saida
├── .gitignore
├── .env.example
└── README.md
```

## Git pravila

- `main` sadrži stabilan i pregledan kod.
- Za novi zadatak koristi se posebna grana, npr. `feature/SKILL-79-register-page`.
- Ne stavljati lozinke, JWT secret ili `.env` na GitHub.
- Nakon završetka zadatka napraviti Pull Request prema `main`.
- U nazivu grane, commita ili Pull Requesta koristiti Jira oznaku kada je moguće.

## Pokretanje projekta

Detaljne komande će biti dopunjene kada frontend i backend dobiju svoje `package.json` datoteke.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

## MVP funkcionalnosti

- registracija i prijava korisnika
- korisnički profil
- dodavanje vještina koje korisnik nudi i želi naučiti
- pretraga korisnika i vještina
- zahtjevi za razmjenu
- zakazivanje termina
- sistem kredita
- chat i ocjenjivanje kao naredne funkcionalnosti
