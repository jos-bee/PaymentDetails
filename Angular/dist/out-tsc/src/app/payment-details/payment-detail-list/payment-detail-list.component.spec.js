import { async, TestBed } from '@angular/core/testing';
import { PaymentDetailListComponent } from './payment-detail-list.component';
describe('PaymentDetailListComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PaymentDetailListComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PaymentDetailListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=payment-detail-list.component.spec.js.map