const IDs = ["spaghetti","zelt","bier"];
const randomNumber = Math.floor(Math.random()*IDs.length);
document.getElementById(IDs[randomNumber]).style.display = "inline";