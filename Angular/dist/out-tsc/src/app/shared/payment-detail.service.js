import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let PaymentDetailService = class PaymentDetailService {
    constructor(http) {
        this.http = http;
        this.rootURL = 'http://localhost:50411/api';
    }
    postPaymentDetail() {
        return this.http.post(this.rootURL + '/PaymentDetail', this.formData);
    }
    putPaymentDetail() {
        return this.http.put(this.rootURL + '/PaymentDetail/' + this.formData.PMId, this.formData);
    }
    deletePaymentDetail(id) {
        return this.http.delete(this.rootURL + '/PaymentDetail/' + id);
    }
    refreshList() {
        this.http.get(this.rootURL + '/PaymentDetail')
            .toPromise()
            .then(res => this.list = res);
    }
};
PaymentDetailService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], PaymentDetailService);
export { PaymentDetailService };
//# sourceMappingURL=payment-detail.service.js.map