export default function(value) {
  const eventName = {
    fullSalary: 'Salario completo',
    halfSalary: 'Medio Salario',
    customSalary: 'Salario personalizado',
    debtSalary: 'Salario a cuenta',
  }

  return eventName[value] || ''
}
