import { useCallback } from 'react';

interface CheckboxTreeNode {
  id: string;
  children?: CheckboxTreeNode[];
}

interface UseCheckboxTreeState<T extends CheckboxTreeNode> {
  data: T[];
}

export const useCheckboxTreeState = <T extends CheckboxTreeNode>(
  props: UseCheckboxTreeState<T>
) => {
  const { data } = props;

  console.log(data);

  const getCheckboxProps = useCallback((test: T) => {
    console.log(test);
    return {};
  }, []);

  return {
    data,
    getCheckboxProps,
  };
};
