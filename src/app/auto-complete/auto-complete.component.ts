import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-auto-complete',
    template : `
    <div class="typeHead" style="padding:10px;">
    <input type="text" list="countries" name="country"  (change)="selectCountryName(($event))" />
    <datalist id="countries" >
        <select>
            <option *ngFor="let c of countrylist" [value]="c.name"></option>
        </select>
    </datalist>
</div>

<div class="typeHead" style="padding:10px;">
    <input type="text" list="countries2" name="country"  (change)="selectCountryName($event)" />
    <datalist id="countries2">
        <select>
            <option *ngFor="let c1 of countrylist" [value]="c1.name"></option>
        </select>
    </datalist>
</div>
    `
})

export class AutoCompleteComponent {
    countrylist: any[];
    selected: string = "";

    ngOnInit() {
        this.countrylist = [
            { "name": "Afghanistan", "code": "AF" },
            { "name": "Åland Islands", "code": "AX" },
            { "name": "Albania", "code": "AL" },
            { "name": "Algeria", "code": "DZ" },
            { "name": "American Samoa", "code": "AS" },
            { "name": "AndorrA", "code": "AD" },
            { "name": "Angola", "code": "AO" },
            { "name": "Anguilla", "code": "AI" },
            { "name": "Antarctica", "code": "AQ" },
            { "name": "Antigua and Barbuda", "code": "AG" },
            { "name": "Argentina", "code": "AR" },
            { "name": "Armenia", "code": "AM" },
            { "name": "Aruba", "code": "AW" },
            { "name": "Australia", "code": "AU" },
            { "name": "Austria", "code": "AT" },
            { "name": "Azerbaijan", "code": "AZ" },
            { "name": "Bahamas", "code": "BS" },
            { "name": "Bahrain", "code": "BH" },
            { "name": "Bangladesh", "code": "BD" },
            { "name": "Barbados", "code": "BB" }
        ]
    }

    selectCountryName(name : any) {
        console.log(name.target.value);

    }
}
