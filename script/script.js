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
    } else {
        alert("Your accout has been submitted.");
    }

}
function checklogin(username, password, pageid) {
    var name = document.getElementById(username).value;
    var pass = document.getElementById(password).value;
    if (name == "" || name.length < 3) {
        document.getElementById(username).style="border-color: red";
    } else if (pass == "" || pass.length < 8) {
        document.getElementById(password).style="border-color: red";

    } else if (name == "webbadger" && pass == "webbadger" && pageid == "aboutpage") {
        document.getElementById(pageid).style = "visibility: hidden";
        document.getElementById("adminpanal").style = "visibility: visible"
        document.getElementById("usernamein").style = "visibility: hidden";
        document.getElementById("passwordin").style = "visibility: hidden";
        document.getElementById("loginbutton").style = "visibility: hidden";
        document.getElementById("logedinuser").style = "visibility: visible"
        document.getElementById("logedinuser").innerHTML = "Loged In As  " + document.getElementById(username).value + " [Admin] (Press F5 to log out)";
    } else {
        document.getElementById("usernamein").style = "visibility: hidden";
        document.getElementById("passwordin").style = "visibility: hidden";
        document.getElementById("loginbutton").style = "visibility: hidden";
        document.getElementById("logedinuser").innerHTML = "Loged In As  " + document.getElementById(username).value + " (Press F5 to log out)";
        document.getElementById("logedinuser").style = "visibility: visible"
        document.getElementById("registration").style = "visibility: hidden";
    }
}

function displaycategory(category) {
    var categorys = ["programing", "physics", "calculus"]
    for (var i = 0; i < categorys.length; i++) {
        document.getElementById(categorys[i]).style= "visibility: hidden"; 
    }
    document.getElementById(category).style= "visibility: visible";
    
}

function applytheme() {
    wallpaper = document.getElementById("content");
    newwallpaper = document.getElementById("newwallpaper").value;
    newprimarycolor = document.getElementById("newprimarycolor").value;
    newsecondarycolor = document.getElementById("newsecondarycolor").value;
    if (newwallpaper != "") {
        wallpaper.style = "background-image: url('" + newwallpaper + "')";
    }
    if (newprimarycolor != "") {
        document.documentElement.style.setProperty('--primary-color', newprimarycolor);
    }
    if (newsecondarycolor != "") {
        document.documentElement.style.setProperty('--secondary-color', newsecondarycolor);
    }

}