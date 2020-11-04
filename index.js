var blueBtn = document.querySelector("#blueBtn");
        var pinkBtn = document.querySelector("#pinkBtn");
        var yellowBtn = document.querySelector("#yellowBtn");
        var whiteBtn = document.querySelector("#whiteBtn");

        function changeBg(color, id){
            // GET BACKGROUND CONTAINER AND CHANGE COLOR
            var container = document.querySelector('#bg-container');
            container.style.backgroundColor = color;

            // GET THE CURRENT ACTIVE BTN AND REMOVE THE ACTIVE CLASS
            var currentActiveBtn = document.querySelector('.bg-change-btn.active');
            currentActiveBtn.classList.remove('active');

            // GIVE THE NEW CLICKED BUTTON THE ACTIVE CLASS
            var clickedBtn = document.querySelector("#" + id);
            clickedBtn.classList.add('active')
        }