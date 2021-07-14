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

    const menuAddForm = document.querySelector("#menu_add_form")
    const specialMenuAddForm = document.querySelector("#special_menu_add_form");
    const previewButton = document.querySelector(".preview_button");
    const specialPreviewButton = document.querySelector(".special_preview_button");
    const itemName = document.querySelector("#dish_name");
    const specialItemName = document.querySelector("#special_dish_name");
    const itemDesc = document.querySelector("#dish_description");
    const specialItemDesc = document.querySelector("#special_dish_description");
    const itemPrice = document.querySelector("#dish_price");
    const specialItemPrice = document.querySelector("#special_dish_price");
    const addButton  = document.querySelector(".send_button");
    const specialAddButton = document.querySelector(".special_send_button");
    const errorMessage = document.querySelector(".error_message");
    const specialErrorMessage = document.querySelector(".special_error_message");
    const confirmMessage = document.querySelector(".confirm_message");
    const specialConfirmMessage = document.querySelector(".special_confirm_message");
    const primaryMenuSelect = document.querySelector("#primary-menu-select");
    const itemPreview = document.querySelector(".item_preview");
    const specialItemPreview = document.querySelector(".special_item_preview");
    const liveMenu = document.querySelector(".current_menu");
    const currentDate = document.querySelector("#current_date");
    const specialMenuSelect = document.querySelector("#special-menu-select");
    const addTitleButton = document.querySelector("#special-menu-title-add-button");
    const specialMenuTitle = document.querySelector("#special_menu_title");
    const specialTitle = document.querySelector(".special_title");
    const specialMenu = document.querySelector(".special_current_menu");
    const specialDeleteButton = document.querySelector("#special-menu-delete-button");


    let itemToDestroy;
    let primaryMenuChoice;
    let specialPrimaryMenuChoice;
    let subMenu;
    let specialSubMenu;
    let specialSubMenuChoice;
    
    let dishName;
    let dishDesc;
    let dishPrice;
    let currentMenuTarget;

    // display the current day
    currentDate.innerHTML= dateStr;

    // select a menu to add to, activate matching submenu
    primaryMenuSelect.addEventListener('change', function(e) {
        if (subMenu != undefined) {
            subMenu.style.display = "none";
            subMenu = undefined;
        }

        primaryMenuChoice = e.target.value.toLowerCase();
        subMenu = document.querySelector(`[data-menu="${primaryMenuChoice}"]`);

        if (subMenu === null) {
            return;
        } else {
        subMenu.style.display = "inline-block";
        }
        
        return subMenu;
    });


    
    // preview the item to be added
    previewButton.addEventListener("click", function(e) {
        e.preventDefault();
        // allSubMenus.style.color = "black";
        
        subMenuChoice = subMenu.value.toLowerCase();

        currentMenuTarget = document.querySelector(`[data-submenu-live="${subMenuChoice}"]`);
        currentMenuTarget.style.color = "orange";

        dishName = itemName.value.trim();
        dishDesc = itemDesc.value.trim();
        dishPrice = itemPrice.value.trim();

        confirmMessage.innerHTML = "";
        itemPreview.innerHTML = (`${dishDesc} ${dishPrice}`)

    });

    // add the item to the database
    addButton.addEventListener("click", async function(e) {
        e.preventDefault();

        const newItem = {
            dishName: dishName,
            dishDesc: dishDesc,
            dishPrice: dishPrice,
            primaryMenuChoice: primaryMenuChoice,
            subMenuChoice: subMenuChoice
        }

        // send to database
        const result = await create(newItem);

        renderItem(result)

        // reset the form
        menuAddForm.reset();
        itemPreview.innerHTML = "";
        confirmMessage.innerHTML = `${dishName} was added to the ${primaryMenuChoice} ${subMenuChoice} menu.`
        
        // reset the variables and messages
        dishName = undefined;
        dishDesc = undefined;
        dishPrice = undefined;
        errorMessage.innerText = "";
        subMenu.style.display = "none";

        currentMenuTarget.style.color = "black";
    });


    // SPECIAL MENU CREATOR

        // create special menu title
        addTitleButton.addEventListener("click", function(e) {
            e.preventDefault();
            specialTitle.innerHTML = specialMenuTitle.value.trim();
    
            // send to database 
        })

        const renderItem = (item) => {
            currentMenuTarget = document.body.querySelector(`div[data-submenu-live="${item.subMenuChoice}"]`);
                const newMenuItem = document.createElement("p");
                newMenuItem.classList.add("live-menu-item");
                newMenuItem.setAttribute("id", `${item.id}`);
                const deleteItemButton = document.createElement("a");
                deleteItemButton.classList.add("delete-button");
            
            if (item.primaryMenuChoice === "cocktails"  || item.subMenuChoice === "brunch cocktails" || item.primaryMenuChoice === "wbtb" || item.primaryMenuChoice === "wbtg") {
                
                newMenuItem.innerHTML = (`<strong>${item.dishName}</strong> &nbsp &nbsp ${item.dishDesc} &nbsp &nbsp &nbsp &nbsp ${item.dishPrice}`);
                currentMenuTarget.append(newMenuItem);
            } else {
                
                newMenuItem.innerHTML = (`${item.dishDesc} &nbsp &nbsp &nbsp &nbsp ${item.dishPrice}`);
                currentMenuTarget.append(newMenuItem);
                
            }
            newMenuItem.prepend(deleteItemButton);
                deleteItemButton.innerHTML = "X";
        }


    // remove an item from the menu
    liveMenu.addEventListener("click", async function(e) {
        if (e.target.classList.contains("delete-button")) {
                        
            let itemToDestroy = e.target.closest("p");
            let id = itemToDestroy.id;
            
            // delete from database
            await destroy(id);

            // remove from view
            itemToDestroy.remove();

            // reset variable
            itemToDestroy = "";
        }
    });

    const init = async () => {
        items = await index();
    }  
    const render = () => {
        for (const item of items) renderItem(item);
    }

    await init();
    render();
    
});

// TO DO
// script year in footer on index pg
// Sorting of items
// editable cocktail menu prices (cocktails and mocktails)
// be able to edit things without deleting
// for special menu: hook everything up
//                   maybe something like "if special menu title is not null display:block?"


    // // same as above but for special menus
    // specialMenuSelect.addEventListener('change', function(e) {
    //     if (specialSubMenu != undefined) {
    //         specialSubMenu.style.display = "none";
    //         specialSubMenu = undefined;
    //     }

    //     specialPrimaryMenuChoice = e.target.value.toLowerCase();
    //     specialSubMenu = document.querySelector(`[data-menu="${specialPrimaryMenuChoice}"]`);
    //     console.log(specialPrimaryMenuChoice, specialSubMenu);

    //     if (specialSubMenu === null) {
    //         return;
    //     } else {
    //     specialSubMenu.style.display = "inline-block";
    //     }
        
    //     return specialSubMenu;
    // });

        // // same as above, but for special menu
    // specialPreviewButton.addEventListener("click", function(e) {
    //     e.preventDefault();
        
    //     specialSubMenuChoice = specialSubMenu.value.toLowerCase();

    //     currentMenuTarget = document.querySelector(`[data-special-submenu-live="${specialSubMenuChoice}"]`);
    //     currentMenuTarget.style.color = "orange";

    //     specialDishName = specialItemName.value.trim();
    //     specialDishDesc = specialItemDesc.value.trim();
    //     specialDishPrice = specialItemPrice.value.trim();

    //     specialConfirmMessage.innerHTML = "";
    //     specialItemPreview.innerHTML = (`${specialDishDesc} ${specialDishPrice}`)
    // })


    // // delete the special menu
    // specialDeleteButton.addEventListener("click", function(e) {
    //     e.preventDefault();
    //     // activate overlay with c/c box
    // })



    // add the item to the special menu
    // specialAddButton.addEventListener("click", function(e) {
    //     e.preventDefault();

    //     // const newMenuItemTitle = document.createElement("p");
    //     const newMenuItem = document.createElement("p");
    //     const deleteItemButton = document.createElement("a");
    //     deleteItemButton.classList.add("delete-button");
    //     newMenuItem.classList.add("live-menu-item");
    //     newMenuItem.setAttribute("draggable", "true");
    //     // newMenuItemTitle.innerHTML = (`${dishName)`;
    //     newMenuItem.innerHTML = (`${specialDishDesc} ${specialDishPrice}`);
    //     currentMenuTarget.append(newMenuItem);
    //     newMenuItem.append(deleteItemButton);
    //     deleteItemButton.innerHTML = "X";


    //     // send to database

    //     specialMenuAddForm.reset();
    //     specialItemPreview.innerHTML = "";
    //     specialConfirmMessage.innerHTML = `This item was added to the ${specialPrimaryMenuChoice} ${specialSubMenuChoice} menu.`
        
    //     specialDishName = undefined;
    //     specialDishDesc = undefined;
    //     specialDishPrice = undefined;
    //     specialErrorMessage.innerText = "";
    //     specialSubMenu.style.display = "none";
    //     specialMenuAddForm.reset();

    //     currentMenuTarget.style.color = "black";
    // });
