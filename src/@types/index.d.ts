interface AriaSharedEventManager {
  onServerListenStart(server: I_AriaServer): void;
  onSocketConnect(): void;
  onSocketDisconnect(): void;
  onSocketError(): void;
}

type DHTSensorReading = {
  temperature: number;
  humidity: number;
  at: Date;
};

interface I_AriaServer {
  app: import("express").Application;
  server: import("node:http").Server;
  io: import("socket.io").Server;
  config: AriaServerConfig;

  start(): void;
}

interface AriaServerConfig {
  protocol: "http" | "https";
  host: string;
  port: number;
}

interface ThermostatToHubEvents {
  "target:change": (target: number) => void;
  "temp:change": (temp: number) => void;
  "hvac:change": (hvacState: import("../enums").E_HVACState) => void;
  "mode:change": (mode: import("../enums").E_ThermostatMode) => void;
}

interface HubToThermostatEvents {
  "set:target": (target: number) => void;
  "set:mode": (mode: import("../enums").E_ThermostatMode) => void;
}

interface InterThermostatEvents {
  ping: () => void;
}

interface SocketData {
  name: string;
  age: number;
}

interface I_GPIO {
  name: string;
  pin: number;
  state: 1 | 0;

  on(): void;
  off(): void;
  get isOn(): boolean;
}