$(".nav-item").ready(Ready);
$(document).on("DOMContentLoaded", DOMLoaded);
$(document).on("submit", "#frm-login", Login);
$(document).on("submit", "#frm-register", Register);

function DOMLoaded() {
    $("#navbar").load("../html/menu.html");
}

function Ready() {
    var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);

    $(".nav-item a").each(function () {
        if ($(this).attr("href") == pgurl || $(this).attr("href") == '') {
            $(this).addClass("active");
        }
    });
}

function Login(e) {
    e.preventDefault();

    $.ajax({
        type: "POST",
        url: "../php/login.php",
        data: $("#frm-login").serialize(),
        success: function (result) {
            result = $.parseJSON(result);

            if (result.success) {
                alert("Fullname: " + result.fullname + "\n" +
                    "Phone: " + result.phone + "\n" +
                    "Birthday: " + result.birthday + "\n" +
                    "Age: " + result.age);

                $("#frm-login").trigger("reset");
                location.href = "product.html";
            }
            else {
                alert("Login unsuccessfully!");
            }
        }
    });
}

function Register(e) {
    e.preventDefault();

    if ($("#password").val() === $("#confirm-password").val()) {
        $.ajax({
            type: "POST",
            url: "../php/register.php",
            data: $("#frm-register").serialize(),
            success: function (result) {
                result = $.parseJSON(result);

                if (result.success) {
                    alert("Registered successfully!");
                    $("#frm-register").trigger("reset");
                    location.href = "login.html";
                }
                else {
                    alert("Registered unsuccessfully!");
                }
            }
        });
    }
    else {
        $("#error").text("* Password mismatched.\n");
    }
}


function Logout(e) {
    e.preventDefault();

    sessionStorage.setItem("username", $('#frm-login #username'));
    $('nav #nav-logout').hide();
    $('nav #nav-login').show();
}