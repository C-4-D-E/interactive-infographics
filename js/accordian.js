var imagePath = '/images/'

	var header = {
			headline: 'Industry 4.0 <br /> Design Principles',
			intro:'Our top tips for incorporating technology into your enterprise'
		}

	var content = [
		{
			buttonText:'Interoperability',
			buttonImage:'interoperability.svg',
			buttonImageReverse:'interoperability_white.svg',
			revealText:'The ability of objects, machines and people in your business to communicate, exchange data and coordinate activities.',
		},
		{
			buttonText:'Virtualisation',
			buttonImage:'virtualisation.svg',
			buttonImageReverse:'virtualisation_white.svg',
			revealText:'The ability to create a virtualised view of your operations or virtual copies of everything to see how new equipment or processes will impact operations.',
		},
		{
			buttonText:'Decentralisation',
			buttonImage:'decentralized.svg',
			buttonImageReverse:'decentralized_white.svg',
			revealText:'Business logic (the programming that manages the communication between a database and the end user interface) that is contained in sub-systems or components rather than a central computer system, enabling cyber-physical systems to make autonomous decisions.',
		},

		{
			buttonText:'Real-time capability',
			buttonImage:'real-time-data.svg',
			buttonImageReverse:'real-time-data_white.svg',
			revealText:'The collection and analysis of data in real-time, allowing decisions to be made immediately and at every moment.',
		},
		{
			buttonText:'Service orientation',
			buttonImage:'service-orientation.svg',
			buttonImageReverse:'service-orientation_white.svg',
			revealText:'Free information flow within and between businesses to better meet customer needs.',
		},
		{
			buttonText:'Modularity',
			buttonImage:'modular.svg',
			buttonImageReverse:'modular_white.svg',
			revealText:'The ability to flexibly adapt to changing requirements and industry needs.',
		},
	]

	function headerTemplate(){
		return '<h2 class="interactiveHead">' + header.headline + '</h2><h3 class="interactiveIntro">' + header.intro + '</h3>'
	}


	function cardTemplate(x){
	return '<div class="cardOuterWrapper cardOuterWrapper_off"><div class="circleButton_wrapper"><div class="imageButton"><img class="buttonIcon" src="' + imagePath + content[x].buttonImage + '" /><img class="buttonIconReverse" style="display:none;" src="' + imagePath + content[x].buttonImageReverse + '" /></div><div class="buttonText">' + content[x].buttonText + '</div><div class="buttonPlus"><img src="' + imagePath + 'plus.svg" /></div><div class="circleButton" data-index="'+ x +'"></div></div><div class="textWrapper  textOff"><div class="textInnerWrapper"><p class="interactiveText">' + content[x].revealText + '</p></div></div></div>'		
	}

	
	var appContainer = document.getElementById('appContainer')
	var contentLength = content.length
	var cardStored = []
	
	var makeHeader = headerTemplate()

	for ( var x = 0; x < contentLength; x++) {
		cardStored.push(cardTemplate(x));
	}

	appContainer.innerHTML = makeHeader + cardStored.join("<!-- -->");
	
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
	var appContainerWidth = appContainer.getBoundingClientRect().width
	var allTextWrappers = document.getElementsByClassName('textWrapper')
	var cardOuterWrappers = document.getElementsByClassName('cardOuterWrapper')
	var circleButtonWrappers = document.getElementsByClassName('circleButton_wrapper')
	var buttonPlusIcon = document.getElementsByClassName('buttonPlus')
	var buttonImage = document.getElementsByClassName('imageButton')
	var buttonIcon = document.getElementsByClassName('buttonIcon')
	var buttonIconReverse = document.getElementsByClassName('buttonIconReverse')
	var buttonText = document.getElementsByClassName('buttonText')
	var activeRow = null
	var elementsInRow = null
	var contentLength = cardOuterWrappers.length;

	
	appContainer.setAttribute('data-mobile', isMobile)

function addbuttonClickies(){
    var circlebuttons = document.querySelectorAll('.circleButton');
    for (var i=0; i<circlebuttons.length; i++) {
        circlebuttons[i].addEventListener("click", function(event){

			var thisIndex = parseInt(this.getAttribute('data-index'));

			appContainerWidth = appContainer.getBoundingClientRect().width
			elementsInRow = parseInt(appContainerWidth / 158);
			
			var activeIndex = thisIndex + 1
			
			var rowNumber = Math.ceil(activeIndex/elementsInRow) ;

			var isSameRow = !!activeRow && activeRow == rowNumber

			for (var d=0; d<circlebuttons.length; d++) {
				buttonPlusIcon[d].style.opacity = ''
				buttonText[d].style.color = ''
				buttonIcon[d].style.display = 'block'
				buttonIconReverse[d].style.display = 'none'
				
				if (!isSameRow) {
					cardOuterWrappers[d].classList.add('animate');

				} else {
					cardOuterWrappers[d].classList.remove('animate');
				}

				allTextWrappers[d].classList.add('textOff');
				cardOuterWrappers[d].classList.add('cardOuterWrapper_off');
				circleButtonWrappers[d].style.backgroundColor = '';
			}

			allTextWrappers[thisIndex].classList.remove('textOff');
			cardOuterWrappers[thisIndex].classList.remove('cardOuterWrapper_off');
			circleButtonWrappers[thisIndex].style.backgroundColor = 'black';
			buttonIcon[thisIndex].style.display = 'none';
			buttonIconReverse[thisIndex].style.display = 'block';
			buttonText[thisIndex].style.color = '#FFF';
			buttonPlusIcon[thisIndex].style.opacity = '0';

			activeRow = rowNumber;
         })
    }
}

addbuttonClickies()