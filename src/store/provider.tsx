"use client";

import { setupListeners } from "@reduxjs/toolkit/query";
import { type ReactNode, useEffect, useState } from "react";
import { Provider } from "react-redux";

import { makeStore } from "./store";

interface StoreProviderProps {
  children: ReactNode;
}

export default function StoreProvider({ children }: StoreProviderProps) {
  const [store] = useState(() => makeStore());

  useEffect(() => {
    return setupListeners(store.dispatch);
  }, [store]);

  return <Provider store={store}>{children}</Provider>;
}
