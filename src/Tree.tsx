import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { RootNode } from './RootNode';
import { TreeNode } from './types';

export type TreeComponents = 'Header' | 'Footer' | 'Checkbox';

export interface TreeProps<T extends ElementType = 'div'> {
  data: TreeNode[];
  as?: T;
  components?: { [K in TreeComponents]?: ReactNode };
  children: () => ReactNode;
  checkable?: boolean;
}

export const Tree = <T extends ElementType = 'div'>(
  props: TreeProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TreeProps<T>>
) => {
  const {
    data,
    as: Wrapper = 'div',
    components = {},
    children,
    ...rest
  } = props;
  console.log('data', props);

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <Wrapper {...rest}>
      {components.Header && components.Header}
      {data.map(node => (
        <RootNode node={node} components={components} />
      ))}
      {components.Footer && components.Header}
    </Wrapper>
  );
};
