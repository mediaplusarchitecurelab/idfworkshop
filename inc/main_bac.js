var ssurl = "https://spreadsheets.google.com/feeds/list/1QkW7dIPp_UT-e3FKyQujnQCWhp90n5giVhh5ZCh7VFs/od6/public/values?alt=json";
//var reloadjson = 
$.getJSON( ssurl, function( data ) {
    var dataen={};
    var datatw={};
    //teamslogonTW = '';
    var main=[];
    var about=[];
    var schedule=[];
    var lecturer=[];
    var topics=[];
    var contact=[];

    for (let i = 0; i < data.feed.entry.length; i+=1) {
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
            if (typeof data.feed.entry[i].gsx$時間表時間.$t  !== undefined){
                schedule.push({
                    "date" : data.feed.entry[i].gsx$時間表時間.$t,
                    "activity" : data.feed.entry[i].gsx$時間表期程.$t
                });
            }
            if (typeof data.feed.entry[i].gsx$指導老師姓名.$t  !== undefined){
                lecturer.push({
                    "name" : data.feed.entry[i].gsx$指導老師姓名.$t,
                    "school" : data.feed.entry[i].gsx$指導老師學校.$t,
                    "position" : data.feed.entry[i].gsx$指導老師職稱.$t,
                    "expert" : data.feed.entry[i].gsx$指導老師專長.$t,
                    "path" : data.feed.entry[i].gsx$指導老師路徑.$t,
                    "fb" : data.feed.entry[i].gsx$指導老師fb.$t,
                    "twitter" : data.feed.entry[i].gsx$指導老師twitter.$t,
                    "site" : data.feed.entry[i].gsx$指導老師site.$t
                });
            }

            if (typeof data.feed.entry[i].gsx$主題名稱.$t  !== undefined){
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

            if (typeof data.feed.entry[i].gsx$聯絡地址.$t  !== undefined){
                contact.push({
                    "address" : data.feed.entry[i].gsx$聯絡地址.$t,
                    "tel" : data.feed.entry[i].gsx$聯絡地址.$t,
                    "fb" : data.feed.entry[i].gsx$聯絡fb.$t,
                    "twitter" : data.feed.entry[i].gsx$聯絡twitter.$t,
                    "site" : data.feed.entry[i].gsx$聯絡site.$t
                });
            }
    }
    dataen.main = main;
    dataen.about = about;
    dataen.schedule = schedule;
    dataen.lecturer = lecturer;
    dataen.topics = topics;
    dataen.contact = contact;

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
   var schedulestr =
        '<table>'+
              '<tr>'+
                '<th>date</th>'+
                '<th>activity</th>'+
              '</tr>';

    for (let i =0;i<dataen.schedule.length;i+=1){
        //
        schedulestr+='<tr>'+
                        '<td>'+dataen.schedule[i].date+'</td>'+
                        '<td>'+dataen.schedule[i].activity+'</td>'+
                    '</tr>';
    };
    schedulestr+='</table>'; 
    $("#schedule").html(
                    '<div class="main_block">'+
                        '<header>'+
                            '<h1>This is schedule</h1>'+
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
                                    '<img src="#" data-src="'+dataen.lecturer[i].path+'" alt="" width="256" height="167"/>'+
                                '</div>'+
                                '<div class="item-info">'+
                                    '<p class="team-name">'+ dataen.lecturer[i].name +
                                        '<span class="team-work">'+ dataen.lecturer[i].school +'</span>'+
                                        '<span class="team-work">'+ dataen.lecturer[i].position +'</span></p>'+
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
                    '<h1>Lecturer</h1>'+
                '</header>'+
                '<div class="container">'+
                    '<div class="row">'+
                        '<div class="clipCarousel cover">'+
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
                                    '<img src="#" data-src="'+dataen.topics[i].path+'" alt="" width="256" height="167"/>'+
                                '</div>'+
                                '<div class="item-info">'+
                                    '<p class="team-name">'+ dataen.topics[i].name +
                                        '<span class="team-work">'+ dataen.topics[i].lecturer +'</span>'+
                                        '<span class="team-work">'+ dataen.topics[i].maincontent +'</span></p>'+
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
                    '<h1>Topics</h1>'+
                '</header>'+
                '<div class="container">'+
                    '<div class="row">'+
                        '<div class="clipCarousel cover">'+
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
                    '<h1>Contact</h1>'+
                '</header>'+

                '<div class="container">'+
                    '<div class="row">'+

                        '<div class="main_block_text col-md-6 col-md-push-3 col-sm-10 col-sm-push-1">'+

                            '<ul class="category-group">'+
                                '<li class="active"><a href="#">'+
                                    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"'+
                                         'width="32px" height="32px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">'+
                                    '<path id="home" d="M59,34c-0.256,0-0.512-0.098-0.707-0.293L32,7.414L5.707,33.707c-0.391,0.391-1.023,0.391-1.414,0'+
                                        's-0.391-1.023,0-1.414l27-27c0.391-0.391,1.023-0.391,1.414,0l27,27c0.391,0.391,0.391,1.023,0,1.414C59.512,33.902,59.256,34,59,34'+
                                        'z M55,60H37c-0.553,0-1-0.447-1-1V44h-8v15c0,0.553-0.447,1-1,1H9c-0.553,0-1-0.447-1-1V34c0-0.553,0.447-1,1-1s1,0.447,1,1v24h16'+
                                        'V43c0-0.553,0.447-1,1-1h10c0.553,0,1,0.447,1,1v15h16V34c0-0.553,0.447-1,1-1s1,0.447,1,1v25C56,59.553,55.553,60,55,60z M55,25'+
                                        'c-0.553,0-1-0.447-1-1V12h-6v4c0,0.553-0.447,1-1,1s-1-0.447-1-1v-5c0-0.553,0.447-1,1-1h8c0.553,0,1,0.447,1,1v13'+
                                        'C56,24.553,55.553,25,55,25z"/>'+
                                    '</svg>'+
                                '</a></li>'+
                                '<li><a href="#">'+
                                    '<svg version="1.1"'+
                                         'xmlns="http://www.w3.org/2000/svg"'+
                                         'x="0px" y="0px" width="32px" height="32px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">'+
                                    '<defs>'+
                                    '</defs>'+
                                    '<path class="st1" d="M29,10h6c0.55,0,1-0.45,1-1s-0.45-1-1-1h-6c-0.55,0-1,0.45-1,1S28.45,10,29,10z"/>'+
                                    '<path class="st1" d="M33,54h-2c-0.55,0-1,0.45-1,1s0.45,1,1,1h2c0.55,0,1-0.45,1-1S33.55,54,33,54z"/>'+
                                    '<path class="st1" d="M32,60c11.51,0,16-1.96,16-7V11c0-5.04-4.49-7-16-7s-16,1.96-16,7v42C16,58.04,20.49,60,32,60z M46,50H18V14h28'+
                                        'V50z M32,58c-12.92,0-14-2.58-14-5v-1h28v1C46,55.42,44.92,58,32,58z M32,6c12.92,0,14,2.58,14,5v1H18v-1C18,8.58,19.08,6,32,6z"/>'+
                                    '<rect id="mobile_2_" class="st0" width="64" height="64"/>'+
                                    '</svg>'+
                                '</a></li>'+
                                '<li><a href="#">'+
                                    '<svg version="1.1"'+
                                         'xmlns="http://www.w3.org/2000/svg"'+
                                         'x="0px" y="0px" width="32px" height="32px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">'+
                                    '<defs>'+
                                    '</defs>'+
                                    '<path class="st1" d="M57,12H7c-1.99,0-3,1.01-3,3v34c0,2.07,0.92,3,3,3h50c2.05,0,3-0.95,3-3V15C60,13.01,58.99,12,57,12z'+
                                         'M43.71,34.29c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.02,0,1.41L56.59,50H7.41l14.29-14.29c0.39-0.39,0.39-1.02,0-1.41'+
                                        'c-0.39-0.39-1.02-0.39-1.41,0L6,48.59V15.25l23.11,23.11c0.78,0.78,1.8,1.17,2.83,1.17s2.05-0.39,2.83-1.17L58,15.13v33.45'+
                                        'L43.71,34.29z M7.58,14H56.3L33.36,36.95c-0.78,0.78-2.05,0.78-2.83,0L7.58,14z"/>'+
                                    '<rect id="email_1_" class="st0" width="64" height="64"/>'+
                                    '</svg>'+
                                '</a></li>'+
                                '<li>'+
                                    '<a href="#" class="open-map">'+
                                        '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"'+
                                             'width="32px" height="32px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">'+
                                        '<path id="map_x5F_pin" d="M31,60L31,60c-0.39,0-0.743-0.227-0.907-0.579L15.73,28.478C14.586,26.156,14,23.634,14,21'+
                                            'c0-9.374,7.626-17,17-17s17,7.626,17,17c0,2.633-0.585,5.155-1.738,7.499L31.907,59.421C31.743,59.773,31.39,60,31,60z M31,6'+
                                            'c-8.271,0-15,6.729-15,15c0,2.323,0.516,4.549,1.534,6.614L31,56.625l13.455-28.989C45.482,25.55,46,23.324,46,21'+
                                            'C46,12.729,39.271,6,31,6z M31,28c-3.859,0-7-3.141-7-7s3.141-7,7-7c3.859,0,7,3.141,7,7S34.859,28,31,28z M31,16'+
                                            'c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5S33.757,16,31,16z"/>'+
                                        '</svg>'+
                                    '</a>'+
                                '</li>'+
                            '</ul>'+

                            '<div class="info open">'+
                                '<address>'+
                                    '350 Fifth Avenue, 34th floor<br>'+
                                    'New York, NY 10118-3299 USA'+
                                '</address>'+
                            '</div>'+

                            '<div class="info">'+
                                '<p>'+
                                    'Tel: +1-212-290-4700<br>'+
                                    'Fax: +1-212-736-1300'+
                                '</p>'+
                            '</div>'+

                            '<div class="info">'+
                                '<p>'+
                                    'Email: info@monde.pro'+
                                '</p>'+
                            '</div>'+

                        '</div>'+
                        

                    '</div>'+
                    
                '</div>'+
        '</div>'
            );
        //  CONTACT

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
        $("#lang_en").css({"color":"white", "font-weight":"bold"});

        ( function () {
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

            $("#lang_en").on("click",function(){
                //reloadjson();
                $(this).css({"color":"white", "font-weight":"bold"});
                $("#lang_tw").css({"color":"rgba(255, 255, 255, 0.6)", "font-weight":"normal"});
                
            });
            $("#lang_tw").on("click",function(){
                //reloadjson();
                $(this).css({"color":"white", "font-weight":"bold"});
                $("#lang_en").css({"color":"rgba(255, 255, 255, 0.6)", "font-weight":"normal"});
            });


        }() );
        // NAV FOOTER
});

