import Button from '@material-ui/core/Button';

import {CartkiType} from '../App';
import  {Wrapper} from './Item.style';


type Props = {
    item: CartkiType;
    handleAddToCart: (clicked:CartkiType) => void;

}
const Item: React.FC<Props> = ({item, handleAddToCart}) => <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
        <h3>{item.title}</h3>
        <p>{item.discription}</p>
        <h3>${item.price}</h3>
        <Button onClick={() => handleAddToCart(item)}>Add to Card</Button>
    </div>
</Wrapper>
export default Item;