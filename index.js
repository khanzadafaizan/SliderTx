
    const slider = document.getElementById('slider');
    const sliderInner = slider.children[0];
    const images = sliderInner.children;
    images[0].className = 'active'
    
    function onPreviousClick(){
      for(let i = 0;  i < images.length; i++) {
        const image = images[i];
        if(image.className === 'active'){
            images[i].className = ''
            images[i - 1].className = 'active'
            sliderInner.style.transform = 'translateX(' + (i - 1) * -356 + 'px)'
            break;
        }

    }

    }
    function onNextClick(){
        for(let j = 0;  j < images.length; j++) {
            const image = images[j];
            if(image.className === 'active'){
                images[j].className = ''
                images[j + 1].className = 'active'
                sliderInner.style.transform = 'translateX(' + (j + 1) * -356 + 'px)'
                break;
            }

        }
    }


      
    
