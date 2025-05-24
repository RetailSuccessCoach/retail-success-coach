// src/types/cal.d.ts
export {};

declare global {
  interface CalNamespace {
    (command: string, options?: any): void;  // callable signature
    inline: (options: any) => void;
    ui: (options: any) => void;
  }

  interface Window {
    Cal?: {
      (command: string, namespace: string, options?: any): void;
      ns: { [key: string]: CalNamespace };
      loaded: boolean;
    };
  }
}