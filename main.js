// Проверка современных возможностей JS

// Optional chaining + nullish coalescing
const user = {};
console.log(user.profile?.name ?? "Имя не найдено");

// Promise.any — должен быть прополифилен core-js
Promise.any([Promise.reject("err"), Promise.resolve("ok")]).then(console.log);

// Класс с приватным полем — требует транспиляции Babel
class Test {
  #value = 42;
  getValue() {
    return this.#value;
  }
}

console.log(new Test().getValue());
