import jwt from "jwt-decode";
import { CONSTANTS } from "./constans";

export const authRouter = () => {
  const auth = {
    isAuth: false,
    initialSetting: false,
  };
  const token = window.localStorage.getItem(CONSTANTS.TOKEN);
  if (token) {
    const decodedJwt = jwt(token);
    const isExp = decodedJwt.exp < Date.now() / 1000;
    if (isExp) {
      localStorage.removeItem(CONSTANTS.TOKEN);
    } else {
      const payload = decodedJwt;
      auth.initialSetting = payload.company?.initial_setting;
    }
    auth.isAuth = !isExp;
  }
  return auth;
};

const authRouterCheck = () => {
  const store = localStorage.getItem(CONSTANTS.AUTH_STORAGE);
  const authData = store ? JSON.parse(store) : null;
  const role = authData?.user?.role ?? 1;
  const switchable = authData?.user?.switchable ?? false; 
  const company = authData?.company ?? null
  let isExpired = false;

  if (company) {
    const { alertError, stop_using } = company;
    const { expired, card_null } = alertError;
    isExpired = stop_using || expired || card_null;
  }

  return {
    role,
    isExpired,
    switchable,
  };
};

const restrictPaths = [
  '/game-management',
  '/notification-management',
  '/announcement-management',
  '/login-rate',
  '/score-history',
  '/user-management',
  '/ip-restrictions'
];

export const restrictRoute = (toRoute) => {
  const { role, isExpired, switchable } = authRouterCheck();
  const { meta, path } = toRoute;
  const isNpcPath = path.startsWith('/npc');

  if (!switchable && isNpcPath) {
    return true;
  }

  if (meta.roles && !meta.roles.includes(role)) {
    return true;
  }

  if (isExpired && restrictPaths.includes(path)) {
    return true;
  }

  return false;
};
