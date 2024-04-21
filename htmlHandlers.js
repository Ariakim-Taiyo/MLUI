function changeCustomMenu(a) {
  if (a == 0) {
    document.getElementById("modVehicle").style.display = "none";
    document.getElementById("modLivery").style.display = "flex";
  }
  if (a == 1) {
    document.getElementById("modVehicle").style.display = "flex";
    document.getElementById("modLivery").style.display = "none";
  }
}
