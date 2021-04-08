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

Na trzeci ekran składają się pliki:
  
  - Switch.js - Wygląd i działanie komponentu Switch 
  - SwitchTog.js - Użycie komponentu switch do uruchomienia komponentu modal, który zwraca pseudolosową liczbe 

![alt text](https://github.com/TomaszKonkel/aplikacje-mobilne-TomaszKonkel-185IC_B1/blob/master/Lab5/5.jpg)

![alt text](https://github.com/TomaszKonkel/aplikacje-mobilne-TomaszKonkel-185IC_B1/blob/master/Lab5/6.jpg)

Na czwarty ekran skałada się plik:

 - Data.js - Wyglad i działanie kalendarza z alertem, który zwraca wybrana date i godzine. Do kalendarza użyty komponent DateTimePicker, a do alerta komponent Alert.

![alt text](https://github.com/TomaszKonkel/aplikacje-mobilne-TomaszKonkel-185IC_B1/blob/master/Lab4/7.jpg)

![alt text](https://github.com/TomaszKonkel/aplikacje-mobilne-TomaszKonkel-185IC_B1/blob/master/Lab4/8.jpg)

![alt text](https://github.com/TomaszKonkel/aplikacje-mobilne-TomaszKonkel-185IC_B1/blob/master/Lab4/9.jpg)

Na piąty ekran składają się pliki:

  - Active.js - Komponent który obsługuje wyświetlanie aktywnego Modala z ActivityIndicator
  - Notification.js - Komponent wyświetlający powiadomienie po wykonaniu akcji 
  - Activity.js - Zawiera wyświetlanie się na ekranie połączenia dwóch poprzednich plików i ich komponentów do wyświetlania Modala z powiadomieniem 

![alt text](https://github.com/TomaszKonkel/aplikacje-mobilne-TomaszKonkel-185IC_B1/blob/master/Lab4/10.jpg)

![alt text](https://github.com/TomaszKonkel/aplikacje-mobilne-TomaszKonkel-185IC_B1/blob/master/Lab4/11.jpg)
