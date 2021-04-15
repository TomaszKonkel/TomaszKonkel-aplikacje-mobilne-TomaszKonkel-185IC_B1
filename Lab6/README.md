
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
 
 Trzeci ekran zawiera powolne ładowanie zdjęcia oraz renderowania grupowanych ikon
  - Button.js działanie przycisku ładującego zdjęcie i jego wygląd   
  - LazyImage.js zawiera działanie ładowania zdjęcia na stronie
  - Lazy.js korzysta z powyższych plików i zawratych w nich komponentów oraz renderuje ikony zawarte w pliku icon-name.json, które są pogrupowane

![alt text](https://github.com/TomaszKonkel/aplikacje-mobilne-TomaszKonkel-185IC_A1/blob/master/Lab6/3.jpg)

![alt text](https://github.com/TomaszKonkel/aplikacje-mobilne-TomaszKonkel-185IC_A1/blob/master/Lab6/3.1.jpg)

![alt text](https://github.com/TomaszKonkel/aplikacje-mobilne-TomaszKonkel-185IC_A1/blob/master/Lab6/3.2.jpg)

Ekran czwarty zawiera sprawdzanie połączenia z siecią 
  - Check.js zawiera wykorzystanie biblioteki netinfo do sprawdzania stanu sieci(Połączenie przez wifi wyświetla komunikat "Connect", a brak dostępu do internetu komunikat "Disconnected" )

![alt text](https://github.com/TomaszKonkel/aplikacje-mobilne-TomaszKonkel-185IC_A1/blob/master/Lab6/4.jpg)

![alt text](https://github.com/TomaszKonkel/aplikacje-mobilne-TomaszKonkel-185IC_A1/blob/master/Lab6/4.1.jpg)

Ekran piąty zawiera zapis danych za pomocą AsyncStorage
  - ButtonAsync.js  wygląd przycisków i działanie 
  - AsyncStorageClass.js  wyświetla coś na wzór "formularza" w którym wpisujemy dane i w zależności od wciśnietego przycisku wykonywane są akcje(Add zapisuje dane, a Clear czyści wszystkie podane dane)

![alt text](https://github.com/TomaszKonkel/aplikacje-mobilne-TomaszKonkel-185IC_A1/blob/master/Lab6/5.jpg)

Ekran szósty zawiera synchronizacje danych w aplikacji, a konkretnie stanów danego przełącznika 
  - store.js zajmuje się przechowywaniem stanó przełączników i sprawdzaniem stanu sieci wifi
  - synk.js korzysta z store.js, ustawione są początkowe stany przełączników jak i informacji o wiadomości o połączeniu. Wszystkie zmiany wykonane w trybie offline wciąż są zapamiętane przy powróceniu do online 

![alt text](https://github.com/TomaszKonkel/aplikacje-mobilne-TomaszKonkel-185IC_A1/blob/master/Lab6/6.jpg)

![alt text](https://github.com/TomaszKonkel/aplikacje-mobilne-TomaszKonkel-185IC_A1/blob/master/Lab6/6.1.jpg)
