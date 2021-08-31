document.addEventListener("DOMContentLoaded", function(){

    el_autohide = document.querySelector('.autohide');
    
    // add padding-top to bady (if necessary)
    navbar_height = document.querySelector('.navbar').offsetHeight;
    document.body.style.paddingTop = navbar_height + 'px';
  
    if(el_autohide){
      var last_scroll_top = 0;
      window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
           if(scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            }
            else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
      }); 
      // window.addEventListener
    }
    // if
  
  });
  window.addEventListener("DOMContentLoaded", function(){
                     
                    if(document.querySelector("body").offsetWidth<900){
                        console.log(document.querySelector("body").offsetWidth);
                      let x=document.querySelectorAll(".shadow");
                        document.querySelector("body").style.padding ="0px";
                        for(var i=0;i<x.length;i++){
                        x[i].style.marginTop="10px";
                        x[i].style.padding="0px";
                        x[i].style.width="100%";}
                    }
                    
                    
                    // if(screen.offsetWidth<900||window.offsetWidth<900)
                    //   { 
                
                });


            
  
  