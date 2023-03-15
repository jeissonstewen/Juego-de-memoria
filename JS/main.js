let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
numeros = numeros.sort(()=>Math.random()-0.5) /* deosrdenar numeros */

for(i=0; i<numeros.length; i++){
    document.getElementById('ficha'+i).value = numeros[i]
   /*  document.getElementById('ficha'+i).textContent = numeros[i] */

}
let cont = 0, tarjeta1 = null, tarjeta2=null, opcion1,opcion2, aciertos=0, movimientos =0
const tablero = document.querySelector('.fichas')
tablero.addEventListener('click',(e)=>{
    if(e.target.className == 'btn__ficha'){
        if(cont<2){
            e.target.textContent = e.target.value
            console.log(e.target.id)
            if(cont==0){
                tarjeta1 = e.target.value
                console.log(tarjeta1)
                opcion1 = e.target.id
                console.log(opcion1)
            } 
            if(cont==1){
                if(opcion1!=e.target.id){
                    tarjeta2 = e.target.value
                    console.log(tarjeta2)
                    opcion2 = e.target.id
                }else {
                    cont=0
                }
                movimientos++
                document.getElementById('movimientos').textContent = movimientos

            }
            
        }
        cont++
        if(tarjeta1==tarjeta2){
            console.log('iguales')
            document.getElementById(opcion1).disabled=true
            document.getElementById(opcion2).disabled=true
            tarjeta1=null
            tarjeta2=null
            cont=0
            aciertos++
            document.getElementById('acietos').textContent = aciertos
        } else if(tarjeta2!=null){
            setTimeout(function(){
                document.getElementById(opcion1).disabled=false
                document.getElementById(opcion2).disabled=false
                document.getElementById(opcion2).textContent=''
                document.getElementById(opcion1).textContent=''
                tarjeta1=null
                tarjeta2=null
                cont=0
            }, 1000);
        }
    }
})

let totalTime = 60;
function updateClock() {
document.getElementById('tiempo').innerHTML = totalTime;
if(totalTime==0){
alert('Final');
}else{
totalTime-=1;
setTimeout("updateClock()",1000);
}
}
