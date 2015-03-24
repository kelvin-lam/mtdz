$(document).ready(function() {
    $.get(CONTEXT_ROOT + '/js/question/faq.xml', function(data) {
        $(data).find('faq').each(function(i) {
            $("#page-content").append(
                "<div class='row'>" +
                "<div class='span12'>" +
                "<p>"+$(this).children('question').text()+"</p>" +
                "</div>" +
                "<div class='span12'>" +
                "<div class='help-anwser'>"+$(this).children('answer').text()+"</div>" +
                "</div>" +
                "</div>");
        });
    });
});