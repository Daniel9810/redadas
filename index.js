const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Graciash amor te amo mucho la verdad y solo quiero mejorar juntosh para estar juntitosh demasiado tiempo ehhhhhhh porque la verdad lo eresh todo para mi te amo y sorry mi miss bunny muuuuuuuuuaaaa')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})