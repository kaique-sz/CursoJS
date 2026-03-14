var agora = new Date() // New date serve para usar as horas reais, junto com o gethours
var hora = agora.getHours()

console.log (`Agora sao ${hora} horas`)

if (hora < 12) {

    console.log(`Bom dia`)

} else if (hora <= 18) {

    console.log (`Boa tarde`)

}else {

    console.log (`Boa noite`)
}