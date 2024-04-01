import {test} from '@playwright/test'

let accessToken:any
let uri:any
//let opportunity_Id_first:any
//let access_Token:any;
let OppID:any;

test(`Generate AuthToken`,async({request})=>{

  const response=await request.post("https://login.salesforce.com/services/oauth2/token",{
  headers:{
    "Content-Type":"application/x-www-form-urlencoded",
    "Connection":"Keep-alive",
   // "Authorization":"Bearer "+access_Token
  },
  form:{
    "grant_type":"password",
    "client_id":"3MVG9pRzvMkjMb6lZlt3YjDQwe0hk0f5ZPyWD38tfPYQ75KXUzZBGzM_c7I0o3yc6ua1IUk6lEQIy4U2sByrg",
    "client_secret":"79FFF874D54193B377A60354C71CBBE83120AD28A5D6BC536D2F68C94645DE98",
    "username":"sindhujas@testleaf.com",
    "password":"MyJob@1993!"
  }
  })

   const genrateToken=await response.json();
   console.log(genrateToken);
   accessToken=genrateToken.access_token;
   uri=genrateToken.instance_url;

   console.log(`The Bearer token is ${accessToken} and the uri is ${uri}`)
 })


 test(`Create Opportunity with salesforce`,async({request})=>{

     const response =await request.post(`https://ford-f1-dev-ed.develop.my.salesforce.com/services/data/v60.0/sobjects/Opportunity/`,{

        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+accessToken
        },
        data:{
            
            "Name": "sindhu",
            "StageName": "Qualification",
            "CloseDate": "2024-12-07",
            "Type": "Existing Customer - Upgrade"
            }
     })


     const resBody=await response.json();
   console.log(resBody)

   OppID = resBody.id;
     
     console.log(`OppID : ${OppID}`);
     
     const statusCode = response.status();
     
     console.log(`Status Code of Create Opportunity : ${statusCode}`); 
    });