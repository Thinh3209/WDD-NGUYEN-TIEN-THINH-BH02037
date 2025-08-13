const signinBtn = document.getElementById("signinBtn");
const signupBtn = document.getElementById("signupBtn");
const nameField = document.getElementById("nameField");
const title = document.getElementById("title");

// Chuyển giữa login/register UI
signupBtn.onclick = function () {
  nameField.style.display = "block";
  title.innerText = "Đăng ký";
  signupBtn.classList.add("disable");
  signinBtn.classList.remove("disable");
};

signinBtn.onclick = function () {
  if (title.innerText === "Đăng nhập") {
    // Giả sử đăng nhập thành công → chuyển hướng
    window.location.href = "home.html";  // ← Thay đổi đường dẫn tại đây nếu cần
  } else {
    // Nếu đang ở chế độ đăng ký thì chuyển về giao diện đăng nhập
    nameField.style.display = "none";
    title.innerText = "Đăng nhập";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
  }
};
