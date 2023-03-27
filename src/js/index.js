/*
Objetivo > quando clicarmos no botão temos que mostrar a imagem de fundo correspondente 
*/

//Passo 1 > pegar o elemento HTML dos botões 
const botoesCarrossel = document.querySelectorAll('.botao')
const imagens = document.querySelectorAll('.imagem')
//Passo 2 > indentificar o clique do usuario no botão
botoesCarrossel.forEach((botao, indice) =>{
    botao.addEventListener('click', () => {
        //Passo 3 > desmarcar o botão selecionado anterior
        const botaoSelecionado = document.querySelector('.selecionado')
        botaoSelecionado.classList.remove('selecionado')

        //Passo 4 > marcar o botão clicado como se estivesse selecionado
        botao.classList.add('selecionado')

        //Passo 5 > esconder a imagem ativa de fundo anterior
        const imagemAtiva = document.querySelector('.ativa')
        imagemAtiva.classList.remove('ativa')
        //Passo 6 > fazer aparecer a imagem de fundo correspondente ao botão(
        imagens[indice].classList.add('ativa')

    })
})


