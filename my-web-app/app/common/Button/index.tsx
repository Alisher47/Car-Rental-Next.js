// components/common/AppButton.tsx
'use client';

import React from 'react';
import { Button } from 'antd';
import type { ButtonProps } from 'antd';

interface AppButtonProps extends ButtonProps {
  height?: string;
  width?: string;
  backgroundColor?: string;
  htmlType?: 'button' | 'submit' | 'reset'; // ✅ Add this for form control
}

const CommonButton: React.FC<AppButtonProps> = ({
  height = '40px',
  width = '100%',
  backgroundColor = '#3563E9',
  children,
  style,
  htmlType = 'button', // ✅ default HTML button behavior
  type = 'primary', // ✅ AntD button style
  ...rest
}) => {
  return (
    <Button
      type={type} // AntD styling
      htmlType={htmlType} // Native button behavior
      style={{
        height,
        width,
        backgroundColor,
        color: '#fff',
        border: 'none',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default CommonButton;
