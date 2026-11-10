const ItemCard = () => {
    return (
        <div className="item-card">
            {/* <img src={imageUrl} class="item-image" /> */}
            <div class="item-content">
                <span class="status-badge status-active">Активное</span>
                <h3 class="item-title">Название</h3>
                <p class="item-description">Описание</p>
                <div class="item-footer">
                    <div>
                        <div class="item-price">5000 Р</div>
                        <div class="bid-info">
                            5000 P
                            <span class="bid-count">2</span>
                        </div>
                    </div>
                    <div class="item-meta">
                        <span class="item-seller">Продавец: Пользователь</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard
