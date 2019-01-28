// Interactivity demo 2

// Zoom Interaction 
var body = document.querySelector('body')
var trigger = document.querySelector('.trigger')

trigger.addEventListener('click', zoom)

function zoom() {
	if (body.id != 'zoom') {
		body.id = 'zoom'
	} else{
		body.id = 'unzoom'
	}




}

// Eclipse Interaction
var moon = document.querySelector('.moon')

moon.addEventListener('mouseenter', showShadow)
moon.addEventListener('mouseleave', hideShadow)

function showShadow() {
	moon.classList.add('eclipse')
}

function hideShadow() {
	moon.classList.remove('eclipse')
}











