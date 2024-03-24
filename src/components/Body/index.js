import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      console.log(showContent)
      return (
        <div className="body">
          {showLeftNavbar && (
            <div className="cont">
              <h1>Left Navbar Menu</h1>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="cont">
              <h1>Content</h1>
              <p>
                Lorem ipsum dolor sitamet,consectetur adipiscing elit,sed do
                elus oj jfdjo skdfj skjadfnhj kjsadfh skdnfjd
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="cont">
              <h1>Right Navbar</h1>
              <div className="box">Ad 1</div>
              <div className="box">Ad 2</div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
