
const root = new Vue({
    el: "#root",
    data: {

        todoList: [
            {
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quos error, expedita vitae natus doloribus libero quia a et laborum odit culpa ipsam blanditiis nostrum impedit qui laboriosam corrupti iure.",
                done: false,
            },
            {
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                done: true,
            },
            {
                text: "Est quos error, expedita vitae natus doloribus libero quia a et laborum odit culpa ipsam blanditiis nostrum impedit qui laboriosam corrupti iure.",
                done: false,
            },
            {
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quos error",
                done: true,
            },
            {
                text: "Lorem ipsum dolor sit. Est quos error, expedita vitae natus doloribus libero quia a et laborum odit culpa ipsam blanditiis nostrum impedit qui laboriosam corrupti iure.",
                done: false,
            },
        ],

        todoContent: "",

    },

    methods:{
        //!Non capisco perchè questa funzione prende tramite v-model il testo dell'input e aggiunge un todoelement vuoto senza testo all'interno
        addTodoElement(todoContent){
            if(todoContent.trim() != ""){
                this.todoList.push(todoContent.trim());
                this.todoContent = "";
            }else{
                console.log("Errore")
            }
        },

        removeTodoElement(index){
            if(this.todoList[index] != undefined){
                this.todoList.splice(index, 1);
                console.log(this.todoList)
            }else{
                console.log("Non c'è nessun elemento da rimuovere")
            }
        }
    
    }
});