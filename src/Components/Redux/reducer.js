
const Datas = [];





const productdata = async()=>{
    const res= await  fetch("https://fakestoreapi.com/products")
    console.log(res)
    const data = await res.json()
    console.log(data)
    return Datas.push(...data)

}
productdata();

const initialState = {
    Datas
};

const reducers = (state = initialState, action) => {
 if (action.type === "USERS"){
    return state
 }
 else{
    return state;
 }
	
	
	
};
export default reducers;