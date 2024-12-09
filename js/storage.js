const STORAGE_KEY = 'food-list-storage';

const loadFoodList = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return { items: [] };
    try {
        return JSON.parse(stored);
    } catch {
        return { items: [] };
    }
};

const saveFoodList = (store) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
};