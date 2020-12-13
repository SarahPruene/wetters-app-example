import './App.css'
import Weather from './Weather'

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Weather />
        <footer>
          This Project was coded by <span>Sarah</span> and is{' '}
          <a
            href='https://github.com/SarahPruene/wetters-app-example'
            rel='noreferrer'
            target='_blank'
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  )
}

export default App
