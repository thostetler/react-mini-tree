import React, { HTMLAttributes, ReactElement, ReactNode } from 'react';
import { TreeNode } from './types';

export interface IRootNodeProps extends HTMLAttributes<HTMLDivElement> {
  node: TreeNode;
  components?: {
    Checkbox?: ReactNode;
  };
}

export const RootNode = (props: IRootNodeProps): ReactElement => {
  const { node, components = {}, ...divProps } = props;

  const { Checkbox } = components;

  return <div {...divProps}>Root</div>;
};
