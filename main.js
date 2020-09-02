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
console.log(btnId);
btnId.addEventListener('click', ()=>{
    idGenerator.next();
});



