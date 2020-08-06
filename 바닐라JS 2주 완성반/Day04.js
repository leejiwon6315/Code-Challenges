import "./styles.css";

const colors = ["#3498db", "#9b59b6", "#f39c12"];
const windowColor = document.querySelector("body");

function windowResize(){
    const windowSize = window.innerWidth;
    
    if( windowSize > 900 ) windowColor.style.backgroundColor = colors[2];

    else if( 900 >= windowSize && windowSize > 600) windowColor.style.backgroundColor = colors[1];
    
    else if(windowSize <= 600) windowColor.style.backgroundColor = colors[0];
};

windowResize();
//맨처음 창을 불러왔을 때 사이즈에 따라 색을 정해주기 위해서 한번 실행

window.addEventListener("resize", windowResize);
