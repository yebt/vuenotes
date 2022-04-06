// Instance vue
const app = new Vue({

    // get the id from the work instance
    el:  "#app",
    // gestion de datos
    /**
     * Cuando los datos se gestionan o cambian,
     * La reactividad de vue hace que los cambios se 
     * Perciban de inmediiato ✨ Una maravilla ✨ 
     */
    data: {
        titulo: "Hope Bye page with VUE",
        frutas: ['Manzana 🍎', 'Pera 🍐', 'Platano 🍌', 'Berenjena 🍆', 'Durazno 🍑'],
        frutasObj: [
            {
                nombre: 'Pera',
                emoji: '🍐',
                estado: 'Rise',
                cantidad: 12
            },
            {
                nombre: 'Kiwi',
                emoji: '🥝',
                estado: 'Fell',
                cantidad: 24
            },
            {
                nombre: 'Lemon',
                emoji: '🍋',
                estado: 'Keep',
                cantidad: 16
            },
            {
                nombre: 'Cereza',
                emoji: '🍒',
                estado: 'Rise',
                cantidad: 0
            },
        ],
    }
});