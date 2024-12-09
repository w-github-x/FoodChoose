class RandomPicker {
    constructor(buttonId, selectedFoodId, selectedFoodNameId) {
        this.button = document.getElementById(buttonId);
        this.selectedFood = document.getElementById(selectedFoodId);
        this.selectedFoodName = document.getElementById(selectedFoodNameId);
        this.items = [];
    }

    setItems(items) {
        this.items = items;
        this.button.disabled = items.length === 0;
    }

    pickRandom() {
        if (this.items.length === 0) return;
        
        const randomIndex = Math.floor(Math.random() * this.items.length);
        const selected = this.items[randomIndex];
        
        this.selectedFood.classList.remove('hidden');
        this.selectedFoodName.textContent = selected.name;
    }
}