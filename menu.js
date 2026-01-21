function toggleFolder(el) {
    el.classList.toggle('collapsed');
    el.nextElementSibling.classList.toggle('active');
}

function loadPage(url) {
    parent.mainFrame.location.href = url;
    document.querySelectorAll('.menu-item,.port').forEach(item => {
        item.classList.remove('active');
    });
    event.target.classList.add('active');
}

window.onload = function() {
    const firstItem = document.querySelector('.menu-item,.port');
    if (firstItem) firstItem.classList.add('active');
    
};