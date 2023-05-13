
$(document).ready(function () {

  $(".btn").click(function () {

    var value =$(this).attr('data-filter');
    
    if (value == 'all') {
      $('.filter').show('1000');
      
    }else{
      $('.filter').not('.'+value).hide('3000');
      $('.filter').filter('.'+value).show('3000');

    }
  });

  if ($(".btn").removeClass("active")) {
    $(this).removeClass("active");
    
  }
  $(this).addClass("active");
  
});

$(document).ready(function () {
  $('.box-item').magnificPopup({
  type:'image',
  delegate:'a',
  gallery : {
    enabled :true
  }

  });
  
});


let send = document.querySelector('.');

send.addEventListener('click', function() {
  
  Email.send({
    Host : "smtp.yourisp.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
  }).then(
  message => alert(message)
  );

});

function sendMail() {


}












/*
let btns = document.querySelectorAll(".btn");
let item = document.querySelectorAll(".item");


for(let i= 0; i<btns.length; i++){
  btns[i].addEventListener('click', function () {
    
    for(let j= 0; j<btns.length; j++){
    btns[j].classList.remove('active');

    }
    this.classList.add('active');
    let data = this.getAttribute('data-filter');

    for(let k= 0; k <item.length; k++){
     
      item[k].classList.remove('active');
      item[k].classList.add('hide');
      
      if (item[k].getAttribute('data-item') == data || data == "all") {
        item[k].classList.remove('hide');
        item[k].classList.add('active');
      }
    }

  })
} */
