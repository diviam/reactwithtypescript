import {useState} from 'react';
import {useQuery} from 'react-query';

import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Wrapper } from './App.style';
import {Rotate} from './App.style';
import Item from './item/Item';
import React from 'react';

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
  const [open, setOpen] = React.useState(false);
  const [change, changevalue] = useState("");
  const {data, isLoading, error} = useQuery<CartkiType[]>(
  'products',
  getProducts
  );
  console.log(data);
const getTotalItems = () => null;
const handleAddToCart = (clicked:CartkiType) => alert("Added to cart successfully");
const handleRemoveFromCard = () => null;


const ClickOpen = () => {
  setOpen(true);

};
const handleToClose = () => {
  setOpen(false);
};
 
var ab = change.split("-")
// if(change === "grocery") {
   
// }

// const changevalue1 = (e:any) => {
// const name = e.target.name;
// const vle = e.target.value;
// changevalue(pvalue =>({...pvalue,[name]:vle})
// )}

if(isLoading) return <LinearProgress/>;
if (error) return <div>something went wrong ...</div>


  return (
    <div>
      {/* <Rotate><AddShoppingCartIcon></AddShoppingCartIcon></Rotate> */}
    <Wrapper>
      
    <h1>Diviam's shopping App</h1>
    <Rotate><AddShoppingCartIcon></AddShoppingCartIcon></Rotate>
    <div className='flt'><Button variant="outlined" onClick={ClickOpen}>
        Open products
      </Button></div>
   
    <Dialog open={open} onClose={handleToClose}>
        <DialogTitle>{"Our Available Products"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
             Select Available Products here
             <select onChange={(e)=>changevalue(e.target.value)}>
               <option value="All Product-1">All Products</option>
               <option value="Jewellary-2">Jewellary</option>
               <option value="grocery-3">grocery</option>
               <option value="Utensils-4">Utensils</option>
               <option value="Games Accessaries-5">Games Accessaries</option>
             </select>
            <br />
            Selected: {ab[0]}
              <div>{ab[1]=== "1"? <select><option>Mobiles</option></select> : <p className='snon'></p>} 
              {ab[1]=== "2"? <select><option>Gold</option></select> : <p className='snon'></p>}
              {ab[1]=== "3"? <select><option>Makeup</option></select> : <p className='snon'></p>}
              {ab[1]=== "4"? <select><option>plate</option></select> : <p className='snon'></p>}
              {ab[1]=== "5"? <select><option>Football</option></select> : <p className='snon'></p>}</div>
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToClose} 
                  color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
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


