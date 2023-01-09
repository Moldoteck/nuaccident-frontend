import { proxy } from 'valtio'
import getJSONData from 'helpers/getJSONData'

class AppStore {
  linkData = getJSONData()
}

export default proxy(new AppStore())
