import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Pricecard from "./Pricecard";


function App() {
  let data=[
    {
    plan:"FREE",
    amount:"$0",
    user:"Single User",
    isUser:true,
    storage:"5GB Storage",
    isStorage:true,
    publicProjects:"Unlimited Public Projects",
    isPublicProjects:true,
    access:"Community Access",
    isAccess:true,
    privateProjects:"Unlimited Private Projects",
    isPrivateProjects:false,
    phoneSupport:"Dedicated Phone Support",
    isPhoneSupport:false,
    subdomain:"Free Subdomain",
    isSubdomian:false,
    reports:"Monthly Status Reports",
    isReports:false
    },
    {
      plan:"PLUS",
      amount:"$9",
      user:"5 User",
      isUser:true,
      storage:"50GB Storage",
      isStorage:true,
      publicProjects:"Unlimited Public Projects",
      isPublicProjects:true,
      access:"Community Access",
      isAccess:true,
      privateProjects:"Unlimited Private Projects",
      isPrivateProjects:true,
      phoneSupport:"Dedicated Phone Support",
      isPhoneSupport:true,
      subdomain:"Free Subdomain",
      isSubdomian:true,
      reports:"Monthly Status Reports",
      isReports:false
      },
      {
        plan:"PRO",
        amount:"$49",
        user:"Unlimited User",
        isUser:true,
        storage:"150GB Storage",
        isStorage:true,
        publicProjects:"Unlimited Public Projects",
        isPublicProjects:true,
        access:"Community Access",
        isAccess:true,
        privateProjects:"Unlimited Private Projects",
        isPrivateProjects:true,
        phoneSupport:"Dedicated Phone Support",
        isPhoneSupport:true,
        subdomain:"Free Subdomain",
        isSubdomian:true,
        reports:"Monthly Status Reports",
        isReports:true
        }
  ]
  return (
    <>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {data.map((card)=>{
              return <Pricecard data={card} ></Pricecard>
            })}

          </div>
        </div>
      </section>
    </>
  );
}

export default App;
