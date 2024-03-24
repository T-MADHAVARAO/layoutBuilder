// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
        showLeftNavbar,
        showRightNavbar,
        showContent,
      } = value
      const contentChange = () => {
        onToggleShowContent()
      }
      const leftNavChange = () => {
        onToggleShowLeftNavbar()
      }
      const rightNavChange = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="controllers">
          <h1>Layout</h1>
          <input
            onChange={contentChange}
            type="checkbox"
            id="content"
            name="content"
            checked={showContent}
          />
          <label htmlFor="content">Content</label>
          <br />
          <input
            onChange={leftNavChange}
            checked={showLeftNavbar}
            type="checkbox"
            id="left-navbar"
            name="left-navbar"
          />
          <label htmlFor="left-navbar">Left Navbar</label>
          <br />
          <input
            onChange={rightNavChange}
            checked={showRightNavbar}
            type="checkbox"
            id="right-navbar"
            name="right-navbar"
          />
          <label htmlFor="right-navbar">Right Navbar</label>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
