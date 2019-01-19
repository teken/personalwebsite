$(document).ready(() => {
    $(window).mousemove((event) => transformText(event.pageX, event.pageY));
});

function transformText(mouseX, mouseY) {
    const title = $('.title p');
        const cx = Math.ceil($('body').width() / 2.0);
        const cy = Math.ceil($('body').height() / 2.0);
        const dx = mouseX - cx;
        const dy = mouseY - cy;
        const tiltx = (dy / cy);
        const tilty = - (dx / cx);
        const radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
        let shadow = title.css('text-shadow').split(' ');
        shadow[3] = `${tilty*10}px`;
        shadow[4] = `${tiltx*-10}px`;
        shadowSoftness = (getShadowSoftnessCorrect(tiltx, tilty) * 10) / 3;
        shadow[5] = `${shadowSoftness}px`;
        title.css({
            'transform':`rotate3d(${tiltx},${tilty},0,${radius*10}deg)`,
            'text-shadow': shadow.join(' ')
        });
}

function getShadowSoftnessCorrect(_x,_y){
	x = Math.abs(_x);
	y = Math.abs(_y);
	if (x > y) return x;
	else return y;
}