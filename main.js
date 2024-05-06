let display=document.getElementById("display");
function appendText(inp)
{
    display.value+=inp;
}
function calculate(){
    try{
       
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
    // setTimeout(_=>display.value="",5000);
 
}
let clr=document.getElementById("clear");
clr.onclick=function(){display.value="";};
