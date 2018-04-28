import { PipeTransform, Pipe } from "@angular/core";

const MIN_FIND_POS = 0;

@Pipe({
    name: 'where'
})
class WherePipe implements PipeTransform {
    transform(bindingValues: any[], predicateColumn: string, predicateValue: any): any[] {
        let filteredValues = bindingValues;
        let validation = bindingValues && predicateColumn && predicateValue;

        if (validation) {
            filteredValues = bindingValues.filter(
                bindingValue => bindingValue[predicateColumn].indexOf(predicateValue) >= MIN_FIND_POS);
        }

        return filteredValues;
    }
}

export { WherePipe };
