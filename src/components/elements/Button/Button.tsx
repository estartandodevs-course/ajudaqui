import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import * as S from './ButtonStyled';
import { ButtonDefaultProps, IButtonProps } from './interfaces';

const antIcon = <LoadingOutlined style={{ fontSize: 24, color: '#f9f7fd' }} spin />;

export const Button = ({
  isLoading, children, onClick, variant,
}: IButtonProps) => (
  <S.Button variant={variant} onClick={onClick}>
    {isLoading ? (
      <Spin indicator={antIcon} />
    ) : children}
  </S.Button>
);

Button.defaultProps = ButtonDefaultProps;
