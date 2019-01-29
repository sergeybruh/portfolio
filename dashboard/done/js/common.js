

// 3 dots in the projects
myclass = 'b3_item_more_wrap_b';
$(document).mouseup(function (e) {
    myel1 = $(".b3_item_more_wrap");
    if (myel1.hasClass(myclass)) {
        if ( myel1.has(e.target).length === 0){
             myel1.removeClass(myclass)
        }
    }
});
$(".b3_item_more").click(function(event) {
    event.preventDefault();
    myel = $(this).next(".b3_item_more_wrap");
    if (myel.hasClass(myclass)) {
        myel.removeClass(myclass)
    }
    else {
        myel.addClass(myclass);
    }

});
// END 3 dots in the projects


/* This pease of code cause errors on pages
$(document).ready(function(){
     $(".owl-carousel").on('initialized.owl.carousel',function(property){
        $(".rd1_message_controls_of_amount").text(property.item.count);  
    });
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        lazyLoad: true,
        nav: true,
        navText: ['', ''],
    });
    $(".owl-carousel").on('changed.owl.carousel', function(property) {
        $(".rd1_message_controls_of_bold").text(property.page.index + 1);
        $(".rd1_message_controls_of_amount").text(property.item.count);
    });
});
*/


//Custome selects 
$(document).ready(function() {
    $(function() {
      $('.h_check_pro').selectric({
            customClass: {
                prefix: 'selectric', 
                camelCase: false  
            },
        });
    });
    $(function() {
      $('.b3_select').selectric({
            customClass: {
                prefix: 'selectric', 
                camelCase: false  
            },
        });
    });
    $(function() {
      $('.b4_contlors_select').selectric({
            customClass: {
                prefix: 'selectric', 
                camelCase: false  
            },
        });
    });
    $(function() {
        $('.pe_check_pro').selectric({ //Serealizing on SE page
            customClass: {
                prefix: 'selectric', 
                camelCase: false  
            },
        });
    });
    $(function() {
        $('.rd_type').selectric({ //Serealizing on research-add.html
            customClass: {
                prefix: 'selectric', 
                camelCase: false,
                optionsItemBuilder: function(itemData, element, index) {
                    return element.val().length ? '<span class="ico ico-' + element.val() +  '"></span>' + itemData.text : itemData.text;
                },
            },
        });
    });
});

//END Custome selects 

// Custome scroll in 5-th block 
$(".b5_activity_item_wrap").mCustomScrollbar({
    axis:"y",
    setWidth: "100%",
    setHeight: "362",
    scrollbarPosition: "outside"
});
//END Custome scroll in 5-th block 


// Custome scroll in chart-list  
$(".chart-list__list").mCustomScrollbar({
    axis:"y",
    setWidth: "100%",
    setHeight: "169",
    scrollbarPosition: "outside"
});
//END Custome scroll in chart-list  

//Switching view of projects
$(".b3_view2").click(function(event) {
    event.preventDefault();
    $(".b3_item_wrap").addClass('b3_item_wrap_list');

    $(this).addClass('b3_view2_active');
    $(".b3_view1").removeClass('b3_view1_active');
});

$(".b3_view1").click(function(event) {
     event.preventDefault();
    $(".b3_item_wrap").removeClass('b3_item_wrap_list');
    $(this).addClass('b3_view1_active');
    $(".b3_view2").removeClass('b3_view2_active');
});


// iCheck
 $('input').iCheck({
    checkboxClass: 'icheckbox_minimal-green',
    radioClass: 'iradio_minimal-green',
    increaseArea: '20%' // optional
  });
//END Switching view of projects
// Chart on the 1-th block on main page Chart.js 2.5.0
// Chart.defaults.global.elements.rectangle.backgroundColor = '#FF0000';


/* my4

var bar_ctx = document.getElementById('bar-chart').getContext('2d');

var purple_orange_gradient = bar_ctx.createLinearGradient(0, 0, 0, 180);
purple_orange_gradient.addColorStop(0, '#6da2bf');
purple_orange_gradient.addColorStop(1, '#daf1fe');

var bar_chart = new Chart(bar_ctx, {
    type: 'bar',
    data: {
        labels: ["Plan", "Design", "Development", "QA", "In Reviewh", "Approved", "Live", "Complete"],
        datasets: [{
            label: '# of Votes',
            data: [12, 6, 12, 8, 14, 5, 9, 30],
						backgroundColor: purple_orange_gradient,
						hoverBackgroundColor: purple_orange_gradient,
						hoverBorderWidth: 0,
						hoverBorderColor: 'purple'
        }]
    },
    options: {
        legend: {
            display: false
        },
         tooltips: {
                enabled: true,
                mode: 'nearest',
                position: 'nearest',
                bodyFontColor: "rgba(51, 51, 51, 0.8);", //#000000
                bodyFontSize: 12,
                bodyFontStyle: "400",
                bodyFontColor: '#FFFFFF',
                bodyFontFamily: "'Nunito', sans-serif;",
                footerFontSize: 50,
                cornerRadius: 2, 
                xPadding: 6,
                yPadding: 6,
                callbacks: {
                    label: function(tooltipItem, data) {
                        return tooltipItem.yLabel;
                    }
                },

            },
      scales: {
        xAxes: [{
                    gridLines: {
                        display:false
                    }
                }],
        yAxes: [{
                    gridLines: {
                        display:false
                    }   
                }]
        }
    }
});
*/


//background-image: linear-gradient(180deg, #6da2bf 0%, #daf1fe 100%);

//END Chart on the 1-th block on main page Chart.js 2.5.0