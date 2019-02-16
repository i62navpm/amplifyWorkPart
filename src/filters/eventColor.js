export default function(value) {
  const eventColor = {
    fullSalary: {
      textColor: '#008000',
      borderColor: '#008000',
      backgroundColor: '#0080001a',
    },
    halfSalary: {
      textColor: '#ff8c00',
      borderColor: '#ff8c00',
      backgroundColor: '#ff8c001a',
    },
    customSalary: {
      textColor: '#0000ff',
      borderColor: '#0000ff',
      backgroundColor: '#0000ff1a',
    },
    debtSalary: {
      textColor: '#ff0000',
      borderColor: '#ff0000',
      backgroundColor: '#ff00001a',
    },
    default: {
      textColor: '#000000',
      borderColor: '#000000',
      backgroundColor: '#0000001a',
    },
  }

  return eventColor[value] || eventColor['default']
}
