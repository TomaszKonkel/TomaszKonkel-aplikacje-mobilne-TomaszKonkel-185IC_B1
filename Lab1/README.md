# Aplikacje-mobilne-TomaszKonkel-185IC
# Autor: Tomasz Konkel grupa: 185IC_B1


#Laboratorium numer 1

#Aplikacja kalkulator 

Wykorzystane expo start do uruchamiania 

Aplikacja włączana na telefonie za pomocą aplikacji expo go 


1. Wygląd aplikacji na telefonie 

![alt text](https://github.com/TomaszKonkel/TomaszKonkel-aplikacje-mobilne-TomaszKonkel-185IC_B1/blob/master/Lab1/Lab1.jpg)

State z przypisanymi resultText i calculationText, które odpowiadają za wyświetlanie wyniku i wyświetlanie obliczeń

operations z przypisanymi działaniami na liczbach

Funkcja calculationResult przypisuje zmiennej resultText wynik calculationText

Funkcja validate() sprawdzanie wybranego znaku do obliczeń

Funkcja _onPressButton opisuje działanie w przypadku wciskanych przycisków(na wciśnięcie "=" wypisuje wynik, a w przypadku innych przycisków wypisuje po prostu ich wartość w odpowiednim polu)

Funkcja operate, która korzysta z wcześniej zadeklarowanych zmiennych do obliczeń(Dokładniejsze opisanie działanie usuwania znakó)

Funkcja render generuje widok dodatkowych elementów w kalkulatorze (liczby i znaki specjalne)

styles cały wygląd aplikacji
