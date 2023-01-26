import React from 'react'
import ReactDOM from 'react-dom/client'

// const h1 = React.createElement("h1",{id: "title"}, "Hello React")

// jsx
const h1 = <h1 id="title" className="dfdf">Hello React.js</h1>

let a = 50
let b = "Hello"


const list = <ul>
  <li>list item 1 {a}</li>
  <li>list item 4{b}</li>
  <li>list item 5</li>
</ul>


// const list = React.createElement(
//   "ul",
//   null,
//   React.createElement("li", null, "list item 1"),
//   React.createElement("li", null, "list item 2"),
//   React.createElement("li", null, "list item 3"),
//   React.createElement("li", null, "list item 4")
// )

const content = (
  <div>
    {h1}
    {list}
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{content}</React.StrictMode>)
