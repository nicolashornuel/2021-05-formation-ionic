import { Injectable } from '@angular/core';
import { Device } from '@capacitor/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor() { }

  logDeviceInfo = async () => {
    const info = await Device.getInfo();
    return info;
  };
  
  logBatteryInfo = async () => {
    const info = await Device.getBatteryInfo();
    return info;
  };

}
