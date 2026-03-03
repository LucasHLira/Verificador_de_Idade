function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById(`txtano`)
    let res = document.getElementById('resultado')
   

    if (fano.value.length == 0 || fano.value > ano) {
        alert("[ERRO] Informe uma data correta!")
        res.innerText = 'Informe uma data correta'
    } else{
        let sexo = document.getElementsByName('sexo')
        let idade = ano - fano.value
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute("id", "foto")
        img.width = 200
        img.height = 200
    

        if (sexo[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', "imgs/foto-criança-menino.jpg")
            } else{
                if(idade < 21){
                    //jovem
                    img.setAttribute('src', "imgs/foto-jovem-menino.jpg")
                } else {
                    if (idade < 60) {
                       //adulto
                       img.setAttribute('src', "imgs/foto-adulto.jpg")
                    } else{
                        //idoso
                        img.setAttribute('src', "imgs/foto-idoso.jpg")
                    }
                }
            }
        } else {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', "imgs/foto-criança-menina.jpg")
            } else{
                if(idade < 21){
                    //jovem
                    img.setAttribute('src', "imgs/foto-jovem-menina.jpg")
                } else {
                    if (idade < 60) {
                       //adulto
                       img.setAttribute('src', "imgs/foto-adulta.jpg")
                    } else{
                        //idoso
                        img.setAttribute('src', "imgs/foto-idosa.jpg")
                    }
                }
            }
        }
        
        res.style.textAlign = "center"
        res.innerText = `Detectamos ${genero} com idade de ${idade} anos` 
        res.appendChild(img)
        
    }

}