// Реализуй функцию evaluateExpression(a, b, operator), которая принимает два аргумента и оператор, а затем выполняет вычисления в зависимости от типа данных аргументов и оператора.

// Функция должна:
// Приводить аргументы к подходящим типам в зависимости от контекста.
// Выполнять операции согласно переданному оператору.
// Возвращать корректный результат для чисел, строк, булевых значений.
// Выбрасывать ошибку при некорректных типах или операторах.

// Работаем с базовыми арифметическими операциями: +, -, *, /, %.

// оператор +:
// Если оба аргумента можно привести к числам — сложить.
// Если хотя бы один из них неприводимая к числу строка — привести всё к строкам и склеить.

// операторы -, *, /, %:
// Всегда приводим оба аргумента к числам.
// Если аргументы нельзя привести к числам, выбрасываем ошибку.

function evaluateExpression(a, b, operator) {
  [a, b].forEach((operand) => {
    if (
      typeof operand !== "string" &&
      typeof operand !== "number" &&
      typeof operand !== "boolean"
    ) {
      throw new Error(`Invalid operand type: ${typeof operand}`);
    }
  });

  const checkNaN = (value) => isNaN(Number(value));
  const isNaNValue = checkNaN(a) || checkNaN(b);
  if (isNaNValue) {
    if (operator === "+") return a + b;
    throw new Error(`Invalid operand types for operator: ${operator}`);
  }

  const isZero = b == 0;

  switch (operator) {
    case "+": {
      return Number(a) + Number(b);
    }
    case "-": {
      return a - b;
    }
    case "*": {
      return a * b;
    }
    case "/": {
      if (isZero) throw new Error("You can't divide by zero");
      return a / b;
    }
    case "%": {
      if (isZero) throw new Error("You can't divide by zero");
      return a % b;
    }
    default: {
      throw new Error(`Unsupported operator: ${operator}`);
    }
  }
}
