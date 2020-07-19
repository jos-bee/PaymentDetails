import { __decorate } from "tslib";
import { Component } from '@angular/core';
let PaymentDetailComponent = class PaymentDetailComponent {
    constructor(service, toastr) {
        this.service = service;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.resetForm();
    }
    resetForm(form) {
        if (form != null)
            form.resetForm();
        this.service.formData = {
            PMId: 0,
            CardOwnerName: '',
            CardNumber: '',
            ExpirationDate: '',
            CVV: ''
        };
    }
    onSubmit(form) {
        if (this.service.formData.PMId == 0)
            this.insertRecord(form);
        else
            this.updateRecord(form);
    }
    insertRecord(form) {
        this.service.postPaymentDetail().subscribe(res => {
            this.resetForm(form);
            this.toastr.success('Submitted successfully', 'Payment Detail Register');
            this.service.refreshList();
        }, err => {
            console.log(err);
        });
    }
    updateRecord(form) {
        this.service.putPaymentDetail().subscribe(res => {
            this.resetForm(form);
            this.toastr.info('Updated successfully', 'Payment Detail Register');
            this.service.refreshList();
        }, err => {
            console.log(err);
        });
    }
};
PaymentDetailComponent = __decorate([
    Component({
        selector: 'app-payment-detail',
        templateUrl: './payment-detail.component.html',
        styles: []
    })
], PaymentDetailComponent);
export { PaymentDetailComponent };
//# sourceMappingURL=payment-detail.component.js.map