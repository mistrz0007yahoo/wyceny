///<reference path='polacznie.ts'/>
var sciezka='php/polacznie.php';
var tablica:Array<any>;
var szablonMenu:string;


var strony:Array<any> = new Array();




    class Dane extends polacznie
{
        nowaAkcja;
        numS:number = 1;
        szablonMenuTen:string;

    constructor()
    {
      
   super(sciezka);
   super.polacz(this.juzpolaczono)
        
    }
    
    juzpolaczono(odpowiedz)
    {
        tablica = JSON.parse(odpowiedz);
        this.szablonMenuTen = utwurzmenuTeraz();
    this.nowaAkcja("karamba");
    
    
    }
pobierzStrone():string
    {
return strony[this.numS];
        
        
    }
    listener(akcja)
    {
        this.nowaAkcja = akcja;
        
   this.nowaAkcja("dzila");
    }



}
    

function utwurzmenuTeraz():string
    {
          
    tablica.splice(1,0,[0,"kreator",""]);
       
            for(var i:number = 0;i<tablica.length;i++)
            {
                   
                szablonMenu ='<div class="menu">' + (tablica[i][1]).toUpperCase() + '</div>';
    strony.push(tablica[i][2]);
                
            }
   
        return szablonMenu;
  
    
    }

   