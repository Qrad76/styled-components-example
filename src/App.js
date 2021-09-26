import logo from "./logo.svg";
import "./App.css";
import StyledButton from "./components/StyledButton";
import styled, { createGlobalStyle } from "styled-components";
import StyledA from "./components/StyledA";

const PrimaryStyledButton = styled(StyledButton)`
  border: 2px solid palevioletred;
  color: white;
`;

const uppercaseButton = (props) => (
  <button {...props} children={props.children.toUpperCase()} />
);

const MyButton = (props) => (
  <button className={props.className} children={`MyButton ${props.children}`} />
);

const StyledMyButton = styled(MyButton)`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${(props) => props.color || `palevioletred`};
  color: ${(props) => props.color || `palevioletred`};
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 20px;

  :hover {
    border: 2px solid red;
  }

  ::before {
    content: "@";
  }
`;

const GlobalStyle = createGlobalStyle`
button{
  color: yellow;
}
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <StyledButton>Button</StyledButton>
          <StyledButton primary>Button</StyledButton>
          <PrimaryStyledButton>Button</PrimaryStyledButton>
          <StyledButton as={uppercaseButton}>Button</StyledButton>
          <StyledMyButton color="green">Button</StyledMyButton>
          <StyledA href="https://google.com">밀밀키</StyledA>
        </p>
      </header>
    </div>
  );
}

export default App;
