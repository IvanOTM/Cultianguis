import type { NextPage } from 'next';
import { Typography } from '@mui/material';

import { ShopLayout } from '../../components/layouts';

import { ProductList } from '../../components/products';
import { useProducts } from '../../hooks';
import { FullScreenLoading } from '../../components/ui';




const VegetalesPage: NextPage = () => {


  const { products, isLoading } = useProducts('/products?gender=kid');

  
  return (
    <ShopLayout title={'Cultianguis - Vegetales'} pageDescription={'Encuentra los vegetales mas frescos y 100% naturales'}>
      <Typography variant='h1' component='h1'>Vegetales</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Todos los vegetales</Typography>

      {
        isLoading
        ? <FullScreenLoading />
        : <ProductList products={ products } />
      }

      

    
    </ShopLayout>
  )
}

export default VegetalesPage