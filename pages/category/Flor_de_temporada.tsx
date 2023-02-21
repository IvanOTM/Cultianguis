import type { NextPage } from 'next';
import { Typography } from '@mui/material';

import { ShopLayout } from '../../components/layouts';

import { ProductList } from '../../components/products';
import { useProducts } from '../../hooks';

import { FullScreenLoading } from '../../components/ui';


const Flor_de_temporadaPage: NextPage = () => {


  const { products, isLoading } = useProducts('/products?gender=men');

  
  return (
    <ShopLayout title={'Cultianguis - Flor_de_temporada'} pageDescription={'Encuentra las flores mas bonitas y 100% naturales de la temporada'}>
      <Typography variant='h1' component='h1'>Flor de temporada</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Todas las flores de la temporada</Typography>

      {
        isLoading
        ? <FullScreenLoading />
        : <ProductList products={ products } />
      }

      

    
    </ShopLayout>
  )
}

export default Flor_de_temporadaPage