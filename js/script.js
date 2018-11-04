'use strict'

/* Hamburger menu */

$(document).ready(function () {
    $('#hamburgerMenu').click(function () {
        $('.side-bar').toggleClass('toggle');
    })
})

/* Sidebar - active class toggle */

$('.menu-to-hide li').click(function () {
    $('.menu-to-hide li a').removeClass('active');
    $('.menu-to-hide li svg').removeClass('active-2');
    $(this).find('a').addClass('active');
    $(this).find('svg').addClass('active-2');
})

/* Chart.js */

var barChart = document.querySelector('#myChart');
Chart.defaults.global.animation.duration = 700;
Chart.defaults.scale.ticks.beginAtZero = true;
Chart.defaults.global.defaultFontFamily = 'Roboto';
Chart.defaults.global.defaultFontColor = '#a6a6a6';


let myChart = new Chart(barChart, {
    type: 'bar',
    data: {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        datasets: [
            {
                label: 'Signups',
                data: [98, 151, 462, 233, 309, 188, 409, 482, 255, 147],
                backgroundColor: '#448fac'
            },
            {
                label: 'FTD',
                data: [26, 335, 579, 185, 392, 229, 309, 409, 101, 89],
                backgroundColor: '#f58220'
            },
            {
                label: 'Earned',
                data: [503, 309, 466, 488, 303, 106, 298, 401, 205, 299],
                backgroundColor: '#14b509'
            }
        ]
    },
    options: {
        legend: {
            display: true,
            labels: {
                fontSize: 20,
                padding: 70,
                boxWidth: 20
            }
        }
    }
});


/* HTML References */

var general = document.querySelector('.main');
var links = document.querySelector('.links');
var details = document.querySelector('.details');
var banners = document.querySelector('.banners');
var personalData = document.querySelector('.personal-data');
var payout = document.querySelector('.payout');
var postback = document.querySelector('.postback');

var generalSection = document.querySelector('#generalSection');
var linksSection = document.querySelector('#linksSection');
var detailsSection = document.querySelector('#detailsSection');
var bannersSection = document.querySelector('#bannersSection');
var personalDataSection = document.querySelector('#personalDataSection');
var payoutSection = document.querySelector('#payoutSection');
var postbackSection = document.querySelector('#postbackSection');

var loginModal = document.querySelector('.login');
var messageBoxModal = document.querySelector('.message-box');
var logoutModal = document.querySelector('.logout');
var addBannersModal = document.querySelector('.add-banners');
var addLinksModal = document.querySelector('.add-links');

var manager = document.querySelector('#manager');
var addLinkOne = document.querySelector('#addLinkOne');
var addLinkTwo = document.querySelector('#addLinkTwo');
var addBannerOne = document.querySelector('#addBannerOne');
var addBannerTwo = document.querySelector('#addBannerTwo');
var logoutBtn = document.querySelector('#logout');
var logoutSideBar = document.querySelector('#logoutSideBar');
var quitBtn = document.querySelector('#quitBtn');
var enterBtn = document.querySelector('#enterBtn');
var cancelBtn = document.querySelector('#cancelBtn');
var closeBanners = document.querySelector('#closeBanners');
var closeLinks = document.querySelector('#closeLinks');
var closeMsgBox = document.querySelector('#closeMsgBox');

/* EventListeners for displaying sections and modals */

manager.addEventListener('click', function () {
    messageBoxModal.style.top = '0';
    messageBoxModal.style.position = 'fixed';
});

addLinkOne.addEventListener('click', function () {
    addLinksModal.style.top = '0';
    addLinksModal.style.position = 'fixed';
});

addLinkTwo.addEventListener('click', function () {
    addLinksModal.style.top = '0';
    addLinksModal.style.position = 'fixed';
});

addBannerOne.addEventListener('click', function () {
    addBannersModal.style.top = '0';
    addBannersModal.style.position = 'fixed';
});

addBannerTwo.addEventListener('click', function () {
    addBannersModal.style.top = '0';
    addBannersModal.style.position = 'fixed';
});

logoutBtn.addEventListener('click', function () {
    logoutModal.style.top = '0';
    logoutModal.style.position = 'fixed';
});

enterBtn.addEventListener('click', function () {
    loginModal.style.top = '-2000px';
});

quitBtn.addEventListener('click', function () {
    logoutModal.style.top = '-2000px';
    loginModal.style.top = '0';
    loginModal.style.position = 'fixed';
});

logoutSideBar.addEventListener('click', function(){
    logoutModal.style.top = '0';
    logoutModal.style.position = 'fixed';
});

cancelBtn.addEventListener('click', function () {
    logoutModal.style.top = '-2000px';
});

closeBanners.addEventListener('click', function () {
    addBannersModal.style.top = '-2000px';
});

closeLinks.addEventListener('click', function () {
    addLinksModal.style.top = '-2000px';
});

closeMsgBox.addEventListener('click', function () {
    messageBoxModal.style.top = '-2000px';
});


generalSection.addEventListener('click', function () {
    general.style.display = 'block';
    links.style.display = 'block';
    details.style.display = 'none';
    banners.style.display = 'none';
    personalData.style.display = 'none';
    payout.style.display = 'none';
    postback.style.display = 'none';
});

linksSection.addEventListener('click', function () {
    general.style.display = 'none';
    links.style.display = 'block';
    details.style.display = 'none';
    banners.style.display = 'none';
    personalData.style.display = 'none';
    payout.style.display = 'none';
    postback.style.display = 'none';
});

detailsSection.addEventListener('click', function () {
    general.style.display = 'none';
    links.style.display = 'none';
    details.style.display = 'block';
    banners.style.display = 'none';
    personalData.style.display = 'none';
    payout.style.display = 'none';
    postback.style.display = 'none';
});

bannersSection.addEventListener('click', function () {
    general.style.display = 'none';
    links.style.display = 'none';
    details.style.display = 'none';
    banners.style.display = 'block';
    personalData.style.display = 'none';
    payout.style.display = 'none';
    postback.style.display = 'none';
});

personalDataSection.addEventListener('click', function () {
    general.style.display = 'none';
    links.style.display = 'none';
    details.style.display = 'none';
    banners.style.display = 'none';
    personalData.style.display = 'block';
    payout.style.display = 'none';
    postback.style.display = 'none';
});

payoutSection.addEventListener('click', function () {
    general.style.display = 'none';
    links.style.display = 'none';
    details.style.display = 'none';
    banners.style.display = 'none';
    personalData.style.display = 'none';
    payout.style.display = 'block';
    postback.style.display = 'none';
});

postbackSection.addEventListener('click', function () {
    general.style.display = 'none';
    links.style.display = 'none';
    details.style.display = 'none';
    banners.style.display = 'none';
    personalData.style.display = 'none';
    payout.style.display = 'none';
    postback.style.display = 'block';
});