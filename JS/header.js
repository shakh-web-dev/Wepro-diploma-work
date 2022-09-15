let header = document.createElement("header")
header.innerHTML = `
        <div class="box_container">
            <div class="mobile_menu"></div>
            <div class="buttons_links">
                <p>Магазины</p>
                <p>Акции</p>
                <p>Доставка и оплата</p>
            </div>
            <div class="logo"></div>
            <div class="addres">
                <div class="loca_ic"></div>
                <p>Москва, ул. Науки  25</p>
            </div>
            <div class="nav_buttons">
                <div class="like_butt"></div>
                <div class="profile_butt"></div>
                <div class="cart_butt"><span>0</span></div>
            </div>
        </div>
        <div class="navigation">
            <p>Квадроциклы</p>
            <p>Катера</p>
            <p class="nav_active">Гидроциклы</p>
            <p>Лодки</p>
            <p>Вездеходы</p>
            <p>Снегоходы</p>
            <p>Двигатели</p>
            <p>Запчасти</p>
        </div>
        <div class="mobile_navigation">
            <p>Магазины</p>
            <p>Акции</p>
            <p>Доставка и оплата</p>
        </div>

`
document.body.prepend(header)