import type { NextPage } from 'next';
import { Typography } from '@mui/material';

import { ShopLayout } from '../../components/layouts';

import { ProductList } from '../../components/products';
import { useProducts } from '../../hooks';

import { FullScreenLoading } from '../../components/ui';


const Fruta_de_temporadaPage: NextPage = () => {


  const { products, isLoading } = useProducts('/products?gender=women');

  
  return (
    <ShopLayout title={'Cultianguis - Fruta_de_temporada'} pageDescription={'Encuentra las frutas mas frescas y 100% naturales de la temporada'}>
      <Typography variant='h1' component='h1'>Fruta de temporada</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Todas las frutas de la temporada</Typography>

      {
        isLoading
        ? <FullScreenLoading />
        : <ProductList products={ products } />
      }

      

    
    </ShopLayout>
  )
}

export default Fruta_de_temporadaPage