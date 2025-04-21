// ''src/views/homeView.js''

// View para formatar a página inicial
class HomeView {
  // Formatar dados para resposta da API
  static formatResponse(data) {
    return {
      ...data,
      timestamp: new Date().toISOString(),
      status: "success",
    }
  }
}

module.exports = HomeView;