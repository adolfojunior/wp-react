export default function (name) {
  return {
    info (...args) {
      console.info(`[${name}]`, ...args)
    },
    error (...args) {
      console.error(`[${name}]`, ...args)
    },
    warn (...args) {
      console.warn(`[${name}]`, ...args)
    },
    dir (...args) {
      console.dir(`[${name}]`, ...args)
    }
  }
}
