function FormatAddress() {
  name = document.getElementById("my_name").value;
  street = document.getElementById("my_street").value;
  city = document.getElementById("my_city").value;
  state = document.getElementById("my_state").value;
  zip = document.getElementById("my_zip").value;
  var formCityState = city + ", " + state + " " + zip;
  document.getElementById("formName").innerHTML = name;
  document.getElementById("formStreet").innerHTML = street;
  document.getElementById("formCityState").innerHTML = formCityState;
}

function Reset() {
  document.getElementById("my_name").value = "";
  document.getElementById("my_street").value = "";
  document.getElementById("my_city").value = "";
  document.getElementById("my_state").value = "";
  document.getElementById("my_zip").value = "";
  document.getElementById("formName").innerHTML = "";
  document.getElementById("formStreet").innerHTML = "";
  document.getElementById("formCityState").innerHTML = "";
}
