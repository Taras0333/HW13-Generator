function* createIdGenerator(){
    const container = document.querySelector('.container');



    for(let i = 0; i <= Infinity; i++){
        yield i;
        const cont = document.createElement('div');
        cont.className = 'inner-cont';
       cont.innerHTML = `<h3>${i}</h3>`
        container.append(cont);
    }
}
const idGenerator = createIdGenerator();
console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next());


