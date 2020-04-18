document.write('<script src="alertifyjs/alertify.js"></script>');
function validar()
{
	var nombre,email,consulta,hidden,validacion1,validacion2,validacion3,bot;

     nombre   = document.querySelector("#nombreimp").value;  //solo para ids
  	 email   = document.querySelector("#emailimp").value;
     consulta = document.querySelector("#consulta").value;
     hidden = document.querySelector("#hidden").value;
     bot = document.querySelector("#bot").type;

  	if(nombre.length<5)
  	{
      var op= document.getElementById("nombreimp");
              op.style.borderColor = 'red';
              op.style.boxShadow = '0.1px 0.1px 20px red';
              validacion=false;
      alertify.alert("www.GuidoFacio.com",alertify.alert("Informacion insuficiente, complete los campos en rojo. 😒"));
    }
    else{
          validacion1=true;
          var op= document.getElementById("nombreimp");
              op.style.borderColor = 'blue';
              op.style.boxShadow = '0.1px 0.1px 20px blue';
              validacion=false;
        }

    if(email.length<15)
    {
        var em= document.getElementById("emailimp");
              em.style.borderColor = 'red';
              em.style.boxShadow = '0.1px 0.1px 20px red';
              validacion=false;
        alertify.alert("www.GuidoFacio.com",alertify.alert("Informacion insuficiente, complete los campos en rojo. 😒"));
    }
    else{
          validacion2=true;
           var em= document.getElementById("emailimp");
              em.style.borderColor = 'blue';
              em.style.boxShadow = '0.1px 0.1px 20px blue';
              validacion=false;
        }

    if(consulta.length<20)
    {
        var co= document.getElementById("consulta");
              co.style.borderColor = 'red';
              co.style.boxShadow = '0.1px 0.1px 20px red';
              validacion=false;
        alertify.alert("www.GuidoFacio.com",alertify.alert("Informacion insuficiente, complete los campos en rojo. 😒"));
    }
    else{
          validacion3=true;
          var co= document.getElementById("consulta");
              co.style.borderColor = 'blue';
              co.style.boxShadow = '0.1px 0.1px 20px blue';
              validacion=false;
        }

    if (validacion1 == true)
    {
          if (validacion2==true) 
          {

            if (validacion3==true) 
            {
              var h2form = document.querySelector("#h2form");
              h2form.innerHTML = "<h2>Enviando..</h2>";
              var h2gracias = document.createElement("h2"); //creo h1
                  h2gracias.innerHTML = "<h2 class='text-center'>Gracias por la consulta!</h2>"; //le agrego texto al h1
              var form = document.querySelector("#formulario"); // tomo caja 2
                  form.appendChild(h2gracias);
                  alertify.alert("www.GuidoFacio.com",alertify.alert("Gracias "+nombre+" Por tu consulta!"));
              var hidden = document.querySelector("#hidden").value="true";  
            }
          }     
    }
}