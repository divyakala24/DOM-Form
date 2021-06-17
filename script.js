row=0;





function addRow()
{
  var selected = new Array();
 
      
  var tblFruits = document.getElementById("tblFruits");

var chks = tblFruits.getElementsByTagName("INPUT");


      for (var i = 0; i < chks.length; i++) {
          if (chks[i].checked) {
              selected.push(chks[i].value);
            
           
          }
      }

      //Display the selected CheckBox values.
      if (selected.length >=2) {
   alert('You have successfully chosen minimum 2 food types');
        
      }
   else{
     alert('choose atleast two')
   }


var list1 = document.getElementById('in1').value;
var list2= document.getElementById('in2').value;
var list3= document.getElementById('in3').value;
var list4= document.getElementById('in4').value;
var list5= document.getElementById('in5').value;
var list6= selected;
var list7= document.getElementById('in7').value;
var list8= document.getElementById('in8').value;
  
  var display = document.getElementById('show');
  var newRow= display.insertRow(row);
  
  
  var cel1 = newRow.insertCell(0);
  var cel2 = newRow.insertCell(1);
  var cel3 = newRow.insertCell(2);
  var cel4 = newRow.insertCell(3);
  var cel5 = newRow.insertCell(4);
  var cel6 = newRow.insertCell(5);
  var cel7 = newRow.insertCell(6);
  var cel8 = newRow.insertCell(7);
  
  
  cel1.innerHTML= list1;
  cel2.innerHTML= list2;
  cel3.innerHTML= list3;
  cel4.innerHTML= list4;
  cel5.innerHTML= list5;
  cel6.innerHTML= list6;
  cel7.innerHTML= list7;
  cel8.innerHTML= list8;
  
  row++;

  //clearing form
  document.getElementById('in1').value= "";
  document.getElementById('in2').value= "";
  document.getElementById('in3').value= "";
  document.getElementById('in4').value= "";
  document.getElementById('in5').value= "";
  document.getElementById('in7').value= "";
   $('input[type="checkbox"]').prop('checked', false);
  document.getElementById('in8').value= "";
  
}
