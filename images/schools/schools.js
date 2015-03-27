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
            var name = jQuery(school).find("name").text();
            window.document.title = name;
            jQuery(".page-title-container").find("h2.entry-title").html(name);
            jQuery(".page-title-container").find("li.active").html(name);

            jQuery(".tour-detail-page").find(".featured-image").find("img").attr("src",jQuery(school).find("profile").text());

            jQuery(".travelo-box").find("dl.term-description").find("dd.district").html(jQuery(school).find("district").text());
            jQuery(".travelo-box").find("dl.term-description").find("dd.type").html(jQuery(school).find("type").text());
            jQuery(".travelo-box").find("dl.term-description").find("dd.starttime").html(jQuery(school).find("starttime").text());
            //jQuery(".travelo-box").find("dl.term-description").find("dd.tuition").html(jQuery(school).find("tuition").text());
            //jQuery(".travelo-box").find("dl.term-description").find("dd.dormitory").html(jQuery(school).find("dormitory").text());
            //jQuery(".travelo-box").find("dl.term-description").find("dd.dinner").html(jQuery(school).find("dinner").text());
            //jQuery(".travelo-box").find("dl.term-description").find("dd.other").html(jQuery(school).find("other").text());

            jQuery(".detailed-features").find(".price-section").find("h4.box-title").html(jQuery(school).find("englishName").text());

            jQuery(".detailed-features").find(".price-section").find(".five-stars-container").find("span").attr("style","width:"+jQuery(school).find("review").text());
            jQuery(".detailed-features").find(".price-section").find("span.price").append(jQuery(school).find("rank").text());

            jQuery(".detailed-features").find(".flights").find("p.requirement").html(html_decode(jQuery(school).find("requirement").text()));
            //jQuery(".detailed-features").find(".flights").find("p.apply").html(html_decode(jQuery(school).find("apply").text()));

            tjq(".tour-google-map").gmap3({
                map: {
                    options: {
                        center: [ jQuery(school).find("latitude").text(), jQuery(school).find("longitude").text()],
                        zoom: 12
                    }
                },
                marker:{
                    values: [
                        {latLng:[ jQuery(school).find("latitude").text(), jQuery(school).find("longitude").text()], data:"Princeton University"}

                    ],
                    options: {
                        draggable: false
                    }
                }
            });

            jQuery("#tour-details").find("p.intro").html(html_decode(jQuery(school).find("intro").text()));
            jQuery("#tour-details").find("p.education").html(html_decode(jQuery(school).find("education").text()));
            jQuery("#tour-details").find("p.course").html(html_decode(jQuery(school).find("course").text()));

            jQuery(xml).find("school").each(function(){
                var current_id = jQuery(this).attr("id");
                if( current_id != jQuery(school).attr("id")){
                    jQuery(".sidebar").find(".image-box").append("" +
                    "<article class='box'> " +
                    "   <figure>" +
                    "       <a href='#'>" +
                    "           <a href='school_detail.html?id="+current_id+"'><img width='63' height='59' src='"+jQuery(this).find("profile").text()+"'></a>" +
                    "       </a>" +
                    "   </figure> " +
                    "   <div class='details'> " +
                    "       <h5 class='box-title'>" +
                    "           <a href='school_detail.html?id="+current_id+"'>"+jQuery(this).find("name").text()+"</a>" +
                    "       </h5>" +
                    "   </div>" +
                    "</article>" +
                    "");
                }
            });
        }
    });


});