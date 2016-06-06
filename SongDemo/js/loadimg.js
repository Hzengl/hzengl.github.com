loadcount=0;
function loadimg(imgname)
	{
		
	 	var img=new Image();
		img.onload=function(){
			loadcount++;
			
		}
		
		img.src=imgname;
	}
	loadimg("images/loading.gif");
		loadimg("images/1.jpg");

		  loadimg("images/2.jpg");

		    loadimg("images/3.jpg");

			  loadimg("images/4.jpg");

               loadimg("images/5.jpg");
			  loadimg("images/6.jpg");





