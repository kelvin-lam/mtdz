$(document).ready(function() {
    jQuery.ajax({
        url:"images/schools/schools.xml",
        dataType:"xml",
        error: function(){
            alert('Error loading XML document');
        },
        success:function(xml) {
            jQuery(xml).find("school").each(function(index){
                if(index>6){return;}
                var id = jQuery(this).attr("id");
                if( id == 1){
                    jQuery(".schools").find(".main").find("img").attr("src",jQuery(this).find("profile").text());
                    jQuery(".schools").find(".main").find(".details").find("h4").html(jQuery(this).find("name").text());
                    jQuery(".schools").find(".main").find(".details").find("span").attr("style","width:"+jQuery(this).find("review").text());
                    jQuery(".schools").find(".main").find("a").attr("href","school_detail.html?id="+jQuery(this).attr("id"));
                }else{
                    jQuery(".schools").find(".small").append("" +
                    "<div class='col-sms-6 col-sm-6 col-md-4'>" +
                    "   <article class='box'> " +
                    "       <figure class='' data-animation-type='fadeInDown' data-animation-delay='0.4'> " +
                    "           <a href='school_detail.html?id="+jQuery(this).attr("id")+"'><img width='270' height='160' alt='' src='"+jQuery(this).find("profile").text()+"'></a>" +
                    "       </figure> " +
                    "       <div class='details text-center'> " +
                    "           <a href='school_detail.html?id="+jQuery(this).attr("id")+"'><h4 class='box-title'>"+jQuery(this).find("name").text()+"</h4></a>" +
                    "           <div data-placement='bottom' data-toggle='tooltip' class='five-stars-container'> " +
                    "               <span style='"+"width:"+jQuery(this).find("review").text()+"' class='five-stars'></span> " +
                    "           </div> " +
                    "       </div> " +
                    "   </article>" +
                    "</div>");
                }
            });
        }
    });


    jQuery.ajax({
        url:"js/dz.xml",
        dataType:"xml",
        error: function(){
            alert('Error loading XML document');
        },
        success:function(xml) {
            var dz = jQuery(xml).find("dz[section='business']");

            jQuery(dz).find("items").find("item").each(function(index){
                if(index>3){return;}
                //var id = jQuery(this).attr("id");
                    jQuery(".business").append("" +
                    "<div class='col-sms-6 col-sm-6 col-md-3'> " +
                    "   <article class='box'> " +
                    "       <figure class='' data-animation-type='fadeInDown' data-animation-delay='0'> " +
                    "           <img width='270' height='160' alt='' src='"+jQuery(this).find("profile").text()+"'> " +
                    "       </figure> " +
                    "   </article> " +
                    "</div>");
            });
        }
    });

    jQuery.ajax({
        url:"js/dz.xml",
        dataType:"xml",
        error: function(){
            alert('Error loading XML document');
        },
        success:function(xml) {
            var dz = jQuery(xml).find("dz[section='shopping']");

            jQuery(dz).find("items").find("item").each(function(index){
                if(index>5){return;}
                //var id = jQuery(this).attr("id");
                jQuery(".shopping").append("" +
                "<div class='col-sms-6 col-sm-6 col-md-4'> " +
                "   <article class='box'> " +
                "       <div class='row'> " +
                "           <div class='col-sms-6 col-sm-6 col-md-7'> " +
                "               <figure class='' data-animation-type='fadeInDown' data-animation-delay='0'> " +
                "                   <img width='270' height='160' alt='' src='"+jQuery(this).find("profile").text()+"'> " +
                "               </figure> " +
                "           </div> " +
                "           <div class='col-sms-6 col-sm-6 col-md-5' style='padding:0px;padding-top:20px;'> " +
                "               <div class='details text-center'> " +
                "                   <h4 class='box-title'>"+jQuery(this).find("name").text()+"</h4> " +
                "                   <p></p> " +
                "                   <div data-placement='bottom' data-toggle='tooltip' class='five-stars-container'> " +
                "                       <span style='width: "+jQuery(this).find("review").text()+";' class='five-stars'></span> " +
                "                   </div> " +
                "               </div> " +
                "           </div> " +
                "       </div> " +
                "   </article> " +
                "</div>");
            });
        }
    });

    jQuery.ajax({
        url:"js/dz.xml",
        dataType:"xml",
        error: function(){
            alert('Error loading XML document');
        },
        success:function(xml) {
            var dz = jQuery(xml).find("dz[section='invest']");
            jQuery(dz).find("items").find("item").each(function(index){
                if(index>6){return;}
                var id = jQuery(this).attr("id");
                if( id == 1){
                    jQuery(".invests").find(".main").find("img").attr("src",jQuery(this).find("profile").text());
                    jQuery(".invests").find(".main").find(".details").find("h4").html(jQuery(this).find("name").text());
                    jQuery(".invests").find(".main").find(".details").find("span").attr("style","width:"+jQuery(this).find("review").text());
                    jQuery(".invests").find(".main").find("a").attr("href","school_detail.html?id="+jQuery(this).attr("id"));
                }else{
                    jQuery(".invests").find(".small").append("" +
                    "<div class='col-sms-6 col-sm-6 col-md-4'>" +
                    "   <article class='box'> " +
                    "       <figure class='' data-animation-type='fadeInDown' data-animation-delay='0.4'> " +
                    "           <a href='school_detail.html?id="+jQuery(this).attr("id")+"'><img width='270' height='160' alt='' src='"+jQuery(this).find("profile").text()+"'></a>" +
                    "       </figure> " +
                    "       <div class='details text-center'> " +
                    "           <a href='school_detail.html?id="+jQuery(this).attr("id")+"'><h4 class='box-title'>"+jQuery(this).find("name").text()+"</h4></a>" +
                    "           <div data-placement='bottom' data-toggle='tooltip' class='five-stars-container'> " +
                    "               <span style='"+"width:"+jQuery(this).find("review").text()+"' class='five-stars'></span> " +
                    "           </div> " +
                    "       </div> " +
                    "   </article>" +
                    "</div>");
                }
            });
        }
    });

    jQuery.ajax({
        url:"js/dz.xml",
        dataType:"xml",
        error: function(){
            alert('Error loading XML document');
        },
        success:function(xml) {
            var dz = jQuery(xml).find("dz[section='wedding']");

            jQuery(dz).find("items").find("item").each(function(index){
                if(index>3){return;}
                //var id = jQuery(this).attr("id");
                jQuery(".wedding").append("" +
                "<div class='col-sms-6 col-sm-6 col-md-3'> " +
                "   <article class='box'> " +
                "       <figure class='' data-animation-type='fadeInDown' data-animation-delay='0'> " +
                "           <img width='270' height='160' alt='' src='"+jQuery(this).find("profile").text()+"'> " +
                "       </figure> " +
                "   </article> " +
                "</div>");
            });
        }
    });

    jQuery.ajax({
        url:"js/dz.xml",
        dataType:"xml",
        error: function(){
            alert('Error loading XML document');
        },
        success:function(xml) {
            var dz = jQuery(xml).find("dz[section='medical']");

            jQuery(dz).find("items").find("item").each(function(index){
                if(index>5){return;}
                //var id = jQuery(this).attr("id");
                jQuery(".medical").append("" +
                "<div class='col-sms-6 col-sm-6 col-md-4'> " +
                "   <article class='box'> " +
                "       <div class='row'> " +
                "           <div class='col-sms-6 col-sm-6 col-md-7'> " +
                "               <figure class='' data-animation-type='fadeInDown' data-animation-delay='0'> " +
                "                   <img width='270' height='160' alt='' src='"+jQuery(this).find("profile").text()+"'> " +
                "               </figure> " +
                "           </div> " +
                "           <div class='col-sms-6 col-sm-6 col-md-5' style='padding:0px;padding-top:20px;'> " +
                "               <div class='details text-center'> " +
                "                   <h4 class='box-title'>"+jQuery(this).find("name").text()+"</h4> " +
                "                   <p></p> " +
                "                   <div data-placement='bottom' data-toggle='tooltip' class='five-stars-container'> " +
                "                       <span style='width: "+jQuery(this).find("review").text()+";' class='five-stars'></span> " +
                "                   </div> " +
                "               </div> " +
                "           </div> " +
                "       </div> " +
                "   </article> " +
                "</div>");
            });
        }
    });

});
