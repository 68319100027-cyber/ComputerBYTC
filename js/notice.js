window.checkLogin = function(event){
  let email = sessionStorage.getItem("userEmail");

  if(!email || !email.endsWith("@bic.ac.th")){
    event.preventDefault();

    const notice = document.getElementById("topNotice");

    clearTimeout(noticeTimeout);

    notice.classList.add("show");

    noticeTimeout = setTimeout(()=>{
      notice.classList.add("hide");

      setTimeout(()=>{
        notice.classList.remove("show");
        notice.classList.remove("hide");
      },500);
    },3000);

    return false;
  }

  return true;
}