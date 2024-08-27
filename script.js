
let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");

function generateQR(){

  let inputValue = qrText.value.trim();
  if(inputValue.length > 0){
  document.querySelector("#imgBox").style.display="block";
  qrImg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputValue;
  imgBox.classList.add("show-img");
  document.querySelector(".error").style.display="none";
  document.querySelector("#qrText").value="";
  }
  else if(inputValue.length == 0){
    document.querySelector(".error").style.display="block";
    document.querySelector("#qrText").value="";
    document.querySelector("#imgBox").style.display="none";
  }
}