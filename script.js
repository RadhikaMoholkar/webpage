const bar= document.getElementsByID('bar');
const close=document.getElementsByID('close');
const nav=document.getElementsByID('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
    if (close) {
        close.addEventListener('click', () => {
            nav.classList.remove('active');
        })
}