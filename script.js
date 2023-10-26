
  var countDate= new Date("oct 28, 2023 00:00:00").getTime();
  var x=setInterval(function(){
    var now =new Date().getTime();
    var distance =countDate - now;
    var days=Math.floor(distance/(1000*60*60*24));
    var hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    var minutes=Math.floor((distance%(1000*60*60))/(1000*60));
    var seconds=Math.floor((distance%(1000*60))/1000);
    document.getElementById('days').innerHTML=days;
    document.getElementById('hours').innerHTML=hours;
    document.getElementById('minutes').innerHTML=minutes;
    document.getElementById('seconds').innerHTML=seconds;
  },1000);

  var five=document.getElementById('a-five');
  var studio=document.getElementById('hidden')
  five.addEventListener('mouseover',function displaying(){
    studio.style.display='block';
  })
  studio.addEventListener('mouseout',function disppearing(){
    studio.style.display='none';
  })

  var four=document.getElementById('a-four');
  var beauty=document.getElementById('beauty')
  four.addEventListener('mouseover',function displaying(){
    beauty.style.display='block';
    studio.style.display='none';
    profile.style.display='none';
  })
  four.addEventListener('mouseout',function disppearing(){
    beauty.style.display='none';
  })

  var three=document.getElementById('a-three');
  var home=document.getElementById('home')
  three.addEventListener('mouseover',function displaying(){
    home.style.display='block';
    studio.style.display='none';
    profile.style.display='none';
  })
  three.addEventListener('mouseout',function disppearing(){
    home.style.display='none';
  })

  var two=document.getElementById('a-two');
  var kids=document.getElementById('kids')
  two.addEventListener('mouseover',function displaying(){
    kids.style.display='block';
    studio.style.display='none';
    profile.style.display='none';
  })
  two.addEventListener('mouseout',function disppearing(){
    kids.style.display='none';
  })

  var one=document.getElementById('a-one');
  var women=document.getElementById('women')
  one.addEventListener('mouseover',function displaying(){
    women.style.display='block';
    studio.style.display='none';
    profile.style.display='none';
  })
  one.addEventListener('mouseout',function disppearing(){
    women.style.display='none';
  })

  var zero=document.getElementById('a-zero');
  var men=document.getElementById('men')
  zero.addEventListener('mouseover',function displaying(){
    men.style.display='block';
    studio.style.display='none';
    profile.style.display='none';
  })
  zero.addEventListener('mouseout',function disppearing(){
    men.style.display='none';
  })

  var special=document.getElementById('special');
  var profile=document.getElementById('profile')
  special.addEventListener('mouseover',function displaying(){
    profile.style.display='block';
  })
  profile.addEventListener('mouseout',function disppearing(){
    profile.style.display='none';
  })
profile.addEventListener('click',function navigation(){
  window.location.href="https://www.myntra.com/login?referer=https://www.myntra.com/?utm_source=dms_google&utm_medium=searchbrand_cpc&utm_campaign=dms_google_searchbrand_cpc_Search_Brand_Myntra_Brand_India_BM_TROAS_SOK_New&gclid=CjwKCAjw1t2pBhAFEiwA_-A-NJlted8NhU2YsXapNJ6u1IJhoqojy2zGs20DUz_T4MIFe_vzmN8BVBoCHZQQAvD_BwE";
})
  var up=document.getElementById('up');
  var down=document.getElementById('down')
  var btns=document.getElementById('btns');
  up.addEventListener('click',function displaying(){
    down.style.display='block';
    btns.style.display='block';

  })
  down.addEventListener('click',function disppear(){
    down.style.display='none';
    btns.style.display='none';
  })
  btns.addEventListener('click',function sign(){
      window.location.href="https://www.myntra.com/register?referer=https://www.myntra.com/?utm_source=dms_google&utm_medium=searchbrand_cpc&utm_campaign=dms_google_searchbrand_cpc_Search_Brand_Myntra_Brand_India_BM_TROAS_SOK_New&gclid=CjwKCAjw1t2pBhAFEiwA_-A-NJlted8NhU2YsXapNJ6u1IJhoqojy2zGs20DUz_T4MIFe_vzmN8BVBoCHZQQAvD_BwE";
  })
  document.getElementById('explore').addEventListener('click',function showing(){
    window.location.href="https://www.myntra.com/studio/home?appRoute=%7B%22url%22%3A%22%2Fstudio%2Fhome%22%7D"
  })
