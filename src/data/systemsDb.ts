import { SystemsDatabase } from './types';
import { MAESTROS_DATA } from './maestros';
import { CONTROL_CLI_DATA } from './controlCli';
import { CONTROL_CORP_DATA } from './controlCorp';
import { MSYNC_DATA } from './mSync';
import { CONFIG_DATA } from './config';
import { DMS_DATA } from './dms';

export const SYSTEMS_DB: SystemsDatabase = {
  "Maestros": MAESTROS_DATA,
  "Control Cli": CONTROL_CLI_DATA,
  "Control Corp": CONTROL_CORP_DATA,
  "MSync": MSYNC_DATA,
  "Config": CONFIG_DATA,
  "DMS": DMS_DATA
};
export * from './types';
export * from './maestros';
export * from './controlCli';
export * from './controlCorp';
export * from './mSync';
export * from './config';
export * from './dms';
