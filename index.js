//Felipão, não consegui testar pq depois que fiz a conexão com o github ele aparece tudo escrito no terminal e sumiu o sinal de play.
let heroi = ""
let xp = ""

console.log ("Digite o nome do herói")
console.log ("Digite o XP")

switch (xp){
    case xp < 1000
    console.log("Ferro")
    break

    case xp > 1000 && xp <= 2000
    console.log("Bronze")
    break

    case xp > 2000 && xp <= 5000
    console.log("Prata")
    break

    case xp > 5000 && xp <= 7000
    console.log("Ouro")

    case xp > 7000 && xp <= 8000
    console.log("Platina Diamante")
    break

    case xp > 8000 && xp <= 9000
    console.log("Ascendente")
    break

    case xp > 9000 && xp <= 10000
    console.log("Imortal")
    break

    default
    console.log("Radiante")
}
