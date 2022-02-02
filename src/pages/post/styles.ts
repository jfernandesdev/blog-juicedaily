import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  min-height: 100vh;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ImageProps {
  image?: string;
}

export const Image = styled.div<ImageProps>`
  width: 100%;
  height: 300px;
  background: ${props =>
    props.image && `url(${props.image}) no-repeat center center;`};
  background-size: cover;
  cursor: pointer;

  @media (max-width: 769px) {
    height: 200px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
  gap: 20px;

  > span {
    font-weight: normal;
    font-size: 13px;
    line-height: 12px;
    letter-spacing: 0.5px;
    opacity: 0.3;
  }
`;

export const Title = styled.h1`
  font-size: 45px;
  text-align: center;
  letter-spacing: -3px;
  font-weight: normal;
  padding: 15px;

   @media (max-width: 769px) {
   font-size: 28px;
   padding: 5%;
  }
`;

export const Text = styled.div`
  p {
    text-indent: 3ch;
    text-align: justify;

    font-weight: normal;
    font-size: 15px;
    line-height: 30px;
    opacity: 0.7;
    margin: 10px 0;
  }

  margin-bottom: 20px;

  @media (max-width: 769px) {
   padding: 0 8%;
  }
`;

export const WrapperCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  margin: 20px 0;

   @media (max-width: 769px) {
    display: flex;
    overflow: scroll;
    max-width: 300px;

    > div {
      min-width: 260px;
      max-width: 260px;
    }
  }
`;


export const Banner = styled.div<ImageProps>`
  width: 100%;
  height: 200px;
  background: ${props =>
    props.image && `url(${props.image}) no-repeat center center;`};
  background-size: cover;
  border-radius: 25px;

  display: flex;
  align-items: start;
  justify-content: center;

  font-weight: 600;
  font-size: 35px;
  line-height: 48px;
  text-align: center;

  color: var(--white);
  padding: 20px 0;
  margin: 10px 0 30px;

  @media (max-width: 769px) {
    height: 150px;
    width: 85%;
    font-size: 25px;
    line-height: 40px;
  }
`;