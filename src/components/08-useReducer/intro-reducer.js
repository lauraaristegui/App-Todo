
const initialState = [{
    id:1,
    todo:'comprar pan',
    done:false
}];

// creo mi primer reducer 
// siempre se envían el state y action. action es quien va a modificsar el state
const todoReducer = (state = initialState, action) => {
     
    if(action?.type === 'Add'){
        return[...state, action.payload]
    }

    //siempre se tiene que regresar el state
    return state
}

// ejecuto la función

let todos = todoReducer();

// crear un nuevo todo

const newTodo = {
    id:2,
    todo:'comprar leche',
    done:false
}

const addAction ={
    type:'Add',
    payload:newTodo
}

todos = todoReducer(todos, addAction)



console.log(todos, addAction);