document.write('<script src="alertifyjs/alertify.js"></script>');
function validar()
{
	var nombre,email,consulta,hidden,validacion1,validacion2,validacion3,bot;

     nombre   = document.querySelector("#nombre").value;  //solo para ids
  	 email   = document.querySelector("#email").value;
     consulta = document.querySelector("#consulta").value;
     hidden = document.querySelector("#hidden").value;
     bot = document.querySelector("#bot").type;

  	if(nombre.length<5)
  	{
      var op= document.getElementById("nombre");
              op.style.borderColor = 'red';
              op.style.borderRadius = '15px';
              op.style.boxShadow = '0.1px 0.1px 35px red';
              validacion=false;
      alertify.alert("www.GuidoFacio.com",alertify.alert("Informacion insuficiente, complete los campos en rojo. 😒"));
    }
    else{
          validacion1=true;
        }

    if(email.length<15)
    {
        var em= document.getElementById("email");
              em.style.borderColor = 'red';
              em.style.borderRadius = '15px';
              em.style.boxShadow = '0.1px 0.1px 35px red';
              validacion=false;
        alertify.alert("www.GuidoFacio.com",alertify.alert("Informacion insuficiente, complete los campos en rojo. 😒"));
    }
    else{
          validacion2=true;
        }

    if(consulta.length<20)
    {
        var co= document.getElementById("consulta");
              co.style.borderColor = 'red';
              co.style.borderRadius = '15px';
              co.style.boxShadow = '0.1px 0.1px 35px red';
              validacion=false;
        alertify.alert("www.GuidoFacio.com",alertify.alert("Informacion insuficiente, complete los campos en rojo. 😒"));
    }
    else{
          validacion3=true;
        }

    if (validacion1 == true && validacion2==true && validacion3==true)
    {
          var h2form = document.querySelector("#h2form");
          h2form.innerHTML = "<h2>Enviando..</h2>";
          var h2gracias = document.createElement("h2"); //creo h1
              h2gracias.innerHTML = "<h2 class='text-center'>Gracias por la consulta!</h2>"; //le agrego texto al h1
          var form = document.querySelector("#formulario"); // tomo caja 2
              form.appendChild(h2gracias);
          var hidden = document.querySelector("#hidden").value="true";
          alert("Gracias "+nombre+" por su consulta 😙");
    }
}