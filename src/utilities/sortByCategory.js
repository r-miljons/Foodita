// assumes an array of objects with category properties (menu) and a matching string value (category)

export function sortByCategory(menu, category) {
    if (category === 'all') {
        return menu
    }
    return menu.filter(item => item.category === category)
}