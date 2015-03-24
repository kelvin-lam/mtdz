var id = getQueryString("id");
$(document).ready(function() {
    jQuery.ajax({
        url:"images/schools/schools.xml",
        dataType:"xml",
        error: function(){
            alert('Error loading XML document');
        },
        success:function(xml) {
            var school = jQuery(xml).find("school[id="+id+"]");
            var name = jQuery(school).find("name").html();
            window.document.title = name;
            jQuery(".page-title-container").find("h2.entry-title").html(name);
            jQuery(".page-title-container").find("li.active").html(name);

            jQuery(".tour-detail-page").find(".featured-image").find("img").attr("src",jQuery(school).find("profile").html());

            jQuery(".travelo-box").find("dl.term-description").find("dd.district").html(jQuery(school).find("district").html());
            jQuery(".travelo-box").find("dl.term-description").find("dd.type").html(jQuery(school).find("type").html());
            jQuery(".travelo-box").find("dl.term-description").find("dd.starttime").html(jQuery(school).find("starttime").html());
            jQuery(".travelo-box").find("dl.term-description").find("dd.tuition").html(jQuery(school).find("tuition").html());
            jQuery(".travelo-box").find("dl.term-description").find("dd.dormitory").html(jQuery(school).find("dormitory").html());
            jQuery(".travelo-box").find("dl.term-description").find("dd.dinner").html(jQuery(school).find("dinner").html());
            jQuery(".travelo-box").find("dl.term-description").find("dd.other").html(jQuery(school).find("other").html());

            jQuery(".detailed-features").find(".price-section").find("h4.box-title").html(jQuery(school).find("englishName").html());

            jQuery(".detailed-features").find(".price-section").find(".five-stars-container").find("span").attr("style","width:"+jQuery(school).find("review").html());
            jQuery(".detailed-features").find(".price-section").find("span.price").append(jQuery(school).find("rank").html());

            jQuery(".detailed-features").find(".flights").find("p.requirement").html(html_decode(jQuery(school).find("requirement").html()));
            jQuery(".detailed-features").find(".flights").find("p.apply").html(html_decode(jQuery(school).find("apply").html()));

            tjq(".tour-google-map").gmap3({
                map: {
                    options: {
                        center: [ jQuery(school).find("latitude").html(), jQuery(school).find("longitude").html()],
                        zoom: 12
                    }
                },
                marker:{
                    values: [
                        {latLng:[ jQuery(school).find("latitude").html(), jQuery(school).find("longitude").html()], data:"Princeton University"}

                    ],
                    options: {
                        draggable: false
                    }
                }
            });

            jQuery("#tour-details").find("p.intro").html(html_decode(jQuery(school).find("intro").html()));
            jQuery("#tour-details").find("p.education").html(html_decode(jQuery(school).find("education").html()));
            jQuery("#tour-details").find("p.course").html(html_decode(jQuery(school).find("course").html()));

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