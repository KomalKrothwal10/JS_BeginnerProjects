
let c = 0
let ic = 0
let dc= 0

const count = document.getElementById('count')
const inCount = document.getElementById('inCount')
const deCount = document.getElementById('deCount')



function Increment(){
    c++
    ic = ic + 1
    update()
}
function Decrement(){
    c = c > 0 ? c - 1 : 0;
    dc = dc + 1;
    update()

}
function update(){
    count.textContent = c
    inCount.textContent = ic
    deCount.textContent = dc
}