# API Specifikacija - Autentifikacija

## 1. Baza Podataka (Tabela: users)
- id (INT, Primary Key, Auto Increment)
- name (VARCHAR)
- email (VARCHAR, Unique)
- password (VARCHAR)
- created_at (TIMESTAMP)

## 2. API Rute
### Registracija
- Ruta: POST /api/auth/register
- Request Body:
  {
    "name": "Ime Prezime",
    "email": "korisnik@example.com",
    "password": "lozinka123"
  }
- Response (201): { "message": "Korisnik uspješno registrovan" }

### Prijava (Login)
- Ruta: POST /api/auth/login
- Request Body:
  {
    "email": "korisnik@example.com",
    "password": "lozinka123"
  }
- Response (200): { "message": "Uspješna prijava", "token": "jwt_token_ovdje" }