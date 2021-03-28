const input = document.getElementById('inp');
const btn = document.getElementById('add');

btn.addEventListener('click', addList); // btn.onclick = function (e) can be used too
input.addEventListener('keyup', (e)=>{
    // to enable enter to list input text from user
    if(e.keyCode === 13){
        addList(e);
    };
})

function addList(e){
    const pending = document.querySelector('.pending');
    const done = document.querySelector('.done');

    const newLi = document.createElement('li');
    const checkBtn = document.createElement('button');
    const delBtn = document.createElement('button');

    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    delBtn.innerHTML = '<i class="fa fa-trash"></i>';

    if(input.value !==''){
        newLi.textContent = input.value;
        input.value = '';
        pending.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);
   
    }

    checkBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        done.appendChild(parent);
        checkBtn.style.display = 'none';
    });

    delBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
    });


}