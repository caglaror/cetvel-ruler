// Copyright 2018 Mustafa Tok

// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:

// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

"use strict";

;(function($){
    $.fn.extend({
        cetvel: function(options) {
            this.defaultOptions = {
                'gorunum': 'portre',
                'tur': 'a4',
                'ust': '#alan',
                'sol': '#ekran',
            };

            // 1 cm = 37.795276 px; 1 px = 0.026458 cm
            // 1 mm = 3.7795275593333 Pixel


            var settings = $.extend({}, this.defaultOptions, options);
              

            let cetvelD = this.defaultOptions.ust;
            let cetvelY = this.defaultOptions.sol;
            $(cetvelD).css('overflow', 'hidden');


            $(cetvelD).append('<div class="ruler"></div>')
            function yatayCetvel() {
                var $ruler = $('.ruler');
                var $this = $('.ruler');
                
                $ruler.append("<div class='secici' ></div>");
                for (var i = 0, step = 0; i < $ruler.innerWidth() / 5; i++, step++) {
                    var $tick = $('<div>');
                    if (step == 0) {
                        $tick.addClass('tickLabel').html(i * 5);

                    } else if ([1, 3, 5, 7, 9].indexOf(step) > -1) {
                        $tick.addClass('tickMinor');
                        if (step == 9) {
                            step = -1;
                        }
                    } else {
                        $tick.addClass('tickMajor');
                    }
                    $ruler.append($tick);
                }
            }

            function dikeyCetvel() {
                var $ruler = $('.rulerVertic');
                $ruler.append("<div class='seciciVertic' ></div>");

                for (var i = 0, step = 0; i < 1100 / 5; i++, step++) {
                    var $tick = $('<div>');
                    if (step == 0) {
                        $tick.addClass('tickLabel').html(i * 5);
                    } else if ([1, 3, 5, 7, 9].indexOf(step) > -1) {
                        $tick.addClass('tickMinor');
                        if (step == 9) {
                            step = -1;
                        }
                    } else {
                        $tick.addClass('tickMajor');
                    }
                    $ruler.append($tick);
                }
            }








// // SELECTBOX
// $('#ebat').on('change',function(event) {
    
//   $('#alan')
//   .removeClass('a3 , a4 , a5').addClass('a'+$('#ebat').find(":selected").val())

// });

  
// $('#dikey-yatay').change(function(event) {

//     var deg = $(this).find(":selected").val() ;
// if ($(this).find(":selected").val() == 'dikey') {
    
//     $.each(['a4-yatay','a5-yatay','a3-yatay'], function(index,key){
//       $('#alan')
//       .removeClass(key)
//     })


// }else{

//  var ebat = $('#ebat').find(":selected").val()
//     $('#alan')
//     .addClass('a'+ebat+'-yatay')

}



             return this.each(function() {
                    var $this = $(this);
                  
                    dikeyCetvel();
                    yatayCetvel();

          


            });
        }
    });
})(jQuery);

// ÖRNEK KULLANIM
// $('#element').cetvel()



/*
 Ekran ölçülerine göre DPI
 7.6 cm  100 DPI
 8.2 cm  92 DPI
 8.9 cm  85 DPI
 9.5 cm  80 DPI
 10.1 cm 75 DPI
 10.8 cm 70 DPI
 11.5 cm 66 DPI
 12 cm   63 DPI
 12.5 cm 60 DPI
*/