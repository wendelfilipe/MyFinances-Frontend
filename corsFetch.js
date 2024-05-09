
const corsFetch = async (url, options = {}) => {
    const requestOptions = {
      ...options,
      headers: {
        ...options.headers,
        'Content-Type': 'application/json', // ou qualquer outro cabeçalho necessário
        // Adicione quaisquer outros cabeçalhos necessários aqui
      },
    };
  
    try {
      const response = await fetch(url, requestOptions);
  
      if (!response.ok) {
        throw new Error('Falha na solicitação');
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Erro ao fazer solicitação:', error.message);
      throw error;
    }
  };
  
  export default corsFetch;