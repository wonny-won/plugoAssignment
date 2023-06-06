import { rest } from 'msw'
import product from './product.json'

export const handlers = [
    // create product - 상품 등록 
    rest.post('/product', (req:any, res, ctx) => {
        product.push({id:req.id,...req.body});
        if(!req) res(ctx.status(400), ctx.json({ message: "상품 작성이 완료되지 않았습니다." }));
        return res(ctx.status(200), ctx.json({product,message: "상품등록이 완료되었습니다."}));
      }),  

    // get product list - 상품 리스트 가지고 오기
    rest.get('/product/list', (_, res, ctx) => {
      return res(ctx.status(200), ctx.json(product));
  }),
  
    // get product detail - 상품 디테일 가지고 오기
    rest.get('/product/detail/:id', (req, res, ctx) => {
      const productId = req.params
      const productData = product.filter((item)=> item.id===productId.id)
      if(productData.length===0){
        return res(ctx.status(200), ctx.json({error:'존재하지 않는 게시글 입니다.'}))
      } else { 
        return res(ctx.json({productData}))
      }
  }),

]