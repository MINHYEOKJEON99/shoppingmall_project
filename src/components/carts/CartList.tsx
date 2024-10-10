import { cartList } from "../../store/cart";
import { useRecoilValue } from "recoil";
import CartItem from "./CartItem";

const CartList = ({ filteredList }): JSX.Element => {
  // Recoil을 사용해서 cart데이터를 가져오는 예제입니다.
  const cartlist = useRecoilValue(cartList);

  return (
    <>
      {filteredList!.map((item) => (
        <CartItem key={item.id} id={Number(item.id)} count={cartlist[item.id].count} />
      ))}
    </>
  );
};

export default CartList;
