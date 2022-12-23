import React from "react";
import Button from "../../../atom/Button";
import Image from "../../../atom/Image";
import Text from "../../../atom/Text";
import { ExplainWrapper, OptionWrapper, StyledProjectBlock } from "./styles";
import { ProjectBlockTypes } from "./types";

const ProjectBlock = ({item}:ProjectBlockTypes)=>{
    const {src, alt, link, handler} = item;
    return(
        <StyledProjectBlock>
            <OptionWrapper>
                <Image src={src} alt={alt}></Image>
                <Button isText clickHandler={handler} width={10}>{`이동`}</Button>
            </OptionWrapper>
            <ExplainWrapper>
                <Text size={1.5}>{alt}</Text>
                <hr></hr>
            </ExplainWrapper>
        </StyledProjectBlock>
    );
}

export default ProjectBlock;
