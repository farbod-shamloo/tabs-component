import Tabs from "./component/Tabs"

function App() {

  const tabsData = [
    { label: 'Home', content: 'This is the Home tab content.' },
    { label: 'Profile', content: 'This is the Profile tab content.' },
    { label: 'Settings', content: 'This is the Settings tab content.' },
  ];

  return (
    <div className="App">
      <h1>Tabs Component</h1>
      <Tabs tabs={tabsData} />
    </div>
  )
}

export default App
