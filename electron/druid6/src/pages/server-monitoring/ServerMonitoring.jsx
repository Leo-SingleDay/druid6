import {useState} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import "./ServerMonitoring.scss";

export default function ServerMonitoring() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const {ipcRenderer} =window.require("electron");
  
  const [cpuUsage,setCpuUsage] = useState('');
  ipcRenderer.on("cpu",(event,arg)=>{
    setCpuUsage(arg);
  })

  const [DiskUsage,setDiskUsage] = useState('');
  ipcRenderer.on("disk",(event,arg)=>{
    setDiskUsage(arg);
  })

  const [MemoryUsage,setMemoryUsage] = useState('');
  ipcRenderer.on("memory",(event,arg)=>{
    setMemoryUsage(arg);
  })

  const [processInfo,setProcessInfo] = useState('');
  ipcRenderer.on("processInfo",(event,arg)=>{
    setProcessInfo(arg);
  })

  const [osInfo,setOsInfo] = useState('');
  ipcRenderer.on("osInfo",(event,arg)=>{
    setOsInfo(arg);
  })

  const [ramInfo,setRamInfo] = useState('');
  ipcRenderer.on("ramInfo",(event,arg)=>{
    setRamInfo(arg);
  })

  const [systemInfo,setSystemInfo] = useState('');
  ipcRenderer.on("systemInfo",(event,arg)=>{
    setSystemInfo(arg);
  })

  const [kernelVersion,setKernelVersion] = useState('');
  ipcRenderer.on("kernelVersion",(event,arg)=>{
    setKernelVersion(arg);
  })

  const [kernelRelease,setKernelRelease] = useState('');
  ipcRenderer.on("kernelRelease",(event,arg)=>{
    setKernelRelease(arg);
  })

  const [networkRealTime,setNetworkRealTime] = useState('');
  ipcRenderer.on("networkRealTime",(event,arg)=>{
    setNetworkRealTime(arg);
  })

  const [networkHours,setNetworkHours] = useState('');
  ipcRenderer.on("networkHours",(event,arg)=>{
    let h=arg.replace('/\t/g','aaa');

    setNetworkHours(h);
  })
  const data = {
    labels: ['used', 'unuse'],
    datasets: [
      {
        label: '# of Votes',
        data: [cpuUsage,100-cpuUsage],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(0, 0, 0, 0)',
  
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: false,
    
  }
  return (
    <div className='ServerMonitoring'>
      <h1>ServerMonitoring</h1>
      <div>
      <Doughnut data={data} options={options} />
      
      
      </div>

      <div>프로세스 정보 : {processInfo}</div>
      <div>운영체제 정보 : {osInfo}</div>
      <div>설치된 램 : {ramInfo} gb</div>
      <div>커널 릴리즈 버젼 : {kernelRelease}</div>
      <div>커널 버젼 : {kernelVersion}</div>
      <div>시스템 종류 : {systemInfo}</div>

      <div>cpu사용량 : {cpuUsage}%</div>
      <div>memory사용량 : {MemoryUsage}%</div>
      <div>disk 사용량 : {DiskUsage}</div> 
      <div>실시간 트래픽 : {networkRealTime}</div>
      <div>하루 트래픽 : {networkHours}</div>
    </div>
  );
}
