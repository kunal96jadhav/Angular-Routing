export class Menuclass {

    public static menus:any[]=[
        {
            re:[
              {key:"enquiry",label:"Enquiry"},
              {key:"basicform",label:"collect Basic Data"},
              {key:"custcommu",label:"Communicate with Customer"},
            ], 

           oe:[
                {key:"fromfillup",label:"Form Fill Up"},
                {key:"cibilscore",label:"Check CIBIL Score"},
                {key:"filevarification",label:"File Varification"},
                {key:"sanctionletter",label:"Upload Sanction Letter"},
                
              ],
          cm:[
                {key:"verifydetails",label:"Verify Details"},
                {key:"notificationsend",label:"Notification send to OE"},
                {key:"transfertoAH",label:"Transfer to Account Head"},
              ],
          ah:[
                {key:"disbursment",label:"Disbursment"},
                {key:"ledgerprocess",label:"Ledger Process"},
              ]                            
        }]
}
