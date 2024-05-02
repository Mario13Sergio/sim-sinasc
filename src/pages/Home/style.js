import styled from "styled-components";

export const Container = styled.div`
  font-size: 1.6rem;
  text-align: center;
  color: #fff;
  background: #4b0900;
  display: flex;
  border-radius: 0.8rem;
  border-bottom: 0.4rem solid ${({ theme }) => theme.colors.neutral8};
  /* padding: 15rem; */
  width: 100%;

  img {
    width: 64rem;
    /* border-radius: 50%; */
    border-radius: 0.8rem;
  }

  .header {
    display: block;
    align-items: center;
    font-size: 0.6rem;
    padding: 1.8rem;
    border-bottom: 0.4rem solid ${({ theme }) => theme.colors.neutral8};
    background: ${({ theme }) => theme.colors.background};
    width: 100%;
    justify-content: space-between;
    position: sticky;
    top: -0.1rem;

    z-index: 1;

    transition: transform 500ms;
  }
  button :hover {
    filter: brightness(1.1);
    background: #4b0900;
    padding: 0.8 4em;
    border-radius: 0.4rem;
  }

  .logoMenu {
    font-size: 2.4rem;
  }
  h1 {
    font-size: 2.8rem;
  }

  h3 {
    font-size: 1.8rem;
  }
  button {
    width: 10%;
    height: 5vh;
    display: inline-block;
    right: 0.3rem;
    border-radius: 0.8rem;
    color: #4b0900;
    font-size: 1.8rem;
    list-style: none;
    font-weight: 700;
    margin-top: 1.8rem;
  }
  p {
    text-align: center;
    width: 100%;
  }
`;
