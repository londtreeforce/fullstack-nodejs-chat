import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
  return (
    <Container>
        <Heading>Entry</Heading>
        <Form>
            <Group>
                <Input 
                type="text" 
                name="username" 
                value=""
                onChange={() => {}} 
                autoComplete="off"
                placeholder="Username"/>
            </Group>
            <Group>
                <Input 
                type="text" 
                name="room" 
                value=""
                onChange={() => {}} 
                autoComplete="off"
                placeholder="Room"/>
            </Group>


            <Link to={'/chat?'}>
                <Button type="submit">Sign</Button>    
            </Link> 


        </Form>
    </Container>
  )
}

export default Body