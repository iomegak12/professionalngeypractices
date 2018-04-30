import { FormGroup, FormControl, Validators } from "@angular/forms";

const DEFAULT_MIN_CREDIT = 1000;
const DEFAULT_MAX_CREDIT = 50000;
const NAME_MAX_LENGTH = 50;
const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const PHONE_PATTERN = /^\d{5}-\d{5}$/;
const creditLimitValidation = (minimumCredit = DEFAULT_MIN_CREDIT, maximumCredit = DEFAULT_MAX_CREDIT) => {
    return (formControl: FormControl) => {
        let formControlValue = formControl.value;

        let status = formControlValue && parseInt(formControlValue) >= minimumCredit &&
            parseInt(formControlValue) <= maximumCredit;

        if(!status) {
            return {
                creditLimitValidation: true
            };
        }

        return null;
    };
};

let customerFormModel: FormGroup = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', [Validators.required, Validators.maxLength(NAME_MAX_LENGTH)]),
    address: new FormControl(''),
    credit: new FormControl(0, [Validators.required, creditLimitValidation()]),
    status: new FormControl(true),
    email: new FormControl('', [Validators.required, Validators.pattern(EMAIL_PATTERN)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(PHONE_PATTERN)]),
    remarks: new FormControl('')
});

export { customerFormModel };
