$(document).ready(function() {
    jQuery.ajax({
        url:"images/routes/routes.xml",
        dataType:"xml",
        error: function(){
            alert('Error loading XML document');
        },
        success:function(xml) {
            jQuery(xml).find("route").each(function(){
                jQuery(".tour-detail-page").find(".hotel-list").append("" +
                    "<article class='box'> " +
                    "   <figure class='col-sm-5 col-md-4'> " +
                    "       <a href='route_detail.html?id="+jQuery(this).attr("id")+"' href='' class=''><img width='270' height='160' alt='' src='"+jQuery(this).find("profile").html()+"'></a> " +
                    "   </figure> " +
                    "   <div class='details col-sm-7 col-md-8'> " +
                    "       <div> " +
                    "           <div> " +
                    "               <h4 class='box-title'>"+jQuery(this).find("title").html()+"</h4> " +
                    "           </div> " +
                    "           <div> " +
                    "               <div class='five-stars-container'> " +
                        "               <span class='five-stars' style='width: "+jQuery(this).find("reviews").find("point").html()+";'></span> " +
                        "           </div> " +
                    "               <span class='review'>"+jQuery(this).find("reviews").find("count").html()+" 评论</span> " +
                    "           </div> " +
                    "       </div> " +
                    "       <div> " +
                    "           <p>" +
                                    html_decode(buildDescription(jQuery(this).find("description").html())) +
                    "           </p> " +
                    "           <div> " +
                    "               <span class='price'>"+jQuery(this).find("price").html()+"</span>"+
                    "               <a class='button btn-small full-width text-center' title='' href='route_detail.html?id="+jQuery(this).attr("id")+"'>查看详情</a> " +
                    "           </div> " +
                    "       </div> " +
                    "   </div> " +
                    "</article>"
                );
            });
        }
    });


});

function buildDescription(desc){
    var des = desc.replace("&lt;h2&gt;","").replace("&lt;/h2&gt;","&lt;/br&gt;").replace("&lt;p&gt;","").replace("&lt;/p&gt;","&lt;/br&gt;");
    return des.length>200 ? des.substr(0,200)+"..." : des;
}