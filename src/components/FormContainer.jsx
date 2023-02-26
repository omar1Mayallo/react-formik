import styled from "styled-components";
// STYLES
const FormContainerStyled = styled.div`
  max-width: 400px;
  box-shadow: 0 10px 20px 0 rgb(0 0 0 / 25%);
  padding: 20px;
  background-color: #424242;
  border-radius: 20px;
  h2 {
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 20px;
    color: #1266f1;
  }
`;

const FormContainer = ({children}) => {
  return (
    <FormContainerStyled>
      <h2>React Formik</h2>
      {children}
    </FormContainerStyled>
  );
};

export default FormContainer;
