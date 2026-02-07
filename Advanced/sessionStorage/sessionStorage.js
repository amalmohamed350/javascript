// Get elements from HTML
const usernameInput = document.getElementById("username");
const saveBtn = document.getElementById("saveBtn");
const clearBtn = document.getElementById("clearBtn");
const output = document.getElementById("output");

// Load saved name when page loads
const savedName = sessionStorage.getItem("username");

if (savedName) {
  output.textContent = "Welcome back, " + savedName + "!";
}

// Save name to sessionStorage
saveBtn.addEventListener("click", () => {
  const name = usernameInput.value;

  if (name === "") {
    alert("Please enter a name");
    return;
  }

  sessionStorage.setItem("username", name);
  output.textContent = "Saved! Hello, " + name;
  usernameInput.value = "";
});

// Clear sessionStorage
clearBtn.addEventListener("click", () => {
  sessionStorage.removeItem("username");
  output.textContent = "Name cleared!";
});
