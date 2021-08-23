import styled from "styled-components";

const Header = styled.header`
  max-width: 60%;
  margin: 50px auto;
  padding: 3px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  img {
    max-width: 45%;
  }
  div {
    max-width: 45%
    /* display: flex;
    flex-flow: column nowrap; */
  }
  @media (max-width: 468px) {
    flex-flow: column nowrap;
    img {
      max-width: 100%;
    }
    div {
      max-width: 100%;
    }
  }
`

const Aisle = () => {
  return (
      <Header>
        <img src="images/f6e8d69a6c227382614fd666444c09f8.png"/>
        <div>
          <h1>Discover Aisle</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </Header>
  )
}

export default Aisle;
