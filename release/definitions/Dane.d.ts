/// <reference path="polacznie.d.ts" />
declare var sciezka: string;
declare var tablica: Array<any>;
declare var szablonMenu: string;
declare var strony: Array<any>;
declare class Dane extends polacznie {
    nowaAkcja: any;
    numS: number;
    szablonMenuTen: string;
    constructor();
    juzpolaczono(odpowiedz: any): void;
    pobierzStrone(): string;
    listener(akcja: any): void;
}
declare function utwurzmenuTeraz(): string;
