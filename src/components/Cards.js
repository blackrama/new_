import {Card,Button} from 'react-bootstrap';
import logo from '../logo.svg';
export default function Cards(props) {
return (
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={logo} />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
      {props.meta}
    </Card.Text>
    <Button variant="primary">Add to cart</Button>
  </Card.Body>
</Card>
)

}