# Aplikacje-mobilne-TomaszKonkel-185IC
# Autor: Tomasz Konkel grupa: 185IC_B1


#Laboratorium numer 5

Aplikacja posiada 4 ekrany

Każdy ekran prezentuje osobne funkcjonalności react native(ScrollView, TouchableOpacity, TouchableHighlight, Swipeable)

Plik app.js zawiera nawigacje miedzy ekranami 

Pierwszy i drugi ekran zawiera wykorzystanie komponentu ScrollView 
  - Scroll1.js i Scroll2.js używa komponentu ScrollView w którym zawarte są wyświetlane elementy i umożliwia ich przewijanie zamiast "upychanie" wszystkiego w jednym ekranie
  - Obydwa ekrany inaczej ostylowane 

![alt text](https://github.com/TomaszKonkel/aplikacje-mobilne-TomaszKonkel-185IC_A1/blob/master/Lab5/2.jpg)
 
 
![alt text](https://github.com/TomaszKonkel/aplikacje-mobilne-TomaszKonkel-185IC_A1/blob/master/Lab5/1.jpg)

Trzeci ekran zawiera dwa rodzaje "klikania" przycisku 
  - Button.js zawiera zachowanie danego przycisku w zależności od przypisania mu danej "klasy" i ostylowanie
  - Touch.js wykorzystuje plik Button.js i przyciską przypisuje zdefiniowane wcześniej "klasy"
  - TouchableOpacity wciśniety przycisk "wygasa" zmniejszając widoczność jego i jego zawartości
  - TouchableHighlight wciśnięty przycisk "podświetla się" pozostawiając widoczność przycisku taką samą i jego zawartość



![alt text](https://github.com/TomaszKonkel/aplikacje-mobilne-TomaszKonkel-185IC_B1/blob/master/Lab5/3.jpg)

![alt text](https://github.com/TomaszKonkel/aplikacje-mobilne-TomaszKonkel-185IC_B1/blob/master/Lab5/4.jpg)

Czwarty ekran zawiera wykorzystanie komponentu Swipeable 
  - Swipeable.js zawiera opis działania co się dzieje z przyciskiem po jego przesunięciu(w tym przypadku znika)
  - Swipe.js wykorzystuje plik Swipeable.js do zaimplementowania komponentów reagujących na ich przesuwanie 

![alt text](https://github.com/TomaszKonkel/aplikacje-mobilne-TomaszKonkel-185IC_B1/blob/master/Lab5/5.jpg)

![alt text](https://github.com/TomaszKonkel/aplikacje-mobilne-TomaszKonkel-185IC_B1/blob/master/Lab5/6.jpg)
