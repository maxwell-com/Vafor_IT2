if (localStorage.getItem('leaveConf') == 'true') {
    window.addEventListener('beforeunload', function(e) {
        e.preventDefault();
        e.returnValue = ''; 
    });
}
