let número = [5, 8, 2, 9, 3]
número.push(1)
número.sort()
console.log(número)
console.log(` O vetor é o ${número.length} posições `)
console.log(` O primeiro vetor do valor é ${número[3]} `)
let position = número.indexOf(4)
if (position == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 8 está na posição ${position}`)
}
