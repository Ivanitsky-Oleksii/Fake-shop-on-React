import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {Content} from './Content'
import Title from './Title'

function App(){
  return (
  <>
  <Title text="React"/>
  <Title text="TS"/>
  <Content text1='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio qui consequuntur sed debitis error aut praesentium quo nihil architecto tempore natus suscipit, inventore, incidunt nam dolorem maiores consequatur mollitia reiciendis?'
  text2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio qui consequuntur sed debitis error aut praesentium quo nihil architecto tempore natus suscipit, inventore, incidunt nam dolorem maiores consequatur mollitia reiciendis?" year={2023}/>
</>)
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>
<App/>
  </React.StrictMode>)
