(function (name, ctx, func) {
  ctx[name] = func()
})('c3', this, () => {
  function c3 (selector) {

    if (window === this) {
      return new c3(selector)
    }

    this.el = document.querySelectorAll(selector)

    // Implement chaining
    return this
  }

  c3.prototype.first = function () {
    this.el = this.el.slice(0, 1)
    return this
  }

  c3.prototype.hide = function () {
    this.el.forEach(el => el.style.display = 'none')
    return this
  }

  c3.prototype.show = function () {
    this.el.forEach(el => el.style.display = 'inherit')
    return this
  }

  c3.prototype.toggle = function () {
    this.el.forEach(el => {
      if (el.style.display === 'none') {
        this.show()
      } else {
        return this.hide()
      }
    })
    return this
  }

  c3.prototype.addClass = function (className) {
    this.el.forEach(el => el.classList.add(className))
    return this
  }

  c3.prototype.removeClass = function (className) {
    this.el.forEach(el => el.classList.remove(className))
    return this
  }

  c3.prototype.add = c3.prototype.addClass
  c3.prototype.remove = c3.prototype.removeClass

  return c3
}, this)
