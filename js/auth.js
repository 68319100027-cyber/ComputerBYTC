function handleCredentialResponse(response){
  const data = JSON.parse(atob(response.credential.split('.')[1]));
  userEmail = data.email;

  sessionStorage.setItem("userEmail", userEmail); // 🔥 เพิ่มอันนี้

  console.log("Login:", userEmail);

  if(userEmail.endsWith("@bic.ac.th")){
    alert("✅ Login สำเร็จ");
  } else {
    alert("❌ ต้องใช้ @bic.ac.th");
  }
}