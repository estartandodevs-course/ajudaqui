import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import * as S from './ButtonStyled';
import { IButtonProps } from './interfaces';

const antIcon = <LoadingOutlined style={{ fontSize: 24, color: '#f9f7fd' }} spin />;

export const Button = ({ isLoading, children }: IButtonProps) => (
  <S.Button>
    {isLoading ? (
      <Spin indicator={antIcon} />
    ) : children}
  </S.Button>
);
