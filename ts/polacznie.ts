///<reference path='../lib/jquery.d.ts'/>
    class polacznie
{
sciezka:string
        nowaAkcja;
    constructor(sciezka:string)
    {
   
   this.sciezka = sciezka;
   
    }
    polacz(polaczjuz)
    {
         $.post(sciezka,{strony:"pobierz"},function (data)
        {
         polaczjuz(data);
        })
    }
    
   


}