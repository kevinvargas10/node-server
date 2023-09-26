# Lista de Tareas con Node.js y Promesas

Este proyecto es una aplicación de línea de comandos que te permite gestionar una lista de tareas. Utiliza Node.js y promesas para realizar operaciones asincrónicas.

 ¿Qué sucedió al usar async y await?

El uso de `async` y `await` permite que las funciones asincrónicas se vean y se comporten de manera más similar a las funciones síncronas. Cuando se utiliza `async` antes de una función, esta función devuelve una promesa automáticamente. Al usar `await` dentro de una función `async`, puedes esperar que una operación asincrónica se complete antes de continuar con el código siguiente. Esto hace que el código sea más legible y fácil de seguir, ya que evita el anidamiento excesivo de callbacks y permite un flujo de control más lineal.

En el ejemplo proporcionado, las funciones `addTask`, `listTasks`, `markTaskAsCompleted` y `deleteTask` se declaran como `async`, lo que permite que las operaciones de entrada/salida dentro de ellas se realicen de manera asíncrona sin bloquear el hilo principal.

### ¿Qué sucedió al usar el método then()?

El método `then()` se utiliza para manejar el resultado de una promesa. Cuando se llama a `then()` en una promesa, puedes proporcionar una función de callback que se ejecutará una vez que la promesa se resuelva. Esto se utiliza en el ejemplo para manejar la ejecución secuencial de las funciones después de que se hayan completado las operaciones asincrónicas.

Por ejemplo, en el menú principal, se utiliza `.then()` para asegurarse de que se muestre el menú nuevamente después de completar una operación como agregar, listar, marcar como completada o eliminar una tarea. Esto permite una experiencia de usuario más interactiva y controlada.

 ¿Qué diferencias encontraste entre async, await y el método then()?

Las diferencias clave entre `async`, `await` y el método `then()` son las siguientes:

- `async` y `await` son palabras clave que simplifican el manejo de promesas al hacer que el código se vea más síncrono. `async` se coloca antes de una función para indicar que es asincrónica y que retornará una promesa. `await` se utiliza dentro de una función `async` para esperar que una promesa se resuelva antes de continuar.

- El método `then()` es una forma de manejar promesas en JavaScript que se basa en callbacks. Puedes encadenar múltiples `.then()` para manejar promesas de manera secuencial, pero esto puede llevar a un código con muchas indentaciones (callback hell). `await` es una alternativa más legible y moderna para manejar promesas, especialmente cuando necesitas esperar varias operaciones asincrónicas antes de continuar.
