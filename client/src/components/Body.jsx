import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FIELD = {
    NAME: "name",
    ROOM: "room"
}

const Container = styled.div`
    
`

const Heading = styled.h1`
    
`

const Form = styled.form`
    
`
const Group = styled.div`
    
`

const Input = styled.input`
    
`

const Button = styled.button`
    
`


const Body = () => {
  const { NAME, ROOM } = FIELD;
  const [values, setValues] = useState({ [NAME]: "", [ROOM]: "" });
  
  const handleChange = ({ target: { value, name } }) => {
    setValues({...values, [name]: value})
  }


  const handleClick = (e) => {
    const isDisabled = Object.values(values).some(value => !value);
    
    if(isDisabled) e.preventDefault();

  };


  return (
    <Container>
        <Heading>Entry</Heading>
        <Form>
            <Group>
                <Input 
                type="text" 
                name="name" 
                value={values[NAME]}
                autoComplete="off"
                placeholder="Username"
                
                onChange={handleChange}
                />
            </Group>
            <Group>
                <Input 
                type="text" 
                name="room" 
                value={values[ROOM]} 
                autoComplete="off"
                placeholder="Room"
                
                onChange={handleChange}
                />
            </Group>
            


            <Link
            onClick={handleClick} 
            to={`/chat?name=${values[NAME]}&room=${values[ROOM]}`}
            >
                <Button type="submit">Sign</Button>    
            </Link> 


        </Form>
    </Container>
  )
}

export default Body