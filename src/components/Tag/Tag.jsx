import { useEffect, useState } from "react";
import { optionsTagData } from "../../_mock/optionsTagData";
import * as S from "./TagStyled";

export const Tag = ({ onChange, initialState }) => {
  const [selectedTag, setSelectedTag] = useState(initialState);

  useEffect(() => {
    if (selectedTag && onChange) {
      onChange(selectedTag);
    }
  }, [selectedTag]);

  return (
    <>
      {optionsTagData.map((items) => {
        return (
          <S.TagContainer
            key={items.id}
            selectedTag={selectedTag === items.id}
            onClick={() => {
              setSelectedTag(items.option);
            }}
          >
            <S.TagContent>
              {items.option}
            </S.TagContent>
          </S.TagContainer>
        );
      })}
    </>
  );
};
