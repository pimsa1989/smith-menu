
document.getElementById("search").addEventListener("input", function (e) {
    const keyword = e.target.value.toLowerCase();
    const container = document.getElementById("menu-container");
    container.innerHTML = "";
    const menus = {
        "iced latte": "Coffee 35ml + Milk 120ml",
        "iced americano": "Coffee 35ml + Water 150ml"
    };
    Object.keys(menus).forEach(menu => {
        if (menu.includes(keyword)) {
            const el = document.createElement("div");
            el.innerHTML = `<h3>${menu.toUpperCase()}</h3><p>${menus[menu]}</p>`;
            container.appendChild(el);
        }
    });
});
