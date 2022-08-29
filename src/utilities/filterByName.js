// assumes an array of objects with name properties (menu)

export function filterByName(menu, phrase) {
    return menu.filter(item => {
        if (item.name.toLowerCase().includes(phrase) || item.category.toLowerCase().includes(phrase)) {
            return true;
        }
        return false;
    });
}