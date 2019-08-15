

function preFilter(){
    var elements = document.getElementsByClassName("work")
    for (var i = 0; i< elements.length; i++){
        elements[i].style.display = "none"; 
    }
}

function filterByName(name){
    var elements = document.getElementsByClassName(name)
    for (var i = 0; i< elements.length; i++){
        elements[i].style.display = "flex";
    }
}

function changeFilterName(name){
    var filter = document.getElementsByClassName("filter-name");
    filter[0].innerHTML= name.toUpperCase(); 
}

function changeFilterHour(hours){
    var filter = document.getElementsByClassName("filter-hour");
    filter[0].innerHTML = hours; 
}

function hideHourSelector(){
    var selector = document.getElementsByClassName("hide-filter");
    selector[0].style.display= "none"; 
}

function showHourSelector(){
    var selector = document.getElementsByClassName("hide-filter");
    selector[0].style.display= "flex"; 
}

function filterActive(){
    var selector = document.getElementsByClassName("filter-title");
    selector[0].style.display="none";
    selector = document.getElementsByClassName("selector-title");
    selector[0].style.display="flex"
}

function allFilter(){
    changeFilterName("ALL")
    hideHourSelector(); 
    filterByName("work")
}
function gamesFilter(){
    preFilter(); 
    hideHourSelector();
    changeFilterName("games")
    filterByName("game");
}


function toolsFilter(){
    preFilter(); 
    hideHourSelector(); 
    changeFilterName("tools")
    filterByName("tool");
}


function jamsFilter(){
    preFilter(); 
    changeFilterHour("All hours")
    showHourSelector(); 
    changeFilterName("jams")
    filterByName("jam")
}


function oneHourFilter(){
    preFilter(); 
    changeFilterHour("1h"); 
    filterByName("1h")
}

function fourHoursFilter(){
    preFilter(); 
    changeFilterHour("4h");
    filterByName("4h")
}

function oneDayFilter(){
    preFilter(); 
    changeFilterHour("24h");
    filterByName("24h")
}

function twoDaysFilter(){
    preFilter(); 
    changeFilterHour("48h"); 
    filterByName("48h")
}