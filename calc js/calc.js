function one(){
    var element1=calculator.display.value += '1';
    return element1;
}
 function two(){
    var element2=calculator.display.value += '2';
    return element2;
 }
 function three(){
    var element3=calculator.display.value += '3';
    return element3;
 }
 function four(){
    var element4=calculator.display.value += '4';
    return element4;
 }
 function five(){
    var element5=calculator.display.value += '5';
    return element5;  
 }
 function six(){
    var element6=calculator.display.value += '6';
    return element6;
    
 }
 function seven(){
    var element7=calculator.display.value += '7';
    return element7;
   
 }
 function eight(){
    var element8=calculator.display.value += '8';
    return element8;
   
 }
  
 function nine(){
    var element9=calculator.display.value += '9';
    return element9;
 }
 function zero(){
    var element0=calculator.display.value += '0';
    return element0;
 }
function plus(){
    var element11=calculator.display.value += '+';
    return element11;
 }
 function sub(){
    var element12=calculator.display.value += '-';
    return element12;
 }
 function multi(){
    var element13=calculator.display.value += '*';
    return element13;
 }
 function divide(){
    var element14=calculator.display.value += '/';
    return element14;
 }
 function sin(){
    
    calculator.display.value=Math.sin(calculator.display.value);
 }
 function cos(){
    
   calculator.display.value=Math.cos(calculator.display.value);
}
function arctan(){
    
   calculator.display.value=Math.atan(calculator.display.value);
}
function tan(){
    
   calculator.display.value=Math.tan(calculator.display.value);
}
function arcsin(){
    
   calculator.display.value=Math.asin(calculator.display.value);
}
function arccos(){
    
   calculator.display.value=Math.acos(calculator.display.value);
}
function lnx(){
    
   calculator.display.value=Math.exp(calculator.display.value);
}
function log(){
    
   calculator.display.value=Math.log(calculator.display.value);
}
function clear(){
    
   calculator.display.value="  ";
}
 function equal(){
 calculator.display.value =
 eval(calculator.display.value)
 } 