'use strict' 

var hamburgerMenu = document.querySelector('#hamburgerMenu');
var logo = document.querySelector('.logo');
var hiddenMenu = document.querySelector('.menu-to-hide');
var container = document.querySelector('.container');
var sideBar = document.querySelector('.side-bar');

$(document).ready(function(){
    $('#hamburgerMenu').click(function(){
        $('.logo').toggleClass('logoToggle');
    })
    $('#hamburgerMenu').click(function(){
        $('.hiddenMenu').toggleClass('hiddenMenuToggle');
    })
    $('#hamburgerMenu').click(function(){
        $('.container').toggleClass('containerToggle');
    })
})