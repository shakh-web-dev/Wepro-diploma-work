document.addEventListener("DOMContentLoaded", () => {
    let open_mobile_menu = document.querySelector(".open_mobile_menu")
    open_mobile_menu.innerHTML = `
    <div class="menu_btn">
            <div class="menu_mob_chapter_img"></div>Войти
        </div>
        <div class="menu_btn">
            <div class="menu_mob_chapter_img"></div>Регистрация
        </div>
        <div class="menu_btn">
            <div class="menu_mob_chapter_img"></div>Избранное
        </div>
        <div class="menu_btn">
            <div class="menu_mob_chapter_img"></div>Корзина
        </div>
        <div class="menu_btn">
            <div class="menu_mob_chapter_img"></div>Магазины
        </div>
        <div class="menu_btn">
            <div class="menu_mob_chapter_img"></div>Акции
        </div>
        <div class="menu_btn">
            <div class="menu_mob_chapter_img"></div>Доставка и оплата
        </div>
        <div style="padding-left: 35px;" class="menu_btn">Квадроциклы</div>
        <div style="padding-left: 35px;" class="menu_btn">Катера</div>
        <div style="padding-left: 35px;" class="jts menu_btn active_menu_btn">Гидроциклы</div>
        <div style="padding-left: 35px;" class="menu_btn">Лодки</div>
        <div style="padding-left: 35px;" class="menu_btn">Вездеходы</div>
        <div style="padding-left: 35px;" class="menu_btn">Снегоходы</div>
        <div style="padding-left: 35px;" class="menu_btn">Двигатели</div>
        <div style="padding-left: 35px;" class="menu_btn">Запчасти</div>
        <div class="mob_addres">
            <a href="https://maps.google.com/">Москва, ул.Науки 25</a>
        </div>
    `

    let btnMobMenu = document.querySelector(".mobile_menu")
    let opMobMenu = document.querySelector(".open_mobile_menu")
    let bg_mobile_menu = document.querySelector(".bg_mobile_menu")
    
    btnMobMenu.onclick = () => {
        opMobMenu.classList.add("opened")
        bg_mobile_menu.classList.add("actived_bg")
        document.body.style.overflow = "hidden"
    }
    bg_mobile_menu.onclick = () => {
        opMobMenu.classList.remove("opened")
        bg_mobile_menu.classList.remove("actived_bg")
        document.body.style.overflowY = "scroll"
    }
})