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