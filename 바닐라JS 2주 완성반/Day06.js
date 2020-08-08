const select = document.querySelector("select");
const COUNTRY_NAME = "Country";

function saveCounrty(){
    const changeValue = select.value;
    
    localStorage.setItem(COUNTRY_NAME , changeValue);
}

function loadCountry(){
    const loadedCountry = localStorage.getItem(COUNTRY_NAME);
    
    if(!!loadedCountry){
        select.value = loadedCountry;    
    }
}

function init() {
    loadCountry();
    select.addEventListener("change", saveCounrty);
}
init();
