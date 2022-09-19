
$("#contactForm").validate({
    rules: {
      nombre:{
        required: true,
        minglenght: 3
      },
      rut:{
        required: true
      },
      email:{
        required: true
      },
      phonenumber:{
        required: true
      },
      comment:{
        required: true,
        minlenght : 5,
        maxlenght : 200
      }
    }
  })
  
  $("#send").click(function() {
  
    if($("#contactForm").valid()==false){
      return;
    }
  
    let nombre = $("#nombre").val()
    let rut = $("#rut").val()
    let email = $("#email").val()
    let phonenumber = $("#phonenumber").val()
    let comment = $("#comment").val()
  
  })