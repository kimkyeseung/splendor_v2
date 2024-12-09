'use client';

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react';
import { Socket } from 'socket.io-client';

export const SocektStateContext = createContext<Socket | undefined>(undefined);

export const SocketDispatchContext = createContext<
  Dispatch<SetStateAction<Socket | undefined>>
>(() => {});

export function SocketProvider({ children }: PropsWithChildren) {
  const [socket, setSocket] = useState<Socket>();

  return (
    <SocektStateContext.Provider value={socket}>
      <SocketDispatchContext.Provider value={setSocket}>
        {children}
      </SocketDispatchContext.Provider>
    </SocektStateContext.Provider>
  );
}
