import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from '../../atom/Image';
import Text from '../../atom/Text';
import {
  EmptyBusBodyContainer,
  EmptyBusContainer,
  CaroselContainer,
  FlexContainer,
  StyledCarosel,
  TextFlexContainer,
} from './styles';
import { CaroselTypes } from './types';

/**
 * 자주 타는 버스 정보 캐러셀
 *
 * @author jojo
 */
const Carosel = ({
  nowNum,
  Images,
  textChildren,
  clickNumHandler,
}: CaroselTypes) => {
  return (
    <StyledCarosel>
      <TextFlexContainer>
        <Text size={1.1} bold>
          {textChildren?(textChildren):('미리보기')}
        </Text>
      </TextFlexContainer>
        <FlexContainer>
          <FaChevronLeft 
            color='white'
            size={30} 
            onClick={()=>clickNumHandler(-1)}
          />
          <CaroselContainer>
            {
              Images?(
                Images.map((image)=>{
                  return(
                    <Image src={image.src} alt={image.alt}/>
                  )
                })
              ):(
                <Text>이미지가 존재하지 않습니다.</Text>
              )
            }
          </CaroselContainer>
          <FaChevronRight
            color='white'
            size={30}
            onClick={()=>clickNumHandler(+1)}
          />
        </FlexContainer>
    </StyledCarosel>
  );
};

export default Carosel;
