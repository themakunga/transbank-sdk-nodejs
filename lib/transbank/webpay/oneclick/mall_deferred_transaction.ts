import Oneclick from '.';
import Options from '../../common/options';
import RequestService from '../../common/request_service';
import { DeferredCaptureHistoryRequest } from '../common/deferred_capture_history_request';
import { IncreaseAmountRequest } from '../common/increase_amount_request';
import { IncreaseAuthorizationDateRequest } from '../common/increase_authorization_date_request';
import { ReversePreAuthorizedAmountRequest } from '../common/reverse_pre_authorized_amount_request';
import MallTransaction from './mall_transaction';
import { CaptureRequest } from './requests/capture_request';

const MallDeferredTransaction = {
  ...MallTransaction,
  /**
   * Capture a deferred transaction.
   * Your commerce code must be configured to support deferred capture.
   * @param commerceCode Child commerce code, used to indetify the correct child transaction
   * @param buyOrder Child buy order, used to identify the correct child transaction.
   * @param amount Amount to be captured
   * @param authorizationCode Child transaction's authorization code
   * @param options (Optional) You can pass options to use a custom configuration for this request.
   */
  capture: async (
    commerceCode: string,
    buyOrder: string,
    amount: number,
    authorizationCode: string,
    options: Options = Oneclick.getDefaultOptions()
  ) => {
    let captureRequest = new CaptureRequest(commerceCode, buyOrder, amount, authorizationCode);
    return RequestService.perform(captureRequest, options);
  },
  increaseAmount: async (
    token: string,
    buyOrder: string,
    authorizationCode: string,
    amount: number,
    options: Options = Oneclick.getDefaultOptions()
  ) => {
    return RequestService.perform(
      new IncreaseAmountRequest(token, buyOrder, authorizationCode, amount),
      options
    );
  },
  increaseAuthorizationDate: async (
    token: string,
    buyOrder: string,
    authorizationCode: string,
    options: Options = Oneclick.getDefaultOptions()
  ) => {
    return RequestService.perform(
      new IncreaseAuthorizationDateRequest(token, buyOrder, authorizationCode),
      options
    );
  },
  reversePreAuthorizedAmount: async (
    token: string,
    buyOrder: string,
    authorizationCode: string,
    amount: number,
    options: Options = Oneclick.getDefaultOptions()
  ) => {
    return RequestService.perform(
      new ReversePreAuthorizedAmountRequest(token, buyOrder, authorizationCode, amount),
      options
    );
  },
  deferredCaptureHistory: async (
    token: string,
    buyOrder: string,
    options: Options = Oneclick.getDefaultOptions()
  ) => {
    return RequestService.perform(
      new DeferredCaptureHistoryRequest(token, buyOrder),
      options
    );
  },
};

export default MallDeferredTransaction;
