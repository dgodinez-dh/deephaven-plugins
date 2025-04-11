import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@deephaven/redux';
import { getInputFiltersForDashboard } from '@deephaven/dashboard-core-plugins';
// import { FilterChangeEvent } from '@deephaven/dashboard-core-plugins/dist/FilterPlugin';

const EMPTY_FUNCTION = () => undefined;

export interface InputFiltersProps {
  onChange?: (event: string) => void;
}

export function InputFilters(props: InputFiltersProps): JSX.Element {
  const { onChange = EMPTY_FUNCTION } = props;
  const inputFilters = useSelector(
    (state: RootState) => getInputFiltersForDashboard(state, 'default') // todo: use the correct dashboard id
  );
  //   const handleChange = (event: string) => {
  //     const result = await onChange([event]);
  //     // Display the result as the new children
  //   };
  useEffect(() => {
    // Handle the input filter change
    onChange(JSON.stringify(inputFilters));
  }, [inputFilters, onChange]);

  return <div>{JSON.stringify(inputFilters)}</div>;
}

export default InputFilters;
