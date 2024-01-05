export default function guardrail(mathFunction) {
  const queue = [];
  try {
    let value = mathFunction();
    queue.push(value);
  } catch (error) {
    queue.push(error.toString());
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
