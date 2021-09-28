const IDs = ["bier", "auto2", "bauhaus", "bregenz", "bjarne", "martini",];
window.addEventListener("load", function() { // when page loads
  const randomNumber = Math.floor(Math.random() * IDs.length);
  document.getElementById(IDs[randomNumber]).style.display = "inline";
document.getElementById(IDs[randomNumber]+"Play").play();
})
