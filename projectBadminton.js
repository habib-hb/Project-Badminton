//Enter Name Chapter...
/*
var conf;
var caseA=0;
while(true){
    var pass=prompt('Enter Your Name...');
    

if(pass=='Habib'){
   conf=1;
    break;
}
if(pass=='Abid'){
   conf=2;
   break;
}
else{
    alert("This Name Never Registered As Any Member's Name...");
    caseA++;
}
  if(caseA==5){
      
      while(true){
        alert("You've Crossed The Input Name Limit...Click 'OK'"+'30 Times..');
        caseA++;
        if(caseA==35){
            alert('Try Again...');
            caseA=0;
            break;
        }
      }
  }
}

//Enter Password Chapter...
var caseB=0
while(true){
    var passB=prompt('Enter Your Password...');
    
 if(conf==1){
if(passB=='hab'){
   alert('Welcome...')
    break;
   
}
if(passB!='hab'){
    alert('The Password You Have Entered Is Wrong!!!');
    caseB++;
}
}
if(conf==2){
if(passB=='Abd'){
    alert('Welcome...')
   break;
}
if(passB!='Abd'){
    alert('The Password You Have Entered Is Wrong!!!');
    caseB++;
}
}


if(caseB==5){
      
    while(true){
      alert("You've Crossed The Input Password Limit...Click 'OK'"+'30 Times..');
      caseB++;
      if(caseB==35){
          alert('Try Again...');
          caseB=0;
          break;
      }
    }
}

}//Enter Name & Password Chapter Ended...;;;
*/
  
let dlHabib=0;
let dlAdnan=0;
let dlAbid=0;
let dlShohan=0;
let dlReal=0;
let dlNishat=0;
let dlShojib=0;
let dlMasud=0;
//Matches Played (Habib);;;
let Mhabib=0;
var cpHabib=0;
document.getElementById("attenderHabib").onclick=function(){
    //declare Habib;
    dlHabib=1;
    cpHabib=0;
    document.getElementById("tHabib").innerHTML="<span style='color:yellow'>Habib</span>";
    
    
    Mhabib++;
    
document.getElementById("Mhabib").innerHTML=Mhabib;
//Total points Chapter(Habib);
document.getElementById('mpHabib').innerHTML=`<button id='pmmHabib'>--</button><span  style='color:yellow'> HABIB </span><button id='pppHabib'>++</button><b id='cpHabib' style='color:yellow'> 0 </b><br>`;


document.getElementById('pmmHabib').onclick=function(){
    cpHabib--;
    if(cpHabib==-1){
        cpHabib=0;
    }
    document.getElementById('cpHabib').innerHTML=' = '+cpHabib;
    }
document.getElementById('pppHabib').onclick=function(){
    cpHabib++;
    if(cpHabib==16){
        cpHabib=15;
    }
   document.getElementById('cpHabib').innerHTML=' = '+cpHabib;

}
//Finished;;;    

}
document.getElementById("tHabib").onclick=function(){

    document.getElementById("tHabib").innerHTML="<span style='color:rgb(175, 173, 166)'>Habib</span>"
    
    
    Mhabib--;
    
document.getElementById("Mhabib").innerHTML=Mhabib;


document.getElementById('cpHabib').innerHTML=0;
document.getElementById('mpHabib').innerHTML='<span>Habib</span>';
document.getElementById('tHabib').innerHTML="Habib";
cpHabib=0;
dlHabib=0;

}

//Matches Played (Adnan);;;
let Madnan=0;
let cpAdnan=0;
document.getElementById("attenderAdnan").onclick=function(){
   //declare Adnan;
     dlAdnan=1;
    document.getElementById("tAdnan").innerHTML="<span style='color:yellow'>Adnan</span>"
    
    
    Madnan++;
    
document.getElementById("Madnan").innerHTML=Madnan;

//Total points Chapter(Adnan);
document.getElementById('mpAdnan').innerHTML=`<button id='pmmAdnan'>--</button><span  style='color:yellow'> ADNAN </span><button id='pppAdnan'>++</button><b id='cpAdnan' style='color:yellow'> 0 </b><br>`;


document.getElementById('pmmAdnan').onclick=function(){
    cpAdnan--;
    if(cpAdnan==-1){
        cpAdnan=0;
    }
    document.getElementById('cpAdnan').innerHTML=' = '+cpAdnan;
    }
document.getElementById('pppAdnan').onclick=function(){
    cpAdnan++;
    if(cpAdnan==16){
        cpAdnan=15;
    }
   document.getElementById('cpAdnan').innerHTML=' = '+cpAdnan;

}
//Finished;;;
}
document.getElementById("tAdnan").onclick=function(){

    document.getElementById("tAdnan").innerHTML="<span style='color:rgb(175, 173, 166)'>Adnan</span>"
    
    
    Madnan--;
    
document.getElementById("Madnan").innerHTML=Madnan;

document.getElementById('cpAdnan').innerHTML=0;
document.getElementById('mpAdnan').innerHTML='<span>Adnan</span>';
document.getElementById('tAdnan').innerHTML="Adnan";
cpAdnan=0;
dlAdnan=0;
}

//Matches Played (Abid);;;
let Mabid=0;
let cpAbid=0;
document.getElementById("attenderAbid").onclick=function(){
    //declare Abid;
    dlAbid=1;
    document.getElementById("tAbid").innerHTML="<span style='color:yellow'>Abid</span>"
    
    
    Mabid++;
    
document.getElementById("Mabid").innerHTML=Mabid;

//Total points Chapter(Abid);
document.getElementById('mpAbid').innerHTML=`<button id='pmmAbid'>--</button><span  style='color:yellow'> ABID </span><button id='pppAbid'>++</button><b id='cpAbid' style='color:yellow'> 0 </b><br>`;


document.getElementById('pmmAbid').onclick=function(){
    cpAbid--;
    if(cpAbid==-1){
        cpAbid=0;
    }
    document.getElementById('cpAbid').innerHTML=' = '+cpAbid;
    }
document.getElementById('pppAbid').onclick=function(){
    cpAbid++;
    if(cpAbid==16){
        cpAbid=15;
    }
   document.getElementById('cpAbid').innerHTML=' = '+cpAbid;

}
//Finished;;;
}
document.getElementById("tAbid").onclick=function(){

    document.getElementById("tAbid").innerHTML="<span style='color:rgb(175, 173, 166)'>Abid</span>"
    
    
    Mabid--;
    
document.getElementById("Mabid").innerHTML=Mabid;

document.getElementById('cpAbid').innerHTML=0;
document.getElementById('mpAbid').innerHTML='<span>Abid</span>';
document.getElementById('tAbid').innerHTML="Abid";
cpAbid=0;
dlAbid=0;
}

//Matches Played (Shohan);;;
let Mshohan=0;
let cpShohan=0;
document.getElementById("attenderShohan").onclick=function(){
    //declare Shohan
    dlShohan=1;
    document.getElementById("tShohan").innerHTML="<span style='color:yellow'>Shohan</span>"
    
    
    Mshohan++;
    
document.getElementById("Mshohan").innerHTML=Mshohan;
//Total points Chapter(Shohan);
document.getElementById('mpShohan').innerHTML=`<button id='pmmShohan'>--</button><span  style='color:yellow'> SHOHAN </span><button id='pppShohan'>++</button><b id='cpShohan' style='color:yellow'> 0 </b><br>`;


document.getElementById('pmmShohan').onclick=function(){
    cpShohan--;
    if(cpShohan==-1){
        cpShohan=0;
    }
    document.getElementById('cpShohan').innerHTML=' = '+cpShohan;
    }
document.getElementById('pppShohan').onclick=function(){
    cpShohan++;
    if(cpShohan==16){
        cpShohan=15;
    }
   document.getElementById('cpShohan').innerHTML=' = '+cpShohan;

}
//Finished;;;

}
document.getElementById("tShohan").onclick=function(){

    document.getElementById("tShohan").innerHTML="<span style='color:rgb(175, 173, 166)'>Shohan</span>"
    
    
    Mshohan--;
    
document.getElementById("Mshohan").innerHTML=Mshohan;

document.getElementById('cpShohan').innerHTML=0;
document.getElementById('mpShohan').innerHTML='<span>Shohan</span>';
document.getElementById('tShohan').innerHTML="Shohan";
cpShohan=0;
dlShohan=0;   
}

//Matches Played (Real);;;
let Mreal=0;
let cpReal=0;

document.getElementById("attenderReal").onclick=function(){
   //declare Real;
   dlReal=1;
    document.getElementById("tReal").innerHTML="<span style='color:yellow'>Real</span>"
    
    
    Mreal++;
    
document.getElementById("Mreal").innerHTML=Mreal;

//Total points Chapter(Real);
document.getElementById('mpReal').innerHTML=`<button id='pmmReal'>--</button><span  style='color:yellow'> REAL </span><button id='pppReal'>++</button><b id='cpReal' style='color:yellow'> 0 </b><br>`;


document.getElementById('pmmReal').onclick=function(){
    cpReal--;
    if(cpReal==-1){
        cpReal=0;
    }
    document.getElementById('cpReal').innerHTML=' = '+cpReal;
    }
document.getElementById('pppReal').onclick=function(){
    cpReal++;
    if(cpReal==16){
        cpReal=15;
    }
   document.getElementById('cpReal').innerHTML=' = '+cpReal;

}
//Finished;;;
}
document.getElementById("tReal").onclick=function(){

    document.getElementById("tReal").innerHTML="<span style='color:rgb(175, 173, 166)'>Real</span>"
    
    
    Mreal--;
    
document.getElementById("Mreal").innerHTML=Mreal;

document.getElementById('cpReal').innerHTML=0;
document.getElementById('mpReal').innerHTML='<span>Real</span>';
document.getElementById('tReal').innerHTML="Real";
cpReal=0;
dlReal=0; 
}

//Matches Played (Nishat);;;
let Mnishat=0;
let cpNishat=0;
document.getElementById("attenderNishat").onclick=function(){
//declare Nishat;
   dlNishat=1;
    document.getElementById("tNishat").innerHTML="<span style='color:yellow'>Nishat</span>"
    
    
    Mnishat++;
    
document.getElementById("Mnishat").innerHTML=Mnishat;

//Total points Chapter(Nishat);
document.getElementById('mpNishat').innerHTML=`<button id='pmmNishat'>--</button><span  style='color:yellow'> NISHAT </span><button id='pppNishat'>++</button><b id='cpNishat' style='color:yellow'> 0 </b><br>`;


document.getElementById('pmmNishat').onclick=function(){
    cpNishat--;
    if(cpNishat==-1){
        cpNishat=0;
    }
    document.getElementById('cpNishat').innerHTML=' = '+cpNishat;
    }
document.getElementById('pppNishat').onclick=function(){
    cpNishat++;
    if(cpNishat==16){
        cpNishat=15;
    }
   document.getElementById('cpNishat').innerHTML=' = '+cpNishat;

}
//Finished;;;
}
document.getElementById("tNishat").onclick=function(){

    document.getElementById("tNishat").innerHTML="<span style='color:rgb(175, 173, 166)'>Nishat</span>"
    
    
    Mnishat--;
    
document.getElementById("Mnishat").innerHTML=Mnishat;

document.getElementById('cpNishat').innerHTML=0;
document.getElementById('mpNishat').innerHTML='<span>Nishat</span>';
document.getElementById('tNishat').innerHTML="Nishat";
cpNishat=0;
dlNishat=0;  
}

//Matches Played (Shojib);;;
let Mshojib=0;
let cpShojib=0;
document.getElementById("attenderShojib").onclick=function(){
//declare Shojib;
dlShojib=1;

    document.getElementById("tShojib").innerHTML="<span style='color:yellow'>Shojib</span>"
    
    
    Mshojib++;
    
document.getElementById("Mshojib").innerHTML=Mshojib;

//Total points Chapter(Shojib);
document.getElementById('mpShojib').innerHTML=`<button id='pmmShojib'>--</button><span  style='color:yellow'> SHOJIB </span><button id='pppShojib'>++</button><b id='cpShojib' style='color:yellow'> 0 </b><br>`;


document.getElementById('pmmShojib').onclick=function(){
    cpShojib--;
    if(cpShojib==-1){
        cpShojib=0;
    }
    document.getElementById('cpShojib').innerHTML=' = '+cpShojib;
    }
document.getElementById('pppShojib').onclick=function(){
    cpShojib++;
    if(cpShojib==16){
        cpShojib=15;
    }
   document.getElementById('cpShojib').innerHTML=' = '+cpShojib;

}
//Finished;;;
}
document.getElementById("tShojib").onclick=function(){

    document.getElementById("tShojib").innerHTML="<span style='color:rgb(175, 173, 166)'>Shojib</span>"
    
    
    Mshojib--;
    
document.getElementById("Mshojib").innerHTML=Mshojib;

document.getElementById('cpShojib').innerHTML=0;
document.getElementById('mpShojib').innerHTML='<span>Shojib</span>';
document.getElementById('tShojib').innerHTML="Shojib";
cpShojib=0;
dlShojib=0;  
}

//Matches Played (Masud);;;
let Mmasud=0;
let cpMasud=0;
document.getElementById("attenderMasud").onclick=function(){
//declare Masud;
dlMasud=1;

    document.getElementById("tMasud").innerHTML="<span style='color:yellow'>Masud</span>"
    
    
    Mmasud++;
    
document.getElementById("Mmasud").innerHTML=Mmasud;

//Total points Chapter(Masud);
document.getElementById('mpMasud').innerHTML=`<button id='pmmMasud'>--</button><span  style='color:yellow'> MASUD </span><button id='pppMasud'>++</button><b id='cpMasud' style='color:yellow'> 0 </b><br>`;


document.getElementById('pmmMasud').onclick=function(){
    cpMasud--;
    if(cpMasud==-1){
        cpMasud=0;
    }
    document.getElementById('cpMasud').innerHTML=' = '+cpMasud;
    }
document.getElementById('pppMasud').onclick=function(){
    cpMasud++;
    if(cpMasud==16){
        cpMasud=15;
    }
   document.getElementById('cpMasud').innerHTML=' = '+cpMasud;

}
//Finished;;;
}
document.getElementById("tMasud").onclick=function(){

    document.getElementById("tMasud").innerHTML="<span style='color:rgb(175, 173, 166)'>Masud</span>"
    
    
    Mmasud--;
  
document.getElementById("Mmasud").innerHTML=Mmasud;

document.getElementById('cpMasud').innerHTML=0;
document.getElementById('mpMasud').innerHTML='<span>Masud</span>';
document.getElementById('tMasud').innerHTML="Masud";
cpMasud=0;
dlMasud=0; 
}

//Chapter Submit
//

var subHabib=0;
var subAdnan=0;
var subAbid=0;
var subShohan=0;
var subReal=0;
var subNishat=0;
var subShojib=0;
var subMasud=0;
document.getElementById('submitPoint').onclick=function(){

subHabib=subHabib+cpHabib;
subAdnan=subAdnan+cpAdnan;
subAbid=subAbid+cpAbid;
subShohan=subShohan+cpShohan;
subReal=subReal+cpReal;
subNishat=subNishat+cpNishat;
subShojib=subShojib+cpShojib;
subMasud=subMasud+cpMasud;
//chapter Habib;
if(dlHabib==1){
document.getElementById('Phabib').innerHTML=subHabib;
document.getElementById('Ahabib').innerHTML=subHabib/Mhabib;
document.getElementById('cpHabib').innerHTML=0;
document.getElementById('mpHabib').innerHTML='<span>Habib</span>';
document.getElementById('tHabib').innerHTML="Habib";
cpHabib=0;
dlHabib=0;
}
//chapter Adnan;
if(dlAdnan==1){
document.getElementById('Padnan').innerHTML=subAdnan;
document.getElementById('Aadnan').innerHTML=subAdnan/Madnan;
document.getElementById('cpAdnan').innerHTML=0;
document.getElementById('mpAdnan').innerHTML='<span>Adnan</span>';
document.getElementById('tAdnan').innerHTML="Adnan";
cpAdnan=0;
dlAdnan=0;
}
//chapter Abid;
if(dlAbid==1){
document.getElementById('Pabid').innerHTML=subAbid;
document.getElementById('Aabid').innerHTML=subAbid/Mabid;
document.getElementById('cpAbid').innerHTML=0;
document.getElementById('mpAbid').innerHTML='<span>Abid</span>';
document.getElementById('tAbid').innerHTML="Abid";
cpAbid=0;
dlAbid=0;
}
//chapter Shohan;
if(dlShohan==1){
document.getElementById('Pshohan').innerHTML=subShohan;
document.getElementById('Ashohan').innerHTML=subShohan/Mshohan;
document.getElementById('cpShohan').innerHTML=0;
document.getElementById('mpShohan').innerHTML='<span>Shohan</span>';
document.getElementById('tShohan').innerHTML="Shohan";
cpShohan=0;
dlShohan=0;    
}
//chapter Real;
if(dlReal==1){
document.getElementById('Preal').innerHTML=subReal;
document.getElementById('Areal').innerHTML=subReal/Mreal;
document.getElementById('cpReal').innerHTML=0;
document.getElementById('mpReal').innerHTML='<span>Real</span>';
document.getElementById('tReal').innerHTML="Real";
cpReal=0;
dlReal=0;    
}
//chapter Nishat;
if(dlNishat==1){
document.getElementById('Pnishat').innerHTML=subNishat;
document.getElementById('Anishat').innerHTML=subNishat/Mnishat;
document.getElementById('cpNishat').innerHTML=0;
document.getElementById('mpNishat').innerHTML='<span>Nishat</span>';
document.getElementById('tNishat').innerHTML="Nishat";
cpNishat=0;
dlNishat=0;    
}
//chapter Shojib;
if(dlShojib==1){
document.getElementById('Pshojib').innerHTML=subShojib;
document.getElementById('Ashojib').innerHTML=subShojib/Mshojib;
document.getElementById('cpShojib').innerHTML=0;
document.getElementById('mpShojib').innerHTML='<span>Shojib</span>';
document.getElementById('tShojib').innerHTML="Shojib";
cpShojib=0;
dlShojib=0;    
}
//chapter Masud;
if(dlMasud==1){
document.getElementById('Pmasud').innerHTML=subMasud;
document.getElementById('Amasud').innerHTML=subMasud/Mmasud;
document.getElementById('cpMasud').innerHTML=0;
document.getElementById('mpMasud').innerHTML='<span>Masud</span>';
document.getElementById('tMasud').innerHTML="Masud";
cpMasud=0;
dlMasud=0;    
}
}























































