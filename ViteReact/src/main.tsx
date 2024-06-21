import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'

function MyApp(){
    return (
        <div>
            <h1>In main tsx! </h1>
        </div>
    )
}

const anotherElement = (
    <a href='https://google.com' target='_blank'>Visit google</a>
)

const anotherUser = 'Sonal Khandelwal';

const reactElement = React.createElement(
    'a',
    {href:'https://google.com', target: '_blank'},
    'Click me to visit google',
    anotherUser   ,   // both are evaluated Expression
    anotherElement
)

ReactDOM.createRoot(document.getElementById('root')!).render(

    reactElement
)
