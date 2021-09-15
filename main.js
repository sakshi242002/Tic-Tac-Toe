strvalue = "X";
function redirectpage(){
    window.location.href='index2.html?value='+strvalue;
   colorchange();
}

function mainfunc(){
    const cell=[];
    cell[1]=document.getElementById("t1").value;
    cell[2]=document.getElementById("t2").value;
    cell[3]=document.getElementById("t3").value;
    cell[4]=document.getElementById("t4").value;
    cell[5]=document.getElementById("t5").value;
    cell[6]=document.getElementById("t6").value;
    cell[7]=document.getElementById("t7").value;
    cell[8]=document.getElementById("t8").value;
    cell[9]=document.getElementById("t9").value;
    var flag=0;
    const wc=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
    for (let i=0;i<8;i++)
    {
        flag=0;
        if (cell[wc[i][0]]==cell[wc[i][1]] && cell[wc[i][0]]==cell[wc[i][2]] && cell[wc[i][0]]!=null)
        {
            if (cell[wc[i][0]]=='X')
            {
                flag=1;
                if (i==0){
                  document.getElementById('t1').style.backgroundColor='khaki';
                  document.getElementById('t2').style.backgroundColor='khaki';
                  document.getElementById('t3').style.backgroundColor='khaki';
                }
                else if (i==1) {
                  document.getElementById('t4').style.backgroundColor='khaki';
                  document.getElementById('t5').style.backgroundColor='khaki';
                  document.getElementById('t6').style.backgroundColor='khaki';
                }
                else if (i==2) {
                  document.getElementById('t7').style.backgroundColor='khaki';
                  document.getElementById('t8').style.backgroundColor='khaki';
                  document.getElementById('t9').style.backgroundColor='khaki';
                }
                else if (i==3) {
                  document.getElementById('t1').style.backgroundColor='khaki';
                  document.getElementById('t4').style.backgroundColor='khaki';
                  document.getElementById('t7').style.backgroundColor='khaki';
                }
                else if (i==4) {
                  document.getElementById('t2').style.backgroundColor='khaki';
                  document.getElementById('t5').style.backgroundColor='khaki';
                  document.getElementById('t8').style.backgroundColor='khaki';
                }
                else if (i==5) {
                  document.getElementById('t3').style.backgroundColor='khaki';
                  document.getElementById('t6').style.backgroundColor='khaki';
                  document.getElementById('t9').style.backgroundColor='khaki';
                }
                else if (i==6) {
                  document.getElementById('t1').style.backgroundColor='khaki';
                  document.getElementById('t5').style.backgroundColor='khaki';
                  document.getElementById('t9').style.backgroundColor='khaki';
                }
                else if (i==7) {
                  document.getElementById('t3').style.backgroundColor='khaki';
                  document.getElementById('t5').style.backgroundColor='khaki';
                  document.getElementById('t7').style.backgroundColor='khaki';
                }
                disable();
                document.getElementById("print").innerHTML="Player X Won !";
                window.alert("Player X Won !")
                break;
            }
            else if(cell[wc[i][0]]=='O')
            {
                flag=1;
                if (i==0){
                  document.getElementById('t1').style.backgroundColor='khaki';
                  document.getElementById('t2').style.backgroundColor='khaki';
                  document.getElementById('t3').style.backgroundColor='khaki';
                }
                else if (i==1) {
                  document.getElementById('t4').style.backgroundColor='khaki';
                  document.getElementById('t5').style.backgroundColor='khaki';
                  document.getElementById('t6').style.backgroundColor='khaki';
                }
                else if (i==2) {
                  document.getElementById('t7').style.backgroundColor='khaki';
                  document.getElementById('t8').style.backgroundColor='khaki';
                  document.getElementById('t9').style.backgroundColor='khaki';
                }
                else if (i==3) {
                  document.getElementById('t1').style.backgroundColor='khaki';
                  document.getElementById('t4').style.backgroundColor='khaki';
                  document.getElementById('t7').style.backgroundColor='khaki';
                }
                else if (i==4) {
                  document.getElementById('t2').style.backgroundColor='khaki';
                  document.getElementById('t5').style.backgroundColor='khaki';
                  document.getElementById('t8').style.backgroundColor='khaki';
                }
                else if (i==5) {
                  document.getElementById('t3').style.backgroundColor='khaki';
                  document.getElementById('t6').style.backgroundColor='khaki';
                  document.getElementById('t9').style.backgroundColor='khaki';
                }
                else if (i==6) {
                  document.getElementById('t1').style.backgroundColor='khaki';
                  document.getElementById('t5').style.backgroundColor='khaki';
                  document.getElementById('t9').style.backgroundColor='khaki';
                }
                else if (i==7) {
                  document.getElementById('t3').style.backgroundColor='khaki';
                  document.getElementById('t5').style.backgroundColor='khaki';
                  document.getElementById('t7').style.backgroundColor='khaki';
                }
                disable();
                document.getElementById('print').innerHTML="Player O Won !";
                window.alert("Player O Won");
                break;
            }
        }
    }
    var count=0;
    for (let i=1;i<=9;i++){
        if (cell[i]=='X' || cell[i]=='O'){
            count+=1;
        }
    }
    if (count==9 && flag!=1){
        document.getElementById('print').innerHTML="It's a draw !";
        window.alert("It's a draw !");
    }
}
function disable(){
  document.getElementById("t1").disabled=true;
  document.getElementById("t2").disabled=true;
  document.getElementById("t3").disabled=true;
  document.getElementById("t4").disabled=true;
  document.getElementById("t5").disabled=true;
  document.getElementById("t6").disabled=true;
  document.getElementById("t7").disabled=true;
  document.getElementById("t8").disabled=true;
  document.getElementById("t9").disabled=true;
}
function reset(){
  location.reload();
  enable();
}
function enable(){
  document.getElementById("t1").disabled=false;
  document.getElementById("t2").disabled=false;
  document.getElementById("t3").disabled=false;
  document.getElementById("t4").disabled=false;
  document.getElementById("t5").disabled=false;
  document.getElementById("t6").disabled=false;
  document.getElementById("t7").disabled=false;
  document.getElementById("t8").disabled=false;
  document.getElementById("t9").disabled=false;
}
function changeX(){
  document.getElementById('X').style.color='black';
  document.getElementById('X').style.backgroundColor='khaki';
  document.getElementById('O').style.backgroundColor='#4CAF50';
  document.getElementById('O').style.color='white';
  strvalue = "X";
}
function changeO(){
  document.getElementById('O').style.color='black';
  document.getElementById('O').style.backgroundColor='khaki';
  strvalue = "O";
  document.getElementById('X').style.backgroundColor='#4CAF50';
  document.getElementById('X').style.color='white';
}
function changereset(){
  document.getElementById('reset').style.backgroundColor='khaki';
  document.getElementById('reset').style.color='black';
}
var turn;
//   Choosing who will move first    //
if (selectedvalue=='X'){
  turn=1;
}
else{
  turn=0;
}
function cell1(){
     if (turn==1){
         document.getElementById("t1").value="X";
        document.getElementById("t1").disabled=true;
       turn=0;
     }
     else {
      document.getElementById("t1").value="O";
      document.getElementById("t1").disabled=true;
      turn=1;
     }
}
function cell2(){
    if (turn==1){
        document.getElementById("t2").value="X";
        document.getElementById("t2").disabled=true;
        turn=0;
    }
    else {
      document.getElementById("t2").value="O";
      document.getElementById("t2").disabled=true;
      turn=1;
    }
}
function cell3(){
    if (turn==1){
        document.getElementById("t3").value="X";
        document.getElementById("t3").disabled=true;
        turn=0;
    }
    else {
      document.getElementById("t3").value="O";
      document.getElementById("t3").disabled=true;
      turn=1;
    }
}
function cell4(){
    if (turn==1){
        document.getElementById("t4").value="X";
        document.getElementById("t4").disabled=true;
        turn=0;
    }
    else {
      document.getElementById("t4").value="O";
      document.getElementById("t4").disabled=true;
      turn=1;
    }
}
function cell5(){
    if (turn==1){
        document.getElementById("t5").value="X";
        document.getElementById("t5").disabled=true;
        turn=0;
    }
    else {
      document.getElementById("t5").value="O";
      document.getElementById("t5").disabled=true;
      turn=1;
    }
}
function cell6(){
    if (turn==1){
        document.getElementById("t6").value="X";
        document.getElementById("t6").disabled=true;
        turn=0;
    }
    else {
      document.getElementById("t6").value="O";
      document.getElementById("t6").disabled=true;
      turn=1;
    }
}
function cell7(){
    if (turn==1){
        document.getElementById("t7").value="X";
        document.getElementById("t7").disabled=true;
        turn=0;
    }
    else {
      document.getElementById("t7").value="O";
      document.getElementById("t7").disabled=true;
      turn=1;
    }
}
function cell8(){
    if (turn==1){
        document.getElementById("t8").value="X";
        document.getElementById("t8").disabled=true;
        turn=0;
    }
    else {
      document.getElementById("t8").value="O";
      document.getElementById("t8").disabled=true;
      turn=1;
    }
}
function cell9(){
    if (turn==1){
        document.getElementById("t9").value="X";
        document.getElementById("t9").disabled=true;
        turn=0;
    }
    else {
      document.getElementById("t9").value="O";
      document.getElementById("t9").disabled=true;
      turn=1;
    }
}
