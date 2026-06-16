# Galeria zdjęć

Aby dodać zdjęcia do galerii na stronie "Historia i galeria":

1. Wgraj pliki zdjęć (`.jpg` lub `.png`) do folderu `src/img/galeria/`.
   - Zalecana szerokość: maks. 1600 px (większe zdjęcia niepotrzebnie spowalniają wczytywanie strony).
   - Nazwy plików bez polskich znaków, spacji i wielkich liter, np. `kosciol-zima.jpg`.
2. Otwórz plik `src/historia.md` i w sekcji "Galeria" dodaj wiersz dla każdego zdjęcia, np.:

   ```html
   <li><img src="/strona-parafialna/img/galeria/kosciol-zima.jpg" alt="Kościół zimą"></li>
   ```

3. Zapisz plik, zatwierdź zmiany (`git add`, `git commit`, `git push`) — strona zaktualizuje się automatycznie.
