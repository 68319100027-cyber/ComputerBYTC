// โหลด Firebase
const script1 = document.createElement('script');
script1.src = "https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js";
document.head.appendChild(script1);

const script2 = document.createElement('script');
script2.src = "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth-compat.js";
document.head.appendChild(script2);

script2.onload = () => {

  const firebaseConfig = {
    apiKey: "AIzaSyCsPomNoHSNzIJJOdSSSqI3YoGtpngcgUM",
    authDomain: "login-dc200.firebaseapp.com",
    projectId: "login-dc200"
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  // บังคับล็อกอินใหม่
  auth.signOut();

  // ดึง HTML ของ login overlay
  fetch('login.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('loginContainer').innerHTML = data;

      // หลังจาก HTML โหลดแล้ว → ผูก Event listener
      const loginBtn = document.getElementById('googleLoginBtn');
      if(loginBtn){
        loginBtn.addEventListener('click', () => {
          const provider = new firebase.auth.GoogleAuthProvider();
          auth.signInWithPopup(provider);
        });
      }

      // ตรวจสอบล็อกอิน
      const overlay = document.getElementById('loginOverlay');
      auth.onAuthStateChanged(user => {
        if(user && user.email.endsWith("@bic.ac.th")){
          overlay.style.display = 'none';
        } else {
          overlay.style.display = 'flex';
        }
      });
    })
    .catch(console.error);

};