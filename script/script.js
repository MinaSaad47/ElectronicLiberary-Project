function emailvalid() {
    var email = document.getElementById("email").value;
    if (email.indexOf('.') == -1 || email.indexOf('@') == -1) {
        document.getElementById("email").style="background-color: red";
    } else {
        document.getElementById("email").style="background-color: green";
    }
}

function passvalid() {
    var pass = document.getElementById("createpass").value;
    if (pass.length < 8) {
        document.getElementById("createpass").style="background-color: red";
    } else {
        document.getElementById("createpass").style="background-color: green";
    }
}
function confirmvalid() {
    var pass = document.getElementById("createpass").value;
    var confirm = document.getElementById("confirmpass").value;
    if (pass == confirm) {
        document.getElementById("confirmpass").style="background-color: green";
    } else {
        document.getElementById("confirmpass").style="background-color: red";
    }
}
function checksubmit() {
    var name = document.getElementById("usernameup").value;
    var email = document.getElementById("email").value
    var pass = document.getElementById("createpass").value;
    var confirm = document.getElementById("confirmpass").value;
    if (name == "") {
        document.getElementById("usernameup").style="background-color: red";
    } else if (email == "") {
        document.getElementById("email").style="background-color: red";
    } else if (pass == "") {
        document.getElementById("createpass").style="background-color: red";
    } else if (confirm == "") {
        document.getElementById("confirmpass").style="background-color: red";
    } else {
        
    }

}
