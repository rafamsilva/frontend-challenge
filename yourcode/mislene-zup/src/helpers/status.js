export default {
  getIconStatus (status) {
    return {
      'A': 'mdi-alert', // active
      'S': 'mdi-flag', // sent
      'N': 'mdi-alert', // new
      'D': 'mdi-cancel', // disapprove
      'X': 'mdi-check-circle' // approved
    }[status]
  },
  getTextStatus (status) {
    return {
      'A': 'Disciplina em Configuração', // active
      'S': 'Enviada para Avaliação', // sent
      'N': 'Disciplina em Configuração', // new
      'D': 'Disciplina com Revisões', // disapprove
      'X': 'Disciplina Aprovada' // approved
    }[status] || 'Disciplina em Configuração'
  }
}
