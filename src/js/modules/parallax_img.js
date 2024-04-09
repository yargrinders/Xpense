function parallaxLogo() {
    const container = document.querySelector('.top__img');
        const img = document.querySelector('.parallax-img');

        container.addEventListener('mousemove', function(e) {
            const containerRect = container.getBoundingClientRect();
            const containerCenterX = containerRect.left + containerRect.width / 2;
            const containerCenterY = containerRect.top + containerRect.height / 2;

            const mouseX = e.clientX - containerCenterX;
            const mouseY = e.clientY - containerCenterY;

            const moveX = -mouseX / 80; 
            const moveY = -mouseY / 80;

            img.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });

        container.addEventListener('mouseleave', function() {
            img.style.transition = 'transform 0.5s ease';
            img.style.transform = 'translate(0, 0)';
        });

        container.addEventListener('mouseenter', function() {
            img.style.transition = '';
        });
}

export default parallaxLogo;