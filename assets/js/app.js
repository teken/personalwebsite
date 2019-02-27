$(document).ready(() => {
    $('.clickable .links > a').filter((i, item) => !$(item).hasClass('ignore')).on('click', (event) => {
        event.preventDefault();
        const href = event.currentTarget.href;
        const clean = href.slice(href.lastIndexOf('#')+1);
        $(event.currentTarget).parents('.clickable').find('.descriptions > div').each((i,item) => {
            if (item.id === clean) $(item).addClass('active');
            else $(item).removeClass('active');
        })
    });
});