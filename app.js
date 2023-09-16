
result = {
    "tag": "",
    "free": true,
    "role": false,
    "user": "hello749",
    "email": "hello749@gmail.com",
    "score": 0.48,
    "state": "undeliverable",
    "domain": "gmail.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
}
// let resc = document.getElementsByClassName("rescont");
// let sb = document.getElementsByClassName("btn")
btn.addEventListener("click", async (e) => {
    e.preventDefault();
    let key = "ema_live_xf8luUaoFOmD0jqDq2EWVlAczI2yfrrvTqm7a0Sv";
    let email = document.getElementById("inp").value;
    let str = ``
    resultcon.innerHTML = `<img src="media/loading.svg" alt="loading" width="50px">`
    if(email=="") {
        str += `<p> Please Enter Something ! 😒😒</p>`
        resultcon.innerHTML = str;
        return ;
    }
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
    let res = await fetch(url);
    let result = await res.json();
    for (k of Object.keys(result)) {
        if (result[k] != "" && result[k] != " ") {
            str += `<p>${k} : ${result[k]}</p>`
        }
    }
    resultcon.innerHTML = str;
})


