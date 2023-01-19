import { ChakraProvider} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "./componentes/Cards";
import styled from "styled-components";

const Main= styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);

`

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
    //  atualizar o estado com os dados da Api 
      setUsers(response.data);
    } catch (error) {
      console.log("Erro ao buscar usuários");
      console.log(error);
    }
  };

 
  

  const cardScreen=users.map((user)=>{
    // console.log(users)
    return( 
    <Cards 
    name={user.name}/>
    )
  })

  return (
    <>
    <ChakraProvider>
      <Main>
      {cardScreen}
     </Main>
      </ChakraProvider>
    </>
  );
}
