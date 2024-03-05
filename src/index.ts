import type { App } from 'vue'
import Button from '@/components/button'

const components = [
  Button
]

const install = (app: App) => {
  components.forEach(comp => {
    app.component(comp.name,comp)
  })
}

export {
  Button
}

export default {
  install
}