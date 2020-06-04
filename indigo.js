function run_recaptcha(){
     grecaptcha.ready(function () {
        grecaptcha.execute('6LfsIrQUAAAAADX6a1sWsNVLQFKFdoA4_7N4YvdU', {action: 'submit'}).then(function (token) {
             document.getElementsByClassName("grecaptcha-badge")[0].style.visibility = "hidden";
             document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
                event_code: 'ym-client-event',
                data: JSON.stringify({
                    event: {
                        code: "recaptcha_token",
                        data: token
                    }
                })
            }), '*');
            return;
        });
    });
}

function recaptcha_token () {
     let fileref=document.createElement('script')
     fileref.setAttribute("src", "https://www.google.com/recaptcha/api.js?render=6LfsIrQUAAAAADX6a1sWsNVLQFKFdoA4_7N4YvdU")
     document.head.appendChild(fileref);
}

window.addEventListener('message', function(eventData) {
    try { 
         if(!window.grecaptcha){
            recaptcha_token ();
         }
        if (JSON.parse(eventData.data)) {
            let event = JSON.parse(eventData.data);
             console.log(event.data.code,"event.data.code")
             if (event.event_code === "custom-event" && event.data && event.data.code === "live_agent") {
                var newWindow = window.open(event.data.data);
                return;
            }
            else if (event.event_code === "custom-event" && event.data && event.data.code === "recaptcha"){
                console.log("i am in token")
                run_recaptcha();
                return;
            } 
            else{
                return;
            }
         }
    } catch (error) {
        return;
    }
}, false);
