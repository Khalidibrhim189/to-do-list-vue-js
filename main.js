// new Vue({
//     el: '#app',
//     data: {
//         items : ['Bangun jam 04.30', 'Mandi', 'Sholat'],
//         item: ''
//     },

//     methods:{
//         tambahItem(){
//             this.items.push(this.item)
//             this.item = ''
//         }
//     }
// })

new Vue({
    el: '#app',
    data : {
        items : [],
        item: ''
    },
    //cara menambah elemen
    methods:{
        //cara menambah elemen
        addItem(){
            this.items.push(this.item)
            // cara menyimpan data localStorage
            localStorage.setItem('items', JSON.stringify(this.items))
            this.item = ''
        },
        //cara menghapus elemen
        deleteData(item){
            const index = this.items.indexOf(item)
            this.items.splice(index, 1)
            localStorage.setItem('items', JSON.stringify(this.items))
        }
    },

    //membaca data localStorage & fixing bug
    created(){
       this.items = JSON.parse(localStorage.getItem('items')) || []
    }
})