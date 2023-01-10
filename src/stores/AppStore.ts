import { proxy } from 'valtio'
import getJSONData from 'helpers/getJSONData'

class AppStore {
  linkData = getJSONData()
  dark = false
}

export default proxy(new AppStore())
