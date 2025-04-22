(function(){

    const sliders = [...document.querySelectorAll('.galery__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add) =>{
        const currentGalery = document.querySelector('.galery__body--show').dataset.id;
        value = Number(currentGalery);
        value+= add;
        console.log(value);

        sliders[Number(currentGalery)-1].classList.remove('galery__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ?  sliders.length : 1;
            console.log(value);
        }

        sliders[ value-1].classList.add('galery__body--show')

    }

})();