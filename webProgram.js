
function dropdownMenu(){
    document.getElementById("dropdownMenu").classList.toggle("show");
}

window.onclick = function(event){
    if (!event.target.matches('.dropdownMenu')){
        var dropdowns = document.getElementById("dropdownMenu");
        var i;
        for (i=0 ; i<dropdowns.length;i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('.show')){
                openDropdown.classList.remove('.show');
            }
        }
    }
}