'use strict' 

/* Hamburger menu */

$(document).ready(function(){
    $('#hamburgerMenu').click(function(){
        $('.side-bar').toggleClass('toggle');
    })
})

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
var quitBtn = document.querySelector('#quitBtn');
var enterBtn = document.querySelector('#enterBtn');
var cancelBtn = document.querySelector('#cancelBtn');
var closeBanners = document.querySelector('#closeBanners');
var closeLinks = document.querySelector('#closeLinks');
var closeMsgBox = document.querySelector('#closeMsgBox');

/* EventListeners for displaying sections and modals */

manager.addEventListener('click', function(){
    messageBoxModal.style.display = 'block';
});

addLinkOne.addEventListener('click', function(){
    addLinksModal.style.display = 'block';
});

addLinkTwo.addEventListener('click', function(){
    addLinksModal.style.display = 'block';
});

addBannerOne.addEventListener('click', function(){
    addBannersModal.style.display = 'block';
});

addBannerTwo.addEventListener('click', function(){
    addBannersModal.style.display = 'block';
});

logoutBtn.addEventListener('click', function(){
    logoutModal.style.display = 'block';
});

enterBtn.addEventListener('click', function(){
    loginModal.style.display = 'none';
});

quitBtn.addEventListener('click', function(){
    logoutModal.style.display = 'none';
    loginModal.style.display = 'block';
});

cancelBtn.addEventListener('click', function(){
    logoutModal.style.display = 'none';
});

closeBanners.addEventListener('click', function(){
    addBannersModal.style.display = 'none';
});

closeLinks.addEventListener('click', function(){
    addLinksModal.style.display = 'none';
});

closeMsgBox.addEventListener('click', function(){
    messageBoxModal.style.display = 'none';
});



generalSection.addEventListener('click', function() {
    general.style.display = 'block';
    links.style.display = 'block';
    details.style.display = 'none';
    banners.style.display = 'none';
    personalData.style.display = 'none';
    payout.style.display = 'none';
    postback.style.display = 'none';
});

linksSection.addEventListener('click', function() {
    general.style.display = 'none';
    links.style.display = 'block';
    details.style.display = 'none';
    banners.style.display = 'none';
    personalData.style.display = 'none';
    payout.style.display = 'none';
    postback.style.display = 'none';
});

detailsSection.addEventListener('click', function() {
    general.style.display = 'none';
    links.style.display = 'none';
    details.style.display = 'block';
    banners.style.display = 'none';
    personalData.style.display = 'none';
    payout.style.display = 'none';
    postback.style.display = 'none';
});

bannersSection.addEventListener('click', function() {
    general.style.display = 'none';
    links.style.display = 'none';
    details.style.display = 'none';
    banners.style.display = 'block';
    personalData.style.display = 'none';
    payout.style.display = 'none';
    postback.style.display = 'none';
});

personalDataSection.addEventListener('click', function() {
    general.style.display = 'none';
    links.style.display = 'none';
    details.style.display = 'none';
    banners.style.display = 'none';
    personalData.style.display = 'block';
    payout.style.display = 'none';
    postback.style.display = 'none';
});

payoutSection.addEventListener('click', function() {
    general.style.display = 'none';
    links.style.display = 'none';
    details.style.display = 'none';
    banners.style.display = 'none';
    personalData.style.display = 'none';
    payout.style.display = 'block';
    postback.style.display = 'none';
});

postbackSection.addEventListener('click', function() {
    general.style.display = 'none';
    links.style.display = 'none';
    details.style.display = 'none';
    banners.style.display = 'none';
    personalData.style.display = 'none';
    payout.style.display = 'none';
    postback.style.display = 'block';
});

