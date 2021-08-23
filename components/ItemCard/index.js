import styled from "styled-components";

const Card = styled.div`
  margin: 10px auto;
  max-width: 23%;
  img {
    max-width: 100%;
  }
  @media (max-width: 468px) {
    max-width: 48%;
  }
  `;
const ItemCard = ({ item }) => {

  return (
    <Card>
      <img src={item.assets[0].url}/>
      <h4>{item.title}</h4>
      <span>${item.unitPrice}</span>
    </Card>
)}

export default ItemCard;
