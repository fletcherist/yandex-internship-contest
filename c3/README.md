## c3 — API для управления css классами.

Пример использования

`c3('#selector').method().method().method()`

### Реализованные методы

> **el** — String, ex. '#el', '.elements', 'p'

> **className** — String

`c3(el).addClass(className)`

`c3(el).add(className)`

Добавляет указанный класс к элементу.

`c3(el).removeClass(className)`

`c3(el).remove(className)`

Удаляет указанный класс (если он есть) у элемента

`c3(el).toggleClass(className)`

`c3(el).toggle(className)`

Удаляет класс, если он есть. Добавляет класс, если его нет.

`c3(el).hasClass(className)`

`c3(el).has(className)`

Проверяет наличие указанного класса у элемента. Возвращает `true` при наличии, а `false` при отсутствии.
