# SkillSwap Git workflow

## Pravilo za tim

`main` je glavna grana i na njoj treba biti stabilna verzija projekta.

Za svaki Jira zadatak napravi posebnu granu.

Primjeri:

- `feature/SKILL-58-express-server`
- `feature/SKILL-73-react-vite`
- `feature/SKILL-79-register-page`

## Kako član tima radi

1. Preuzme najnoviji `main`.
2. Napravi novu granu za svoj Jira task.
3. Radi samo svoj zadatak.
4. Napravi commit sa jasnom porukom.
5. Pošalje granu na GitHub.
6. Otvori Pull Request prema `main`.
7. Saida pregleda Pull Request.
8. Nakon provjere promjene se spajaju u `main`.

## Primjer commit poruke

```text
SKILL-79: dodana stranica za registraciju
```

## Važno

Nikada ne slati `.env`, lozinke, JWT secret ili stvarne podatke baze na GitHub.
