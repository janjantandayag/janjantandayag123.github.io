function myFunction(){
    var target = document.getElementById('mobile');
    var navIcon = document.getElementById('nav-icon');
    if (target.className === 'display-none'){
        target.className = 'show-nav';
        navIcon.className = 'icon animateIcon';
    }
    else {
        target.className = 'display-none';
        navIcon.className = 'icon animateBack';
    }
}