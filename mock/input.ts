export interface IResponseData<T> {
  data: T;
  result: 0 | 1 | 2;
  message?: string;
}
export interface IAlarmMsg {
  id: string;
  deviceType: string;
  type: string;
  msg: string;
}
export interface IAlarmNoticeUser {
  id: number;
  name: string;
  phone: string;
  off: boolean;
  createDt: string;
  extend: Record<string, any>;
}
export interface IAlarmRule {
  id: string;
  title: string;
  type: string;
  description: string;
  rules: object;
  noticeUserIds: number[];
  noticeUsers: IAlarmNoticeUser[];
  off: boolean;
}
export interface IBaseClock {
  device: IDevice;
  part: IProductPart;
  clock: number;
  extend: Record<string, any>;
  createDt: string;
}
export interface ICallRecord {
  id: number;
  fromUser: IUser;
  toUser: IUser;
  type: ICallType;
  extend: Record<string, any>;
  status: number;
  createDt: string;
}
export interface ICallType {
  id: number;
  name: string;
  extend: Record<string, any>;
}
export interface IClockAnalysisDaily {
  deviceId: string;
  device: IDevice;
  data: object;
  dt: string;
  startDt: string;
  endDt: string;
  createDt: string;
}
export interface IClockRecord {
  id: number;
  device: IDevice;
  dt: string;
  duration: number;
  durationWork: number;
  extend: Record<string, any>;
  createDt: string;
}
export interface ICollector {
  id: number;
  ip: string;
  no: string;
  mac: string;
  pwd: string;
  createDt: string;
  off: boolean;
  extend: Record<string, any>;
}
export interface ICollectorWarn {
  id: number;
  collector: ICollector;
  info: string;
  createDt: string;
}
export interface IDepartment {
  id: number;
  no: string;
  name: string;
  descr: string;
  parent: IDepartment;
  createDt: string;
  extend: Record<string, any>;
  children: IDepartment[];
}
export interface IDepartmentRelation {
  department: IDepartment;
  users: number[];
  products: number[];
  callUsers: number[];
  userList: IUser[];
  productList: IProduct[];
  callUserList: IUser[];
}
export interface IDevice {
  id: string;
  collector: ICollector;
  name: string;
  type: string;
  createDt: string;
  off: boolean;
  extend: Record<string, any>;
  deviceType: IDeviceType;
}
export interface IDeviceAlarmRecord {
  id: number;
  device: IDevice;
  createDt: string;
  type: string;
  no: string;
  msg: string;
  duration: number;
  extend: Record<string, any>;
  deviceId: string;
  category: string;
}
export interface IDeviceMaintenance {
  id: number;
  device: IDevice;
  operator: string;
  description: string;
  position: string;
  reason: string;
  occurDt: string;
  treatment: string;
  restorationDt: string;
  extend: Record<string, any>;
  createDt: string;
}
export interface IDeviceType {
  id: string;
  name: string;
  img: string;
  extend: Record<string, any>;
}
export interface IDeviceValue {
  id: number;
  device: IDevice;
  createDt: string;
  dt: string;
  type: string;
  data: object;
}
export interface IDeviceValueAlarmsDTO {
  id: number;
  alarms: object[];
  createDt: string;
}
export interface IDeviceWorkStatusRecord {
  id: number;
  device: IDevice;
  dt: string;
  status: string;
  duration: number;
  extend: Record<string, any>;
  createDt: string;
}
export interface IEmpAttendance {
  id: number;
  employee: IUser;
  dt: string;
  extend: Record<string, any>;
}
export interface IFactorySetting {
  id: number;
  name: string;
  workshopName: string;
  workshopImg: string;
  workshopImgApp: string;
  company: object;
}
export interface ILine {
  id: string;
  name: string;
  createDt: string;
  extend: Record<string, any>;
  off: boolean;
}
export interface ILineDeviceConfig {
  device: IDevice;
  line: ILine;
  stageId: number;
  stageName: string;
}
export interface ILineProductRecord {
  id: number;
  no: string;
  line: ILine;
  product: IProduct;
  startDt: string;
  endDt: string;
  extend: Record<string, any>;
  createDt: string;
}
export interface ILineRelation {
  line: ILine;
  users: number[];
  products: object[];
  callUsers: number[];
  shifts: number[];
  userList: IUser[];
  shiftList: IShiftSetting[];
  callUserList: IUser[];
}
export interface ILineStatusRecord {
  id: number;
  line: ILine;
  dt: string;
  status: string;
  duration: number;
  extend: Record<string, any>;
  createDt: string;
}
export interface ILineWorkOrder {
  id: number;
  plan: IProductionPlan;
  no: string;
  product: IProduct;
  line: ILine;
  shift: IShiftSetting;
  startDt: string;
  endDt: string;
  status: number;
  extend: Record<string, any>;
  createDt: string;
}
export interface ILogisticsRecord {
  id: number;
  product: IProduct;
  device: IDevice;
  no: string;
  plan: IProductionPlan;
  operator: IUser;
  address: string;
  extend: Record<string, any>;
  createDt: string;
}
export interface IMaterial {
  id: number;
  no: string;
  name: string;
  content: string;
  extend: Record<string, any>;
  off: boolean;
  createDt: string;
}
export interface IMaterialForm {
  id: number;
  plan: IProductionPlan;
  no: string;
  name: string;
  extend: Record<string, any>;
  off: boolean;
  createDt: string;
  materialList: IMaterial[];
}
export interface IMonitorGraph {
  id: number;
  type: string;
  device: IDevice;
  style: object;
}
export interface IParamConfig {
  available: boolean;
  id: number;
  key: string;
  keyFull: string;
  modify: boolean;
  remoteId: string;
  nameSimple: string;
  nameFull: string;
  ruleMap: object;
  showAnalysis: boolean;
  showTogether: string[];
  unit: string;
  influxEx: boolean;
  freq: number;
  benchmarkMin: number;
  benchmarkMax: number;
  value: string;
}
export interface IPartDeviceRelation {
  device: IDevice;
  part: IProductPart;
  extend: Record<string, any>;
}
export interface IPartOptRecord {
  id: number;
  no: string;
  part: IProductPart;
  product: IProduct;
  device: IDevice;
  plan: IProductionPlan;
  operator: IUser;
  startDt: string;
  endDt: string;
  duration: number;
  extend: Record<string, any>;
  createDt: string;
}
export interface IProduceSetting {
  id: number;
  startTimeInDay: string;
  endTimeInDay: string;
  shifts: string;
  shiftsList: string[][];
}
export interface IProduct {
  id: number;
  no: string;
  name: string;
  description: string;
  process: IProductProcess;
  extend: Record<string, any>;
  off: boolean;
  createDt: string;
}
export interface IProductionPlan {
  id: number;
  product: IProduct;
  no: string;
  name: string;
  startDt: string;
  endDt: string;
  status: number;
  extend: Record<string, any>;
  off: boolean;
  createDt: string;
}
export interface IProductOrder {
  id: number;
  no: string;
  name: string;
  content: string;
  startDt: string;
  endDt: string;
  status: number;
  target: object;
  extend: Record<string, any>;
  createDt: string;
  off: number;
}
export interface IProductPart {
  id: number;
  process: IProductProcess;
  no: string;
  name: string;
  content: string;
  sort: number;
  extend: Record<string, any>;
  off: boolean;
  createDt: string;
  deviceList: IDevice[];
}
export interface IProductProcess {
  id: number;
  no: string;
  name: string;
  content: string;
  extend: Record<string, any>;
  off: boolean;
  createDt: string;
  partList: IProductPart[];
}
export interface IProductWasteReason {
  id: number;
  name: string;
  off: boolean;
  extend: Record<string, any>;
}
export interface IProductWasteReasonGroup {
  id: number;
  name: string;
  reasons: number[];
  products: number[];
  reasonList: IUser[];
  productList: IProduct[];
  extend: Record<string, any>;
}
export interface IQualityManualRecord {
  id: number;
  no: string;
  plan: IProductionPlan;
  product: IProduct;
  device: IDevice;
  part: IProductPart;
  operator: IUser;
  dt: string;
  createDt: string;
  extend: Record<string, any>;
  line: ILine;
  startDt: string;
  endDt: string;
}
export interface IQualityRecord {
  id: number;
  device: IDevice;
  product: IProduct;
  operator: IUser;
  category: string;
  reason: string;
  dt: string;
  extend: Record<string, any>;
  line: ILine;
}
export interface IRole {
  id: number;
  name: string;
  description: string;
  privileges: string[];
  department: IDepartment;
}
export interface IShiftSetting {
  id: number;
  name: string;
  startTime: string;
  endTime: string;
  start: string;
  end: string;
}
export interface IStationConfig {
  id: string;
  name: string;
  mac: string;
  config: Record<string, any>;
  dt: string;
}
export interface IUser {
  id: number;
  role: IRole;
  username: string;
  name: string;
  phone: string;
  pwd: string;
  gender: number;
  image: string;
  address: string;
  createDt: string;
  off: number;
  extend: Record<string, any>;
}
export interface Administration {
  code: string;
  name: string;
}
export interface Province extends Administration {
  cities: Administration[];
}
export interface IROMSCustomer {
  id: number;
  name: string;
  tel: string;
  province: Province;
  city: Administration;
  area: Administration;
  address: string;
  extend: Record<string, any>;
  createDt: string;
  off: boolean;
}
export interface IStaffAreaRelation {
  id: number;
  staff: IUser;
  province: Province;
  city: Administration;
  area: Administration;
}
export interface IROMSMaintenOrderResult {
  id: number;
  name: string;
}
export interface IROMSMaintenMaterial {
  id: number;
  no: string;
  name: string;
  usage?: string;
}
export interface IROMSMaintenOrder {
  id: number;
  no: string;
  customer: IROMSCustomer;
  devices: string[];
  staff: IUser;
  content: string;
  address: string;
  dt: string | Date;
  startDt: string | Date;
  completeDt: string | Date;
  feedback: string;
  materials: IROMSMaintenMaterial[];
  pics: string[];
  result: string;
  score: number;
  scoreContent: string;
  createDt: string;
  off: boolean;
  extend: Record<string, any>;
  deviceList: IDevice[];
}
