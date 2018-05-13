setTimeout( function() {
  setInterval( function() {
    var temp = Math.floor(Math.random() * 151);
    document.getElementById("e0"+temp).style.visibility ='visible';
  },1500);
  setInterval( function() {
    var temp = Math.floor(Math.random() * 151);
    document.getElementById("e0"+temp).style.visibility ='visible';
  },4000);
  setInterval( function() {
    var temp = Math.floor(Math.random() * 151);
    document.getElementById("e0"+temp).style.visibility ='visible';
  },700);
  document.body.addEventListener("click", function() {
      var lst = document.getElementsByClassName("emoji");
      var i;
      for (i=0; i<lst.length;i++) {
        lst[i].style.visibility="hidden";
      }
    }
  )
},2000);
