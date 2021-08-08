import { useEffect, useState } from "react";
import { optionsTagData } from "../../_mock/optionsTagData";
import * as S from "./TagStyled";

export const Tag = ({ onChange }) => {
  const [selectedTag, setSelectedTag] = useState([]);


  useEffect(() => {
    if (selectedTag && onChange) {
      onChange(selectedTag);
    }
  }, [selectedTag]);

  return (
    <>
      {optionsTagData.map(({ id, option }) => {
        return (
          <S.TagContainer
            key={id}
            className={selectedTag[id - 1] === option && "active"}
            onClick={() => {
              setSelectedTag([...selectedTag, option]);
            }}
          >
            <S.TagContent>
              {option}
            </S.TagContent>
          </S.TagContainer>
        );
      })}
    </>
  );
};
