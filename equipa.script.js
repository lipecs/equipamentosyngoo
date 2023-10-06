// Seção para o botão ao topo.

// Exibe o botão após o usuário descer 20px do topo do documento.
window.onscroll = function() {scrollFunction()};

function scrollFunction(){ // scrollTop pega o número de pixels que é scrollado horizontalmente. Há variações como bottom, left e right.
  
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    
    document.getElementById("btn-top").style.display = "block";
    
  } else {
    
    document.getElementById("btn-top").style.display = "none";
    
  }
  
}

// Não colocar dentro da outra função, o encapsulamento irá impedir funcionamento!!
function topFunction(){
    
  document.body.scrollTop = 0; // Chrome, Safari, Opera.
  document.documentElement.scrollTop = 0; // IE e Firefox.
    
}

// Filter lists

function myFunction() {
  
  // Variáveis
  var input, filter, ul, li, a, i;
  input = document.getElementById('myInput'); // o valor da variável input será o que escrever no campo de pesquisa.
  filter = input.value.toUpperCase(); // o que for escrito no campo de pesquisa receberá a letra maiúscula no começo e será o valor de filter.
  ul = document.getElementById("myUL"); // irá pegar o valor de ul dentre os elementos já escritos no HTML(ou extraídos de um arquivo .JSON).
  li = ul.getElementsByTagName('li'); // dentro de ul, os elementos com a tag 'li' serão parte da variável.
  
  // Um loop será realizado entre todos os itens da lista, que irá esconder os que não correspondem ao escrito no campo de busca.
  for (i = 0; i < li.length; i++) {
    
    a = li[i].getElementsByTagName("a")[0]; // a busca será iniciada desde o primeiro elemento, indicado pelo [0] no array.
    
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      
      li[i].style.display = "";
      
    } else {
      
      li[i].style.display = "none";
      
    }
  }
}











