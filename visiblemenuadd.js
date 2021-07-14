document.addEventListener('DOMContentLoaded', async () => {

    const d = new Date();
    const date = d.getDate();
    const month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";
    const n = month[d.getMonth()];
    const year = d.getFullYear();
    const dateStr = `${n} ${date}, ${year}`;

    const currentDate = document.querySelector("#current_date");
    const menuLinks = document.querySelector("#master_menu_box");
    let activeMenu = document.querySelector(".active-menu");
    let currentMenuTarget;
    let menuToActivate;

    // keep the copyright year accurate
    const footerDate = document.querySelector(".footer_year");
    footerDate.innerHTML = (`&copy; ${year} Evelina Restaurant`);

    // display the current day
    currentDate.innerHTML= dateStr;

    
const renderItem = (item) => {
    currentMenuTarget = document.body.querySelector(`div[data-submenu-live="${item.subMenuChoice}"]`);
            
            const newMenuItem = document.createElement("div");
            newMenuItem.classList.add("live-menu-item");
            
            const itemNameBox = document.createElement("div");
            itemNameBox.classList.add('item-name');
            
            const itemDescBox = document.createElement("div");
            itemDescBox.classList.add('item-description')
            
            const itemPriceBox =  document.createElement("div");
            itemPriceBox.classList.add('item-price');
            
            newMenuItem.classList.add("row");
            newMenuItem.setAttribute("id", `${item.id}`);

    if (item.primaryMenuChoice === "cocktails"  || item.subMenuChoice === "brunch cocktails") {
            
            itemNameBox.classList.add("col-3");
            itemDescBox.classList.add("col-7");
            itemPriceBox.classList.add("col-1");
            itemNameBox.innerHTML = (`<p><strong>${item.dishName}</strong></p>`);
            itemDescBox.innerHTML = (`<p>${item.dishDesc}</p>`);
            itemPriceBox.innerHTML = (`<p>${item.dishPrice}</p>`);
            
            newMenuItem.append(itemNameBox);
            newMenuItem.append(itemDescBox);
            newMenuItem.append(itemPriceBox);

            currentMenuTarget.append(newMenuItem);
        } else if (item.primaryMenuChoice === "wbtb"  || item.primaryMenuChoice === "wbtg") {

            itemDescBox.classList.add("col-9");
            itemDescBox.classList.add("wine-desc");
            itemPriceBox.classList.add("col-3");
            itemPriceBox.classList.add('right-align');
            itemDescBox.innerHTML = (`<p><strong>${item.dishName}</strong> ${item.dishDesc}</p>`);
            itemPriceBox.innerHTML = (`${item.dishPrice}`);
            newMenuItem.append(itemDescBox);
            newMenuItem.append(itemPriceBox);

            currentMenuTarget.append(newMenuItem);
        } else {
            
            itemDescBox.classList.add("col-10");
            itemPriceBox.classList.add("col-2");
            itemDescBox.innerHTML = (`<p>${item.dishDesc}</p>`);
            itemPriceBox.innerHTML = (`${item.dishPrice}`);
            newMenuItem.append(itemDescBox);
            newMenuItem.append(itemPriceBox);

            currentMenuTarget.append(newMenuItem);
        }
    }

    function changeMenu(menuToActivate, menuToHide) {
        menuToHide.style.display = "none";
        menuToActivate.style.display="block";
    };

    menuLinks.addEventListener("click", function(e) {
        e.preventDefault();
        if (e.target.classList.contains("menu_link")) {
            targetMenu  = e.target.dataset.menuTarget;
            
            activeMenu.classList.toggle("active-menu");
            
            menuToActivate = document.querySelector(`div[id="${targetMenu}"]`);
            menuToHide = activeMenu;
            
            changeMenu(menuToActivate, menuToHide);
            
            return activeMenu = menuToActivate;
        }
    });

    // make the top anchor appear when needed

    const topAnchor = document.querySelector(".top_anchor");
    const topMenu = document.querySelector("#drinks_nav");
    const interSectionTarget = document.querySelector(".observer_target");
    const footerAsTarget = document.querySelector(".footer_year");

    const activateTopAnchor = new IntersectionObserver(function(entries) {
        if(entries[0]['isIntersecting'] === true) {
            if(entries[0]['intersectionRatio'] === 1)
                topAnchor.classList.remove("hide-me");
        }
    }, { threshold: [0, 0.5, 1] });

    const deactivateTopAnchor = new IntersectionObserver(function(entries) {
        if(entries[0]['isIntersecting'] === true) {
            if(entries[0]['intersectionRatio'] === 1)
                topAnchor.classList.add("hide-me");
        }
    }, { threshold: [0, 0.5, 1] });

    activateTopAnchor.observe(interSectionTarget);
    deactivateTopAnchor.observe(topMenu);

    const init = async () => {
        items = await index();
    }  

    const render = () => {
        for (const item of items) renderItem(item);
    }

    await init();
    render();
    
});
