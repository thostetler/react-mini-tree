import React, { HTMLAttributes, ReactElement } from 'react';

export interface IChildNodeProps extends HTMLAttributes<HTMLDivElement> {
  foo: string;
}

export const ChildNode = (props: IChildNodeProps): ReactElement => {
  const { ...divProps } = props;
  return <div {...divProps}>ChildNode</div>;
};
