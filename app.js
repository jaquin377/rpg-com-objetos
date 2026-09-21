
class Personagem {
  constructor(nome, vida, ataque, defesa) {
    this.nome = nome
    this.vida = vida
    this.ataque = ataque
    this.defesa = defesa
  }

  curar(quantidade) {
    this.vida = this.vida + quantidade
  }

  causaDano(personagem) {
    personagem.recebeDano(this.ataque)
  }

  recebeDano(quantidade) {
    let dano = quantidade - this.defesa

    if (dano < 0)
      dano = 0

    this.vida = this.vida - dano

    if (this.vida <= 0) {
      this.vida = "eliminado"
    }
  }

  estaVivo() {
    return this.vida > 0
  }

  mostrarStatus() {
    console.log(this.nome + " | Vida: " + this.vida)
  }
}

class Guerreiro extends Personagem {
golpePesado(personagem){
personagem.recebeDano(this.ataque * 2)
 }
}

class Mago extends Personagem {
bolaDeFogo(personagem){
personagem.recebeDano(this.ataque + 15)
 }
}
class Arqueiro extends Personagem {
tiroPreciso(personagem){
personagem.recebeDano(this.ataque + 10)
 } 
}

const druida = new Personagem("Kode", 80, 25, 8)
const guerreiro = new Guerreiro("Thorin", 60, 20, 15)
const mago = new Personagem("Gandalfe", 60, 35, 5)
const arqueiro = new Personagem("Legolas", 80, 25, 15)
const assasino = new Personagem("Darius", 70, 35, 10)
const atirador = new Personagem("Lyra", 60, 30, 6)
const cavaleiro = new Personagem("Zephyr", 50, 50, 9)

const personagens= {
  druida,
  guerreiro,
  mago,
  arqueiro,
  assasino,
  atirador,
  cavaleiro,
}

personagens.forEach(function(personagem){
  personagem.mostrarStatus()
})

let turno = 1
let jogadorAtual = 0

function proximoTurno(){
  turno = + 1
  jogadorAtual = jogadorAtual === 0 ? 1 : 0
}

const vidaGuerreiro = document.getElementById("vida-guerreiro")
vidaGuerreiro.innerText = guerreiro.vida

const ataqueGuerreiro = document.getElementById("ataque-guerreiro")
ataqueGuerreiro.innerText = guerreiro.ataque

const guerreiroAtacar = document.getElementById("guerreiro-atacar")
guerreiroAtacar.addEventListener("click",() => {
         guerreiro.causaDano(mago)
         vidaMago.innerText = mago.vida
})

const vidaMago = document.getElementById("vida-mago")
vidaMago.innerText = mago.vida

const ataqueMago = document.getElementById("ataque-mago")
ataqueMago.innerText = mago.ataque

const MagoAtacar = document.getElementById("mago-atacar")
magoAtacar.addEventListener("click",() => {
         mago.causaDano(guerreiro)
         vidaGuerreiro.innerText = guerreiro.vida
})