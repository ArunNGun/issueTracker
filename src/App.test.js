import configureStore from 'redux-mock-store'
import { mount, shallow } from 'enzyme';
import AddIssue from './components/issue/AddIssue';
import EditForm from './components/issue/EditForm';
import Issue from './components/issue/Issue';
import Drawer from './components/Drawer'
import AreaChart from './components/reports/AreaChart'
import { BrowserRouter as Router,withRouter } from 'react-router-dom';
import MyForm from './components/issue/MyForm';
import { Provider } from 'react-redux'


const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={reduxStore}>{children}</Provider>
)

const issue={
      "issueDescription": "mytesttesttets",
      "severity": "minor",
      "status": "closed",
      "views": 0,
      "date": "Feb 28th 2021",
      "id": 1931
}

 describe("rendering components without error & data",()=> {
  it('Add Issue form', () => {
  shallow(<AddIssue />)
  })
  it('Edit Issue form', () => {
  shallow(<EditForm />)
  })
  it('Issue details', () => {
  shallow(<Issue />)
  })
  it('Dashboard', () => {
  shallow(<Drawer />)
  })
  it('Reports', () => {
  shallow(<AreaChart />)
  })
  
  })

  describe("rendering with dummy data",()=> {
    it("Add issue form with dummy data",()=>{
      const middlewares = []
      const store = configureStore(middlewares)
      const wrapper=mount(<Router><ReduxProvider reduxStore={store}><MyForm/></ReduxProvider></Router>)
      const description = wrapper.find('#issueDescription')
      description.simulate('change',{
        target:{value:'myissue'},
      })
      expect(description.props().value).toEqual('Jack')
    })
  })
