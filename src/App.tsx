import React, { useState } from 'react';
import './App.css';

interface Person {
    name: string,
    age: number,
    sex: 'male' | 'female'
}

const App = () => {
    const [count, setCount] = useState(0)
    const onClickPlus = (step: number = 1) => {
        setCount(count + step)
    }

    const [myObj, setMyObj] = useState({ name: 'zy', age: 25, sex: 'male' })
    const updatePerson = (updateData: Person) => {
        setMyObj({ ...myObj, ...updateData })
    }
    const updateName = (name: string) => {
        setMyObj({ ...myObj, name })
    }

    return (
        <div className="App">
            <div>counter{count}</div>
            <button onClick={() => { onClickPlus() }}>+1</button>
            <div>对象测试</div>
            <div>
                <span>姓名{myObj.name}</span>
                <span>年龄{myObj.age}</span>
                <span>性别{myObj.sex}</span>
            </div>
            <button onClick={() => { updatePerson({ name: 'asd', age: 16, sex: 'female' }) }}>更新整个对象</button>
            <button onClick={() => { updateName('xzc') }}>更新姓名</button>
        </div>
    );
}

export default App;
