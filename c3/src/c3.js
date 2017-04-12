(function (name, ctx, func) {
  ctx[name] = func()
})('c3', this, () => {
  // var c3 = function (selector) {
  //   console.log('hello world!')
  // }

  function c3 (selector) {

    if (window === this) {
      return new c3(selector)
    }
    console.log(document.querySelector(selector))
    return this
  }

  c3.prototype.hide = function () {
    console.log('hide')
  }

  c3.prototype.show = function () {

  }

  return c3
}, this)
