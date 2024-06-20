let cells=document.querySelectorAll('.cell')
cells=Array.from(cells)

let currentPlayer="X"
let gameover=false

let WinningCombinition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function checkForWinner(){
    WinningCombinition.forEach(e=> {
        if((cells[e[0]].innerText==cells[e[1]].innerText)&&(cells[e[2]].innerText==cells[e[1]].innerText)&&(cells[e[0]].innerText!=="")){
            highlightCell(e)
            document.querySelector("#text").innerText=currentPlayer+" Wins!"
            gameover=true
            document.getElementById("overlay").style.display="flex"
        }
    });
}
function highlightCell(p){
    p.forEach(function(idx){
        cells[idx].classList.add("highlight")
    })
}

//game logic
cells.forEach(function(c){
    c.addEventListener('click',function(){
        //for not overwriting 
        if(c.innerText.trim()!="")return
        c.innerText=currentPlayer
        checkForWinner()
        //alternating x,o
        currentPlayer=currentPlayer=="X"?"O":"X"
        if(!gameover){
        document.querySelector(".text1").innerText=currentPlayer+"'s Turn"}
    })
})
function reset(){
    location.reload()
}

