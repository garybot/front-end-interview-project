import styled from "styled-components";
import { ItemCard } from "../../components";

const GroupWrap = styled.section`
  max-width: 60%;
  margin: 0 auto;
  div {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
  `;

const Group = ({ group }) => {
  return (
    <GroupWrap>
      <h3>{group.name}</h3>
      <div>
        {group.products.slice(0, 8).map(item => (
          <ItemCard item={item} key={item.id}/>
        ))}
      </div>
    </GroupWrap>
  )
}

export default Group;
