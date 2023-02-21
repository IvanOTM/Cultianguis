import { Grid, Typography } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import React from 'react'
import { ShopLayout } from '../../components/layouts/ShopLayout'

const ProfilePage = () => {
  return (
    <ShopLayout title={'Perfil de usuario'} pageDescription={'Pagina de perfil del usuario'}>
    <Typography variant='h1' component='h1'>Hola éste es tu perfil</Typography>

    <Grid container className='fadeIn'>
            <Grid item xs={12} sx={{ height:650, width: '100%' }}>
            </Grid>
        </Grid>

    </ShopLayout>
  )
}

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullname', headerName: 'Nombre Completo', width: 300 },
];


export default ProfilePage;