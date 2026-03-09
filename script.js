(function(){

emailjs.init("kQuiAsasmhpc8N95G");

})();

document
.getElementById("contact-form")
.addEventListener("submit", function(e){

e.preventDefault();

emailjs.sendForm(
"service_xhqqr9r",
"template_4dcj5kv",
this
)

.then(function(){

alert("Message sent successfully!");

}, function(error){

alert("Failed to send message.");

});

});