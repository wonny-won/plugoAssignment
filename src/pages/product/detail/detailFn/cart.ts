interface Data {
    id?:string;
}

export const onClickCart = (product:Data) => () => {
    if(typeof window!==undefined){
    const cart = JSON.parse(localStorage.getItem("cart") ?? "[]");
    const temp = cart.filter((item:any) => item.id === product.id);
      if (temp.length === 1) {
        alert("이미 담으신 물품입니다");
        return;
      }
      cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert('카트에 상품이 담겼습니다!')
    }
  };