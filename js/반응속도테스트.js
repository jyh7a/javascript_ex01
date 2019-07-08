var 스크린 = document.querySelector('#screen');
var 시작시간;
var 기록 = [];
var 타임아웃; 

스크린.addEventListener('click', function(){	
	if(스크린.classList.contains('waiting')){	// 현재 준비 상태인지 파악
		스크린.classList.remove('waiting');	// 현재빨간색
		스크린.classList.add('ready');				
		스크린.textContent = '초록색이되면 클릭하세요.';
		타임아웃 = setTimeout(function(){
			시작시간 = new Date();
			스크린.click();
		}, Math.floor(Math.random() * 1000) + 2000); // 2초 에서 3초사이
	}else if(스크린.classList.contains('ready')){
		if(!시작시간){ // 부정클릭
			clearTimeout(타임아웃);
			스크린.classList.remove('ready');	// 현재 초록색 여기서  끝시간체크
			스크린.classList.add('waiting');		
			스크린.textContent = '너무 성급하시Goon Yo~!';		
		}else{
			스크린.classList.remove('ready');	// 현재 초록색 여기서  끝시간체크
			스크린.classList.add('now');		
			스크린.textContent = '클릭하세요!';		
		}		
	}else if(스크린.classList.contains('now')){
		var 끝시간 = new Date();
		console.log(끝시간,' , ', 시작시간);
		console.log('반응속도', (끝시간 - 시작시간)/1000, 's');
		기록.push((끝시간 - 시작시간)/1000);
		시작시간 = null;
		스크린.classList.remove('now');	// 아쿠아색 대기상테
		스크린.classList.add('waiting');
		스크린.textContent = '클릭해서 시작하세요!';		
	}	
	console.log('클릭!');
});





























