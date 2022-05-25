const canvas = document.getElementById("estrella");
const ctx = canvas.getContext("2d");
const picos = document.getElementById("picos"); 
const longitud = document.getElementById("longitud"); 
const color = document.getElementById("color"); 
const relleno = document.getElementById("relleno"); 
picos.addEventListener("change",masPicos);
    function masPicos(){
        if(picos.value >= 31)
        {
            alert("Solo se puede de 30):");
        }
        else if(picos.value <= 3)
        {
            alert("Son más de 4 picos :3");
        }
        else
        {
        ctx.fillStyle = 'white';
        ctx.fillRect(0,0,300,300);
        centrox = 150; 
        centroy = 150;
        rad = 0;
        puntas = picos.value * 2;
        bln = false;
        dividir = Math.PI * 2 / puntas;
        
        ctx.beginPath();
        for(let i=0; i<puntas; i++)
        {
            if(bln == false)
            {
                rad = 150
                bln = true;
            }
            else
            {
                rad = longitud.value;
                bln = false;
            }
            angulo = i * dividir;
            x = rad * Math.cos(angulo)+centrox;
            y = rad * Math.sin(angulo)+centroy;
            ctx.lineTo(x, y);
        }
        ctx.closePath();

        ctx.fillStyle = '#ffffff';
        if(relleno.checked == true)
        {
            ctx.fillStyle = color.value;
        }
        ctx.fill();
        ctx.strokeStyle = color.value;
        ctx.stroke();
        }
    }
longitud.addEventListener("change",masPicos);
color.addEventListener("change",masPicos);
relleno.addEventListener("change",masPicos);