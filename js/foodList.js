class FoodList {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.items = [];
    }

    setItems(items) {
        this.items = items;
        this.render();
    }

    render() {
        if (this.items.length === 0) {
            this.container.innerHTML = `
                <div class="text-center text-gray-500 py-8">
                    还没有添加任何菜品哦~
                </div>
            `;
            return;
        }

        this.container.innerHTML = this.items
            .map(item => `
                <div class="food-item" data-id="${item.id}">
                    <span>${item.name}</span>
                    <button class="delete-btn" onclick="app.handleDelete('${item.id}')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                        </svg>
                    </button>
                </div>
            `)
            .join('');
    }
}