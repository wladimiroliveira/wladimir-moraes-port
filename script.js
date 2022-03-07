function load(){
    var bt1 = document.getElementById('btn1')
    var bt2 = document.getElementById('btn2')
    var box = document.getElementById('content')
    var title = document.getElementById('titulo')
    var descricao = document.getElementById('descri')
    var num = 0
        if(num == 0){
            bt1.style.opacity='50%'
        }
    var pro1 = document.getElementById('pro1')    
    var pro2 = document.getElementById('pro2')    
    var pro3 = document.getElementById('pro3')
    bt1.addEventListener('click', diminu)
    bt2.addEventListener('click', aumentar)

    function aumentar(){
        if(num >= 0 && num < 3){
            num++
                if(num == 1){
                    bt1.style.opacity='1'

                    title.innerHTML='Projeto Android'
                    descricao.innerHTML='Projeto do curso de <a target="_blank" href="https://www.youtube.com/watch?v=Ejkb_YpuHWs">HTML5 e CSS3</a>, feito por Gustavo Guanabara do canal Curso em Video. Modelo de artigo para informa sobre determinado assunto.'

                    pro3.style.opacity='0'
                    pro3.style.transition='opacity .3s ease-in-out'
                } else if(num == 2){
                    pro2.style.transition='opacity .3s ease-in-out'
                    pro2.style.opacity='0'
                    bt2.style.opacity='50%'

                    title.innerHTML='Cordel Moderno'
                    descricao.innerHTML='Segundo projeto do curso de <a target="_blank" href="https://www.youtube.com/watch?v=Ejkb_YpuHWs">HTML5 e CSS3</a>, feito por Gustavo Guanabara do canal Curso em Vídeo. Cordel escrito por Milton Duarte.'
                } else if(num > 2){
                    num -= 1
                }
        }
    }

    function diminu(){
        num--
            if(num == 1){
                pro2.style.transition='opacity .3s ease-in-out'
                pro2.style.opacity='1'
                bt2.style.opacity='1'
                bt2.style.transition='opacity .2s ease-in-out'

                title.innerHTML='Projeto Android'
                descricao.innerHTML='Projeto do curso de <a target="_blank" href="https://www.youtube.com/watch?v=Ejkb_YpuHWs">HTML5 e CSS3</a>, feito por Gustavo Guanabara do canal Curso em Video. Modelo de artigo para informa sobre determinado assunto.'
            } else if(num == 0){
                pro3.style.opacity='1'
                pro3.style.transition='opacity .3s ease-in-out'
                bt1.style.transition='opacity .2s ease-in-out'
                bt1.style.opacity='50%'

                title.innerHTML='Landing Page Ballebot'
                descricao.innerHTML='Landing Page feita com a video aula do canal <a target="_blank" href="https://www.youtube.com/watch?v=llF6vD-RljE">Raffaela Ballerini</a>. Modelo de página para anunciar qualquer produto.'
            } else if(num < 0){
                num += 1
            }
    }
}