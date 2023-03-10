import styled from 'styled-components';
import { ellipsisStyle } from '../../../styles/ellipsisStyle';

export const Container = styled.section`
  flex-shrink: 0;
  width: 300px;
  border-right: 1px solid ${({ theme }) => theme.borderGray};
  padding: 2rem 1rem 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Text = styled.strong`
  color: ${({ theme }) => theme.textGray};
  font-size: 1.2rem;
  margin-bottom: 6px;
`;

export const Todos = styled.ul`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.borderGray};
  margin-top: 1rem;

  & li + li {
    border-top: 1px solid ${({ theme }) => theme.borderGray};
  }
`;

export const Todo = styled.li`
  padding: 1rem 0.5rem;
  cursor: pointer;
`;

export const Title = styled.strong`
  font-weight: 500;
  line-height: 1.5rem;
  ${ellipsisStyle(1)}
`;

export const Content = styled.p`
  font-size: 0.9rem;
  line-height: 1rem;
  color: ${({ theme }) => theme.textGray};
  ${ellipsisStyle(2)}
`;
