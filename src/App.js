import DemoView from './views/DemoView.js'
import { Layout } from 'antd'
import 'antd/dist/antd.css';
import './styles/App.scss'

const { Content } = Layout

function App() {
  return (
    <div className="App">
      <Layout>
        <Content>
          <DemoView />
        </Content>
      </Layout>
    </div>
  )
}

export default App
