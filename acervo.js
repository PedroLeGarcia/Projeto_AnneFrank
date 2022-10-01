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
                        <div class="productBox">
                            <img src="${json[i].capa}">
                            <h1>${json[i].titulo}</h1>
                        </div>
                	`;
            }
        }).catch();
    }

    ExibirLivros();

}