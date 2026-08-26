   class Personagem {
       constructor (nome, vida, ataque){
        this.nome = nome,
        this.vida = vida,
        this.ataque = ataque
       }

       causaDano(personagem){
        personagem.recebeDano(this.ataque)
       }
       recebeDano(quantidade){
        this.vida = this.vida - quantidade 

        if(this.vida <= 0){
            this.vida = "eliminado"
        }
       }

    estaVivo(){
return this.vida > 0
}
mostrarStatus(){
console.log(this.nome + " | Vida: " + this.vida)
}
    
   }

   const druida = new Personagem ("Kode", 80, 25)

const guerreiro = new Personagem("Thorin", 60, 20)

const mago = new Personagem("Gandalfe", 60, 35)

const arqueiro = new Personagem("Legolas", 80, 25)

 const assasino = new Personagem ("Darius", 70, 35)

   const atirador = new Personagem ("Lyra", 60, 30)

   const cavaleiro = new Personagem ("Zephyr", 50, 50)

guerreiro.causaDano(mago)
arqueiro.causaDano(mago)
guerreiro.causaDano(mago)
assasino.causaDano(atirador)
atirador.causaDano(cavaleiro)
cavaleiro.causaDano(assasino)

console.log(assasino.vida)
console.log(atirador.vida)
console.log(cavaleiro.vida)
console.log(mago.vida)
   console.log(mago.mostrarStatus())


