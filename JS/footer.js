let footer = document.querySelector("footer")
footer.innerHTML = `
    <div class="foot_container">
            <div class="send_email">
                <p>Подпишитесь на нашу рассылку и узнавайте о акциях быстрее</p>
                <div class="send_email_input">
                    <form name="email">
                        <input type="email" placeholder="Введите ваш e-mail:" required>
                        <button>ОТПРАВИТЬ</button>
                    </form>
                </div>
            </div>
            <div class="info_about_site">
                <div class="left_side">
                    <p><b>Информация</b></p>
                    <p>О компании</p>
                    <p>Контакты</p>
                    <p>Акции</p>
                    <p>Магазины</p>
                </div>
                <div class="right_side">
                    <p><b>Интернет-магазин</b></p>
                    <p>Доставка и самовывоз</p>
                    <p>Оплата</p>
                    <p>Возврат-обмен</p>
                    <p>Новости</p>
                </div>
            </div>
            <div class="links">
                <a href="https://www.instagram.com" class="link"></a>
                <a href="https://www.vk.com" class="link"></a>
                <a href="https://www.facebook.com" class="link"></a>
                <a href="https://www.linkedin.com" class="link"></a>
            </div>
        </div>
`