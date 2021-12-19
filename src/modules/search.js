import getData from "./getData";
import renderGoods from "./renderGoods";
import {
    searchFilter,
    searchFilterPriceRange
} from "./filters";

const search = () => {
    const searchInput = document.querySelector('.search-wrapper_input')

    const filterPriceInput = document.querySelectorAll('.filter-price_input');


    let min = [0]
    let max = [0]
    filterPriceInput.forEach(item => {
        item.addEventListener('input', event => {
            const target = event.target;
            if (target.id === 'min') {
                min.push(target.value)
            } else if (target.id === 'max') {
                max.push(target.value)
            }
            getData().then((data) => {
                renderGoods(searchFilterPriceRange(data, min[min.length - 1], max[max.length - 1]));
            })
        })
    })


    searchInput.addEventListener('input', (event) => {
        const target = event.target;
        const value = target.value;

        getData().then((data) => {
            renderGoods(searchFilter(data, value));
        })
    })

}

export default search