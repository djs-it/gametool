
module.exports = {
  name: 'dd',
  run: async toolbox => {
    const { print } = toolbox

    print.info('other')
  }
}
