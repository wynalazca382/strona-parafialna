# Strona parafialna

Prosta strona internetowa parafii — ogłoszenia, intencje mszalne, harmonogram
Mszy Świętych, kontakt, sakramenty oraz historia parafii z galerią zdjęć.

Strona jest **statyczna** — nie ma panelu administracyjnego ani bazy danych.
Treści (ogłoszenia, intencje) aktualizuje się poprzez edycję prostych plików
tekstowych w tym repozytorium.

## Wymagania

Do pracy nad stroną na komputerze potrzebny jest [Node.js](https://nodejs.org/)
(wersja 18 lub nowsza — wystarczy zainstalować wersję "LTS" ze strony).

## Pierwsze uruchomienie

```
npm install
npm run dev
```

Po chwili w terminalu pojawi się adres, np. `http://localhost:8080/strona-parafialna/`
— otwórz go w przeglądarce. Strona odświeża się automatycznie po zapisaniu zmian
w plikach.

Aby tylko zbudować stronę bez podglądu na żywo:

```
npm run build
```

Wynik buildu trafia do folderu `_site/` (nieśledzonego przez git).

## Jak dodać nowe ogłoszenie

1. Przejdź do folderu `src/ogloszenia/`.
2. Skopiuj najnowszy plik (np. `2026-06-08-odpust-parafialny.md`) i zmień nazwę
   kopii na `RRRR-MM-DD-krotki-tytul.md` (data dzisiejsza lub data ogłoszenia).
3. Otwórz nowy plik i zmień pola na górze (`tytul`, `data`) oraz treść ogłoszenia
   pod linią `---`.
4. Zapisz, zatwierdź zmiany i wypchnij do GitHub (`git add`, `git commit`, `git push`).

Najnowsze ogłoszenia pojawiają się automatycznie na górze strony głównej
oraz na stronie „Ogłoszenia”.

## Jak zaktualizować intencje mszalne na nowy tydzień

1. Przejdź do folderu `src/intencje/`.
2. Skopiuj plik poprzedniego tygodnia i zmień nazwę kopii na datę poniedziałku
   nowego tygodnia, np. `2026-06-22.md`.
3. Zaktualizuj pola `tytul` i `tydzienOd`, a następnie nadpisz wiersze tabeli
   nowymi intencjami (format tabeli jest prosty — wystarczy zachować znaki `|`
   między kolumnami, kolumny nie muszą być wyrównane spacjami).
4. Zapisz, zatwierdź zmiany i wypchnij do GitHub.

Najnowszy tydzień pojawia się automatycznie na stronie „Intencje mszalne”,
a starsze tygodnie są widoczne niżej jako archiwum.

## Jak dodać zdjęcia do galerii

Instrukcja krok po kroku znajduje się w [src/img/README.md](src/img/README.md).

## Jak działa publikacja strony

Każdy `git push` do brancha `main` automatycznie:

1. Buduje stronę (GitHub Actions, plik [.github/workflows/deploy.yml](.github/workflows/deploy.yml)).
2. Publikuje ją na GitHub Pages pod adresem:
   **https://wynalazca382.github.io/strona-parafialna/**

Publikacja trwa zwykle 1–2 minuty od momentu `push`.

> **Jednorazowa konfiguracja** (jeśli jeszcze nie wykonana): w ustawieniach
> repozytorium na GitHub przejdź do *Settings → Pages* i jako *Source* wybierz
> **„GitHub Actions”**.

## Coś nie działa?

Sprawdź zakładkę **Actions** w repozytorium na GitHub — tam widać, czy ostatni
build zakończył się powodzeniem, a jeśli nie, jaki był błąd.
