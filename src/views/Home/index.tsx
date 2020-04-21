import React, { FC } from 'react'
import classnames from 'classnames'

interface IUserProps {
  name?: string;
  age?: string | number;
}

const User: React.FC<IUserProps> = props => {
  const { name, age, children } = props
  const classes = classnames('User')

  return (
    <div className={classes}>
      <p>{ name }</p>
      <p>{ age }</p>
      {children}
    </div>
  )
}

User.defaultProps = {
  name: 'test',
  age: '18'
}

export default User
