// JavaScript Document
$(function(){
	//音乐控制
		
		//播放音乐

		var audio = new Audio(),mSwitch=$('#switch-music'), mTips=$('.tips',mSwitch), isPlay=true, mT=null;

		window.onload = function()
		{

			audio.src = 'images/mp3.mp3';
			audio.loop = true;
			audio.autoplay = true;

			playmusic();

		}

		mSwitch.on("tap",function(){
			if ( $(this).hasClass("on") )
			{
				$(this).removeClass("on");
				mTips.text('暂停播放').addClass('on');
				$("#m_off").css("display","block");
				setTimeout(function(){mTips.removeClass("on")},1000);
				
				audio.pause();


			}
			else
			{
				$(this).addClass("on");
				mTips.text('开始播放').addClass('on');
				$("#m_off").css("display","none");
				setTimeout(function(){mTips.removeClass("on")},1000);

					audio.play();

				}
			
		})
		function playmusic()
		{

			mSwitch.addClass('on');
			$("#m_off").css("display","none");

			audio.play();

			
		}

		audio.addEventListener('play',function(){
			mSwitch.addClass('on');
			clearTimeout(mT);
			mTips.text('').addClass('on');
			$("#m_off").css("display","none");
			mT=setTimeout(function(){
				mTips.removeClass('on')
			},1000);
			isPlay=true;
		},false);
		
		audio.addEventListener('pause',function(){
			mSwitch.removeClass('on');
			clearTimeout(mT);
			mTips.text('').addClass('on');
			$("#m_off").css("display","block");
			mT=setTimeout(function(){
				mTips.removeClass('on')
			},1000);
			isPlay=false;
		},false);


	/*$(".loading").css("display","none"); */
	
	//Loading 层
	document.onreadystatechange = subSomething;//当页面加载状态改变的时候执行这个方法. 
    function subSomething() 
    { 
      if(document.readyState == "complete") //当页面加载状态 
      {		
/*window.onload = function(){}*/
                    

	 	
	  }
    } 
	
	//屏蔽普通滑动事件，使屏幕固定
	function stopScrolling( touchEvent ) { 
		touchEvent.preventDefault(); 
	}
	document.addEventListener( 'touchstart' , stopScrolling , false );
	document.addEventListener( 'touchmove' , stopScrolling , false );
	
	//翻页设置

	//定义初始页面
	$.cookie("page_num", 0);
	
	var touch_box = document.querySelector('#touch_box');
	


	/*$("#touch_box").on('touchstart', '.selector', function(event) {
		event.preventDefault();
		 Act on the event 
	});*/




	var tload=setInterval(function(){


		if(loadcount>=48)
		{


					page_num =0
					$.cookie("page_num", page_num);
					$.mobile.changePage("#page_"+page_num+"",{transition:"pop"}, true ,false)
					$(".loading").css("display","none");




			clearInterval(tload);
		}

	},200);
	
	
	
	
	
	
	function loadScoure(elem , callback){
    var arr = document.getElementsByTagName("img");
    var count = 0;
    var l = arr.length;
    (function(){
        var img = new Image();
        var args = arguments;
        callback =  callback || function(){};
        img.onload = function(){
            if(count == l - 1){
                callback();
            }else{
                count++;
                elem.innerHTML = parseInt((count/l) * 100, 10) + "%";
                args.callee();
            }
        }
        img.src = arr[count];
        img.onerror = function(){
            setTimeout(callback, 3000);
        }
    })();
}

loadScoure("test", as());

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	
	

				
//	touch.on(English, 'tap', function(event) {
//		window.location.href = "http://huaxia.vicbang.com/invitation_en/";
//	});


function as(){
			
	touch.on(touch_box,'swipeup',function(){



		var page_num = parseInt($.cookie("page_num")); //1
		
		page_num = page_num+1   //2
		
		if(page_num >= 9){   //10

			page_num = 0;

		    $.cookie("page_num", page_num);

		    $.mobile.changePage("#page_"+page_num+"",{transition:"slide"}, true ,false);	
		    		
		}else{ $.cookie("page_num", page_num);
/*$(document).on("pageinit","#page_"+page_num+"",function(){})*/
                   

		    $.mobile.changePage("#page_"+page_num+"",{transition:"slide"}, true ,false);}

        
		//alert(page_num);
		
	});
		
	touch.on(touch_box,'swipedown',function(){
		
		var page_num = parseInt($.cookie("page_num"));
		
		page_num = page_num-1
		
		
		//alert(page_num);
		if(page_num <= (-1)){
				page_num = 9 ;
			  $.cookie("page_num", page_num);
		
		      $.mobile.changePage("#page_"+page_num+"",{transition:"slidedown"}, true ,false);
		}else{ $.cookie("page_num", page_num);

		    $.mobile.changePage("#page_"+page_num+"",{transition:"slidedown"}, true ,false);	}
		
		
	});
	
}
	
	
});
