
import { reactive } from 'vue'
import axios from 'axios'
export const store = reactive({
    searchSelect: "",
    API_URL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=24&offset=0',
    cards: null,
    loaded: false,


    fetchCards(url) {
        axios
            .get(url)
            .then(response => {
                this.cards = response.data.data
                this.loaded = true
                console.log(response.data.data);

            })
            .catch(err => {
                console.log(err);
                console.error(err.message);
            })
    }
});