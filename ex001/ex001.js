/*

    A variável 'array' receberá inicialmente nenhum valor,
    porém, ao executar a function adicionar(), todos os nú-
    meros digitados serão levados para o array.

    Para tratar os números digitados como numbers, devemos
    converter seus valores de string para number. Após exe-
    cutar tal tarefa, devemos criar uma variável item, que 
    representará uma option do elemento select, permitindo
    então, escrever todos os números inicializados.

    Já dentro da function finalizar(), com todos os números
    em formato number, criamos uma estrutura de repetição,
    para somar todos os elementos. Com resultado da soma em
    mãos, dividimos pela largura do array (array.length). 

*/ 

let array = []

let txtn = document.querySelector('#txtn')
let tab = document.querySelector('#tab')

function adicionar() {

    if (txtn.value.length == 0) {

        alert('[ERRO]')

    } else {

        tab.style.height = '235.5px'

        let n = Number.parseFloat(txtn.value)
        array.push(n)

        let item = document.createElement('option')
        
        for (let i = 1; i <= array.length; i++) {

            item.text = `${i}° Nota: ${n}`

        }

        tab.appendChild(item)

        txtn.focus()
        txtn.value = ''

    }

}

function finalizar() {

    if (array.length == 0) {

        alert('[ERRO]')

    } else {

        let res = document.querySelector('#res')
        tab.innerHTML = ''

        res.style.width = '270px'

        setTimeout(function () {

            res.style.height = '215px'

            let total = 0

            for (let s in array) {

                total += array[s]

            }
            
            let media = total/array.length

            res.innerHTML += `<br>Média do Aluno: ${media}`

            array = []

        }, 400)

    }

}