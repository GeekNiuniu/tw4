'use strict';

function thousands_separators(num) {
	var s=num.toString();
   
   if(s.indexOf(".")==-1){
   	var l = s.split("").reverse();
   	t1= "";  
    for (i = 0; i < l.length; i++) {  
        t1 += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");  
    }  
    return t1.split("").reverse().join("") ;  
        }
       else
       	var a=s.split(".")[0];
       var b=s.split(".")[1];
       if(b==0){
       	var l = s.split("").reverse();
   	         t1= "";  
              for (i = 0; i < l.length; i++) {  
        t1 += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");  
        }  
           return t1.split("").reverse().join("") ;
                }
         else{
               n = b.length; 
                s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";  
                  var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];  
                    t = "";  
              for (i = 0; i < l.length; i++) {  
                  t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");  
                   }   
                    return t.split("").reverse().join("") + "." + r;  
                     }  

  
}

module.exports = thousands_separators;
