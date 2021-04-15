
# Aplikacje-mobilne-TomaszKonkel-185IC
# Autor: Tomasz Konkel grupa: 185IC_B1


#Laboratorium numer 6

Aplikacja posiada 6 ekranów

Każdy ekran prezentuje osobne funkcjonalności react native(Image, resize, lazy Image, Checking net, AsyncStorage, Synchronizacja )

Plik app.js zawiera nawigacje miedzy ekranami 

Pierwszy ekran zawiera wyświetlanie komponentu Image za pomocą dwóch metod(uri i require)
  - Image.js zawiera wykorzystanie tych dwóch dostępnych sposobów
    - Do metody z uri podaje się adres zdjęcia (Pamiętać trzeba, że adres musi być https)
    - Do metody z require podajemy ścieżke na lokalnym komputerze    

![alt text](https://github.com/TomaszKonkel/aplikacje-mobilne-TomaszKonkel-185IC_A1/blob/master/Lab6/1.jpg)

Drugi ekran posiada zastosowany wcześniej komponent do zdjęcia oraz funkcje zmieniania rozmiaru za pomocą suwaka
  - Resize.js zawiera działanie funkcjonalności kontrolowania rozmiaru zdjęcia 
    - Pobieramy zdjęcie do aplikacji i za pomocą useState ustawiamy jej początkowy rozmiar (100 na 100)
    - Wartość useState jest ciągle wyświetlana na ekranie 
    - Komponentem Slider zmieniamy rozmiar zdjęcia do którego podpięta jest funkcja zmieniająca w czasie rzeczywistym wartości zmiennych useState modyfikująca rozmiar zdjęcia(Slider ma określone min i max wartości po jakich się porusza)

![alt text](https://github.com/TomaszKonkel/aplikacje-mobilne-TomaszKonkel-185IC_A1/blob/master/Lab6/2.jpg)  
 
 
