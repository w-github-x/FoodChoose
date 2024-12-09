class App {
    constructor() {
        this.foodList = new FoodList('foodList');
        this.randomPicker = new RandomPicker('randomButton', 'selectedFood', 'selectedFoodName');
        
        this.initializeEventListeners();
        this.loadData();
    }

    initializeEventListeners() {
        const form = document.getElementById('addFoodForm');
        const randomButton = document.getElementById('randomButton');

        form.addEventListener('submit', (e) => this.handleSubmit(e));
        randomButton.addEventListener('click', () => this.randomPicker.pickRandom());
    }

    loadData() {
        const { items } = loadFoodList();
        this.updateItems(items);
    }

    updateItems(items) {
        this.foodList.setItems(items);
        this.randomPicker.setItems(items);
        saveFoodList({ items });
    }

    handleSubmit(e) {
        e.preventDefault();
        const input = document.getElementById('foodInput');
        const names = input.value
            .split('\n')
            .map(name => name.trim())
            .filter(name => name.length > 0);

        if (names.length === 0) return;

        const newItems = names.map(name => ({
            id: Date.now() + Math.random().toString(36).substr(2, 9),
            name,
            createdAt: Date.now()
        }));

        const updatedItems = [...this.foodList.items, ...newItems];
        this.updateItems(updatedItems);
        input.value = '';
    }

    handleDelete(id) {
        const updatedItems = this.foodList.items.filter(item => item.id !== id);
        this.updateItems(updatedItems);
    }
}

// 初始化应用
const app = new App();