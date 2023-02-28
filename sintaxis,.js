class Sintaxis {
//1) Sumar dos numeros siempre cuando el promero sea mayor al segundo
 Ejercicio1 (){
    let num1=20
    let num2=16
    if (num1>num2) {
        console.log(num1+num2)
    }else {
        console.log("El segundo número es mayor")
        }
 }  
 // 2) Realizar una operacion segun el operador(+,-,*,/,%) realizar la suma, resta, multiplicacion, division y reciduo
 Ejercicio2 (){
    let num1=8
    let num2=10
    let suma=0,resta=0,multiplicacion=0,division=0,reciduo=0
    let ops= "+",opr="-",opm="*",opd="/",opre="%"
    suma= num1+num2
    resta= num1-num2
    multiplicacion= num1*num2
    division= num1/num2
    reciduo= num1%num2
    console.log (num1,ops,num2,"=",suma)
 }
 //3) Presentar el mayor de dos numeros
 Ejercicio3 (){
    let num1=200
    let num2=100
    if (num1>num2) {
        console.log("El primer número es el mayor")
    }else {
        console.log("El segundo número es el mayor")
        }
 }  
 //4) Dado un nombre presentarlo
 Ejercicio4(){
    let nom="Juan"
    console.log("Ingrese nombre: ",nom)
    console.log("El nombre ingresado es: ",nom)
 }
 //5) Dado un valor de compra presentar el total considerando un 12% de iva
 Ejercicio5(){
    let valor=430
    let total=valor*0.12+valor
    console.log("El total es: ",valor)
    console.log("El total con el IVA es: ",total)
 }
 //6) Presentar 5 veces un nombre
 Ejercicio6(){
    let nom="Pedro"
    let c=1
    console.log("Ingrese nombre: ",nom)
    while (c<=5){
        console.log(c,nom)
        c=c+1
    }  
}
//7) Presentar los numeros multiplos de 3 del 3 al 21
Ejercicio7(){
let num=3
for (num;num<=21;num=num+3){
    console.log(num)
}
}
//8) Presentar los numeros multiplos de 3 del 21 al 3
Ejercicio8(){
    let num=21
for (num;num>0;num=num-3){
    console.log(num)
}
}
//9) Dados dos nombres indicar si son iguales o diferentes
Ejercicio9(){
    let nom1="Pepe"
    let nom2="Pepe"
    if (nom1==nom2) {
        console.log("Los nombres son iguales")
    }else {
        console.log("Los nombres no son iguales")
        }
}
//10) Dado diez numeros en un arreglo presentar los que tengan menos de 5 caracteres
Ejercicio10(){
    let arreglo=["280612","280223","29","123456","6","3","125","434355"]     
    console.log(arreglo)
    for(let pos=0;pos<8;pos=pos+1){
      if (arreglo[pos].length < 5  ){ 
       console.log(`pos->${pos} Elemento:${arreglo[pos]}` )
      }
    }
}
//11) Dado un arreglo presentar sus elementos
Ejercicio11(){
    let arreglo=["Hugo","Mateo","Lopez","Ortiz"] 
    for(let pos=0;pos<4;pos=pos+1){
       console.log(`pos->${pos} Elemento:${arreglo[pos]}` )
    }
}
//12) Dado un arreglo de numeros presentar los menores a 10
Ejercicio12(){
    let arreglo=[43,3,12,1,9,28,12,10,2,9]    
    for(let pos=0;pos<10;pos=pos+1){
      if (arreglo[pos]< 10  ){ 
       console.log(`pos->${pos} Elemento:${arreglo[pos]}` )
      }
    }
}
//13)Dado un arreglo de numeros presentar los impares y al final la suma de los pares
Ejercicio13(){
    let arreglo=[43,3,12,1,9,28,12,10,2,9] 
    let suma=0  
    for(let pos=0;pos<10;pos=pos+1){
      if (arreglo[pos]% 2 ==0 ) {
        suma+=arreglo[pos]
      } else{
        console.log(`pos->${pos} Elemento:${arreglo[pos]}` )
      }   
    }
    console.log("La suma de los pares es:",suma)
}
//14) Presentar el primero el medio y el ultimo valor de un arreglo
Ejercicio14(){
    let arreglo=[10,28,40,34,493] 
    let longitud= arreglo.length
    console.log(arreglo[0],arreglo[Math.floor(longitud/2)],arreglo[longitud-1])
}
//15) Calcular el vuelto de un a compra dado el costo y el pago
Ejercicio15(){
let costo=100
let pago=34
let vuelto=costo-pago
console.log("El costo es: ",costo)
console.log("El pago es: ",pago)
console.log("Su vuelto es: ",vuelto)
}
//16) Presentar la tabla de multiplicar de cualquier numero del 1 al 12
Ejercicio16(){
    let num=3
    let n=1
    let mul=1
   while(n<=12){
    mul=n*3
    console.log(num,"*",n,"=",mul)
    n=n+1
   }
}
//17)Realizar la multiplicacion de dos numeros por medio de sumas sucesivas
Ejercicio17(){
    let ac=0
    let c=0
    let n1=5
    let n2=3
    while(c<n2){
        ac=ac+n1 
        c=c+1
        console.log (ac)
    }
console.log(n1,"*",n2,"=",ac)
}
//18)Realizar la division de dos numeros por medio de restas sucesivas
Ejercicio18(){
    let ac=0
    let c=0
    let n1=5
    let n2=2
    while(c<n2){
        ac=n1-n2 
        c=c+1
        console.log (ac)
    }
console.log(n1,"*",n2,"=",ac)
}
//19)Calcular el factorial de un numero
Ejercicio19(){
    let ac=0
    let c=1
    let n1=4
    while(c<=n1){
        ac=n1*c
        c=c+1
        console.log (ac)
    }
console.log(ac)
}
//20Calcular el exponente de un numero
Ejercicio20(){
    let ac=0
    let c=0
    let n1=4
    let n2=3
    while(c<=n2){
        ac=n1*n1
        c=c+1
        console.log (ac)
    }
console.log(ac)
}
//21)Calcular la serie de fibonacci dado un numero
Ejercicio21 (){
    let a=0,b=1,c=1,cont=3,n=8,x=0
    console.log(a)
    console.log(b)
    console.log(c)
    while (cont < n){
        a=b;b=c;c = a+b
        console.log(c)
        cont=cont +1
    }
}
//22) Dado un numero invertirlo
Ejercicio22(){
    let num=280612
    let ninvertido=0,d=0
    console.log(num)
    while (num != 0){
        d=num%10
        ninvertido=ninvertido*10+d
        num=Math.trunc(num/10)
    }
    
    console.log(ninvertido)
}
//23) Presentar los divisores de un numero
Ejercicio23(){
    let num=8
    let divisor=0
    let r=0
    let ac=0
    while(divisor<num){
        r=num%divisor
        if (r==0){
            ac=ac+divisor
            console.log(ac)
        }
        divisor=divisor+1
    }

}
//24) Presentar si un numero es perfecto o no 
Ejercicio24(){
    let divisor=0
    let num=6
    let r=0
    let ac=0
    while(divisor<num){
    r=num%divisor
    if (r==0){
        ac=ac+divisor
    }else{
        divisor=divisor+1
    }
    divisor=divisor+1
    }
    if (ac==num){
        console.log("Perfecto")
    }
}
Ejercicio25(){
    let divisor=0
    let num=6
    let r=0
    let ac=0
    while(divisor<num){
    r=num%divisor
    if (r==0){
        ac=ac+divisor
    }else{
        divisor=divisor+1
    }
    divisor=divisor+1
    }
    if (ac==num){
        console.log("Es primo")
    }
}
}
let sintaxis1 = new Sintaxis()
//sintaxis1.Ejercicio1()
//sintaxis1.Ejercicio2()
//sintaxis1.Ejercicio3()
//sintaxis1.Ejercicio4()
//sintaxis1.Ejercicio5()
//sintaxis1.Ejercicio6()
//sintaxis1.Ejercicio7()
//sintaxis1.Ejercicio8()
//sintaxis1.Ejercicio9()
//sintaxis1.Ejercicio10()
//sintaxis1.Ejercicio11()
//sintaxis1.Ejercicio12()
//sintaxis1.Ejercicio13()
//sintaxis1.Ejercicio14()
//sintaxis1.Ejercicio15()
//sintaxis1.Ejercicio16()
//sintaxis1.Ejercicio17()
//sintaxis1.Ejercicio18()
//sintaxis1.Ejercicio19()
//sintaxis1.Ejercicio20()
//sintaxis1.Ejercicio21()
//sintaxis1.Ejercicio22()
//sintaxis1.Ejercicio23()
sintaxis1.Ejercicio24()
//sintaxis1.Ejercicio25()
