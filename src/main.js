import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import './assets/tablet.css'
import './assets/phone.css'


import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPlay, faBackward, faForward } from '@fortawesome/free-solid-svg-icons'
import { faMoon, faCog } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faTv } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(faPlay,faBackward, faForward,faMoon, faCog,faArrowRight, faTv, faMagnifyingGlass, faBook, faChevronLeft,faChevronRight)

const app = createApp(App)

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
