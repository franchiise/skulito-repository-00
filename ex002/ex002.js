const array = []

function adicionar() {

    let txtn = document.querySelector('#txtn')
    let res = document.querySelector('#res')

    if (txtn.value.length == 0) {

        alert('[ERRO]')

    } else {

        let n = Number(txtn.value)
        array.push(n)

        if (array.length > 5) {

            alert('[ERRO]')

        } else {

                    

        }

    }

}