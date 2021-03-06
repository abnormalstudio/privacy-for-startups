import styled from "@emotion/styled";

const H1Line = styled.h1`
  position: relative;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  padding-top: 0.5rem;
  text-align: center;

  ::after {
    background-color: #e1e1e1;
    bottom: 0;
    content: "";
    height: 2px;
    margin: 0 auto;
    position: absolute;
    left: 0;
    right: 0;
    width: 50px;
  }
`;

const H2Line = styled.h2`
  position: relative;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  padding-top: 0.5rem;
  text-align: center;

  ::after {
    background-color: #e1e1e1;
    bottom: 0;
    content: "";
    height: 2px;
    margin: 0 auto;
    position: absolute;
    left: 0;
    right: 0;
    width: 50px;
  }
`;

const H3Line = styled.h3`
  position: relative;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  padding-top: 0.5rem;
  text-align: center;
`;

const H4Line = styled.h4`
  position: relative;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  padding-top: 0.5rem;
  text-align: center;

  ::after {
    background-color: #e1e1e1;
    bottom: 0;
    content: "";
    height: 2px;
    margin: 0 auto;
    position: absolute;
    left: 0;
    right: 0;
    width: 50px;
  }
`;

const Single = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    padding: 0px 1rem;
  }
`;

const UnorderedList = styled.ul`
  list-style: initial;
  margin-left: 1.25rem;
`;

const OrderedList = styled.ol`
  list-style: initial;
`;

const ListItem = styled.li`
  margin-bottom: 1rem;
`;

export {
  H1Line,
  H2Line,
  H3Line,
  H4Line,
  Single,
  UnorderedList,
  OrderedList,
  ListItem
};
