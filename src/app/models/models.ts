export interface PM2ServiceModel {
  pid: number;
  pm_id: number;
  name: number;
  status: string;
  //pm2_env.PWD
  appStartPath: string;
}
