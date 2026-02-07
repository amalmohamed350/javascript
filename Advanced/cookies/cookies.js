const nameInput = document.getElementById("nameInput");
const result = document.getElementById("result");

const setCookieBtn = document.getElementById("setCookieBtn");
const getCookieBtn = document.getElementById("getCookieBtn");
const deleteCookieBtn = document.getElementById("deleteCookieBtn");

/* SET COOKIE */
setCookieBtn.addEventListener("click", () => {
  const name = nameInput.value;

  if (name === "") {
    alert("Enter a name first");
    return;
  }

  document.cookie = "username=" + name + "; max-age=60"; // 1 minute
  result.textContent = "Cookie saved!";
  nameInput.value = "";
});

/* GET COOKIE */
getCookieBtn.addEventListener("click", () => {
  const cookies = document.cookie;

  if (cookies.includes("username")) {
    const username = cookies
      .split("; ")
      .find((row) => row.startsWith("username="))
      .split("=")[1];

    result.textContent = "Cookie value: " + username;
  } else {
    result.textContent = "No cookie found";
  }
});

/* DELETE COOKIE */
deleteCookieBtn.addEventListener("click", () => {
  document.cookie = "username=; max-age=0";
  result.textContent = "Cookie deleted";
});
