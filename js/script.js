(function(a){var t=a("#search-form-wrap"),e=false,n=200;var i=function(){e=true};var r=function(a){setTimeout((function(){e=false;a&&a()}),n)};a("#nav-search-btn").on("click",(function(){if(e)return;i();t.addClass("on");r((function(){a(".search-form-input").focus()}))}));a(".search-form-input").on("blur",(function(){i();t.removeClass("on");r()}));a("body").on("click",(function(){a(".article-share-box.on").removeClass("on")})).on("click",".article-share-link",(function(t){t.stopPropagation();var e=a(this),n=e.attr("data-url"),i=encodeURIComponent(n),r="article-share-box-"+e.attr("data-id"),o=e.offset();if(a("#"+r).length){var s=a("#"+r);if(s.hasClass("on")){s.removeClass("on");return}}else{var c=['<div id="'+r+'" class="article-share-box">','<input class="article-share-input" value="'+n+'">','<div class="article-share-links">','<a href="https://twitter.com/intent/tweet?url='+i+'" class="article-share-twitter" target="_blank" title="Twitter"></a>','<a href="https://www.facebook.com/sharer.php?u='+i+'" class="article-share-facebook" target="_blank" title="Facebook"></a>','<a href="http://pinterest.com/pin/create/button/?url='+i+'" class="article-share-pinterest" target="_blank" title="Pinterest"></a>','<a href="https://plus.google.com/share?url='+i+'" class="article-share-google" target="_blank" title="Google+"></a>',"</div>","</div>"].join("");var s=a(c);a("body").append(s)}a(".article-share-box.on").hide();s.css({top:o.top+25,left:o.left}).addClass("on")})).on("click",".article-share-box",(function(a){a.stopPropagation()})).on("click",".article-share-box-input",(function(){a(this).select()})).on("click",".article-share-box-link",(function(a){a.preventDefault();a.stopPropagation();window.open(this.href,"article-share-box-window-"+Date.now(),"width=500,height=450")}));a(".article-entry").each((function(t){a(this).find("img").each((function(){if(a(this).parent().hasClass("fancybox"))return;if(a(this).parent().parent().hasClass("entry-thumbnail"))return;var t=this.alt;if(t)a(this).after('<span class="caption">'+t+"</span>");a(this).wrap('<a href="'+this.src+'" title="'+t+'" class="fancybox"></a>')}));a(this).find(".fancybox").each((function(){a(this).attr("rel","article"+t)}));if(a(this).find("li img").length>0){a(this).find("li").each((function(t,e){a(e).find(".fancybox").wrapAll("<div class='fancybox-wrapper' />")}))}else{a(this).find(".fancybox").wrapAll("<div class='fancybox-wrapper' />")}a(this).find(".fancybox").wrap("<figure class='fancybox-element' />")}));if(a.fancybox){a(".fancybox").fancybox()}var o=a("#container"),s=false,c=200;var l=function(){s=true};var f=function(){setTimeout((function(){s=false}),c)};a("#main-nav-toggle").on("click",(function(){if(s)return;l();o.toggleClass("mobile-nav-on");f()}));a("#wrap").on("click",(function(){if(s||!o.hasClass("mobile-nav-on"))return;o.removeClass("mobile-nav-on")}))})(jQuery);