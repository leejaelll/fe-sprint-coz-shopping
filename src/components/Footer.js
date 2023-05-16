import styled from 'styled-components';

const Container = styled.footer`
  padding: 11px 76px;
  text-align: center;
  font-size: 0.75rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  color: #888888;
  margin-top: 1.5rem;
`;

const Row = styled.div`
  line-height: 1.2;
  a {
    color: inherit;
  }
`;

export default function Footer() {
  return (
    <Container>
      <Row>
        <a href="#">개인정보 처리방침 | 이용 약관</a>
      </Row>
      <Row>All rights reserved @ Codestates</Row>
    </Container>
  );
}
