import React, { useState, useMemo} from 'react';



export default () => {
  const [name, setName] = useState<number>(0)
  const [content,setContent] = useState<number>(0)
  return (
      <>
        <button onClick={() => setName(new Date().getTime())}>name</button>
        <button onClick={() => setContent(new Date().getTime())}>content</button>
        <Button name={name}>{content}</Button>
      </>
  );
}
interface Props{
  name: number;
  children: number;
}

function Button({ name, children }: Props) {
  function changeName(name: number) {
    // 为什么这个会打印两次
    console.log('11')
    return name + '改变name的方法'
  }

  function changeChildren(children: number){
    console.log('22')
    return children + '改变children的方法'
  }

  const otherName =  useMemo(() => changeName(name), [name]);
  const otherChildren = useMemo(() => changeChildren(children), [children])
  return (
      <>
        <div>{otherName}</div>
        <div>{otherChildren}</div>
      </>
  );
}

