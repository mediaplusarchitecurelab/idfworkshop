var ssurlen = "https://spreadsheets.google.com/feeds/list/1QkW7dIPp_UT-e3FKyQujnQCWhp90n5giVhh5ZCh7VFs/1/public/values?alt=json";
var ssurltw = "https://spreadsheets.google.com/feeds/list/1QkW7dIPp_UT-e3FKyQujnQCWhp90n5giVhh5ZCh7VFs/2/public/values?alt=json";


//( function () {
loaddata(ssurlen,'en');
            


//        }() );

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
                        "title" : data.feed.entry[i].gsx$關於主內容.$t,
                        "maincontent" : data.feed.entry[i].gsx$關於主內容.$t,
                        "subcontent" : data.feed.entry[i].gsx$關於副內容.$t
                    });
                }
                if (typeof data.feed.entry[i].gsx$時間表時間.$t  !== undefined && data.feed.entry[i].gsx$時間表時間.$t  !== ""){
                    schedule.push({
                        "date" : data.feed.entry[i].gsx$時間表時間.$t,
                        "activity" : data.feed.entry[i].gsx$時間表期程.$t
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
                        "site" : data.feed.entry[i].gsx$聯絡site.$t
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
                                        '<p class="main-text">'+
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
                                '<div class="container">'+
                                    '<div class="row">'+
                                        '<div class="main_block_text col-md-6 col-md-push-3 col-sm-10 col-sm-push-1">'+
                                            '<p>'+
                                                dataen.about[0].maincontent+
                                            '</p>'+
                                            '<br>'+
                                            '<blockquote>'+
                                                '<p>'+
                                                    dataen.about[0].subcontent+
                                                '</p>'+
                                                '<footer>'+
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
                 schedulestr+='<table>'+
                          '<tr>'+
                            '<th>'+dataen.schedule[i].date+'</th>'+
                            '<th>'+dataen.schedule[i].activity+'</th>'+
                          '</tr>';
            }else{
                schedulestr+='<tr>'+
                                '<td>'+dataen.schedule[i].date+'</td>'+
                                '<td>'+dataen.schedule[i].activity+'</td>'+
                            '</tr>';
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
                                '<div class="item">'+
                                    '<div class="item_img">'+
                                        '<img src="'+dataen.lecturer[i].path+'" data-src="'+dataen.lecturer[i].path+'" alt="lecturer-'+i+'" width="256" height="167"/>'+
                                    '</div>'+
                                    '<div class="item-info">'+
                                        '<p class="team-name">'+ dataen.lecturer[i].name +
                                            '<span class="team-work">'+ dataen.lecturer[i].school +'</span>'+
                                            '<span class="team-work">'+ dataen.lecturer[i].position +'</span></br>'+
                                            '<span class="team-work" style="font-size: 12px">'+ dataen.lecturer[i].intro +'</span></p>'+
                                        '<ul class="social-icons">'+
                                            '<li><a href="'+dataen.lecturer[i].fb+'"><i class="fa fa-facebook"></i></a></li>'+
                                            '<li><a href="'+dataen.lecturer[i].site+'"><i class="fa fa-dribbble"></i></a></li>'+
                                            '<li><a href="'+dataen.lecturer[i].twitter+'"><i class="fa fa-twitter"></i></a></li>'+
                                        '</ul>'+
                                        '<a href="#" class="fotorama_show-icons">'+
                                        '</a>'+
                                    '</div>'+
                                '</div>';
        }
        $("#lecturer").html(
                '<div class="main_block carousel">'+
                    '<header>'+
                        '<h1>'+dataen.mainnav[2].tab+'</h1>'+
                    '</header>'+
                    '<div class="container">'+
                        '<div class="row">'+
                            '<div class="clipCarousel">'+
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
                                '<div class="item">'+
                                    '<div class="item_img">'+
                                        '<img src="'+dataen.topics[i].path+'" data-src="'+dataen.topics[i].path+'" alt="topics-'+i+'" width="256" height="167"/>'+
                                    '</div>'+
                                    '<div class="item-info">'+
                                        '<p class="team-name">'+ dataen.topics[i].name +
                                            '<span class="team-work">'+ dataen.topics[i].lecturer +'</span></br>'+
                                            '<span class="team-work" style="font-size: 12px">'+ dataen.topics[i].maincontent +'</span></p>'+
                                        '<ul class="social-icons">'+
                                            '<li><a href="'+dataen.topics[i].fb+'"><i class="fa fa-facebook"></i></a></li>'+
                                            '<li><a href="'+dataen.topics[i].site+'"><i class="fa fa-dribbble"></i></a></li>'+
                                            '<li><a href="'+dataen.topics[i].twitter+'"><i class="fa fa-twitter"></i></a></li>'+
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
                            '<div class="clipCarousel">'+
                                topicsstr+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'    
                );
        //  TOPICS

        //  CONTACT
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
                                        '<i class="fa fa-envelope-o fa-3x"></i>'+
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
                                    '<address>'+
                                        dataen.contact[0].address+'<br>'+
                                        dataen.contact[1].address+'<br>'+
                                        dataen.contact[2].address+'<br>'+
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
                        '<li><a href="'+dataen.contact[0].fb+'"><i class="fa fa-facebook"></i></a></li>'+
                        '<li><a href="'+dataen.contact[0].site+'"><i class="fa fa-dribbble"></i></a></li>'+
                        '<li><a href="'+dataen.contact[0].twitter+'"><i class="fa fa-twitter"></i></a></li>'+
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

                            e.preventDefault();
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