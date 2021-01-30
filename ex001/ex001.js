/*

    A variável array receberá inicialmente nenhum valor,
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
    mãos, dividimos pelo comprimento do array (array.length). 

    ------------------------- // -------------------------

    The variable array won't get any first value, however,
    going forward execute the function adicionar(), all the
    numbers wrotten will be leaded toward the own array.

    To treat the typed numbers as numbers, we should
    convert their values from string to number. After exe-
    cute such a task, we most create a variable item, which
    would show up an option element from some select, get-
    ting allow then, to get write all of the numbers that 
    have got a initialization.

    Right back to function finalizar(), with all the numbers
    in their own format, we create a repetition structure,
    to sum all the elements. Now, with the result on our hands,
    we divide it throught the array length (array.length).

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