import React, { useState, useEffect } from 'react';

const Vercel = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://myfinancesapp.up.railway.app', {
          method: 'GET', // ou outro método suportado
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': 'seu_token_csrf',
            'X-Requested-With': 'XMLHttpRequest',
            'Accept': 'application/json',
            'Accept-Version': '1.0',
            'Content-Length': '10', // Substitua pelo comprimento real, se necessário
            'Content-MD5': 'conteudo_md5', // Substitua pelo valor real, se necessário
            'Date': new Date().toISOString(), // Substitua pela data real, se necessário
            'X-Api-Version': '1.0'
          },
        });

        if (!response.ok) {
          throw new Error('Falha ao buscar os dados');
        }

        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <p>Dados do servidor: {data}</p>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Vercel;