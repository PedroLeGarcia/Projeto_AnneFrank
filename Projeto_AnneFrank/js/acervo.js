//Funções do Menu
function MenuShow() {
	let menuMobile = document.querrySelector('.mobile-menu');
	if (menuMobile.classList.contains('open')) {
		menuMobile.classList.remove('open');
		document.querrySelector('.icon').src = "imagens/menu_white_36dp.svg";
	}else{
		menuMobile.classList.add('open');
		document.querrySelector('.icon').src = "imagens/close_white_36dp.svg";	
	}
}
//Livros
window.onload = function(){
    var url = 'https://virtuallibrary.profrodolfo.com.br/book.php';
    var d = document.querySelector('.dados');

    function ExibirLivros(){
        fetch(url)
        .then(resposta => {
            return resposta.json();
        })
        .then((json)=>{        
            for(i = 0; i < json.length; i++){
            		d.innerHTML+= `
            			<center>
                        <div class="productBox">
                            <img src="${json[i].capa}">
                            <h1>${json[i].titulo}</h1>
                        </div>
                        </center>
                	`;
            }
        }).catch();
    }

    ExibirLivros();

}