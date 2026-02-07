// Get elements from HTML
const usernameInput = document.getElementById("username");
const saveBtn = document.getElementById("saveBtn");
const clearBtn = document.getElementById("clearBtn");
const output = document.getElementById("output");

// Load saved name when page loads
const savedName = localStorage.getItem("username");

if (savedName) {
  output.textContent = "Welcome back, " + savedName + "!";
}

// Save name to localStorage
saveBtn.addEventListener("click", () => {
  const name = usernameInput.value;

  if (name === "") {
    alert("Please enter a name");
    return;
  }

  localStorage.setItem("username", name);
  output.textContent = "Saved! Hello, " + name;
  usernameInput.value = "";
});

// Clear localStorage
clearBtn.addEventListener("click", () => {
  localStorage.removeItem("username");
  output.textContent = "Name cleared!";
});
