 window.onload() = function(){
 var url = 'https://virtuallibrary.profrodolfo.com.br/book.php';
    var d = document.querySelector('.dados');
     let btn = document.getElementById('buscar');
    let campbusca = document.getElementById('txtBusca');
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
//Login

function PesquisarLivro(){
        let search = document.getElementById('txtBusca').value.toUpperCase();
        fetch(url)
        .then(resposta => {
            return resposta.json();
        })
        .then((json)=>{        
            for(i = 0; i < json.length; i++){
                if(json[i].titulo.toUpperCase().includes(search)){
                    d.innerHTML+= `
                        <div class="productBox">
                            <img src="${json[i].capa}">
                            <h3>${json[i].titulo}</h3>
                            <h4>${json[i].ano}</h4>
                        </div>
                    `;
                }
            }
        }).catch();
    }


    btn.addEventListener('click', function(){
        d.innerHTML = ``;
        PesquisarLivro();
    });
    ExibirLivros();
}


