function* createIdGenerator(){
    const container = document.querySelector('.container');



    for(let i = 1; i <= Infinity; i++){
        const cont = document.createElement('div');
        cont.className = 'inner-cont';
       cont.innerHTML = `<h3>${i}</h3>`
        container.append(cont);
        yield i;
       
    }
}
const idGenerator = createIdGenerator();
const btnId = document.querySelector('.btn-id');
btnId.addEventListener('click', ()=>{
    idGenerator.next();
});
const par = document.querySelector('.par');
function getSize(){
    let size = parseInt(par.style.fontSize);
    return size;
}
function* incline(action){
    if(action === 'up'){
       
        for(let i = getSize(); i < Infinity; i++){
            par.style.fontSize = getSize() + 1 + 'px';
            yield i;
            
        }
    }
    else if(action === 'down'){
        
        for(let i = getSize(); i > 0; i--){
            par.style.fontSize = getSize() - 1 + 'px';
            yield i;
            
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





