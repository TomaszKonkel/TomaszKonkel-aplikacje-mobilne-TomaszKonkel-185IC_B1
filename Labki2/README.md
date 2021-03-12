# Aplikacje-mobilne-TomaszKonkel-185IC
# Autor: Tomasz Konkel grupa: 185IC_B1


#Laboratorium numer 2

#Przechodzenie między ekranami 

Wykorzystane expo start do uruchamiania 

Aplikacja włączana na telefonie za pomocą aplikacji expo go

1. Zdjęcia poszczególnych ekranów i paska przechodzenia między nimi 

![alt text](https://github.com/TomaszKonkel/TomaszKonkel-aplikacje-mobilne-TomaszKonkel-185IC_B1/blob/master/Labki2/1.jpg)

![alt text](https://github.com/TomaszKonkel/TomaszKonkel-aplikacje-mobilne-TomaszKonkel-185IC_B1/blob/master/Labki2/4.jpg)

![alt text](https://github.com/TomaszKonkel/TomaszKonkel-aplikacje-mobilne-TomaszKonkel-185IC_B1/blob/master/Labki2/3.jpg)

![alt text](https://github.com/TomaszKonkel/TomaszKonkel-aplikacje-mobilne-TomaszKonkel-185IC_B1/blob/master/Labki2/2.jpg)


Każdy ekran ma swój plik, który definiuje jego wygląd, do obsługi przenoszenia się między nimi jest plik app.js 

W app.js zawarte jest:

- createAppContainer - ustawia dostepne ekrany 
- createNavigator - służy do przechodzenie między ekranami, domyslny ustawiony na "Spread"
- Platform - dzieki temu możemy ustawić różny wygląd przechodzenia między ekranami w zależności od oprogamowania(iOS, Android)
- createBottomTabNavigator - tworzy dolny pasek nawigacji 
- createDrawerNavigator - Tworzy przesuwany z lewej strony liste stron(Przykład ze zdjęcia)

W plikacj Spread, Rest, Hook zawarty mamy wgląd z strony z komponentami View do wyglądu całej strony i Text do wyświetlania treści, navigationOptions ustawia tytuł dla każdej strony 

W pliku styles.js zawarte ustawienia wyglądu dla poszczególnych stron 
