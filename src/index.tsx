import React from 'react'
import ReactDOM from 'react-dom/client'


const Title = () => {
  return <h1>Hello App.js</h1>
}

const Content = ()=>{
  return <React.Fragment>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, dignissimos! Exercitationem amet quisquam cupiditate. Vitae ab deserunt tempore enim doloribus, praesentium sunt minus placeat consequuntur nesciunt cum, aliquid recusandae unde!</p>
  
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, magni nam, iure ea officia fugit illo incidunt numquam repellat impedit est nihil consectetur ipsum eveniet dolorem tempora eos doloremque aut.</p></React.Fragment>
}
function App(){
  return (
  <>
  <Title/>
  <Content/>
</>)
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>
<App/>
  </React.StrictMode>)
