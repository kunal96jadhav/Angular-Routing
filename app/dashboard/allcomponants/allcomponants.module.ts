import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllcomponantsRoutingModule } from './allcomponants-routing.module';
import { FormfillupComponent } from './oe/formfillup/formfillup.component';
import { CheckcibilscoreComponent } from './oe/checkcibilscore/checkcibilscore.component';
import { FilevarificationComponent } from './oe/filevarification/filevarification.component';
import { SanctionletterComponent } from './oe/sanctionletter/sanctionletter.component';
import { EnquiryComponent } from './re/enquiry/enquiry.component';
import { BasicformComponent } from './re/basicform/basicform.component';
import { CommunicatewithcustomerComponent } from './re/communicatewithcustomer/communicatewithcustomer.component';
import { DisbursmentComponent } from './ah/disbursment/disbursment.component';
import { LedgerprocessComponent } from './ah/ledgerprocess/ledgerprocess.component';
import { VerifydetailsComponent } from './cm/verifydetails/verifydetails.component';
import { NotificationsendtooeComponent } from './cm/notificationsendtooe/notificationsendtooe.component';
import { TransfertoahComponent } from './cm/transfertoah/transfertoah.component';


@NgModule({
  declarations: [
    FormfillupComponent,
    CheckcibilscoreComponent,
    FilevarificationComponent,
    SanctionletterComponent,
    EnquiryComponent,
    BasicformComponent,
    CommunicatewithcustomerComponent,
    DisbursmentComponent,
    LedgerprocessComponent,
    VerifydetailsComponent,
    NotificationsendtooeComponent,
    TransfertoahComponent
  ],
  imports: [
    CommonModule,
    AllcomponantsRoutingModule
  ],
  exports:[
    FormfillupComponent,
    CheckcibilscoreComponent,
    FilevarificationComponent,
    SanctionletterComponent,
    EnquiryComponent,
    BasicformComponent,
    CommunicatewithcustomerComponent,
    DisbursmentComponent,
    LedgerprocessComponent,
    VerifydetailsComponent,
    NotificationsendtooeComponent,
    TransfertoahComponent
  ]
})
export class AllcomponantsModule { }
