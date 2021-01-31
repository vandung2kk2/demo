window.onload=function(){
	var login = document.getElementById("login"),
		user = document.getElementById("username"),
		pass = document.getElementById("password");
	var inp = document.getElementsByClassName("inp");
	for(let i=0; i<2;i++){
		inp[i].addEventListener("input", function(){
			console.log(this);
			if(this.value != ""){
				this.classList.add("active")
			}else this.classList.remove("active");
		})
	}
	var show = document.getElementById("show");
	show.onclick = function(){
		if(pass.getAttribute("type") == "password"){
			pass.setAttribute("type","text");
			this.innerText = "Hide";
			pass.setAttribute("autofocus", true);
		}else{
			pass.setAttribute("type","password");
			this.innerText = "Show";
		}
	}
	login.addEventListener("click",checkLogin);
	function checkLogin(){
		console.log("ok");
	}
}