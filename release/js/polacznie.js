///<reference path='../lib/jquery.d.ts'/>
var polacznie = (function () {
    function polacznie(sciezka) {
        this.sciezka = sciezka;
    }
    polacznie.prototype.polacz = function (polaczjuz) {
        $.post(sciezka, { strony: "pobierz" }, function (data) {
            polaczjuz(data);
        });
    };
    return polacznie;
}());
