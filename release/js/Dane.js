var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path='polacznie.ts'/>
var sciezka = 'php/polacznie.php';
var tablica;
var szablonMenu;
var strony = new Array();
var Dane = (function (_super) {
    __extends(Dane, _super);
    function Dane() {
        _super.call(this, sciezka);
        this.numS = 1;
        _super.prototype.polacz.call(this, this.juzpolaczono);
    }
    Dane.prototype.juzpolaczono = function (odpowiedz) {
        tablica = JSON.parse(odpowiedz);
        this.szablonMenuTen = utwurzmenuTeraz();
        this.nowaAkcja("karamba");
    };
    Dane.prototype.pobierzStrone = function () {
        return strony[this.numS];
    };
    Dane.prototype.listener = function (akcja) {
        this.nowaAkcja = akcja;
        this.nowaAkcja("dzila");
    };
    return Dane;
}(polacznie));
function utwurzmenuTeraz() {
    tablica.splice(1, 0, [0, "kreator", ""]);
    for (var i = 0; i < tablica.length; i++) {
        szablonMenu = '<div class="menu">' + (tablica[i][1]).toUpperCase() + '</div>';
        strony.push(tablica[i][2]);
    }
    return szablonMenu;
}
