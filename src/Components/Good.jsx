import Card from 'react-bootstrap/Card';
function TextExample() {
  return (
    <Card style={{ width: '18rem', margin:'5%' }}>
      <Card.Body>
        <Card.Title>Total Revenue</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"> $ 824,444.68</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default TextExample;