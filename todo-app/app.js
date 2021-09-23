const app = Vue.createApp({
    data(){
        return{
            itemlist: [
                'Mengirim surat',
                'Mengerjakan essay',
                'Menyapu taman',
            ]
        }
    },
    methods: {
        addButton(inputAct){
            this.itemlist.push(inputAct)
        },
        removeAct(index){
            this.itemlist.splice(index,1)
        }
    },
})

app.component('app-add',{
    template:
    /*html*/
    `
    <div id="app-add">
        <input v-model="inputAct" type="text" placeholder="Aktifitasmu.." />
        <button @click="addAct" id="add-btn">
            <i class="fas fa-plus"></i>
        </button>
    </div>
    `,
    data(){
        return{
            inputAct: '',
        }
    },
    methods: {
        addAct(){
            this.$emit('addButton',this.inputAct)
            this.inputAct = ''
        }
    }
})

app.component('app-lists',{
    template:
    /*html*/
    `
    <ul id="app-lists">
        <app-list :itemlist="itemlist" @remove-act="$emit('removeAct',index)"></app-list>
    </ul>
    `,
    props: ['itemlist'],
})

app.component('app-list',{
    template:
    /*html*/
    `
    <li v-for="(item,index) in itemlist" :key="index" class="app-list">
        <input type="checkbox">
        <span>{{item}}</span>
        <button @click="removeAct" class="remove-btn"><i class="fas fa-trash"></i></button>
    </li>
    `,
    props:['itemlist'],
    methods:{
        removeAct(){
            this.$emit('removeAct',this.index)
        }
    },
    emits: ['removeAct']
})






app.mount('#app')