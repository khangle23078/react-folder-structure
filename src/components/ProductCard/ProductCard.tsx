import React from 'react'
import { IProduct } from '../../interfaces/Product'
import { Button } from 'antd';

type ProductCardProps = {
   data: IProduct
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
   return (
      <div>
         <div>
            <img src={data.image} alt="" />
         </div>
         <div>
            <p>{data.name}</p>
            <p>{data.price}</p>
         </div>
         <Button type='primary' htmlType='button'>Đặt hàng</Button>
      </div>
   )
}

export default ProductCard