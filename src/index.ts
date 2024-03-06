import type { App } from 'vue'
import Button from '@/components/button'

import './styles/index.css'

const components = [
  Button
]

const install = (app: App) => {
  components.forEach(comp => {
    app.component(comp.name,comp)
  })
}

export {
  install,
  Button
}

export default {
  install
}