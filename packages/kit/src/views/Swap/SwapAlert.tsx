import type { FC } from 'react';
import { useCallback } from 'react';

import { useIntl } from 'react-intl';

import { Alert, Box } from '@onekeyhq/components';

import backgroundApiProxy from '../../background/instance/backgroundApiProxy';
import { useAppSelector } from '../../hooks';

import { useInputLimitsError } from './hooks/useSwap';
import { SwapError } from './typings';

const DepositLimitAlert = () => {
  const limitsError = useInputLimitsError();
  const intl = useIntl();
  const onAction = useCallback(() => {
    if (limitsError?.value) {
      backgroundApiProxy.serviceSwap.userInput('INPUT', limitsError.value);
    }
  }, [limitsError]);
  if (limitsError) {
    return (
      <Box mt="6">
        <Alert
          title={limitsError.message}
          alertType="warn"
          dismiss={false}
          actionType="right"
          onAction={onAction}
          action={intl.formatMessage({ id: 'action__fill_in' })}
        />
      </Box>
    );
  }
  return null;
};

const ErrorAlert = () => {
  const intl = useIntl();
  const error = useAppSelector((s) => s.swap.error);
  if (error === SwapError.NotSupport) {
    return (
      <Box mt="6">
        <Alert
          title={intl.formatMessage({
            id: 'msg__this_transaction_is_not_supported',
          })}
          alertType="warn"
          dismiss={false}
        />
      </Box>
    );
  }
  if (error === SwapError.QuoteFailed) {
    return (
      <Box mt="6">
        <Alert
          title={intl.formatMessage({
            id: 'msg__failed_to_get_price',
          })}
          alertType="warn"
          dismiss={false}
        />
      </Box>
    );
  }
  return null;
};

const SwapWarning: FC = () => (
  <>
    <DepositLimitAlert />
    <ErrorAlert />
  </>
);

export default SwapWarning;
