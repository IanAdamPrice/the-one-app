import React, { useState } from 'react';
import {
  Jumbotron,
  Container,
  Col,
  Form,
  Button,
  Card,
  CardColumns,
} from 'react-bootstrap';

const GetCharacters = () => {
  const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer FdB8H893ahDpMVYTJrGJ'
  }

  const [searchInput, setSearchInput] = useState('');


  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await fetch(`https://the-one-api.dev/v2/character?name=${searchInput}`, {
        headers: headers
      });
      
      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const character = await response.json([]);
      console.log({character});
      console.log(searchInput);
      setSearchInput('');

    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <Jumbotron fluid className="jumbotron">
        <Container>
          <h1 className='text-center'>Find your favorite Character</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name="searchInput"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type="text"
                  size="lg"
                  placeholder="Enter a name!"
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type="submit" variant="danger" size="lg">
                  Submit Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default GetCharacters