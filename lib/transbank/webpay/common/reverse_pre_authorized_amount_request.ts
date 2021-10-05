import RequestBase from '../../common/request_base';

class ReversePreAuthorizedAmountRequest extends RequestBase {
  buyOrder: string;
  authorizationCode: string;
  amount: number;

  constructor(token: string, buyOrder: string, sessionId: string, amount: number) {
    super(`/rswebpaytransaction/api/webpay/v1.3/transactions/${token}/reverse/amount`, 'PUT');

    this.buyOrder = buyOrder;
    this.authorizationCode = sessionId;
    this.amount = amount;
  }

  toJson(): string {
    return JSON.stringify({
      buy_order: this.buyOrder,
      authorization_code: this.authorizationCode,
      capture_amount: this.amount,
    });
  }
}

export { ReversePreAuthorizedAmountRequest };
