import { contextBridge, ipcRenderer } from "electron";

const _user = {
  getUsername: () => ipcRenderer.invoke("getUsername"),
  setUsername: (newUsername: string) =>
    ipcRenderer.send("setUsername", newUsername),
};

const _versions = {
  app: () => ipcRenderer.invoke("appVersion"),
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
};

export const API = {
  versions: _versions,
  user: _user,
};

contextBridge.exposeInMainWorld("api", API);
