
const initialData={
    list:[]
}

//const[list,setList]=useState([]);
const todoReducers=(state=initialData,action)=>
{
switch(action.type){
    case"ADDTODO":
    const {id,data}=action.payload;
    return {
        ...state,
        list:[...state.list,
            {
                id:id,
                data:data
            }]
    }

    case"DELETETODO":
    const newlist= state.list.filter((elem)=>elem.id!==action.id);
    return {
        ...state,
        list:newlist
    }

    default:return state;

}
}
export default todoReducers;