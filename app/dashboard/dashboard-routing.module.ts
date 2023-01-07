import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisbursmentComponent } from './allcomponants/ah/disbursment/disbursment.component';
import { LedgerprocessComponent } from './allcomponants/ah/ledgerprocess/ledgerprocess.component';
import { NotificationsendtooeComponent } from './allcomponants/cm/notificationsendtooe/notificationsendtooe.component';
import { TransfertoahComponent } from './allcomponants/cm/transfertoah/transfertoah.component';
import { VerifydetailsComponent } from './allcomponants/cm/verifydetails/verifydetails.component';
import { CheckcibilscoreComponent } from './allcomponants/oe/checkcibilscore/checkcibilscore.component';
import { FilevarificationComponent } from './allcomponants/oe/filevarification/filevarification.component';
import { FormfillupComponent } from './allcomponants/oe/formfillup/formfillup.component';
import { SanctionletterComponent } from './allcomponants/oe/sanctionletter/sanctionletter.component';
import { BasicformComponent } from './allcomponants/re/basicform/basicform.component';
import { CommunicatewithcustomerComponent } from './allcomponants/re/communicatewithcustomer/communicatewithcustomer.component';
import { EnquiryComponent } from './allcomponants/re/enquiry/enquiry.component';
import { RoleComponent } from './role/role.component';

const routes: Routes = [
  {path:"rolecomp",component:RoleComponent,
    children:[
               //oe
               {path:"fromfillup",component:FormfillupComponent},
               {path:"cibilscore",component:CheckcibilscoreComponent},
               {path:"filevarification",component:FilevarificationComponent},
               {path:"sanctionletter",component:SanctionletterComponent},
               //re
               {path:"enquiry",component:EnquiryComponent},
               {path:"basicform",component:BasicformComponent},
               {path:"custcommu",component:CommunicatewithcustomerComponent},
              //ah
               {path:"disbursment",component:DisbursmentComponent},
               {path:"ledgerprocess",component:LedgerprocessComponent},
              //cm
               {path:"verifydetails",component:VerifydetailsComponent},
               {path:"notificationsend",component:NotificationsendtooeComponent},
               {path:"transfertoAH",component:TransfertoahComponent},
               

             ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
