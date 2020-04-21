import React, { useState, useMemo, useCallback } from 'react'

// useMemo 类似于计算属性 compited

interface IShowInterface {
  time: number
}

const Show: React.FC<IShowInterface> = props => {
  const { time, children } = props
  const changeTime = (time: number): string => {
    console.log('running ???')
    return new Date(time).toISOString()
  }

  const timeStr:string = useMemo(() => {
    return changeTime(time)
  }, [time])

  const timeYear = useCallback(
    () => {
      return new Date(time).getFullYear()
    },
    [time]
  )

  return (
    <div>
      <p>useMemo and useCallback</p>
      <p>Time is: {timeStr}</p>
      <p>Year is: {timeYear()}</p>
      <p>Random is: { children }</p>
    </div>
  )
}

Show.defaultProps = {
  time: 0
}

const Result: React.FC = props => {
  const [time, setTime] = useState<number>(0)
  const [random, setRandom] = useState<number>(0)

  return (
    <div>
      <button onClick={() => {
        setTime(new Date().getTime())
      }}>获取当前时间</button>
      <button onClick={() => {
        setRandom(Math.random())
      }}>获取随机数</button>
      <Show time={time}>{ random }</Show>
    </div>
  )
}

export default Result
