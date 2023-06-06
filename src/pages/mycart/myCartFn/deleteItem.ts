export const deleteItem = (id:string)=>()=>{
    if(typeof window!==undefined){
        const cart = JSON.parse(localStorage.getItem("cart") ?? "[]");
        const newCart = cart.filter((item:any)=> item.id !== id)
        localStorage.setItem("cart", JSON.stringify(newCart));
    }
}