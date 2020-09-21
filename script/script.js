function usernamevalid(username) {
    var user = document.getElementById(username).value;
    if (user.length < 3) {
        document.getElementById(username).style="border-color: red";
    } else {
        document.getElementById(username).style="border-color: green";
    }
}

function emailvalid() {
    var email = document.getElementById("email").value;
    if (email.indexOf('.') == -1 || email.indexOf('@') == -1) {
        document.getElementById("email").style="border-color: red";
    } else {
        document.getElementById("email").style="border-color: green";
    }
}

function passvalid(id) {
    var pass = document.getElementById(id).value;
    if (pass.length < 8) {
        document.getElementById(id).style="border-color: red";
    } else {
        document.getElementById(id).style="border-color: green";
    }
}
function confirmvalid() {
    var pass = document.getElementById("createpass").value;
    var confirm = document.getElementById("confirmpass").value;
    if (pass == confirm) {
        document.getElementById("confirmpass").style="border-color: green";
        return true;
    } else {
        document.getElementById("confirmpass").style="border-color: red";
        return false;
    }
}
function checksubmit() {
    var name = document.getElementById("usernameup").value;
    var email = document.getElementById("email").value
    var pass = document.getElementById("createpass").value;
    var confirm = document.getElementById("confirmpass").value;
    if (name == "" || name.value < 3) {
        document.getElementById("usernameup").style="border-color: red";
    } else if (email == "") {
        document.getElementById("email").style="border-color: red";
    } else if (pass == "" || pass.length < 8) {
        document.getElementById("createpass").style="border-color: red";
    } else if (confirm == "" || confirmvalid() == false) {
        document.getElementById("confirmpass").style="border-color: red";
        alert("1");
    } else {
        
    }

}
function checklogin(username, password, pageid) {
    var name = document.getElementById(username).value;
    var pass = document.getElementById(password).value;
    if (name == "" || name.length < 3) {
        document.getElementById(username).style="border-color: red";
    } else if (pass == "" || pass.length < 8) {
        document.getElementById(password).style="border-color: red";

    } else if (name == "webbadger" && pass == "webbadger") {
        document.getElementById(pageid).style = "visibility: hidden";
        document.getElementById("adminpanal").style = "visibility: visible"
        document.getElementById(username).style = "visibility: hidden";
        document.getElementById(password).style = "visibility: hidden";
        document.getElementById("loginbutton").style = "visibility: hidden";
        document.getElementById("logedinuser").style = "visibility: visible"
        document.getElementById("logedinuser").innerHTML = "Loged In As  " + document.getElementById(username).value + " (Admin)";
    } else {
        document.getElementById(username).style = "visibility: hidden";
        document.getElementById(password).style = "visibility: hidden";
        document.getElementById("loginbutton").style = "visibility: hidden";
        document.getElementById("logedinuser").innerHTML = "Loged In As  " + document.getElementById(username).value;
        document.getElementById("logedinuser").style = "visibility: visible"
    }
}

function displaycategory(category) {
    var categorys = ["programing", "physics"]
    for (var i = 0; i < categorys.length; i++) {
        document.getElementById(categorys[i]).style= "visibility: hidden"; 
    }
    document.getElementById(category).style= "visibility: visible";
    
}

function applytheme() {
    alert("1")
    wallpaper = document.getElementById("content");
    newwallpaper = document.getElementById("newwallpaper").value;
    wallpaper.style = "background-image: url('" + newwallpaper + "')";

}