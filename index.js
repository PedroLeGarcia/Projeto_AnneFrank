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