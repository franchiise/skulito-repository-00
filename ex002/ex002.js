/*  

    array, receberá novamente todos os números digitados pelo
    usuário, e poderá reproduzi-los um de cada vez com seu valor
    ao quadrado (n ** 2), através da function adicionar().

    Por array estar armazenada dentro de um let, permite alte-
    rar seu valor na linha (39), resetando o contador do próprio 
    array, por questões de escopo.

    Finalizando então, no final do código, criamos uma estrutura 
    condicional, que irá garantir a quantidade mínima de números
    (5), e como dito anteriormente, irá rescrever o valor do ar-
    ray para 0, resetando seu resultado. 
    
    ---------------------------- // ----------------------------

    array, it will receive again all of the numbers entered by the 
    user, and will be able to reproduce each one of them with 
    your own values squared over (n ** 2), by the function adici-
    onar().

    Because array has being stored inside a let, it allows us to
    change it's value at (39) line, restoring the counter of it-
    self array, by scope reasons.

    Going forward the end, at the end of the code, we create
    a conditional structure. Who will get sure a minimun amount
    of numbers (5), and as it was earlier, it will rewrite the
    array value for 0, resseting it's result. 

    ---------------------------- // ----------------------------

    array, it will receive again all of the numbers entered by the 
    user, and will be able to reproduce each one of them with 
    your own values squared over (n ** 2), by the function adici-
    onar().

    Because array has being stored inside a let, it allows us to
    change it's value at (39) line, restoring the counter of it-
    self array, by scope reasons.

    Going forward the end, at the end of the code, we create
    a conditional structure. Who will get sure a minimun amount
    of numbers (5), and as it was earlier, it will rewrite the
    array value for 0, resseting it's result. 

*/

let array = []

function adicionar() {

    let txtn = document.querySelector('#txtn')
    let res = document.querySelector('#res')

    if (txtn.value.length == 0) {
        alert('[ERRO]')

    } else {

        let n = Number(txtn.value)
        array.push(n)

        res.innerHTML += `<br>${n}² = ${n ** 2}`

        if (array.length > 5) {

            res.innerHTML = ''

            alert('[ERRO]')

            array = []

        }

    }

}
