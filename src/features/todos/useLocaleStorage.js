const localeStorageKey = "todo";

export const saveProductsInLocaleStorage = todos =>
    localStorage.setItem(localeStorageKey, JSON.stringify(todos));

export const getProductsFromLocaleStorage = () =>
    JSON.parse(localStorage.getItem(localeStorageKey)) || [];