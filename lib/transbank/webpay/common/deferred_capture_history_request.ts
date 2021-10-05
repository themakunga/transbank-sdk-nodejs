import RequestBase from '../../common/request_base';

class DeferredCaptureHistoryRequest extends RequestBase {
  buyOrder: string;

  constructor(token: string, buyOrder: string) {
    super(`/rswebpaytransaction/api/webpay/v1.3/transactions/${token}/details`, 'PUT');

    this.buyOrder = buyOrder;
  }

  toJson(): string {
    return JSON.stringify({
      buy_order: this.buyOrder,
    });
  }
}

export { DeferredCaptureHistoryRequest };
