import React, { useState, useEffect, useRef } from 'react'

const Counter: React.FC = props => {
  const [count, setCount] = useState<number>(0)
  const countRef = useRef<number>(count) // 相当于 this , 可以存放任何变量，很好的解决闭包带来的不方便性
  const inputEl = useRef<HTMLInputElement>(null) // 类似与 createRef

  useEffect(() => {
    countRef.current = count // .current属性不会引发组件重新渲染，根据这个特性可以获取状态的前一个值
  })

  const handleCount = (): void => {
    setTimeout(() => {
      alert('current count: ' + countRef.current)
    }, 3000)
  }

  const onFocusClick = (): void => {
    if (inputEl && inputEl.current) {
      inputEl.current.focus()
    }
  }

  return (
    <div>
      {/* count 虽然赋值给了 current，但ref不会出发渲染，所以显示的是上一次的赋值结果，但 函数中获取的是 最新赋值的count */}
      <p>pre count: { countRef.current }</p>
      <p>current count: { count }</p>
      <button onClick={() => setCount(count + 1)}>加</button>
      <button onClick={() => handleCount()}>弹框显示</button>

      <hr />
      <input type='text' ref={inputEl}/>
      <button onClick={onFocusClick}>Focus the input</button>
    </div>
  )
}

export default Counter
