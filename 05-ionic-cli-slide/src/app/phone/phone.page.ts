import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../service/device.service';

interface Info {
  key: string,
  value: string
}

@Component({
  selector: 'app-phone',
  templateUrl: './phone.page.html',
  styleUrls: ['./phone.page.scss'],
})
export class PhonePage implements OnInit {

  infos: Info[] = [];
  loading: boolean = true;

  constructor(private deviceService: DeviceService) { }

  ngOnInit() {
    this.infoDevice();
  }

  async infoDevice() {
    await this.deviceService.logDeviceInfo().then(object => {
      for (const key in object) {
        let info: Info = {
          key: key,
          value: object[key]
        }
        this.infos.push(info)
      }
    });
    await this.deviceService.logBatteryInfo().then(object => {
      for (const key in object) {
        let info: Info = {
          key: key,
          value: object[key]
        }
        this.infos.push(info)
      }
    });
    this.loading = false;
  }

}
