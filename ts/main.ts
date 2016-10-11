///<reference path='Dane.ts'/>
///<reference path='../lib/jquery.d.ts'/>

 var guwny:main;

    class main extends Dane
{
    
    constructor()
    {
        
    super();
    
    }
        
}
    
    function odpowiedz(jaka:string)
    {
    console.log(jaka);
            if(jaka == "popbranobaze")
            {
    wyswietlStrone();
            }
    }
    function wyswietlStrone()
    {
    $(".navi").html(guwny.szablonMenuTen);
            if(guwny.numS == 1)
            {
                
            }
else{
    $(".calosc").html(guwny.pobierzStrone());
}
        
    }
    
    $(document).ready(function(e)
        {
     guwny = new main();
    guwny.listener(odpowiedz)
        
        
        })