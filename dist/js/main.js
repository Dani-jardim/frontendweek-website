$.ajaxChimp.translations['pt-BR'] = {
  'submit': 'Enviando...',
  0: 'Enviamos uma mensagem de confirmação para o seu email.',
  1: 'Por favor coloque um email valido.',
  2: 'O e-mail deve conter um único @',
  3: 'Parte final do email é inválido (a parte após o @: )',
  4: 'Parte inicial do email é inválido(a parte antes do @: )',
  5: 'Este endereço de email parece inválido. Insira um endereço de email real'
};

$("#newsletter-subscribe").ajaxChimp({
  language: 'pt-BR'
});

$("[data-go-to]").on('click', function(e){
  var $elem = $(e.currentTarget),
    id = "#" + $elem.data("go-to");
  $('html,body').animate({ scrollTop: $(id).offset().top }, 800);
});
