$(document).ready(function(){
    $('#carousel-images').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules:{
            nome: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                minlength: 14
            },
            mensagem: {
                required: true
            },
            veiculoInteresse: {
                required: false
            }
        },
        messages: {
            nome: {
                required: 'O campo nome é obrigatório',
                minlength: 'O campo nome deve ter no mínimo 3 caracteres'
            },
            email: {
                required: 'O campo email é obrigatório',
                email: 'Digite um email válido'
            },
            telefone: {
                required: 'O campo telefone é obrigatório',
                minlength: 'O campo telefone deve ter no mínimo 14 caracteres'
            },
            mensagem: {
                required: 'O campo mensagem é obrigatório'
            }
        },
        submitHandler: function(form){
            console.log('Formulário enviado')
        },
        invalidHandler: function(event, validador){
            let camposIncorretos = validador.numberOfInvalids()
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find('h3').text();
        
        $('#veiculoInteresse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})