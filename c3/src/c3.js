(function (name, ctx, func) {
  ctx[name] = func()
})('c3', this, () => {
  function c3 (selector) {

    if (window === this) {
      return new c3(selector)
    }

    this.elem = document.querySelector(selector)

    // Implement chaining
    return this
  }

  c3.prototype.hide = function () {
    this.elem.style.display = 'none'
    return this
  }

  c3.prototype.show = function () {
    this.elem.style.display = 'block'
    return this
  }

  c3.prototype.toggle = function () {
    if (this.elem.style.display === 'none') {
      return this.show()
    }
    return this.hide()
  }

  c3.prototype.add = function (className) {
    this.elem.classList.add(className)
  }

  c3.prototype.remove = function (className) {
    this.elem.classList.remove(className)
  }

  return c3
}, this)
