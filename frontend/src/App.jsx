import { useState } from 'react'
import './styles/App.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

function App() {

  return (
  <MantineProvider>
    <div>
      hello world
    </div>
  </MantineProvider>
  )
}

export default App
