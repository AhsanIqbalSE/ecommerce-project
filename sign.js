    var userArray = [];
    // window.onload = init;

    var data;

    function getdata(data) {

        data = {
            signup_name: document.getElementById("signup_name").value,
            signup_email: document.getElementById("signup_email").value,
            signup_password: document.getElementById("signup_password").value,
            signup_repassword: document.getElementById("signup_repassword").value,
        };
        var user = (JSON.parse(localStorage.getItem("data")));
        if (user) {
            for (var i = 0; i < user.length; i++) {
                if (user[i].signup_email == data.signup_email) {
                    var notexistEmail = user[i].signup_email;
                }
            }
        }
        if (notexistEmail !== data.signup_email || user == null) {
            if (data.signup_name !== "" && data.signup_email !== "" && data.signup_password !== "" && data.signup_repassword !== "" && data.signup_password == data.signup_repassword) {
                userArray = JSON.parse(localStorage.getItem("data")) || [];
                userArray.push(data);
                localStorage.setItem("data", JSON.stringify(userArray));
                userArray = localStorage.getItem("data");
                userArray = JSON.parse(userArray);
                alert("successfully registered");
                document.getElementById('id1').style.display = 'none';
                document.getElementById('id2').style.display = 'block';

            } else {
                alert("password not match");
            }
        } else {
            alert("user exist")
        }
    }



    function signin() {
        if (document.getElementById("password").name == "psw") {
            var enterEmail = document.getElementById("email").value
            var enterPassword = document.getElementById("password").value
            console.log('enterEmail: ', enterEmail)
            console.log('enterPassword: ', enterPassword)
        }
        // nullpattren(enterEmail, enterPassword)
        var data = (JSON.parse(localStorage.getItem("data")));
        console.log("data", data)

        if (data == null) {
            alert("You are not registerd");
            document.getElementById('id2').style.display = 'none'
            document.getElementById('id1').style.display = 'block'

        } else {

            if (document.getElementById("email").value == "" || document.getElementById("password").value == "") {
                alert("Enter your email and password")
            } else {
                // if (data != null) {

                console.log("length", data.length);
                for (var i = 0; i < data.length; i++) {

                    // console.log(data[i].email, "   ", data[i].password1);
                    if (data[i].signup_email == enterEmail && data[i].signup_password == enterPassword) {
                        user_Name = data[i].signup_name;
                        var validEmail = data[i].signup_email;
                        var validPassword = data[i].signup_password;
                        break;
                    }
                }
                if (validEmail == enterEmail && validPassword == enterPassword) {
                    alert(user_Name + " you are successfully logged in ");
                    userMode()

                } else {
                    alert("PLease enter correct email/password");
                }

            }
        }
    }

    function userMode() {
        signout = document.getElementById("signin_signout").innerHTML = "SIGN OUT";
        signout = localStorage.setItem("signout", JSON.stringify(signout));
        document.getElementById("signin_signout").removeAttribute("onclick");
        document.getElementById("signin_signout").setAttribute('onclick', 'normalMode()');
        document.getElementById('id2').style.display = 'none'

    }

    // function dj() {
    //     document.getElementById("signin_signout").onclick = "normalMode()";
    // }

    function normalMode() {
        signout = document.getElementById("signin_signout").innerHTML = "SIGN IN";
        signout = localStorage.setItem("signout", JSON.stringify(signout));
        document.getElementById("signin_signout").href = "index.html";
        document.getElementById("signin_signout").removeAttribute("onclick");
        document.getElementById("signin_signout").setAttribute("onclick", "document.getElementById('id2').style.display='block'");
        document.getElementById("purchase").href = "#";
        document.getElementById("purchase").setAttribute("onclick", "document.getElementById('id2').style.display='block'");
    }

    newFunction()

    function newFunction() {
        signout = JSON.parse(localStorage.getItem("signout"));
        if (signout == "SIGN OUT") {
            document.getElementById("signin_signout").innerHTML = "SIGN OUT";
            document.getElementById("signin_signout").removeAttribute("onclick");
            document.getElementById("signin_signout").setAttribute('onclick', 'normalMode()');
            document.getElementById("purchase").removeAttribute("onclick");
            document.getElementById("purchase").href = "check.html";

        } else {
            document.getElementById("signin_signout").innerHTML == "SIGN IN";
            document.getElementById("signin_signout").removeAttribute("onclick");
            document.getElementById("signin_signout").setAttribute("onclick", "document.getElementById('id2').style.display='block'")

        }
    }