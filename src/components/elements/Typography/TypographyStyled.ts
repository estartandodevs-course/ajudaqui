import styled from 'styled-components';

interface IVariantProps {
  color: string,
}

const h1 = styled.h1<IVariantProps>`
  font-size: ${({ theme }) => theme.typography.h1?.fontSize};
  color: ${({ theme, color }) => color || theme.palette.colors.text};
  font-weight: ${({ theme }) => theme.typography.h1?.fontWeight};
  font-family: ${({ theme }) => theme.typography.h1?.fontFamily};
  `;

const h2 = styled.h2<IVariantProps>`
  font-size: ${({ theme }) => theme.typography.h2?.fontSize};
  color: ${({ theme, color }) => color || theme.palette.colors.text};
  font-weight: ${({ theme }) => theme.typography.h2?.fontWeight};
  font-family: ${({ theme }) => theme.typography.h2?.fontFamily};
  `;

const body1 = styled.p<IVariantProps>`
  font-size: ${({ theme }) => theme.typography.body1?.fontSizeText};
  color: ${({ theme, color }) => color || theme.palette.colors.text};
  font-weight: ${({ theme }) => theme.typography.body1?.fontWeight};
  font-family: ${({ theme }) => theme.typography.body1?.fontFamily};
`;

const Typographies = {
  h1,
  h2,
  body1,
};

export { Typographies };
