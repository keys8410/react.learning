import React from 'react';

const Contato = React.lazy(() => import('./LazySuspense/Contato'));

const LazySuspense = () => {
  const [ativo, setAtivo] = React.useState(false);
  return (
    <div>
      {ativo && (
        <React.Suspense fallback={<p>Carregando...</p>}>
          <Contato />
        </React.Suspense>
      )}

      <button onClick={() => setAtivo(!ativo)}>
        {!ativo ? 'Ativar' : 'Desativar'}
      </button>
    </div>
  );
};

export default LazySuspense;
