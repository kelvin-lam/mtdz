var id = getQueryString("id");
$(document).ready(function() {
    jQuery.ajax({
        url:"images/routes/routes.xml",
        dataType:"xml",
        error: function(){
            alert('Error loading XML document');
        },
        success:function(xml) {
            var route = jQuery(xml).find("route[id="+id+"]");
            var name = jQuery(route).find("title").html();
            window.document.title = name;
            jQuery(".page-title-container").find("h2.entry-title").html(name);
            jQuery(".page-title-container").find("li.active").html(name);

            var imagesHtml="";
            jQuery(route).find("pic").each(function(){
                imagesHtml += "<li><img src='"+jQuery(this).html()+"'/></li>";
            });
            var tabHtml = "" +
                "<div id='photos-tab' class='tab-pane fade in active'> " +
                "   <div class='photo-gallery style1' data-animation='slide' data-sync='#photos-tab .image-carousel'> " +
                "       <ul class='slides'> " +
                            imagesHtml +
                "       </ul> " +
                "   </div> " +
                "   <div class='image-carousel style1' data-animation='slide' data-item-width='70' data-item-margin='10' data-sync='#photos-tab .photo-gallery'> " +
                "       <ul class='slides'> " +
                            imagesHtml +
                "       </ul> " +
                "   </div> " +
                "</div>";

            jQuery("#main").find("#hotel-main-content").find(".tab-content").append(tabHtml);

            jQuery('.image-carousel').each(function() {
                displayImageCarousel(jQuery(this));
            });
            jQuery('.photo-gallery').each(function() {
                displayPhotoGallery(jQuery(this));
            });

            jQuery("#hotel-features").find(".tab-content").find(".long-description").html(html_decode(jQuery(route).find("description").html()));

            jQuery("#hotel-reviews").find(".score").find(".point").html(returnFloat(parseFloat(jQuery(route).find("reviews").find("point").html())*5.0/100.0));
            jQuery("#hotel-reviews").find(".five-stars-container").find(".five-stars").attr("style","width:"+jQuery(route).find("reviews").find("point").html());
            jQuery("#hotel-reviews").find(".detailed-rating").find(".guide").attr("style","width:"+jQuery(route).find("reviews").find("guide").html());
            jQuery("#hotel-reviews").find(".detailed-rating").find(".tour").attr("style","width:"+jQuery(route).find("reviews").find("tour").html());
            jQuery("#hotel-reviews").find(".detailed-rating").find(".hotel").attr("style","width:"+jQuery(route).find("reviews").find("hotel").html());

            jQuery(route).find("reviews").find("review").each(function(){
                jQuery("#hotel-reviews").find(".guest-reviews").append("" +
                "<div class='guest-review table-wrapper'> " +
                    "<div class='col-xs-3 col-md-2 author table-cell'> " +
                        "<a href='#'><img src='images/default_profile.png' alt='' width='270' height='263' /></a> " +
                        "<p class='name'>"+jQuery(this).find("name").html()+"</p> " +
                    "</div> " +
                    "<div class='col-xs-9 col-md-10 table-cell comment-container'> " +
                        "<div class='comment-header clearfix'> " +
                            "<h4 class='comment-title'>"+jQuery(this).find("time").html()+"</h4> " +
                            "<div class='review-score'> " +
                                "<div class='five-stars-container'>" +
                                    "<div class='five-stars' style='width: "+jQuery(this).find("point").html()+";'></div>" +
                                "</div> " +
                                "<span class='score'>"+returnFloat((parseFloat(jQuery(this).find("point").html())*5.0/100.0))+"/5.0</span> " +
                            "</div> " +
                        "</div> " +
                        "<div class='comment-content'> " +
                            "<p>"+jQuery(this).find("comment").html()+"</p> " +
                        "</div> " +
                    "</div> " +
                "</div>");
            });

            jQuery(xml).find("route").each(function(){
                jQuery(".sidebar").find(".other").append("" +
                "<article class='detailed-logo'> " +
                "   <figure> " +
                "       <a href='route_detail.html?id="+jQuery(this).attr("id")+"'><img width='114' height='85' src='"+jQuery(this).find("profile").html()+"' alt=''></a> " +
                "   </figure> " +
                "   <div class='details'> " +
                "       <a href='route_detail.html?id="+jQuery(this).attr("id")+"'><h2 class='box-title' style='font-size: 14px;'>"+jQuery(this).find("title").html()+"</h2></a> " +
                "       <span class='price clearfix'> " +
                "           <div title='4 stars' class='five-stars-container pull-left' data-toggle='tooltip' data-placement='bottom'>" +
                "               <span class='five-stars' style='width: "+jQuery(this).find("reviews").find("point").html()+";'></span>" +
                "           </div> " +
                "           <span class= 'pull-right'>"+jQuery(this).find("price").html()+"</span> " +
                "       </span> " +
                "</div> " +
                "</article>");
            });
        }
    });


});
