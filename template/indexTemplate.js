(function (modules) {
    const require = function (moduleId) {
      const module = {}
      module.exports = null
      modules[moduleId].call(module, module, require)
      return module.exports
    }
    require(0)
})