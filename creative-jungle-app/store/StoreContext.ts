import { createContext } from 'react';
import { type Store } from './useStore';

export const StoreContext = createContext<Store>({} as Store);