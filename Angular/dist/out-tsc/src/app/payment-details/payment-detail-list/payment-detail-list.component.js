import { __decorate } from "tslib";
import { Component } from '@angular/core';
let PaymentDetailListComponent = class PaymentDetailListComponent {
    constructor(service, toastr) {
        this.service = service;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.service.refreshList();
    }
    populateForm(pd) {
        this.service.formData = Object.assign({}, pd);
    }
    onDelete(PMId) {
        if (confirm('Are you sure to delete this record ?')) {
            this.service.deletePaymentDetail(PMId)
                .subscribe(res => {
                this.service.refreshList();
                this.toastr.warning('Deleted successfully', 'Payment Detail Register');
            }, err => {
                console.log(err);
            });
        }
    }
};
PaymentDetailListComponent = __decorate([
    Component({
        selector: 'app-payment-detail-list',
        templateUrl: './payment-detail-list.component.html',
        styles: []
    })
], PaymentDetailListComponent);
export { PaymentDetailListComponent };
//# sourceMappingURL=payment-detail-list.component.js.map