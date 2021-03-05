/*make your product details become stocky*/

$(document).ready(function(){
  var header_wrap = document.querySelector('#header');
  var header_top  = document.querySelector('.header-top');

  window.addEventListener('scroll', makeitstick);
});

function makeitstick() {

		if( $('body#product').length > 0 ) {
	    	makeStaticProductSidebar( this.scrollY, header_wrap, this.innerWidth );
	    }
}

function makeStaticProductSidebar( scrollY , header_wrap, scrollX) {
	var product_image_wrapper = document.querySelector('.product-image-wrapper');
	var product_details = document.querySelector('.fixed-on-scroll-product-section');
	var max_top = product_image_wrapper.offsetHeight - product_details.offsetHeight;

	if( scrollY >= header_wrap.offsetHeight && scrollX >= 768) {       
        if(!product_details.classList.contains("active")) {
            product_details.classList.add("active");
        }        

        if ( scrollY <= max_top) {
			product_details.style.top = scrollY +"px";
        }else{
        	product_details.style.top = max_top + "px";
        	return;
        }
    }
    else  {
        if(product_details.classList.contains("active")){
           product_details.classList.remove("active"); 
           product_details.style.top = 0;
        }
    } 
}
