
# Aplikacje-mobilne-TomaszKonkel-185IC
# Autor: Tomasz Konkel grupa: 185IC_B1


#Laboratorium numer 3

Aplikacja posiada 5 ekranów

Każdy ekran reprezentuje osobne funkcjonalności(Filtrowanie i sortowanie, Lazy Loading, Step progress ostatnie 3 ekrany)


1. Ekran ten przedstawia wylosowane liczby w zakresie od 0 do 1000

Po przed wyszukiwarke można wyszukać konkretną liczbe, albo liczbe która się w niej zawiera(np jak szukamy 4 to znajdzie i 4 i 43 i 243 bo we wszystkich zawiera się 4)

Strzałka w prawym górnym rogu pozwala na sortowanie danych(od najmniejszej do najwiekszej i od największej do najmniejszej)

Pliki do tego ekranu to:

- ListContainer - zawarte to co wyświetla się na ekranie(pseudolosoweliczby, wyszukiwarka do filtrowania, przycisk sortujący)

- List - wykorzystywane przez powyższy plik do pobrania potrzebnych elementów, pobiera ListCotrols

- ListControls - pobiera i sprawdza do siebie ListFilter i ListSort przekazując do List

- ListFilter - działanie filtrowania i przekazywane do ListControls

- ListSort - działanie do sortowanie i przekazywane do ListControls


![alt text](https://github.com/TomaszKonkel/aplikacje-mobilne-TomaszKonkel-185IC_B1/blob/master/Lab3/1.jpg)

2. Na  drugim ekranie mamy wylosowane litery. Zostosowane jest tutaj leniwe ładowanie, które załadowuje tylko wymaganą ilość danych a po wykonaniu wskazanej akcji ładuje je ponownie. W tym przypadku kiedy użytkownik zacznie scrolować ekran zaczną się ładować nowe dane

Pliki do tego ekranu:

- LazyLoad - zbiera wszystko i wyświetla końcowy wygląd ekranu

- ListLazy - Wyświetlanie danych i przekazywanie do LazyLoad, wykorzystany onScroll do doładowywania zawartości

- api - działanie losowania liter i określenie ile danych ma być załadowane



![alt text](https://github.com/TomaszKonkel/aplikacje-mobilne-TomaszKonkel-185IC_B1/blob/master/Lab3/2.jpg)

3. Na ekranie ostatnim zawarty jest główny ekran i jego pod ekrany odpowiadające działaniu krokowemu. Na głównym ekranie mamy przyciski "Second" i "Third", które odpowiadają za przenoszenie, a na każdej kolejnej w zależności od ekranu są odpowiednio inaczej opisane przyciski przenoszące między kolejnymi pod ekranami

Pliki do tych ekranów:

- StepProgress - Ustawienie za pomocą react-navigation, że pierwszy ekran to First, każde kolejne przeniesienie zmienia wartość ProgressBar

- First - wygląd pierwszego ekranu step progress wraz z elemenatmi przenoszącymi do kolejnych i poprzednich, wykorzystany AcitivityIndicator 

- Second - wygląd drugiego ekranu step progress wraz z elemenatmi przenoszącymi do kolejnych i poprzednich, wykorzystany AcitivityIndicator

- Third - wygląd trzeciego ekranu step progress wraz z elemenatmi przenoszącymi do kolejnych i poprzednich, wykorzystany AcitivityIndicator

- ProgressBarComponent - Pobranie paska z react-native 

- ProgressBar - korzysta z wyżej wymienionego pliku i opisuje działanie paska, każde inne pliki korzystają z niego 

EKRAN GŁÓWNY FIRST

![alt text](https://github.com/TomaszKonkel/aplikacje-mobilne-TomaszKonkel-185IC_B1/blob/master/Lab3/3.jpg)

EKRAN SECOND

![alt text](https://github.com/TomaszKonkel/aplikacje-mobilne-TomaszKonkel-185IC_B1/blob/master/Lab3/4.jpg)

EKRAN THIRD

![alt text](https://github.com/TomaszKonkel/aplikacje-mobilne-TomaszKonkel-185IC_B1/blob/master/Lab3/5.jpg)
