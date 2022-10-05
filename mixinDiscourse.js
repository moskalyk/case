// mixin
let discourse = {
  say({context, payload}) {
    this.urbit[context].save(payload)
  },
  hear({ context }) {
    return this.urbit[context].read()
  }
};

module.exports = discourse