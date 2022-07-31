import React from 'react'

const formStyles = {
  width: '500px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
}

const marginTop = {
  margin: '10px 0',
}

function App() {
  const [name, setName] = React.useState(
    () => window.localStorage.getItem('name') || ''
  )

  React.useEffect(() => {
    window.localStorage.setItem('name', name)
  })

  function handleChange(e) {
    setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    alert(name ? `Hello ${name}` : 'Please enter a name')
  }

  return (
    <div className="App">
      <form style={formStyles} onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          style={marginTop}
          id="name"
          type="text"
          onChange={handleChange}
          value={name}
        />
        <button style={marginTop} type="submit">
          Submit
        </button>
        <p>{name ? <strong>Hello {name}</strong> : 'Please enter your name'}</p>
      </form>
    </div>
  )
}

export default App
