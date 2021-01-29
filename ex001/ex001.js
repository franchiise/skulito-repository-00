const array = []

let txtn = document.querySelector('#txtn')
let tab = document.querySelector('#tab')

function adicionar() {

    if (txtn.value.length == 0) {

        alert('[ERRO]')

    } else {

        tab.style.height = '235.5px'

        let n = Number.parseInt(txtn.value)
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
        res.innerHTML += ''

        setTimeout(function () {

            let mw = res.style

            if (mw == true) {



            }

            res.style.height = '215px'

            let total = 0

            for (let s in array) {

                total += array[s]

            }
            
            let media = total/array.length

            res.innerHTML += `<br>Média do Aluno: ${media}`

        }, 400)

    }

}