import styled from 'styled-components';
import { primaryColor, mainBlack } from '../../../../layout/layout.scss';

const Wrapper = styled.div`
  text-transform: uppercase;
  font-size: 2.3rem;
  margin-bottom: 2rem;
  h4 {
    text-align: center;
    letter-spacing: 7px;
    color: ${primaryColor};
  }
  .title {
    color: ${mainBlack};
  }
  span {
    display: block;
  }

  @media (min-width: 576px) {
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`

export default Wrapper;