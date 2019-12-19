// window.addEventListener('message', function(eventData) {
//  try {
//   if (JSON.parse(eventData.data)) {
//   let event = JSON.parse(eventData.data);
//   console.log(event, "eventData1");
//   console.log(event.event_code === "custom-event" && event.data && event.data.code === "payment-event", "condition");
//   if (event.event_code === "custom-event" && event.data && event.data.code === "payment-event") {
//    var pageContent = '<html><head></head><body><form id="paymentForm" action="' + event.data.data.link + '" method="post">' + '<input type="hidden" name="lan" value="' + event.data.data.lan + '">' + '<input type="hidden" name="amount" value="' + event.data.data.amount + '">' + '<input type="hidden" name="email" value="' + event.data.data.email + '">' + '<input type="hidden" name="mobile" value="' + event.data.data.mobile + '">' + '<input type="hidden" name="wish" value="' + event.data.data.wish + '">' + '<input type="hidden" name="token" value="' + event.data.data.token + '">' + '<input type="hidden" name="allLans" value="' + event.data.data.lan + '">' + '<input type="hidden" name="flag" value="' + event.data.data.flag + '">' + '</form> <script type="text/javascript">document.getElementById("paymentForm").submit();</script></body></html>'; 
//    console.log(pageContent,"pageContent")
//     var newWindow = window.open();
//       newWindow.document.write(pageContent);
//       newWindow.document.close();
//     return;
//   }
// }
//   return;
//  } catch (error) {
//   console.log(error, "error")
//   return;
//  }
// }, false);
window.addEventListener('message', function(eventData) {
    try {
        if (JSON.parse(eventData.data)) {
            let event = JSON.parse(eventData.data);
            if (event.event_code === "custom-event" && event.data && event.data.code === "payment-event") {
                var pageContent = '<html><head></head><body><form id="paymentForm" action="' + event.data.data.link + '" method="post">' + '<input type="hidden" name="lan" value="' + event.data.data.lan + '">' + '<input type="hidden" name="amount" value="' + event.data.data.amount + '">' + '<input type="hidden" name="email" value="' + event.data.data.email + '">' + '<input type="hidden" name="mobile" value="' + event.data.data.mobile + '">' + '<input type="hidden" name="wish" value="' + event.data.data.wish + '">' + '<input type="hidden" name="token" value="' + event.data.data.token + '">' + '<input type="hidden" name="allLans" value="' + event.data.data.lan + '">' + '<input type="hidden" name="flag" value="' + event.data.data.flag + '">' + '</form> <script type="text/javascript">document.getElementById("paymentForm").submit();</script></body></html>';
                var newWindow = window.open();
                newWindow.document.write(pageContent);
                newWindow.document.close();
                return;
            }
            if (event.event_code === "custom-event" && event.data && event.data.code === "statment-event") {
                var link =  event.data.data;
                console.log(link,"in link");
//                 window.open(link, '_blank', 'location=yes');
                openWithInAppBrowser(link)
                return;
            }
        }
        return;
    } catch (error) {
        console.log(error, "error")
        return;
    }
}, false);
