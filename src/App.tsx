import {useState} from 'react';
import {useQuery} from 'react-query';

import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import { Wrapper } from './App.style';
import Item from './item/Item';

export type CartkiType = {
  id: number;
  category: string;
  discription: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}
const getProducts = async () :Promise<CartkiType[]> =>
await(await fetch ('https://fakestoreapi.com/products')).json();
 

function App() {
  const {data, isLoading, error} = useQuery<CartkiType[]>(
  'products',
  getProducts
  );
  console.log(data);
const getTotalItems = () => null;
const handleAddToCart = (clicked:CartkiType) => null;
const handleRemoveFromCard = () => null;

if(isLoading) return <LinearProgress/>;
if (error) return <div>something went wrong ...</div>

  return (
    <div>
    <Wrapper>
    <h1>Diviam's shopping App</h1>
    <Grid container spacing={3}>
     {data?.map(item =>(
       <Grid item key={item.id} xs={12} sm={4}>
         <Item item={item} handleAddToCart={handleAddToCart}/>
         </Grid>
     ))}
    </Grid>


    </Wrapper>
    </div>
  );
}

export default App;


