import * as React from 'react';
import { BasketContextType } from '../types/basket';

export const BasketContext = React.createContext<BasketContextType | null>(null);