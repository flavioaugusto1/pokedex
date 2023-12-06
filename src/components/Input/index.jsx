import { Container } from "./styles";

export function Input({ ...rest }){
  return(
    <Container placeholder="Insira o nome do pokemon" {...rest}>
      
    </Container>
  )
}