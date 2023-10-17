var counter = 10;
function poda(){
    document.getElementById("count").textContent=counter;
    if(counter > 0){
        counter --;
        setTimeout(poda,1000)
        if(counter==0){
            counter="HAPPY INDEPENDENCE DAY";
        }
    }
}
  setTimeout(poda,1000)
