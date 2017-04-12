(function (name, ctx, func) {
  ctx[name] = func()
})('c3', this, () => {
  function toArray(ar) {
    return [].slice.call(ar, 0)
  }

  function c3 (selector) {

    if (window === this) {
      return new c3(selector)
    }
    this.el = toArray(document.querySelectorAll(selector))
    console.log(this.el)

    // Implement chaining
    return this
  }

  c3.prototype.first = function () {
    console.log(this.el)
    this.el = this.el.slice(0, 1)
    return this
  }

  c3.prototype.hide = function () {
    this.el.forEach(el => el.style.display = 'none')
    return this
  }

  c3.prototype.show = function () {
    this.el.forEach(el => el.style.display = '')
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

  c3.prototype.toggleClass = function (className) {
    this.el.forEach(el => el.classList.toggle(className))
  }

  c3.prototype.hasClass = function (className) {
    for (const el of this.el) {
      return el.classList.contains(className)
    }
  }


  c3.prototype.add = c3.prototype.addClass
  c3.prototype.remove = c3.prototype.removeClass
  c3.prototype.has = c3.prototype.hasClass
  c3.prototype.toggle = c3.prototype.toggleClass

  return c3
}, this)
