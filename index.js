function maioridade() {

    const idades = [14, 24, 35, 18, 48]
    idades.sort()

    idades.forEach(idade => {

        if (idade >= 18) {

            console.log(idade + ' - Maior de Idade;')

        } else {

            console.log(idade + ' - Menor de Idade;')

        }

    })

} 

maioridade()