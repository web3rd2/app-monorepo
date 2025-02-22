import { getTimeDurationMs } from '@onekeyhq/kit/src/utils/helper';

import { OnekeyNetwork } from '../config/networkIds';

const SEPERATOR = '--';
const INDEX_PLACEHOLDER = '$$INDEX$$';

const IMPL_EVM = 'evm';
const COINTYPE_ETH = '60';
const COINTYPE_ETC = '61';

const IMPL_SOL = 'sol';
const COINTYPE_SOL = '501';

const IMPL_ALGO = 'algo';
const COINTYPE_ALGO = '283';

const IMPL_NEAR = 'near';
const COINTYPE_NEAR = '397';

const IMPL_STC = 'stc';
const COINTYPE_STC = '101010';

const IMPL_CFX = 'cfx';
const COINTYPE_CFX = '503';

const IMPL_BTC = 'btc';
const COINTYPE_BTC = '0';

const IMPL_TBTC = 'tbtc';
const COINTYPE_TBTC = '1';

const IMPL_TRON = 'tron';
const COINTYPE_TRON = '195';

const IMPL_APTOS = 'aptos';
const COINTYPE_APTOS = '637';

const IMPL_DOGE = 'doge';
const COINTYPE_DOGE = '3';

const IMPL_LTC = 'ltc';
const COINTYPE_LTC = '2';

const IMPL_BCH = 'bch';
const COINTYPE_BCH = '145';

const IMPL_XRP = 'xrp';
const COINTYPE_XRP = '144';

const IMPL_COSMOS = 'cosmos';
const COINTYPE_COSMOS = '118';

const IMPL_ADA = 'ada';
const COINTYPE_ADA = '1815';

const IMPL_SUI = 'sui';
const COINTYPE_SUI = '784';

const IMPL_FIL = 'fil';
const COINTYPE_FIL = '461';

const IMPL_DOT = 'dot';
const COINTYPE_DOT = '354';

const IMPL_XMR = 'xmr';
const COINTYPE_XMR = '128';

const IMPL_KASPA = 'kaspa';
const COINTYPE_KASPA = '111111';

const IMPL_NEXA = 'nexa';
const COINTYPE_NEXA = '29223';
const IMPL_LIGHTNING = 'lightning';
// To determine the coin type, we first assign numerical values to each letter based on their position in the alphabet.
// For example, "L" is assigned a value of 12, "I" is assigned a value of 9, "G" is assigned a value of 7, and so on.
// So, the coin type would be 8 + 12 + 9 + 7 + 8 + 20 + 14 + 9 + 14 + 7.
const COINTYPE_LIGHTNING = '81297820149147';

const IMPL_LIGHTNING_TESTNET = 'tlightning';
const COINTYPE_LIGHTNING_TESTNET = '81297820149140';

const IMPL_ALLNETWORKS = 'all';
const COINTYPE_ALLNETWORKS = '0000';

const SUPPORTED_IMPLS = new Set([
  IMPL_EVM,
  IMPL_NEAR,
  IMPL_CFX,
  IMPL_BTC,
  IMPL_TBTC,
  IMPL_SOL,
  IMPL_STC,
  IMPL_TRON,
  IMPL_APTOS,
  IMPL_DOGE,
  IMPL_LTC,
  IMPL_BCH,
  IMPL_ALGO,
  IMPL_XRP,
  IMPL_COSMOS,
  IMPL_ADA,
  IMPL_SUI,
  IMPL_FIL,
  IMPL_DOT,
  IMPL_XMR,
  IMPL_KASPA,
  IMPL_NEXA,
  IMPL_LIGHTNING,
  IMPL_LIGHTNING_TESTNET,
  IMPL_ALLNETWORKS,
]);

const PRODUCTION_IMPLS = new Set([
  IMPL_EVM,
  IMPL_NEAR,
  IMPL_CFX,
  IMPL_BTC,
  IMPL_TBTC,
  IMPL_SOL,
  IMPL_STC,
  IMPL_TRON,
  IMPL_APTOS,
  IMPL_DOGE,
  IMPL_LTC,
  IMPL_BCH,
  IMPL_ALGO,
  IMPL_XRP,
  IMPL_COSMOS,
  IMPL_ADA,
  IMPL_SUI,
  IMPL_FIL,
  IMPL_DOT,
  IMPL_XMR,
  IMPL_KASPA,
  IMPL_LIGHTNING,
  IMPL_LIGHTNING_TESTNET,
  IMPL_NEXA,
  IMPL_ALLNETWORKS,
]);

export const HISTORY_CONSTS = {
  GET_LOCAL_LIMIT: 100,
  FETCH_ON_CHAIN_LIMIT: 50,
  DISPLAY_TX_LIMIT: 50,
  REFRESH_DROPPED_TX_IN: 5 * 60 * 1000,
  SET_IS_FINAL_EXPIRED_IN: 24 * 60 * 60 * 1000,
  PENDING_QUEUE_MAX_LENGTH: 10,
};

export enum SocketEvents {
  'Notification' = 'notification',
}

export const enabledAccountDynamicNetworkIds: string[] = [
  OnekeyNetwork.eth,
  OnekeyNetwork.polygon,
  OnekeyNetwork.arbitrum,
  OnekeyNetwork.optimism,
];

function getSupportedImpls() {
  if (process.env.NODE_ENV === 'production') {
    return PRODUCTION_IMPLS;
  }
  return SUPPORTED_IMPLS;
}

export {
  SEPERATOR,
  INDEX_PLACEHOLDER,
  IMPL_EVM,
  COINTYPE_ETH,
  COINTYPE_ETC,
  IMPL_SOL,
  COINTYPE_SOL,
  IMPL_ALGO,
  COINTYPE_ALGO,
  IMPL_NEAR,
  COINTYPE_NEAR,
  IMPL_STC,
  COINTYPE_STC,
  IMPL_CFX,
  COINTYPE_CFX,
  IMPL_BTC,
  COINTYPE_BTC,
  IMPL_TBTC,
  COINTYPE_TBTC,
  IMPL_TRON,
  COINTYPE_TRON,
  IMPL_APTOS,
  COINTYPE_APTOS,
  IMPL_DOGE,
  COINTYPE_DOGE,
  IMPL_LTC,
  COINTYPE_LTC,
  IMPL_BCH,
  COINTYPE_BCH,
  IMPL_XRP,
  COINTYPE_XRP,
  IMPL_COSMOS,
  COINTYPE_COSMOS,
  IMPL_ADA,
  COINTYPE_ADA,
  IMPL_SUI,
  COINTYPE_SUI,
  IMPL_FIL,
  COINTYPE_FIL,
  IMPL_DOT,
  COINTYPE_DOT,
  IMPL_XMR,
  COINTYPE_XMR,
  IMPL_KASPA,
  COINTYPE_KASPA,
  IMPL_NEXA,
  COINTYPE_NEXA,
  IMPL_LIGHTNING,
  COINTYPE_LIGHTNING,
  IMPL_LIGHTNING_TESTNET,
  COINTYPE_LIGHTNING_TESTNET,
  IMPL_ALLNETWORKS,
  COINTYPE_ALLNETWORKS,
  getSupportedImpls,
};

// switch network default rpc to onekey rpc node
export const AUTO_SWITCH_DEFAULT_RPC_AT_VERSION = '3.21.0';

export const PRICE_EXPIRED_TIME = getTimeDurationMs({ minute: 15 });

export const ACCOUNT_DERIVATION_DB_MIGRATION_VERSION = '4.0.0';
export const FIX_COSMOS_TEMPLATE_DB_MIGRATION_VERSION = '4.2.0';

export const CHAINS_DISPLAYED_IN_DEV: string[] = [];

// If the token uses these symbols but it is not an offical token,
// it will be marked as a risky token and the history containing these tokens can be hidden
export const UNIQUE_TOKEN_SYMBOLS: Record<string, Array<string>> = {
  [IMPL_EVM]: ['USDC', 'USDT'],
};

export const isLightningNetwork = (coinType: string) =>
  coinType === COINTYPE_LIGHTNING || coinType === COINTYPE_LIGHTNING_TESTNET;
export const isLightningNetworkByImpl = (impl?: string) =>
  impl === IMPL_LIGHTNING || impl === IMPL_LIGHTNING_TESTNET;
export const isLightningNetworkByNetworkId = (networkId?: string) =>
  networkId === OnekeyNetwork.lightning ||
  networkId === OnekeyNetwork.tlightning;
export const isBTCNetwork = (networkId?: string) =>
  networkId === OnekeyNetwork.btc || networkId === OnekeyNetwork.tbtc;
