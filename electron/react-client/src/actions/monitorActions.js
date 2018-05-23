import { ipcRenderer } from 'electron';
import { TOGGLE_MONITOR, START_MONITOR, PAUSE_MONITOR } from './types';

export const startMonitor = (user) => {
  ipcRenderer.send('monitor', 'start', user);
  console.log('start monitor IPC sent!')
  return {
    type: START_MONITOR
  }
};

export const pauseMonitor = () => {
  ipcRenderer.send('monitor', 'pause');
  console.log('pause monitor IPC sent!')
  return {
    type: PAUSE_MONITOR
  }
};

export const toggleMonitor = (monitorRunning) => {
  monitorRunning ? ipcRenderer.send('monitor', 'pause') : ipcRenderer.send('monitor', 'start', user);
  return {
    type: TOGGLE_MONITOR,
    payload: {monitorStatus}
  }
}