import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 10px;
`;

export const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const Overview = styled.p`
  width: 500px;
`;

export const Title = styled.h2`
  margin-left: 10px;
`;

export const ListInfo = styled.li`
  margin-top: 10px;
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  margin-top: 70px;
  margin-left: 10px;
`;
