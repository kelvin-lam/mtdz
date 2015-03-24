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

            jQuery(route).find("pic").each(function(){
                alert(jQuery(this).html());
                jQuery("#photos-tab").find("ul").append("" +
                "<li><img src='"+jQuery(this).html()+"'/></li>" +
                "");
            });


            jQuery(xml).find("school").each(function(){
                var current_id = jQuery(this).attr("id");
                if( current_id != jQuery(school).attr("id")){
                    jQuery(".sidebar").find(".image-box").append("" +
                    "<article class='box'> " +
                    "   <figure>" +
                    "       <a href='#'>" +
                    "           <a href='school_detail.html?id="+current_id+"'><img width='63' height='59' src='"+jQuery(this).find("profile").html()+"'></a>" +
                    "       </a>" +
                    "   </figure> " +
                    "   <div class='details'> " +
                    "       <h5 class='box-title'>" +
                    "           <a href='school_detail.html?id="+current_id+"'>"+jQuery(this).find("name").html()+"</a>" +
                    "       </h5>" +
                    "   </div>" +
                    "</article>" +
                    "");
                }
            });
        }
    });


});
