import { Component } from '@angular/core';
import { slideSidebarPadding } from '../../../../../../../app/shared/animations/slide';
import { FileSectionComponent as BaseComponent } from '../../../../../../../app/item-page/simple/field-components/file-section/file-section.component';

@Component({
    selector: 'ds-item-page-file-section',
    templateUrl: './file-section.component.html',
    //templateUrl: '../../../../../../../app/item-page/simple/field-components/file-section/file-section.component.html',
    animations: [slideSidebarPadding],
    styles: ['ul { margin-left: -2em; } ul li { margin-bottom: .5em; }']
})
export class FileSectionComponent extends BaseComponent {

}
