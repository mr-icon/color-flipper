'use strict'

var ify = document.getElementsByTagName('body')

function change(){
    var code = '#' + Math.random().toString().slice(2,8)
    document.getElementById('color').innerHTML = code
    ify[0].style.background = code
}