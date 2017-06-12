$(".dropdown").on("show.bs.dropdown", function(event) {
    $(".dropdown-toggle>i").removeClass("fa-bars").addClass("fa-times");
    $(".dropdown-toggle").addClass("otvoren");
    $(".search-icon").addClass("otvoren");
});
$(".dropdown").on("hide.bs.dropdown", function() {
    $(".dropdown-toggle>i").removeClass("fa-times").addClass("fa-bars");
    $(".dropdown-toggle").removeClass("otvoren");
    $(".search-icon").removeClass("otvoren");
});
$(document).ready(function() {
    $('#skroler-novosti').carousel({
        interval: 10000
    });
    $('#skroler-kapital').carousel({
        interval: 10000
    });
    $("#dalje").click(function() {
        $("#skroler-novosti").carousel("next");
    });
    $(".kapital #dalje").click(function() {
        $("#skroler-kapital").carousel("next");
    });
    $('.padajuci-meni, .padajuci-sadrzaj').hover(function(){
            $(this).find('.padajuci-sadrzaj').fadeIn(600);
        },function(){
             $(this).find('.padajuci-sadrzaj').delay(400).fadeOut(600);
        }
    );
    function fdiCarousel() {
        if ($(window).width() > 1199) {
            $('.fdi-Carousel .item').each(function() {
                var next = $(this).next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }
                next.children(':first-child').clone().appendTo($(this));
            });
        };
    }
    fdiCarousel();

    function provjereDimenzija() {

        if ($(window).width() < 768) {
            $(".search-icon").click(function(event) {
                event.preventDefault();
                if ($(".crni-menu").hasClass("affix")) {
                    $(".pretraga").css("top", "100px");
                    $(".bijeli-menu.affix .pretraga").toggle();
                } else if ($(document.body).scrollTop() < 170) {
                    $(".pretraga").css("top", "170px");
                    $(".pretraga").toggle();
                }
            });
        }
        if ($(window).width() >= 768) {
            var $gridvijesti = $('#vijesti-wrap').imagesLoaded(function() {
                // init Masonry after all images have loaded
                $gridvijesti.masonry({
                    itemSelector: '.card',
                });
            });
            var $kapitalWrap = $('#kapital-wrap').imagesLoaded(function() {
                // init Masonry after all images have loaded
                $kapitalWrap.masonry({
                    itemSelector: '.card',
                });
            });
            var $gridostalihvijesti = $('.wrap-ostalih-vijesti').imagesLoaded(function() {
                // init Masonry after all images have loaded
                $gridostalihvijesti.masonry({
                    itemSelector: '.card',
                });
            });
            var $grideu = $('#eu-wrap').imagesLoaded(function() {
                // init Masonry after all images have loaded
                $grideu.masonry({
                    itemSelector: '.card',
                });
            });
            var $gridlic = $('#licnosti-wrap').imagesLoaded(function() {
                // init Masonry after all images have loaded
                $gridlic.masonry({
                    itemSelector: '.card',
                });
            });
            var $gridkar = $('#karijera-wrap').imagesLoaded(function() {
                // init Masonry after all images have loaded
                $gridkar.masonry({
                    itemSelector: '.card',
                });
            });
            var $gridkolum = $('#pauza-wrap').imagesLoaded(function() {
                // init Masonry after all images have loaded
                $gridkolum.masonry({
                    itemSelector: '.card',
                });
            });
            var $gridnaj = $('#najave-wrap').imagesLoaded(function() {
                // init Masonry after all images have loaded
                $gridnaj.masonry({
                    itemSelector: '.card',
                });
            });
            var $gridpovezanih = $(".wrap-povezanih-vijesti").imagesLoaded(function() {
                $gridpovezanih.masonry({
                    itemSelector: '.card',
                });
            });
        }
    }
    provjereDimenzija();
    window.addEventListener("resize", function() {
        // pozovi funkcije uslovljene dimenzijama
        provjereDimenzija();
    }, false);

    var $naslov = $(".modal-title");
    var $opis = $("#modalDescription");
    var nazivSlike = $(".item.active .carousel-caption h3").text();
    var opisSlike = $(".item.active .carousel-caption p").text();
    $naslov.text(nazivSlike);
    $opis.text(opisSlike);
    var url = $('.item.active').next().find("img").attr('data-src');
    $('.item.active').next().find("img").attr("src", url);
    $('#slikeCarousel').on('slid.bs.carousel', function(e) {
        var url = $('.item.active').next().find("img").attr('data-src');
        $('.item.active').next().find("img").attr("src", url); //set value : src = url
        var naslovSlike = $(".item.active .carousel-caption h3").text();

        var opisSlike = $(".item.active .carousel-caption p").text();
        $naslov.text(naslovSlike);
        $opis.text(opisSlike);
    });
    var brojSlajdova = $("#slikeCarousel>.carousel-inner>.item").length;
    $("#slikeCarousel>.carousel-inner>.item").each(function(index) {
        var urlSlike = $(this).find("img").attr('data-src');
        var element = "<li data-target='#slikeCarousel' data-slide-to=" + index + " style='background:url(" + urlSlike + ")'></li>";
        $("#carousel-thumbs").append(element);
    });
    $(".galerija>img").click(function(evet) {
        $(".otvoriGaleriju").click();
    });
    //  $("#selectmenu").selectmenu();    
    $('[name="drzava-registar"],[name="cpvKodovi"],[name="godinePP"],[name="sveobuhvatnaDobit"]').selectmenu();

    $("#Pops").popover({
        html: true,
        content: function() {
            return $('#popover-content').html();
        }
    });
    $("#Pops1").popover({
        html: true,
        content: function() {
            return $('#popover-content1').html();
        }
    });
    $(".kategorija-tendera>div").click(function() {
        $(this).toggleClass("active");
        console.log($(this));
        if($(this).hasClass("active"))
        {
            $(".kategorija-tendera div.active input[name*='ind_']").each(function (index) {
                $(this).prop('checked', true);
                $(this).val();
                console.log($(this));
           });
        } else {
            $(".kategorija-tendera div input[type=checkbox]").each(function (index) {
                $(this).prop('checked', false);
            });
        }
    });
   

    $(".grupa span").click(function() {
        $(this).parent().find('.datepick').focus();
    });
    $(".akordion>.menu-content>li>a").click(function(event) {
        event.preventDefault();
    });
    $("input.akordion-input[type='text']").on("click", function() {
        $(this).select();
    });
    $("#datetimepicker1-tp,#datetimepicker1-dp").datepicker({
        dateFormat: "dd.mm.yy"
    });
    $("#datetimepicker2-tp,#datetimepicker2-dp").datepicker({
        dateFormat: "dd.mm.yy"
    });
    $("#datetimepicker1").datepicker({
        dateFormat: "dd.mm.yy"
    }).focus(function() {
        $("#datetimepicker1").datepicker("show");
    }).focus();
    $("#datetimepicker2").datepicker({
        dateFormat: "dd.mm.yy"
    }).focus(function() {
        $("#datetimepicker2").datepicker("show");
    }).focus();
    $("#datetimepicker3").datepicker({
        dateFormat: "dd.mm.yy"
    }).focus(function() {
        $("#datetimepicker3").datepicker("show");
    }).focus();
    $("#datetimepicker4").datepicker({
        dateFormat: "dd.mm.yy"
    }).focus(function() {
        $("#datetimepicker4").datepicker("show");
    }).focus();
    $(function() {
        $("#slider-range, #slider-range2").slider({
            range: true,
            min: 1,
            max: 1000000,
            values: [1, 100000],
            slide: function(event, ui) {
                $("#amount").val(ui.values[0] + " KM" + " - " + ui.values[1] + " KM");
            }
        });
        $("#amount").val($("#slider-range").slider("values", 0) + " KM" +
            " - " + $("#slider-range").slider("values", 1) + " KM");
    });
    // $('.profil-centar').children().not('.tab-podaci').not('.tab-osnovno').hide();
    $(".profil-card.opcije>li>a").on("click", function(event) {
        event.preventDefault();
        var klasa = $(this).attr("data-target");
        $('.profil-centar').children().not('.tab-podaci').not('.' + klasa).fadeOut(function() {
            var pronadjen = $(this);
            $('.' + klasa).fadeIn(600);
        });
    });
    $('#tabela-rezultata td .bookmark-tendera>a').on("click", function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        var red = $(this).closest('tr');
        var zadnjakolona = red.find("td").eq(6);
        red.attr('data-izdvojen', $(red).attr('data-izdvojen') == '0' ? '1' : '0');
        if (zadnjakolona.text() == 0) {
            zadnjakolona.text(1);
        } else {
            zadnjakolona.text(0);
        }
        oTable.row(red).invalidate();

    });
    $.fn.dataTable.moment('DD.MM.YYYY.');
    $.fn.dataTable.moment('DD.MM.YYYY.');
    var oldStart = 0;
    var oTable = $('#tabela-rezultata').DataTable({
        searching: true,
        "paging": true,
        "info": false,
        "pageLength": 15,
        "pagingType": "numbers",
        "fnDrawCallback": function(o) {
            if (o._iDisplayStart != oldStart) {
                var targetOffset = $('#tabela-rezultata').offset().top - 350;
                $('html,body').animate({ scrollTop: targetOffset }, 500);
                oldStart = o._iDisplayStart;
            }
            dodajLabel();
            dodajKlik();
        },
        "columnDefs": [{
                "targets": 5,
                "orderable": false
            },
            { type: 'currency', targets: 2 }
        ]
    });

    $("#sacuvani-tenderi").click(function() {
        oTable.draw();
        oTable
            .columns(6)
            .search("1")
            .draw();
        dodajLabel();
        dodajKlik();
    });
    $("#svi-tenderi").click(function() {
        oTable.draw();
        oTable.search('')
            .columns().search('')
            .draw();
        dodajLabel();
        dodajKlik();
    });

    function dodajKlik() {
        function naKlik() {
            var sveKolone = $(this).nextAll('td');
            if (!sveKolone.hasClass("normalnaVisina")) {
                sveKolone.addClass("normalnaVisina");
                $(this).addClass('otvoren');
                //   sveKolone.css("display", "block")
            } else {
                sveKolone.removeClass("normalnaVisina");
                $(this).removeClass('otvoren');
            }
        }
        $("#tabela-rezultata td:first-child()").unbind('click').bind("click", naKlik);
        return true;
    }

    function dodajLabel() {
        var headertext = [];
        var headers = document.querySelectorAll("thead");
        var tablebody = document.querySelectorAll("tbody");

        for (var i = 0; i < headers.length; i++) {
            headertext[i] = [];
            for (var j = 0, headrow; headrow = headers[i].rows[0].cells[j]; j++) {
                var current = headrow;
                headertext[i].push(current.textContent.replace(/\r?\n|\r/, ""));
            }
        }

        if (headers.length > 0) {
            for (var h = 0, tbody; tbody = tablebody[h]; h++) {
                for (var i = 0, row; row = tbody.rows[i]; i++) {
                    for (var j = 0, col; col = row.cells[j]; j++) {
                        col.setAttribute("data-th", headertext[h][j]);
                    }
                }
            }
        }
    };
    /* -proširenje za sortiranje vrijednosti sa oznakom valute  */
    jQuery.extend(jQuery.fn.dataTableExt.oSort, {
        "currency-pre": function(a) {
            a = (a === "-") ? 0 : a.replace(/[^\d\-\.]/g, "");
            return parseFloat(a);
        },

        "currency-asc": function(a, b) {
            return a - b;
        },

        "currency-desc": function(a, b) {
            return b - a;
        }
    });
    //datepicker locale Bosnian
    (function(factory) {
        if (typeof define === "function" && define.amd) {

            // AMD. Register as an anonymous module.
            define(["../widgets/datepicker"], factory);
        } else {

            // Browser globals
            factory(jQuery.datepicker);
        }
    }(function(datepicker) {

        datepicker.regional.bs = {
            closeText: "Zatvori",
            prevText: "Prethodni mjesec",
            nextText: "Sljedeći mjesec",
            currentText: "Danas",
            monthNames: ["Januar", "Februar", "Mart", "April", "Maj", "Juni",
                "Juli", "August", "Septembar", "Oktobar", "Novembar", "Decembar"
            ],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun",
                "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"
            ],
            dayNames: ["Nedelja", "Ponedeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"],
            dayNamesShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
            dayNamesMin: ["Ne", "Po", "Ut", "Sr", "Če", "Pe", "Su"],
            weekHeader: "Wk",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ""
        };
        datepicker.setDefaults(datepicker.regional.bs);

        return datepicker.regional.bs;

    }));

    function setGrid() {
        var $novigrid = $('#ostale-promo').imagesLoaded(function() {
            // init Masonry after all images have loaded
            $novigrid.masonry({
                itemSelector: '.card-vijest'
            });
        });

        var resetGrid = function resetGrid() {
            $novigrid.masonry();
            $novigrid.masonry().masonry('reloadItems');
            $novigrid.masonry();
        }
        var destroy = function destroyGrid() {
            $novigrid.masonry().masonry('destroy');
        }
        setGrid.destroy = destroy;
        setGrid.resetGrid = resetGrid;


    }

    function paginate() {
        var kartice = jQuery("#ostale-promo .card-vijest.card-promo").not(".istaknute");

        var numItems = kartice.length;
        var perPage = 6;

        var pagination_placeholder_selector = ".articles-pagination";
        var myPageName = "#stranica-";


        var zaPrikazati = kartice.slice(perPage);
        for (var i = 0; i < zaPrikazati.length; i++) {
            $(zaPrikazati[i]).hide();
            $(zaPrikazati[i]).removeClass("card-vijest", "card-promo");

        }
        setGrid();
        $(pagination_placeholder_selector).pagination({
            items: numItems,
            itemsOnPage: perPage,
            cssStyle: "light-theme",
            hrefTextPrefix: myPageName,
            prevText: "Prethodna",
            nextText: "Sljedeća",
            onPageClick: function(pageNumber) {
                var showFrom = perPage * (pageNumber - 1);
                var showTo = showFrom + perPage;
                for (var i = 0; i < kartice.length; i++) {
                    $(kartice[i]).attr("style", '').hide().removeClass("card-vijest").removeClass("card-promo");

                }
                setGrid.destroy();
                var zaPrikaza = kartice.slice(showFrom, showTo);
                for (var i = 0; i < zaPrikaza.length; i++) {
                    $(zaPrikaza[i]).attr("style", '').fadeIn(400);
                    $(zaPrikaza[i]).addClass("card-vijest").addClass("card-promo");

                }
                setGrid();
                var pozicijaOffset = $('#ostale-promo').offset().top - 220;

                $('.articles-pagination ul>li>a').on('click', function(e) {
                    if (e.target !== this)
                        return;
                    $('html,body').animate({ scrollTop: pozicijaOffset }, 500);
                });
            }
        });

        var checkFragment = function() {
            // if there's no hash, make sure we go to page 1
            var hash = window.location.hash || (myPageName + "1");

            // we'll use regex to check the hash string
            var re = new RegExp("^" + myPageName + "(\\d+)$");
            hash = hash.match(re);

            if (hash)
            // the selectPage function is described in the documentation
            // we've te the page number in a regex group: (\d+)
                jQuery(pagination_placeholder_selector).pagination("selectPage", parseInt(hash[1]));
        };

        // we'll call this function whenever the back/forward is pressed
        jQuery(window).bind("popstate", checkFragment);

        // and we'll also call it to check right now!
        checkFragment();

    }
    if ($(".articles-pagination").length) {
        paginate();
    }

    /*   $(".dropdown-menu.promo>red-kategorija>kategorija-oglasa>div").click(function(event) {
           event.stopPropagation();
           event.preventDefault();

       });*/
    $(".dropdown-menu.promo .kategorija-oglasa>div").click(function() {
        var element = $(this).find("p").attr('class');
        console.log(element);
        var ima = $(".red-kategorija.toggleable>.kategorija-oglasa>div").has('.' + element);
        ima.parent().toggle();
        console.log(ima);

        $(this).toggleClass("active");
    });
    $(".red-kategorija.toggleable>.kategorija-oglasa>div").click(function() {
        $(this).parent().toggle();
        var element = $(this).find("p").attr('class');
        console.log(element);
        var ima = $(".dropdown-menu.promo .kategorija-oglasa>div").has('.' + element);
        ima.toggleClass("active");
        console.log(ima);
    });
    $(".dropdown-menu.promo").on("click", function(e) {
        e.stopPropagation();
    });
    /*
    Oznacavanje kolone u tabeli
    */
    $("#tabela_paketa tr td, #tabela_paketa tr th").click(function() {
        //Reset
        $("#tabela_paketa td, #tabela_paketa th").removeClass("highlight");
        //Add highlight class to new column
        var index = $(this).index();
        if (index != 0) {
            $("#tabela_paketa tr").each(function(i, tr) {
                $(tr).find('th').eq(index).addClass("highlight");
                $(tr).find('td').eq(index).addClass("highlight");
            });
        }
    });




});