var ssurlen = "https://spreadsheets.google.com/feeds/list/1QkW7dIPp_UT-e3FKyQujnQCWhp90n5giVhh5ZCh7VFs/1/public/values?alt=json";
var ssurltw = "https://spreadsheets.google.com/feeds/list/1QkW7dIPp_UT-e3FKyQujnQCWhp90n5giVhh5ZCh7VFs/2/public/values?alt=json";


//( function () {
loaddata(ssurlen,'en');



    var collapsebox = function (v,all){
    
                for(let i =0;i<all;i+=1){
                    let b = $("#schedulebox"+i); 
                    if (i==v){
                        //b.show();
                        if ($("#schedulebox"+i).is(':visible')){
                            $("#schedulebox"+i).hide();
                        }else{
                            $("#schedulebox"+i).show();
                        }
                        
                    }else{
                        
                        $("#schedulebox"+i).hide();
                    }
                }
            }

function loaddata(url,lang){
    var dataen={};

    $.getJSON( url, function( data ) {        
        //teamslogonTW = '';
        var bg=[];
        var main=[];
        var mainnav=[];
        var about=[];
        var schedule=[];
        var lecturer=[];
        var topics=[];
        var contact=[];

        for (let i = 0; i < data.feed.entry.length; i+=1) {

                if (typeof data.feed.entry[i].gsx$背景幻燈片.$t !== undefined){
                    bg.push({
                        "slider": data.feed.entry[i].gsx$背景幻燈片.$t
                    });
                }
                if (typeof data.feed.entry[i].gsx$首頁導覽按鈕.$t !== undefined){
                    mainnav.push({
                        "tab": data.feed.entry[i].gsx$首頁導覽按鈕.$t
                    });
                }
                if (typeof data.feed.entry[i].gsx$首頁工作坊名.$t !== undefined){
                    main.push({
                        "name": data.feed.entry[i].gsx$首頁工作坊名.$t,
                        "slogon": data.feed.entry[i].gsx$首頁工作坊標語.$t,
                        "navfooter": data.feed.entry[i].gsx$首頁工作坊下標.$t, 
                    });
                }
                
                if (typeof data.feed.entry[i].gsx$關於主內容.$t  !== undefined){
                    about.push({
                        "title" : data.feed.entry[i].gsx$關於主標題.$t,
                        "subtitle" : data.feed.entry[i].gsx$關於副標題.$t,
                        "maincontent" : data.feed.entry[i].gsx$關於主內容.$t,
                        "subcontent" : data.feed.entry[i].gsx$關於副內容.$t
                    });
                }
                if (typeof data.feed.entry[i].gsx$時間表時間.$t  !== undefined && data.feed.entry[i].gsx$時間表時間.$t  !== ""){
                    schedule.push({
                        "date" : data.feed.entry[i].gsx$時間表時間.$t,
                        "activity" : data.feed.entry[i].gsx$時間表期程.$t,
                        "info" : data.feed.entry[i].gsx$時間表資訊.$t,
                        "pic" : data.feed.entry[i].gsx$時間表圖片.$t
                    });
                }
                if (typeof data.feed.entry[i].gsx$指導老師姓名.$t  !== undefined && data.feed.entry[i].gsx$指導老師姓名.$t  !== ""){
                    lecturer.push({
                        "name" : data.feed.entry[i].gsx$指導老師姓名.$t,
                        "school" : data.feed.entry[i].gsx$指導老師學校.$t,
                        "position" : data.feed.entry[i].gsx$指導老師職稱.$t,
                        "intro" : data.feed.entry[i].gsx$指導老師介紹.$t,
                        "path" : data.feed.entry[i].gsx$指導老師路徑.$t,
                        "fb" : data.feed.entry[i].gsx$指導老師fb.$t,
                        "twitter" : data.feed.entry[i].gsx$指導老師twitter.$t,
                        "site" : data.feed.entry[i].gsx$指導老師site.$t
                    });
                }

                if (typeof data.feed.entry[i].gsx$主題名稱.$t  !== undefined && data.feed.entry[i].gsx$主題名稱.$t  !== ""){
                    topics.push({
                        "name" : data.feed.entry[i].gsx$主題名稱.$t,
                        "lecturer" : data.feed.entry[i].gsx$主題指導老師.$t,
                        "maincontent" : data.feed.entry[i].gsx$主題主內容.$t,
                        "path" : data.feed.entry[i].gsx$主題路徑.$t,
                        "fb" : data.feed.entry[i].gsx$主題fb.$t,
                        "twitter" : data.feed.entry[i].gsx$主題twitter.$t,
                        "site" : data.feed.entry[i].gsx$主題site.$t
                    });
                }

                if (typeof data.feed.entry[i].gsx$聯絡地址.$t  !== undefined ){
                    contact.push({
                        "address" : data.feed.entry[i].gsx$聯絡地址.$t,
                        "tel" : data.feed.entry[i].gsx$聯絡電話.$t,
                        "email" : data.feed.entry[i].gsx$聯絡email.$t,
                        "fb" : data.feed.entry[i].gsx$聯絡fb.$t,
                        "twitter" : data.feed.entry[i].gsx$聯絡twitter.$t,
                        "site" : data.feed.entry[i].gsx$聯絡site.$t,
                        "cooperate" : data.feed.entry[i].gsx$聯絡合作夥伴.$t,
                        "cooperateurl" : data.feed.entry[i].gsx$聯絡合作夥伴網址.$t,
                        "cooperateimg" : data.feed.entry[i].gsx$聯絡合作夥伴圖片.$t
                    });
                }
        }
        dataen.bg = bg;
        dataen.main = main;
        dataen.mainnav = mainnav;
        dataen.about = about;
        dataen.schedule = schedule;
        dataen.lecturer = lecturer;
        dataen.topics = topics;
        dataen.contact = contact;
        //console.log(dataen.topics.length);
        var bgstr='';
        for(let i=0;i<dataen.bg.length;i+=1){
            bgstr+='<li><img src="'+dataen.bg[i].slider+'" alt="slide"></li>';
        }
        // BACKGROUND
        $("#bg-slider").html(bgstr);
        // BACKGROUND
        
        //  MAIN
    
        $("#main").html(
                        '<div class="main-page main_block">'+
                            '<header>'+
                                '<h1>'+dataen.main[0].name+'</h1>'+
                            '</header>'+
                            '<div class="container">'+
                                '<div class="row">'+
                                    '<div class="main_block_text col-md-6 col-md-push-3">'+
                                        '</br>'+
                                        '<p class="main-text" style="font-style:italic;">'+
                                            dataen.main[0].slogon+
                                        '</p>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>');
        //  MAIN

        //  ABOUT
        $("#about").html(
                            '<div class="main_block">'+
                                '<header>'+
                                    '<h1>'+dataen.about[0].title+'</h1>'+
                                '</header>'+
                                '<div class="container" >'+
                                    '<div class="row" >'+
                                        '<div class="main_block_text col-md-6 col-md-push-3 col-sm-10 col-sm-push-1" >'+
                                            '<p >'+
                                                dataen.about[0].subtitle+
                                            '</p>'+
                                            '<br>'+
                                            '<blockquote>'+
                                                '<p style="text-align: left; text-align: justfy">'+
                                                    dataen.about[0].subcontent+
                                                '</p>'+
                                                '<footer style="text-align: right">'+
                                                    'chair editor, Tengwen'+
                                                '</footer>'+
                                            '</blockquote>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'
                    ); 
        //  ABOUT

        //  SCHEDULE
       var schedulestr ='';
            

        for (let i =0;i<dataen.schedule.length;i+=1){
            //
            if (i===0){
                 schedulestr+='<table class="table table-striped">'+
                          '<tr>'+
                            '<th>'+dataen.schedule[i].date+'</th>'+
                            '<th>'+dataen.schedule[i].activity+'</th>'+
                          '</tr>';
            }else{
                schedulestr+='<tr>'+
                                '<table>'+
                                    '<tr class="bg-primary">'+
                                        '<td>'+dataen.schedule[i].date+'</td>'+
                                        '<td><button id="scheduleact'+i+'" onclick="collapsebox('+i+','+dataen.schedule.length+')">'+dataen.schedule[i].activity+'</button></td>'+
                                    '</tr>'+
                                    '<tr id="schedulebox'+i+'" style="display:none;" >'+
                                        '<td colspan="2" ><div class="container">'+
                                            '<div class="row">'+
                                                '<div class ="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>'+
                                                '<div class ="col-xs-8 col-sm-8 col-md-8 col-lg-8"><p>'+dataen.schedule[i].info+'</p></div>'+
                                                '<div class ="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>'+
                                            '</div>'+
                                            '<div class="row">'+
                                                '<div class ="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>'+
                                                // bootstrap 使用 class="img-responsive" !!!! use margin: 0 auto 可以置中 !!!!!
                                                '<div class ="col-xs-8 col-sm-8 col-md-8 col-lg-8 center"><img src="'+dataen.schedule[i].pic+'" class="img-responsive" style="margin: 0 auto;"></img></div>'+
                                                '<div class ="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>'+
                                            '</div>'+
                                        '</div></td>'+
                                    '</tr>'+
                                '</table>'+
                            '</tr>'
                            //'<tr >'+
                                
                            //'</tr>'
                            ;
            }
        };
        schedulestr+='</table>'; 
        $("#schedule").html(
                        '<div class="main_block">'+
                            '<header>'+
                                '<h1>'+dataen.mainnav[1].tab+'</h1>'+
                            '</header>'+
                            '<div class="container">'+
                                schedulestr+
                            '</div>'+
                        '</div>'
                );
        //  SCHEDULE

        //  LECTURER
        var lecturerstr='';
        for (let i=0;i<dataen.lecturer.length; i+=1) {
            lecturerstr+=
                    '<div class="item col-xs-6 col-sm-6 col-md-4 col-lg-4" >'+
                        '<div class="item_img">'+
                            '<img src="#" data-src="'+dataen.lecturer[i].path+'" alt="lecturer-'+i+'" />'+
                        '</div>'+
                        '<div class="item-info">'+
                                '<p class="team-name">'+ dataen.lecturer[i].name + '</br>'+
                                '</p>'+
                                 
                                '<div class="container team-work">'+
                                            '<div class="row">'+
                                                '<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>'+
                                                '<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 text-left">'+
                                                    '<p>'+ dataen.lecturer[i].intro + '</p>'+
                                            '</div>'+
                                '</div></div>'+

                                '<ul class="social-icons">'+
                                    '<li><a href="'+dataen.lecturer[i].fb+'"><i class="fab fa-facebook-square fa-2x"></i></a></li>'+
                                '</ul>'+
                                    '<a href="#" class="fotorama_show-icons">'+
                                '</a>'+
                        '</div>'+
                    '</div>';}

        $("#lecturer").html(
            '<div class="main_block carousel">'+
                    '<header>'+
                        '<h1>'+dataen.mainnav[2].tab+'</h1>'+
                    '</header>'+
                    '<div class="container">'+
                        '<div class="row">'+
                            '<div class="clipCarousel col-xs-12 col-sm-12 col-md-12 col-lg-12 col-centered">'+
                                lecturerstr+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'  
                );
        //  LECTURER

        //  TOPICS
        var topicsstr='';
        for (let i=0;i<dataen.topics.length; i+=1) {
            topicsstr+=
                                '<div class="item col-xs-6 col-sm-6 col-md-4 col-lg-4">'+
                                    '<div class="item_img">'+
                                        '<img src="'+dataen.topics[i].path+'" data-src="'+dataen.topics[i].path+'" alt="topics-'+i+'" />'+
                                    '</div>'+
                                    '<div class="item-info">'+
                                        '<p class="team-name">'+ dataen.topics[i].name +
                                                            '</br>'+dataen.topics[i].lecturer + '</br>'+
                                        '</p>'+
                                        
                                        '<div class="container team-work">'+
                                            '<div class="row">'+
                                                '<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>'+
                                                '<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 text-left">'+
                                                    '<p>'+ dataen.topics[i].maincontent + '</p>'+
                                            '</div>'+
                                        '</div></div>'+

                                        '<ul class="social-icons">'+
                                            '<li><a href="'+dataen.topics[i].fb+'"><i class="fab fa-facebook-square fa-2x"></i></a></li>'+
                                        '</ul>'+
                                        '<a href="#" class="fotorama_show-icons">'+
                                        '</a>'+
                                    '</div>'+
                                '</div>';
        }
        $("#topics").html(
                '<div class="main_block carousel">'+
                    '<header>'+
                        '<h1>'+dataen.mainnav[3].tab+'</h1>'+
                    '</header>'+
                    '<div class="container">'+
                        '<div class="row">'+
                            '<div class="clipCarousel  col-xs-12 col-sm-12 col-md-12 col-lg-12 col-centered">'+
                                topicsstr+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'    
                );
        //  TOPICS
        function funclick(url){
            window.open(url,'');
            return false;
        }
        //  CONTACT
        var cooperatestr='';
        for (let i=0;i<contact.length; i+=1) {
            if (contact[i].cooperateimg===''){}
            else{
                cooperatestr+=  '<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">'+
                                '<li ><a href="#"  onclick="window.open(\''+contact[i].cooperateurl+'\',this)">'+
                                    '<img src="'+contact[i].cooperateimg+'"  width="150px" height="150px" >'+
                                '</a></li></div>';
            }

        }
        $("#contact").html(
            '<div class="main_block">'+
                    '<header>'+
                        '<h1>'+dataen.mainnav[4].tab+'</h1>'+
                    '</header>'+

                    '<div class="container">'+
                        '<div class="row">'+

                            '<div class="main_block_text col-md-6 col-md-push-3 col-sm-10 col-sm-push-1">'+

                                '<ul class="category-group">'+
                                    '<li class="active"><a href="#">'+
                                        '<i class="fa fa-home fa-3x"></i>'+
                                    '</a></li>'+
                                    '<li><a href="#">'+
                                        '<i class="fa fa-phone fa-3x"></i>'+
                                    '</a></li>'+
                                    '<li><a href="#">'+
                                        '<i class="fa fa-envelope fa-3x"></i>'+
                                    '</a></li>'+
                                    '<li><a href="#">'+
                                        '<i class="fa fa-handshake-o fa-3x"></i>'+
                                    '</a></li>'+
                                    /*
                                    '<li>'+
                                        '<a href="#" class="open-map">'+
                                            '<i class="fa fa-map-marker fa-3x"></i>'+
                                        '</a>'+
                                    '</li>'+
                                    */
                                '</ul>'+

                                '<div class="info open">'+
                                    '</br>'+
                                    '<iframe width="100%" height="200%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q=640雲林縣斗六市設計工坊&z=16&output=embed&t="></iframe>'+
                                    '<address>'+
                                        '</br>'+
                                        dataen.contact[0].address+'</br>'+
                                        dataen.contact[1].address+'</br>'+
                                        dataen.contact[2].address+'</br>'+
                                        dataen.contact[3].address+
                                    '</address>'+
                                '</div>'+

                                '<div class="info">'+
                                    '<p>'+
                                        'Tel: '+dataen.contact[0].tel+'<br>'+
                                    '</p>'+
                                '</div>'+

                                '<div class="info">'+
                                    '<p>'+
                                        'Email: '+dataen.contact[0].email+'<br>'+
                                    '</p>'+
                                '</div>'+

                                '<div class="info">'+
                                    '</br>'+
                                    '<div class="container">'+
                                        '<div class="row">'+
                                            '<ul class="category-group">'+
                                                cooperatestr+
                                            '</ul>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            

                        '</div>'+
                        
                    '</div>'+
            '</div>'
                );
            //  CONTACT

            // NAV HEADER
            $("#navtab-2").text(dataen.mainnav[0].tab);
            $("#navtab-3").text(dataen.mainnav[1].tab);
            $("#navtab-4").text(dataen.mainnav[2].tab);
            $("#navtab-5").text(dataen.mainnav[3].tab);
            $("#navtab-6").text(dataen.mainnav[4].tab);
            // NAV HEADER

            // NAV FOOTER
            $("#navfooter").html(
                '<div class="navbar_icons">'+
                    '<ul>'+
                        '<li><a href="'+dataen.contact[0].fb+'"><i class="fab fa-facebook-square"></i></a></li>'+
                        '<li><a id="lang_en" >En</a></li>'+
                        '<li><a id="lang_tw">中</a></li>'+
                    '</ul>'+
                '</div>'+
                '<span>'+dataen.main[0].navfooter+
                '</span>'+        
                '<a href="" class="navbar_show-icons">'+
                '</a>'
            );
            
            if (lang === "tw"){
                $("#lang_tw").css({"color":"white", "font-weight":"bold"});
                $("#lang_en").css({"color":"rgba(255, 255, 255, 0.6)", "font-weight":"normal"});
                $("#navbrand").text("創意工場");
            }else{
                $("#lang_en").css({"color":"white", "font-weight":"bold"});
                $("#lang_tw").css({"color":"rgba(255, 255, 255, 0.6)", "font-weight":"normal"});
                $("#navbrand").text("IDEA FACTORY");
            }
            // NAV FOOTER

            
            // SOCIALICONS
            var showSocialIcons = function () {
                $('.navbar_show-icons').off('click').on(
                    'click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();

                        $(this).toggleClass('active');

                        if (this.parentNode.getElementsByClassName('navbar_icons').length) {
                            var ul = this.parentNode.getElementsByClassName('navbar_icons')[0].getElementsByTagName('ul')[0];
                            ul.classList.toggle('open');
                        }
                        if (this.parentNode.getElementsByTagName('p').length) {
                            var p = this.parentNode.getElementsByTagName('p')[0];
                            p.classList.toggle('open');
                        }
                        if (this.parentNode.getElementsByTagName('span').length) {
                            var p = this.parentNode.getElementsByTagName('span')[0];
                            p.classList.toggle('open');
                        }
                        if ($('.center-menu').length) {
                            $('.center-menu').toggleClass('iconOpen');
                        }
                    }
                );
            };

            $(document).on('click', function () {
                var $navShowIcons = $('.navbar_show-icons');
                $navShowIcons.removeClass('active');
                $navShowIcons.parent().find('.navbar_icons ul').removeClass('open');
                $navShowIcons.parent().find('p').removeClass('open');
                $navShowIcons.parent().find('span').removeClass('open');
                $('.center-menu').removeClass('iconOpen');
            });

            showSocialIcons();

            removeEvent(window, 'resize', resize);
            addEvent(window, 'resize', resize);

            function resize() {
                var $navShowIcons = $('.navbar_show-icons');
                $navShowIcons.removeClass('active');
                $navShowIcons.parent().find('.navbar_icons ul').removeClass('open');
                $navShowIcons.parent().find('p').removeClass('open');
                $navShowIcons.parent().find('span').removeClass('open');
                $('.center-menu').removeClass('iconOpen');
                showSocialIcons();

            }
            // SOCIALICONS 
// CHANGE CATEGORY
( function () {

    var changeCategory = function () {
        $('.category-group').parent().find('.info').height('');
        $('.category-group').find('li a').off('click').on('click',
            function (e) {
                e.preventDefault();

                $('#pt-main').css(
                    {
                        overflow: 'hidden'
                    }
                );

                if ($(this).hasClass('open-map')) {

                    var self = this;
                    var position = $(this).offset();

                    var width = $(this).outerWidth();
                    var height = $(this).outerHeight(true);

                    $('.map').width(width);
                    $('.map').height(height);
                    $('.map').offset(
                        {
                            top: position.top,
                            left: position.left
                        }
                    );
                    $('.map').addClass('open');
                    $('#map-canvas').css(
                        {
                            top: -position.top + 'px',
                            left: -position.left + 'px'
                        }
                    );
                    $('#map-canvas').animate(
                        {
                            top: 0,
                            left: 0
                        }, 500
                    );
                    $('.map').animate(
                        {
                            left: 0,
                            top: 0,
                            width: '100%',
                            height: '100%'
                        }, 500
                    );
                    $('.map').find('.bottom .close-this').off('click').on(
                        'click', function (e) {
                            position = $(self).offset();
                            $(this).parent().parent().find('#map-canvas').animate(
                                {
                                    top: -position.top + 'px',
                                    left: -position.left + 'px'
                                }, 500
                            );
                            $(this).parent().parent().animate(
                                {
                                    left: position.left,
                                    top: position.top,
                                    width: width,
                                    height: height
                                }, 500, function () {
                                    $(this).removeClass('open');

                                }
                            );

                        }
                    );

                }
                else {
                    var height = $(this).parent().parent().parent().find('.info.open').outerHeight(true);
                    $(this).parent().parent().parent().find('.info').height('');
                    $(this).parent().parent().find('li').removeClass('active');
                    $(this).parent().addClass('active');
                    var current = $(this).parent().index();
                    var info = $(this).parent().parent().parent().find('.info');
                    $(info).removeClass('open');
                    $(info).eq(current).addClass('open');
                    var tmpHeight = $(info).eq(current).outerHeight(true);
                    $(info).eq(current).height(height);
                    $(info).eq(current).animate(
                        {
                            height: tmpHeight
                        }, 300, 'linear', function () {

                        }
                    );
                }

                setTimeout(function () {
                    $('#pt-main').css(
                        {
                            overflow: ''
                        }
                    );
                    RunScrollStyler({
                        element: '#pt-main',
                        //child: '.pt-page-curret'
                    });
                }, 400);

            }
        );
    };

    try {
        changeCategory();

        removeEvent(window, 'resize', resize);
        addEvent(window, 'resize', resize);

    } catch (e) {
        console.log(e);
    } finally {
        return;
    }

    function resize() {
        changeCategory();
    }

}() );
// CHANGE CATEGORY
            
            $("#lang_en").on("click",function(){
                //reloadjson();
                loaddata(ssurlen,"en");
                
            });
            $("#lang_tw").on("click",function(){
                //reloadjson();
                loaddata(ssurltw, "tw");
            });
});
}
