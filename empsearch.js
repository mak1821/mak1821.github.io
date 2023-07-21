var urlParams = new URLSearchParams(window.location.search);
var token = urlParams.get("token");
var currtoken=process.env.token;

if(token!=currtoken)
{
    console.log("Hello");
    redirectToAnotherPage1();
}

function redirectToAnotherPage1() {
    var url = "employer-login.html";
    window.location.href = url;
  }


document.getElementById('reg').onclick = async function() {
    event.preventDefault();

    const reg=document.getElementById("search").value.toUpperCase();
    redirectToAnotherPage(reg);
}

function redirectToAnotherPage(reg) {
    var encodedMessage = encodeURIComponent(reg);
    var encodedtoken = encodeURIComponent(token);
    var url = "getcompleteinfoind.html?message=" + encodedMessage + "&token=" + encodedtoken;
    window.location.href = url;
  }
  