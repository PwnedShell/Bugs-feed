!function(e){e.fn.endlessScroll=function(r){r=e.extend({},{bottomPixels:50,fireOnce:!0,fireDelay:150,loader:"<br />Loading...<br />",data:"",insertAfter:"div:last",resetCounter:function(){return!1},callback:function(){return!0},ceaseFire:function(){return!1}},r);var i=!0,l=!1,s=0;!0===r.ceaseFire.apply(this)&&(i=!1),!0===i&&e(this).scroll(function(){if(!0!==r.ceaseFire.apply(this)){if(this==document||this==window)var t=e(window).height()-e(window).scrollTop()<=r.bottomPixels;else{var a=e(".endless_scroll_inner_wrap",this);0==a.length&&(a=e(this).wrapInner('<div class="endless_scroll_inner_wrap" />').find(".endless_scroll_inner_wrap"));t=a.length>0&&a.height()-e(this).height()<=e(this).scrollTop()+r.bottomPixels}t&&(0==r.fireOnce||1==r.fireOnce&&1!=l)&&(!0===r.resetCounter.apply(this)&&(s=0),l=!0,s++,e(r.insertAfter).after('<div id="endless_scroll_loader">'+r.loader+"</div>"),data="function"==typeof r.data?r.data.apply(this,[s]):r.data,!1!==data&&(e(r.insertAfter).after('<div id="endless_scroll_data">'+data+"</div>"),e("div#endless_scroll_data").hide().fadeIn(),e("div#endless_scroll_data").removeAttr("id"),r.callback.apply(this,[s]),!1!==r.fireDelay||0!==r.fireDelay?(e("body").after('<div id="endless_scroll_marker"></div>'),e("div#endless_scroll_marker").fadeTo(r.fireDelay,1,function(){e(this).remove(),l=!1})):l=!1),e("div#endless_scroll_loader").remove())}else i=!1})}}(jQuery);