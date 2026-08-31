   class Personagem {
       constructor (nome, vida, ataque, defesa){
        this.nome = nome,
        this.vida = vida,
        this.ataque = ataque,
        this.defesa = defesa
       }
       curar(quantidade){
         this.vida + quantidade
       }

       causaDano(personagem){
         personagem.recebeDano(this.ataque)
       }

       recebeDano(quantidade){
         let dano = quantidade - this.defesa

        if(this.vida <= 0){
            this.vida = "eliminado"
        }

                this.vida = this.vida - quantidade 
                if (this.vida <= 0)
                  this.vida = "eliminado"
       }

    estaVivo(){
return this.vida > 0
}
mostrarStatus(){
console.log(this.nome + " | Vida: " + this.vida)
}
    
}

   const druida = new Personagem ("Kode", 80, 25, 8)

const guerreiro = new Personagem("Thorin", 60, 20, 15)

const mago = new Personagem("Gandalfe", 60, 35, 5)

const arqueiro = new Personagem("Legolas", 80, 25, 15)

 const assasino = new Personagem ("Darius", 70, 35, 10)

   const atirador = new Personagem ("Lyra", 60, 30, 6)

   const cavaleiro = new Personagem ("Zephyr", 50, 50, 9)

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


