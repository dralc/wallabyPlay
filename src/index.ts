import utils from './utils'

const lib = {
  async handler() {
    console.log(this.handler.name)
    const ret = await utils.help()
    console.log(ret)
  },
}

export default lib
