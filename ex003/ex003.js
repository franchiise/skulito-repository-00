/* 

    Basicamente a ideia do exercício é a mesma do anterior.
    A única mudança está nas estruturas condicionais para
    realizar atividades de identificação, como para não 
    ultrapassar os 5 números.

    Para definir o maior valor, novamente direcionados
    para um array e com a utilização do método Math.max()
    para identificar o maior valor dentro dos números
    relatados ou do array em si.

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

        if (array.length != 1) {

            res.innerHTML += ` - ${n} `

        } else {

            res.innerHTML += n                   

        }

        if (array.length > 5) {

            res.innerHTML = ''

            alert('[ERRO]')

            array = []

        } else if (array.length == 5) {

            let max = Math.max(...array)

            alert(`Maior número identificado: ${max}`)

        }

        txtn.focus()
        txtn.value = ''
    
    }

}