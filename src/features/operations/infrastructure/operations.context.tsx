import { ReactNode, createContext, useEffect, useState } from 'react';
import { OperationInterface, getOperations } from '..';

interface Interface {
  operations: OperationInterface[]
  fetchOperations: () => Promise<void>
  loading: boolean
}

export const OperationsContext = createContext<Interface>({
  operations: [],
  fetchOperations: async () => {},
  loading: true
});

export function OperationsProvider(p: {children: ReactNode}) {
  const [operations, setOperations] = useState<OperationInterface[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchOperations = async () => {
    setLoading(true)
    const t = await getOperations()
    setOperations(t)
    setLoading(false)
  }

  useEffect(() => {
    fetchOperations()
  }, []);

  return (
    <OperationsContext.Provider value={{
      operations,
      fetchOperations,
      loading,
    }}>
      {p.children}
    </OperationsContext.Provider>
  );
}