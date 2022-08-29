// assumes an array of objects with category properties

export const getCategories = (menu) => {
    const categories = [];

    menu.forEach((item) => {
        if (!categories.includes(item.category)) {
            categories.push(item.category);
        }
    })

    return categories;
}