function* createIdGenerator(){
    const container = document.querySelector('.container');



    for(let i = 1; i <= Infinity; i++){
        yield i;
        const cont = document.createElement('div');
        cont.className = 'inner-cont';
       cont.innerHTML = `<h3>${i}</h3>`
        container.append(cont);
    }
}
const idGenerator = createIdGenerator();
const btnId = document.querySelector('.btn-id');
btnId.addEventListener('click', ()=>{
    idGenerator.next();
});
function* incline(){
    const par = document.querySelector('.par');
    let size = parseInt(par.style.fontSize);
    for(let i = size; i < Infinity; i++){
        yield i;
        par.style.fontSize = i + 1 +'px';
        console.log(par.style.fontSize);
    }
}
const plusSize = incline();
const plus = document.querySelector('.plus');
plus.addEventListener('click', ()=>{
    plusSize.next();
})

function* decline(){
    const par = document.querySelector('.par');
    let size = parseInt(par.style.fontSize);
    for(let i = size; i > 0; i--){
        yield i;
        par.style.fontSize = i - 1 +'px';
        console.log(par.style.fontSize);
    }
}
const minSize = decline();
const minus = document.querySelector('.minus');
minus.addEventListener('click', ()=>{
    minSize.next();
})





