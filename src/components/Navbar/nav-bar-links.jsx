import styled from "styled-components";

const Container = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0 var(--padding-12xs) 0 0;
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-5xs-5);
  color: var(--color-black);
  font-family: var(--font-mulish);
`;

const TextBlock = styled.header`
  align-self: stretch;
  background: linear-gradient(90deg, #f77433, #feaf38);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-10xs) var(--padding-4xs) var(--padding-10xs) var(--padding-615xl);
  box-sizing: border-box;
  gap: var(--gap-xl);
  max-width: 100%;
  z-index: 1;
  text-align: left;
  font-size: var(--font-size-4xs);
  color: var(--color-darkslategray-200);

  @media (max-width: 400px){
    display: none;
  }
`;

const ReferAndEarnContainer = styled.div`
  width: 1440px;
  height: 24px;
  display:flex;
  justify-content: center;

`;

const ReferAndEarn = styled.span`
  font-family: 'Mulish';
`;

const ClickHere = styled.span`
  color: #531CC6;
  font-family: 'Mulish';
  font-weight: 400;
`;

const PincodeParent = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: flex-end; */

`;

const Pincode = styled.div`
  position: relative;
  font-family: 'Mulish';
  color: white;
  white-space: nowrap;
  z-index: 2;
`;

const GetInTouch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 var(--padding-7xs) 0 0;
`;

const BlackIcon = styled.img`
  width: 10.2px;
  height: 15px;
  position: relative;
  padding: 0px 10px;
  z-index: 2;
`;

const FranchiseEnquiryIcon = styled.img`
  height: 18px;
  width: 18px;
  position: relative;
  border-radius: 50%;
  object-fit: cover;
  min-height: 18px;
  z-index: 2;
`;

const RectangleParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0 0 0 var(--padding-12xs);
  box-sizing: border-box;
  top: 0;
  z-index: 99;
  position: sticky;
  max-width: 100%;
`;

const NavBarLinksRoot = styled.section`
  align-self: stretch;
  height: 164px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`;

// -------------------------------------
//DownNavBar

const RectangleGroup2 = styled.div`
  align-self: stretch;
  height: 42px;
  background-color: #F5F5F5;
  border: 1px solid var(--color-white);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  overflow-x: hidden;
  padding: var(--padding-mini) var(--padding-7xl) var(--padding-10xs)
    var(--padding-38xl);
  gap: var(--gap-xl);
  max-width: 100%;
  z-index: 1;
  font-family: 'Mulish', sans-serif;

  @media screen and (max-width: 400px) {
    display: none;
  }
`;

const GoldCoins = styled.div`
padding: 10px 2px ;
  height: 23px;
  width: 94px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  white-space: nowrap;
  z-index: 1;
`;
const AllJewellery = styled.div`
  padding: 10px 2px ;
  height: 23px;
  width: 133px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  white-space: nowrap;
  z-index: 1;
`;

const DazzlingYouToday = styled.div`
  padding: 10px 2px ;
  position: relative;
  white-space: nowrap;
  z-index: 1;
`;

const HeaderLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-5xs) 0px 0px;
`;
const HeaderLogo1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-xs) 0px 0px;
`;
const HeaderLogo2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-3xl) 0px 0px;
`;
const HeaderLogo3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-smi) 0px 0px;
`;

const Rings = styled.div`
padding: 10px 2px ;
  height: 23px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  white-space: nowrap;
  z-index: 1;
`;

const NewArrival = styled.b`
padding: 10px 2px ;
  height: 23px;
  position: relative;
  display: inline-block;
  white-space: nowrap;
  z-index: 1;
`;

const FrameInner = styled.div`
  height: 41.9px;
  width: 1440px;
  position: relative;
  background-color: var(--color-whitesmoke-300);
  border: 1px solid var(--color-white);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
`;


//-----------------------------------------------------
// to divide carts
const TextLabel = styled.div`
  height: 46.9px;
  width: 1px;
  position: relative;
  background-color: var(--color-whitesmoke-600);
  z-index: 3;
`;

const BlackIcon2 = styled.img`
  width: 22px;
  height: 22.6px;
  margin: 0 10px;
  flex: 1;
  object-fit: contain;  /* Ensures the entire image is visible within the container */
  position: relative;
  z-index: 1;
`;

const Offers = styled.span`
  position: relative;
  font-weight: 600;
  font-size: 10px;
  font-family: 'Mulish';
  z-index: 1;
  margin: 0 10px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
const RightNavbarContainer = styled.div`
  width: 51px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const NavBarOption = styled.div`
  margin-left: 20px;
  font-family: 'Mulish';
  font-size: 16px;
  color: white;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const LeftContainer=styled.div`
  flex: 40%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  /* background-color: green; */
  z-index: 111;
`;
const RightContainer=styled.div`
  flex: 60%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  /* background-color: red; */

  @media (max-width: 400px){
    display:none;
  }
`;

const Title=styled.div`
  display: flex;
  flex-direction: column;
`;
const GranetLanee = styled.span`
font-family: 'Mulish';
font-weight: 600;
font-size: large;
`;
const SubGarnet=styled.span`
  font-family: 'Mulish';
  font-weight: 400;
  font-size: smaller;
`;

const Group160 = styled.img`
  width: 35.98px;
  height: 29.94px;
  position: relative;
  padding: 0px 10px;
  z-index: 2;
`;
const MidNavBar = styled.nav`
  width: 100%;
  height: 50px; 
  background-color: #FDEDCD;
  display: flex;
  flex-direction: row;
`;

const NavbarExtendedContainer=styled.div`

`;

const OpenLinksButton = styled.button

const NavBarLinks = () => {
  return (
    <NavBarLinksRoot>
      <RectangleParent>
        <TextBlock>
          <ReferAndEarnContainer>
            <ReferAndEarn>{`Refer and earn extra discount `}</ReferAndEarn>
            <ClickHere>Click here...</ClickHere>
          </ReferAndEarnContainer>
          <PincodeParent>
            <Pincode>{`Pincode `}</Pincode>
            <GetInTouch>
              <BlackIcon alt="" src="/black.svg" />
              <FranchiseEnquiryIcon alt="" src="/franchise-enquiry@2x.png" />
            </GetInTouch>
          </PincodeParent>
        </TextBlock>
        
        <MidNavBar>
          <LeftContainer>
            <Group160 alt="" src="/group-160.svg"/>
              <Title>
                <GranetLanee>GARNET LANEE</GranetLanee>
                <SubGarnet>Dazzling you Today, Tomorow & Forever</SubGarnet>
              </Title>
          </LeftContainer>

          <RightContainer>
            <RightNavbarContainer>
              <BlackIcon2 src="/black-1.svg" />
              <Offers>OFFERS</Offers>
            </RightNavbarContainer>
            <TextLabel/>
            <RightNavbarContainer>
              <BlackIcon2 src="/image-120-traced.svg" />
              <Offers>CONTACT US</Offers>

            </RightNavbarContainer>
            <TextLabel/>
            <RightNavbarContainer>
              <BlackIcon2 src="/wishlist.svg "/>
              <Offers>WISHLIST</Offers>

            </RightNavbarContainer>
            <TextLabel/>
            <RightNavbarContainer>
              <BlackIcon2 src="/black-2.svg "/>
              <Offers>DELIVERY</Offers>

            </RightNavbarContainer>
            <TextLabel/>
            <RightNavbarContainer>
              <BlackIcon2 src="/black-3.svg "/>
              <Offers>CART</Offers>

            </RightNavbarContainer>
            <TextLabel/>
            <RightNavbarContainer>
              <BlackIcon2 src="/image-63-traced.svg "/>
              <Offers>VERIFY REPORT</Offers>

            </RightNavbarContainer>
            <RightNavbarContainer>
              <BlackIcon2 src="/profile.svg "/>
    

            </RightNavbarContainer>
            

          </RightContainer>
          
        </MidNavBar>
        <NavbarExtendedContainer></NavbarExtendedContainer>

        <RectangleGroup2>
          <FrameInner />
          <NewArrival>NEW ARRIVAL</NewArrival>
          <HeaderLogo>
            <Rings>RINGS</Rings>
          </HeaderLogo>
          <HeaderLogo>
            <Rings>EARRINGS</Rings>
          </HeaderLogo>
          <HeaderLogo1>
            <DazzlingYouToday>PENDANTS</DazzlingYouToday>
          </HeaderLogo1>
          <HeaderLogo2>
            <DazzlingYouToday>{`BRACELETS & BANGLES`}</DazzlingYouToday>
          </HeaderLogo2>
          <HeaderLogo3>
            <Rings>SOLITIARES</Rings>
          </HeaderLogo3>
          <GoldCoins>GOLD COINS</GoldCoins>
          <AllJewellery>ALL JEWELLERY</AllJewellery>
        </RectangleGroup2>
        
      </RectangleParent>
    </NavBarLinksRoot>
  );
};

export default NavBarLinks;
