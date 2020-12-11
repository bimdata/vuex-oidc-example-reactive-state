import { vuexOidcCreateReactiveState } from 'vuex-oidc';
import { oidcSettings } from '@/config/oidc';

const state = vuexOidcCreateReactiveState(oidcSettings);

export function useOidcState() {
  return state;
}
