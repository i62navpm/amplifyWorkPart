export default function(value) {
  const eventTitle = {
    fullSalary: { title: 'Salario completo' },
    halfSalary: { title: 'Medio Salario' },
    customSalary: { title: 'Salario personalizado' },
    debtSalary: { title: 'Salario a cuenta' },
  }

  return eventTitle[value] || ''
}
