import styled from 'styled-components';

const h1 = styled.h1`
  font-size: ${({ theme }) => theme.typography.h1?.fontSize};
  color: ${({ theme }) => theme.palette.colors.text};
  font-weight: ${({ theme }) => theme.typography.h1?.fontWeight};
  font-family: ${({ theme }) => theme.typography.h1?.fontFamily};
  `;

const h2 = styled.h2`
  font-size: ${({ theme }) => theme.typography.h2?.fontSize};
  color: ${({ theme }) => theme.palette.colors.text};
  font-weight: ${({ theme }) => theme.typography.h2?.fontWeight};
  font-family: ${({ theme }) => theme.typography.h2?.fontFamily};
  `;

const body1 = styled.p`
  font-size: ${({ theme }) => theme.typography.body1?.fontSizeText};
  color: ${({ theme }) => theme.palette.colors.text};
  font-weight: ${({ theme }) => theme.typography.body1?.fontWeight};
  font-family: ${({ theme }) => theme.typography.body1?.fontFamily};
`;

const Typographies = {
  h1,
  h2,
  body1,
};

export { Typographies };
