
(function ($) {
    "use strict";

   
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }
    class MouseLight {
        constructor(selector, options) {
          const defaults = {
            background: '#000',
            highlight: '#fff',
            size: '400px',
          }
          this.x = 0;
          this.y = 0;
          this.gradientElement = document.querySelector(selector);
          this.config = Object.assign(defaults, options);
          this.width = document.documentElement.clientWidth;
          this.height = document.documentElement.clientHeight;
          document.addEventListener('mousemove', this.mouseMoveHandler.bind(this));
          
          // update on initialisation
          this.updateGradient();
          this.animate = this.animate.bind(this);
          requestAnimationFrame(this.animate);
        }
        
        mouseMoveHandler(event) {
          const { clientX, clientY } = event;
          const x = (clientX / this.width);
          const y = (clientY / this.height);
          this.x += (x - this.x) * 0.1;
          this.y += (y - this.y) * 0.1;
        }
        
        animate() {
          this.updateGradient();
          requestAnimationFrame(this.animate);
        }
        
        updateGradient() {
          const {size, highlight, background} = this.config;
           this.gradientElement.style.background = `radial-gradient(${size} at ${this.x * 100}% ${this.y * 100}%, ${highlight}, ${background})`;
        }
      }
      
      // Create an instance
      new MouseLight('.mouse-gradient', {
        background: '#4a4cdb',
        highlight: '#FF0a6c',
        size: '1500px',
      });
    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

    /*==================================================================
    [ Modal ]*/
    $('.modal-subscribe').on('click',function(e){
        e.stopPropagation();
    })
    
    $('.btn-close-modal').on('click', function(){
        $('#subscribe').modal('hide');
    });

})(jQuery);