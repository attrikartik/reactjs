export const IMAGE_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

export function MENU_URL(resId) {
    return `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER/`
}

export const ITEM_CATEGORY_FILTER_STRING = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"