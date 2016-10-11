///<reference path='Dane.ts'/>
///<reference path='../lib/jquery.d.ts'/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var guwny;
var main = (function (_super) {
    __extends(main, _super);
    function main() {
        _super.call(this);
    }
    return main;
}(Dane));
function odpowiedz(jaka) {
    console.log(jaka);
    if (jaka == "popbranobaze") {
        wyswietlStrone();
    }
}
function wyswietlStrone() {
    $(".navi").html(guwny.szablonMenuTen);
    if (guwny.numS == 1) {
    }
    else {
        $(".calosc").html(guwny.pobierzStrone());
    }
}
$(document).ready(function (e) {
    guwny = new main();
    guwny.listener(odpowiedz);
});
