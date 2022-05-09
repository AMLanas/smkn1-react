import styled from "styled-components";

export const paddingSpace = "1.5rem";

export const Container = styled.div`
  box-shadow: 0 17px 13px 0 rgb(25 44 75 / 8%);
  overflow: hidden;
  background: ${(props) => props.color};
  z-index: ${(props) => props.zIndex};
  position: relative;
  box-sizing: border-box;
  display: block;
  &:before {
    content: "";
    position: absolute;
    right: 0;
    background: url(${(props) => props.src});
    width: 310px;
    height: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    z-index: -1;
    box-sizing: border-box;
    @media (max-width: 1400px) {
      width: 285px;
    }
    @media (max-width: 992px) {
      width: 500px;
    }
    @media (max-width: 635px) {
      width: 350px;
    }
  }
`;

export const Wrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  min-height: 700px;
  padding-left: calc(${paddingSpace} / 2);
  padding-right: calc(${paddingSpace} / 2);
  margin-left: auto;
  margin-right: auto;
  margin-top: ${(props) => props.mt};
  @media (max-width: 1400px) {
    max-width: 1250px;
  }
  @media (max-width: 768px) {
    max-width: 800px !important;
  }
`;