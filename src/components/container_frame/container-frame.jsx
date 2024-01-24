import React from 'react';
import styled from 'styled-components';

const ContainerFrameRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-lgi) 0px var(--padding-20xl);
  box-sizing: border-box;
  min-height: 991px;
  max-width: 100%;
  flex-shrink: 0;
  text-align: left;
  font-size: var(--font-size-2xs);
  color: var(--color-darkslategray-100);
  font-family: var(--font-mulish);
`;

const HomeProducts = styled.span`
  font-family: 'Mulish';
  font-weight: 300;
`;

const JustLovelyEarrings = styled.span`
  font-family: 'Mulish';
  font-weight: 500;
`;

const HomeProductsContainer = styled.div`
  position: relative;
`;

const HomeProductsEarringsJWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-2xs);
`;

const ProductImage = styled.img`
  margin: 0 10px;
  flex: 1;
  object-fit: contain;
  position: relative;
  z-index: 1;
`;

const HomeAndProduct = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const ContainerFrame = () => {
  return (
    <ContainerFrameRoot>
      <HomeAndProduct>
        <HomeProductsEarringsJWrapper>
          <HomeProductsContainer>
            <HomeProducts>{`Home / Products / Earrings / `}</HomeProducts>
            <JustLovelyEarrings>Just Lovely Earrings</JustLovelyEarrings>
          </HomeProductsContainer>
        </HomeProductsEarringsJWrapper>

        <ProductImage src="/Regalia_Diamond_Band_.svg" alt="Product Image" />
      </HomeAndProduct>
    </ContainerFrameRoot>
  );
};

export default ContainerFrame;
