import React, { useCallback } from 'react';
import classnames from 'classnames';
import { inject, observer } from 'mobx-react';
import { Button } from 'antd';

type store = {
  title: string,
  globalCount: number,
  setGlobalCount: (v: number) => void
}

interface IUserProps {
  name?: string;
  age?: string | number;
  baseStore: store
}

const User: React.FC<IUserProps> = props => {
  const { name, age, baseStore, children } = props;
  const classes = classnames('User');

  const handleAdd = useCallback(
    () => {
      baseStore.setGlobalCount(baseStore.globalCount + 1);
    },
    [baseStore]
  );

  return (
    <div className={classes}>
      <p>{ name }</p>
      <p>{ age }</p>
      <p>globalCount: { baseStore.globalCount }</p>
      <Button type='primary' size='middle' onClick={handleAdd}>改变全局globalCount</Button>
      {children}
    </div>
  );
};

User.defaultProps = {
  name: 'test',
  age: '18'
};

export default inject('baseStore')(observer(User));
