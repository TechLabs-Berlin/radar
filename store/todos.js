export const state = () => ({
  done: []
})

export const mutations = {
  add(state, id) {
    state.done.push(id)
  },
  remove(state, id) {
    state.done.splice(state.done.indexOf(id), 1)
  }
}
