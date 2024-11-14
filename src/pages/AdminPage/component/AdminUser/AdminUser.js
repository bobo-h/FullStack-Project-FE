import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Button from '../../../../common/components/Button';

const AdminUser = () => {

  return (
    <div className="admin-product-page">
      <Container>
        <Row>
          <Col md={5}>
            <h2>User</h2>
          </Col>
          <Col  md={7} className='text-end'>
            <Button>add Item</Button>
          </Col>
        </Row>
        <Row>

        </Row>
      </Container>
    </div>
  );
};

export default AdminUser;
