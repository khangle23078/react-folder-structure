import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../../../components/ProductCard/ProductCard'
import { IProduct } from '../../../interfaces/Product'
type Props = {}

const ProducsPage = (props: Props) => {
   const { data, isLoading, isError, error } = useSelector((state: any) => state.products)

   if (isLoading) {
      return <h1>Loading...</h1>
   }

   if (isError) {
      return <p>{error.message}</p>
   }

   return (
      <div>
         {data.map((item: IProduct, index: number) => {
            <ProductCard data={item} />
         })}
      </div>
   )
}

export default ProducsPage