#3/ Po zainstalowaniu nodejs powinny być dostępne w konsoli
$ node -v && npm -v
v6.2.1
3.9.3

#2/ Tworzymy nowy projekt nodejs i odpowiadamy na kila pytań
$ cd /path/to/your/project
$ npm init
# Aby użyć domyślnych odpowiedzi używamy
$ npm init -f

# Po wykonaniu npm init powstanie nam plik `package.json`.

# Dodajemy zależność od normalize.css (--save zapisze zależność do package.json)
$ npm install --save normalize.css

# Dodajemy live-server do pracy podczas development
$ npm i --save-dev live-server

