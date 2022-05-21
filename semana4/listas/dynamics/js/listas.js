const tareas = document.getElementById("tareas");
const asignar = document.getElementById("asignar");
const otro = document.getElementById("otro");
const nuevaTarea = document.getElementById("nuevaTarea");
const formulario = document.getElementById("identificador");
const listas = document.getElementById("listas");
const completada = document.getElementById("completadas");
const contar = document.getElementById("cuenta");
var pendientes = [];

let incompleta = 0;
let hechas = 0;
let i = 0;
let exist = 0;

asignar.addEventListener("click", () => 
{
    if(nuevaTarea.value != "") 
    {
        if(otro.value != "") 
        {
            do 
            {
                if(otro.value == pendientes[i])
                {
                    exist = 1;
                }
                else
                {
                    i ++;
                }
            } while (i < pendientes.length);
            if(exist == 0)
            {
                listas.innerHTML += "<li>"+ nuevaTarea.value + " " + otro.value +"<br><button class='eliminar'>Borrar</button><button class='terminar' value='"+ incompleta +"'>Completa</button></li>";
                tareas.innerHTML += '<option value="'+ otro.value +'">'+ pendientes +'</option>'; 
                pendientes.push(otro.value);
            }
            incompleta ++;
        }
        else 
        if(tareas.value != "Nueva")
        {
            listas.innerHTML += "<li>"+nuevaTarea.value+" "+ otro.value +"<br><button class='eliminar'>Eliminar</button><button class='terminar' value='"+incompleta+"'>Terminada</button></li>";
            incompleta ++;
            asignar.value = "";
        }   
    }
    else
    {
        alert("Campo incompleto.");
    }    
});

listas.addEventListener("click", (evento) => 
{
    if(evento.target.className === 'eliminar'){
        evento.target.parentElement.outerHTML = "";
        if(evento.target.parentElement.style.backgroundColor == 'pink'){
            hechas --;
            incompleta --; 
        }else{
            incompleta --;
        }
    }
});

listas.addEventListener("click", (evento) => 
{
    if(evento.target.className === 'terminar')
    {
        evento.target.parentElement.style.backgroundColor = 'rgb(174, 235, 114)';
        if(evento.target.parentElement.style.backgroundColor == 'rgb(174, 235, 114)')
        {
            hechas ++;
            incompleta --;
           contar.innerHTML = "  <strong> Completadas: </strong>" + hechas;
           contar.innerHTML += "  <strong> Pendientes:  </strong>" + incompleta;
        }
    }
});




