import RequestBase from '../../../common/request_base';

class CommitRequest extends RequestBase {
  constructor(token: string) {
    super(`/rswebpaytransaction/api/webpay/v1.3/transactions/${token}`, 'PUT');
  }
}

export { CommitRequest };
