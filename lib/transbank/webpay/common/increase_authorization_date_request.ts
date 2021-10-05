import RequestBase from '../../common/request_base';


class IncreaseAuthorizationDateRequest extends RequestBase {
  buyOrder: string;
  authorizationCode: string;

  constructor(token: string, buyOrder: string, sessionId: string) {
    super(`/rswebpaytransaction/api/webpay/v1.3/transactions/${token}/authorization_date`, 'PUT');

    this.buyOrder = buyOrder;
    this.authorizationCode = sessionId;
  }

  toJson(): string {
    return JSON.stringify({
      buy_order: this.buyOrder,
      authorization_code: this.authorizationCode,
    });
  }
}

export { IncreaseAuthorizationDateRequest };
