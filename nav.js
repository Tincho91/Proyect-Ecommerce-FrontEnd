const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
            <img class="logonav" src="img/logonav.png" alt="Aquel Manzano">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="¿Qué Necesitás?">
                    <button class="search-btn">Search</button>
                </div>
                <a href="#"><img src="img/user.png" alt=""></a>
                <a href="#"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">Bebés</a></li>
            <li class="link-item"><a href="#" class="link">Niños</a></li>
            <li class="link-item"><a href="#" class="link">Accesorios</a></li>
        </ul>
    `;
}

createNav();