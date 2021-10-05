import Options from '../../common/options';
import WebpayPlus from '.';
import RequestService from '../../common/request_service';
import Transaction from './transaction';
import { CaptureRequest } from './requests';
import { IncreaseAmountRequest } from '../common/increase_amount_request';
import { IncreaseAuthorizationDateRequest } from '../common/increase_authorization_date_request';
import { ReversePreAuthorizedAmountRequest } from '../common/reverse_pre_authorized_amount_request';
import { DeferredCaptureHistoryRequest } from '../common/deferred_capture_history_request';

const DeferredTransaction = {
  ...Transaction,
  /** Capture a deferred transaction.
   *
   * Your commerce code must be configured to support deferred capture.
   *
   * @param token Unique transaction identifier
   * @param buyOrder Transaction's buy order
   * @param authorizationCode Transaction's authorization code
   * @param amount Amount to be captured
   * @param options (Optional) You can pass options to use a custom configuration for this request.
   */
  capture: async (
    token: string,
    buyOrder: string,
    authorizationCode: string,
    amount: number,
    options: Options = WebpayPlus.getDefaultOptions()
  ) => {
    return RequestService.perform(
      new CaptureRequest(token, buyOrder, authorizationCode, amount),
      options
    );
  },
  increaseAmount: async (
    token: string,
    buyOrder: string,
    authorizationCode: string,
    amount: number,
    options: Options = WebpayPlus.getDefaultOptions()
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
    options: Options = WebpayPlus.getDefaultOptions()
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
    options: Options = WebpayPlus.getDefaultOptions()
  ) => {
    return RequestService.perform(
      new ReversePreAuthorizedAmountRequest(token, buyOrder, authorizationCode, amount),
      options
    );
  },
  deferredCaptureHistory: async (
    token: string,
    buyOrder: string,
    options: Options = WebpayPlus.getDefaultOptions()
  ) => {
    return RequestService.perform(
      new DeferredCaptureHistoryRequest(token, buyOrder),
      options
    );
  },
};

export default DeferredTransaction;
