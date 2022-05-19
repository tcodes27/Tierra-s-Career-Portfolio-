console.log('Working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){

    switch(mode) {
        case 'blue':
            document.getElementById('theme-style').href = 'blue.css';
            break;
        
        case 'green':
            document.getElementById('theme-style').href = 'green.css';
            break;
        
        case 'purple':
            document.getElementById('theme-style').href = 'purple.css';
            break;

        default:
            document.getElementById('theme-style').href = 'style.css';
    }

	localStorage.setItem('theme', mode)
}