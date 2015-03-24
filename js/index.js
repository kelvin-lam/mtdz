$(document).ready(function() {
    jQuery.ajax({
        url:"images/schools/schools.xml",
        dataType:"xml",
        error: function(){
            alert('Error loading XML document');
        },
        success:function(xml) {
            jQuery(xml).find("school").each(function(){
                var id = jQuery(this).attr("id");
                if( id == 1){
                    jQuery(".schools").find(".main").find("img").attr("src",jQuery(this).find("profile").html());
                    jQuery(".schools").find(".main").find(".details").find("h4").html(jQuery(this).find("name").html());
                    jQuery(".schools").find(".main").find(".details").find("span").attr("style","width:"+jQuery(this).find("review").html());
                    jQuery(".schools").find(".main").find("a").attr("href","school_detail.html?id="+jQuery(this).attr("id"));
                }else{
                    jQuery(".schools").find(".small").append("" +
                    "<div class='col-sms-6 col-sm-6 col-md-4'>" +
                    "   <article class='box'> " +
                    "       <figure class='animated' data-animation-type='fadeInDown' data-animation-delay='0.4'> " +
                    "           <a href='school_detail.html?id="+jQuery(this).attr("id")+"'><img width='270' height='160' alt='' src='"+jQuery(this).find("profile").html()+"'></a>" +
                    "       </figure> " +
                    "       <div class='details text-center'> " +
                    "           <a href='school_detail.html?id="+jQuery(this).attr("id")+"'><h4 class='box-title'>"+jQuery(this).find("name").html()+"</h4></a>" +
                    "           <div data-placement='bottom' data-toggle='tooltip' class='five-stars-container'> " +
                    "               <span style='"+"width:"+jQuery(this).find("review").html()+"' class='five-stars'></span> " +
                    "           </div> " +
                    "       </div> " +
                    "   </article>" +
                    "</div>");
                }
            });
        }
    });


});