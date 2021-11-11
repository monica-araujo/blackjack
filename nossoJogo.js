/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log('Bem vindo ao jogo de Blackjack!')

const cartaUsuario = comprarCarta()
const cartaUsuario2 = comprarCarta()
    
const cartaComputador = comprarCarta()
const cartaComputador2 = comprarCarta()

const pontuacaoUsuario = cartaUsuario.valor + cartaUsuario2.valor
const pontuacaoComputador = cartaComputador.valor + cartaComputador2.valor
    
if(confirm("Quer iniciar uma nova rodada?")) {
   console.log(`Usuário - cartas: ${cartaUsuario.texto} ${cartaUsuario2.texto} - pontuação ${cartaUsuario.valor + cartaUsuario2.valor}`)
   console.log(`Computador - cartas: ${cartaComputador.texto} ${cartaComputador2.texto} - pontuação ${cartaComputador.valor + cartaComputador2.valor}`)

if (pontuacaoUsuario > pontuacaoComputador){
   console.log('O usuário ganhou!')
} else if (pontuacaoComputador > pontuacaoUsuario){
   console.log('O computador ganhou!')
} else if (pontuacaoComputador === pontuacaoUsuario){
   console.log('Empate!')
}

} else {
   console.log('O jogo acabou')
}

