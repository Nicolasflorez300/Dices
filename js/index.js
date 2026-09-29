if(sessionStorage.getItem("visited")){
    var x = Math.floor(Math.random() * 6)+1;
    var y = Math.floor(Math.random() * 6)+1;
    var title = document.querySelector("h1");

    document.getElementById("dice1").src = "Images/dice"+ x + ".png";

    document.getElementById("dice2").src = "Images/dice"+ y + ".png";

    if(x>y){
        title.innerText = "Player 1 Won";
    }else if(y>x){
        title.innerText = "Player 2 Won";
    }else{
        title.innerText = "Draw";
    }
}else{
    sessionStorage.setItem("visited", "true")
}