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
function getSize(){
    const par = document.querySelector('.par');
    let size = parseInt(par.style.fontSize);
    return size;
}
function* incline(action){
    if(action === 'up'){
        const par = document.querySelector('.par');
        for(let i = getSize(); i < Infinity; i++){
            yield i;
            par.style.fontSize = getSize() + 1 + 'px';
        }
    }
    else if(action === 'down'){
        const par = document.querySelector('.par');
        for(let i = getSize(); i > 0; i--){
            yield i;
            par.style.fontSize = getSize() - 1 + 'px';
        }
    }

}
const plusSize = incline('up');
const plus = document.querySelector('.plus');
plus.addEventListener('click', ()=>{
    plusSize.next();
})

const minSize = incline('down');
const minus = document.querySelector('.minus');
minus.addEventListener('click', ()=>{
    minSize.next();
})





