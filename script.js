 menu.onclick = function myFunction() {
            var menu = document.getElementById('menu')
            var x = document.getElementById('myTopnav');

            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        }
