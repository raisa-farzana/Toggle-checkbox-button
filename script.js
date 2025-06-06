
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
});

// Optional: click effect
document.addEventListener('mousedown', () => {
    cursor.classList.add('click');
});

document.addEventListener('mouseup', () => {
    cursor.classList.remove('click');
});

