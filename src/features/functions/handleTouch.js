export const handleTouch = (e) => {
    const target = e.currentTarget;
    target.classList.add('hover'); // Add hover class
    setTimeout(() => {
        target.classList.remove('hover'); // Remove hover class after 2000ms
    }, 2000);
};